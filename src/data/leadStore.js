const LOCAL_LEADS_KEY = 'parveen-fleets-leads';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/+$/, '');

export const isLocalLeadMode = !API_BASE_URL;

export function loadLocalLeads() {
  const savedLeads = window.localStorage.getItem(LOCAL_LEADS_KEY);
  return savedLeads ? JSON.parse(savedLeads) : null;
}

export function persistLocalLeads(leads) {
  window.localStorage.setItem(LOCAL_LEADS_KEY, JSON.stringify(leads));
}

function toLeadRecord(data, fallback) {
  return {
    id: data.lead_code || data.id || fallback.id,
    name: data.name || fallback.name,
    company: data.company || fallback.company,
    phone: data.phone || fallback.phone,
    email: data.email || fallback.email,
    service: data.service || fallback.service,
    city: data.city || fallback.city,
    fleetSize: data.fleet_size || data.fleetSize || fallback.fleetSize || '',
    status: data.status || fallback.status || 'New',
    date: data.created_at?.slice(0, 10) || fallback.date,
    message: data.message || fallback.message || '',
  };
}

export async function saveLead(lead) {
  const fallback = {
    ...lead,
    id: `PF-LEAD-${Date.now()}`,
    status: 'New',
    date: new Date().toISOString().slice(0, 10),
  };

  if (!API_BASE_URL) {
    return { lead: fallback, mode: 'local' };
  }

  const response = await fetch(`${API_BASE_URL}/api/v1/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name: lead.name,
      company: lead.company,
      phone: lead.phone,
      email: lead.email,
      service: lead.service,
      city: lead.city,
      fleet_size: lead.fleetSize || null,
      message: lead.message || null,
    }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const validationMessage = payload.errors
      ? Object.values(payload.errors).flat().join(' ')
      : '';
    throw new Error(validationMessage || payload.message || 'We could not submit your request. Please try again.');
  }

  return {
    lead: toLeadRecord(payload.data || payload, fallback),
    mode: 'server',
  };
}
