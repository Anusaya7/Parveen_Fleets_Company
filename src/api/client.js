const TOKEN_KEY = 'parveen-admin-token';
export const AUTH_EXPIRED_EVENT = 'parveen-auth-expired';
const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || '').replace(/\/+$/, '');

export function getAdminToken() {
  if (typeof window === 'undefined') return '';
  return window.localStorage.getItem(TOKEN_KEY) || '';
}

export function setAdminToken(token) {
  if (typeof window === 'undefined') return;
  if (token) window.localStorage.setItem(TOKEN_KEY, token);
  else window.localStorage.removeItem(TOKEN_KEY);
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
    if (response.status === 401 && options.auth !== false) {
      setAdminToken('');
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event(AUTH_EXPIRED_EVENT));
      }
    }
    const error = new Error(payload.message || `Request failed (${response.status}). Please try again.`);
    error.status = response.status;
    throw error;
  }
  return payload;
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
  upload: async (file) => {
    const form = new FormData();
    form.append('file', file);
    const token = getAdminToken();
    const response = await fetch(`${API_BASE}/api/upload`, {
      method: 'POST',
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      body: form
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      if (response.status === 401) {
        setAdminToken('');
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event(AUTH_EXPIRED_EVENT));
        }
      }
      throw new Error(payload.message || 'Upload failed. Please try again.');
    }
    return payload;
  }
};
