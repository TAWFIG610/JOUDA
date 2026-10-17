/**
 * Saves a copy of each lead to a Google Sheet through a Google Apps Script
 * web app (see docs/google-sheet-leads.md). Disabled unless
 * VITE_LEADS_ENDPOINT is set.
 */

const ENDPOINT = import.meta.env.VITE_LEADS_ENDPOINT as string | undefined;

export const leadsEnabled = Boolean(ENDPOINT);

export interface Lead {
  name: string;
  whatsapp: string;
  country: string;
  degree: string;
  field: string;
  pathway: string;
  source: string;
  language: string;
}

/**
 * Fire-and-forget: a failure here never blocks the form.
 * Sent as text/plain so the browser needs no CORS preflight.
 */
export function saveLead(lead: Lead) {
  if (!ENDPOINT) return;
  const body = JSON.stringify({ ...lead, page: window.location.href, submittedAt: new Date().toISOString() });
  try {
    const sent = navigator.sendBeacon?.(ENDPOINT, new Blob([body], { type: "text/plain;charset=utf-8" }));
    if (!sent) {
      void fetch(ENDPOINT, { method: "POST", mode: "no-cors", keepalive: true, body }).catch(() => {});
    }
  } catch {
    // Never let a storage problem break the consultation form.
  }
}
