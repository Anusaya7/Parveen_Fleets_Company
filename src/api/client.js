const TOKEN_KEY = 'parveen-admin-token';
export const AUTH_EXPIRED_EVENT = 'parveen-auth-expired';
const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || '').replace(/\/+$/, '');
const CHUNK_SIZE = 3 * 1024 * 1024;

export function getAdminToken() {
  if (typeof window === 'undefined') return '';
  return window.localStorage.getItem(TOKEN_KEY) || '';
}

export function setAdminToken(token) {
  if (typeof window === 'undefined') return;
  if (token) window.localStorage.setItem(TOKEN_KEY, token);
  else window.localStorage.removeItem(TOKEN_KEY);
}

function authHeaders(extra = {}) {
  const token = getAdminToken();
  return {
    ...extra,
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
}

function markUnauthorized() {
  setAdminToken('');
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(AUTH_EXPIRED_EVENT));
  }
}

async function readError(response) {
  const payload = await response.json().catch(() => ({}));
  if (response.status === 401) markUnauthorized();
  if (response.status === 413) {
    return payload.message || 'File is too large for a single upload. Try a smaller MP4 under 4MB.';
  }
  return payload.message || `Request failed (${response.status}). Please try again.`;
}

async function request(path, options = {}) {
  const headers = {
    Accept: 'application/json',
    ...(options.body ? { 'Content-Type': 'application/json' } : {}),
    ...(options.headers || {})
  };
  const token = getAdminToken();
  if (token && options.auth !== false) headers.Authorization = `Bearer ${token}`;

  let response;
  try {
    response = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined
    });
  } catch {
    throw new Error('Could not reach the server. Please try again.');
  }

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    if (response.status === 401 && options.auth !== false) markUnauthorized();
    const error = new Error(payload.message || `Request failed (${response.status}). Please try again.`);
    error.status = response.status;
    throw error;
  }
  return payload;
}

async function uploadSingle(file) {
  const form = new FormData();
  form.append('file', file);
  let response;
  try {
    response = await fetch(`${API_BASE}/api/upload`, {
      method: 'POST',
      headers: authHeaders(),
      body: form
    });
  } catch {
    throw new Error('Could not reach the server. Please try again.');
  }
  if (!response.ok) throw new Error(await readError(response));
  return response.json();
}

async function uploadChunked(file, onProgress) {
  const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
  const initResponse = await fetch(`${API_BASE}/api/upload/init`, {
    method: 'POST',
    headers: authHeaders({ 'Content-Type': 'application/json', Accept: 'application/json' }),
    body: JSON.stringify({
      filename: file.name,
      contentType: file.type || '',
      size: file.size,
      totalChunks
    })
  });
  if (!initResponse.ok) throw new Error(await readError(initResponse));
  const { uploadId } = await initResponse.json();

  for (let index = 0; index < totalChunks; index += 1) {
    const start = index * CHUNK_SIZE;
    const blob = file.slice(start, Math.min(start + CHUNK_SIZE, file.size));
    const form = new FormData();
    form.append('uploadId', uploadId);
    form.append('index', String(index));
    form.append('chunk', blob, `${file.name}.part${index}`);

    let response;
    try {
      response = await fetch(`${API_BASE}/api/upload/chunk`, {
        method: 'POST',
        headers: authHeaders(),
        body: form
      });
    } catch {
      throw new Error(`Upload interrupted at part ${index + 1}/${totalChunks}. Please try again.`);
    }
    if (!response.ok) throw new Error(await readError(response));
    if (onProgress) onProgress(Math.round(((index + 1) / totalChunks) * 100));
  }

  const doneResponse = await fetch(`${API_BASE}/api/upload/complete`, {
    method: 'POST',
    headers: authHeaders({ 'Content-Type': 'application/json', Accept: 'application/json' }),
    body: JSON.stringify({ uploadId })
  });
  if (!doneResponse.ok) throw new Error(await readError(doneResponse));
  return doneResponse.json();
}

export const api = {
  login: (email, password) => request('/api/auth/login', { method: 'POST', body: { email, password }, auth: false }),
  health: () => request('/api/health', { auth: false }),
  getContent: () => request('/api/content', { auth: false }),
  saveContent: (data) => request('/api/content', { method: 'PUT', body: { data } }),
  listEnquiries: () => request('/api/enquiries'),
  createEnquiry: (body) => request('/api/enquiries', { method: 'POST', body, auth: false }),
  updateEnquiry: (id, body) => request(`/api/enquiries/${id}`, { method: 'PATCH', body }),
  deleteEnquiry: (id) => request(`/api/enquiries/${id}`, { method: 'DELETE' }),
  upload: async (file, onProgress) => {
    if (!file) throw new Error('Please choose a file.');
    if (file.size > 60 * 1024 * 1024) {
      throw new Error('File is too large. Keep uploads under 60MB.');
    }
    if (file.size > CHUNK_SIZE) {
      return uploadChunked(file, onProgress);
    }
    return uploadSingle(file);
  }
};
