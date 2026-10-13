/**
 * Visit and conversion tracking. Nothing loads unless an ID is configured:
 *   VITE_GA_ID=G-XXXXXXXXXX          → Google Analytics 4
 *   VITE_PLAUSIBLE_DOMAIN=thiqauni.com → Plausible
 * Both can be set at once.
 */

type EventProps = Record<string, string | number | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    plausible?: ((event: string, options?: { props?: EventProps }) => void) & { q?: unknown[] };
  }
}

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;
const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;

function loadScript(src: string, attrs: Record<string, string> = {}) {
  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  Object.entries(attrs).forEach(([key, value]) => script.setAttribute(key, value));
  document.head.appendChild(script);
}

export function initAnalytics() {
  if (GA_ID) {
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // gtag expects the raw `arguments` object.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
  }

  if (PLAUSIBLE_DOMAIN) {
    loadScript("https://plausible.io/js/script.js", { "data-domain": PLAUSIBLE_DOMAIN, defer: "" });
    // Queue events fired before the script has loaded.
    window.plausible =
      window.plausible ||
      Object.assign((...args: unknown[]) => (window.plausible!.q = window.plausible!.q || []).push(args), {});
  }

  if (!GA_ID && !PLAUSIBLE_DOMAIN) return;

  // Every WhatsApp link on the page counts as a conversion.
  document.addEventListener("click", (event) => {
    const link = (event.target as Element | null)?.closest?.('a[href*="wa.me"]');
    if (link) track("whatsapp_click", { place: link.getAttribute("data-place") ?? "link" });
  });
}

export function track(event: string, props: EventProps = {}) {
  window.gtag?.("event", event, props);
  window.plausible?.(event, { props });
}
