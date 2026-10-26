import { api } from '../api/client';

const LOCAL_LEADS_KEY = 'parveen-fleets-leads';

export function loadLocalLeads() {
  if (typeof window === 'undefined') return null;
  const savedLeads = window.localStorage.getItem(LOCAL_LEADS_KEY);
  return savedLeads ? JSON.parse(savedLeads) : null;
}

export function persistLocalLeads(leads) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(LOCAL_LEADS_KEY, JSON.stringify(leads));
}

export async function saveLead(lead) {
  const fallback = {
    ...lead,
    id: `PF-LEAD-${Date.now()}`,
    status: 'New',
    date: new Date().toISOString().slice(0, 10),
    source: 'website'
  };

  try {
    const payload = await api.createEnquiry({
      name: lead.name,
      company: lead.company,
      phone: lead.phone,
      email: lead.email,
      service: lead.service,
      city: lead.city,
      fleetSize: lead.fleetSize || '',
      message: lead.message || '',
      source: 'website'
    });
    return { lead: payload.data || fallback, mode: 'server' };
  } catch {
    const current = loadLocalLeads() || [];
    persistLocalLeads([fallback, ...current]);
    return { lead: fallback, mode: 'local' };
  }
}
