import React from "react";
import {
  FOOTER_DATA,
  WHATSAPP_DISPLAY,
  WHATSAPP_BASE_URL,
  BRAND_NAME_AR,
  BRAND_TAGLINE,
  BRAND_MOTTO,
} from "../data/thiqaData";
import { ArrowUp, Globe, MessageCircle, Video } from "lucide-react";

interface FooterProps {
  onOpenLegal: (type: "privacy" | "terms" | "refund") => void;
}

const LEGAL_LINKS = [
  { type: "privacy", title: "سياسة الخصوصية" },
  { type: "terms", title: "الشروط والأحكام" },
  { type: "refund", title: "الرسوم والشفافية" },
] as const;

const linkClass =
  "inline-flex min-h-10 items-center rounded-md text-start transition-colors hover:text-white focus-visible:ring-white focus-visible:ring-offset-ink";

const getSocialIcon = (name: string) => {
  switch (name) {
    case "WhatsApp":
      return <MessageCircle className="h-4 w-4" />;
    case "TikTok":
      return <Video className="h-4 w-4" />;
    default:
      return <Globe className="h-4 w-4" />;
  }
};

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent("مرحباً، أود التواصل مع مستشار ثقة يوني.")}`;

  return (
    <footer className="bg-ink pb-28 pt-14 text-brand-100 lg:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-4">
            <span className="inline-flex rounded-xl bg-white px-4 py-3">
              <img
                src="/thiqa-logo-trim.png"
                alt={`${BRAND_NAME_AR} — ${BRAND_TAGLINE}`}
                width="591"
                height="170"
                loading="lazy"
                className="h-12 w-auto"
              />
            </span>
            <p className="max-w-sm text-sm leading-relaxed text-brand-100/80">{FOOTER_DATA.brandDesc}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg font-bold text-white hover:text-gold-300 focus-visible:ring-white focus-visible:ring-offset-ink"
            >
              <MessageCircle className="h-5 w-5 text-gold-400" />
              <span dir="ltr" className="font-latin">{WHATSAPP_DISPLAY}</span>
            </a>
            <div className="flex flex-wrap gap-2">
              {FOOTER_DATA.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 transition-colors hover:border-white/40 hover:text-white focus-visible:ring-white focus-visible:ring-offset-ink"
                >
                  <span aria-hidden="true">{getSocialIcon(s.name)}</span>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="روابط الموقع">
            <h2 className="mb-3 text-sm font-bold text-white">الموقع</h2>
            <ul className="space-y-1 text-sm">
              {FOOTER_DATA.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>
                    {l.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-3 text-sm font-bold text-white">معلومات قانونية</h2>
            <ul className="space-y-1 text-sm">
              {LEGAL_LINKS.map((l) => (
                <li key={l.type}>
                  <button type="button" onClick={() => onOpenLegal(l.type)} className={linkClass}>
                    {l.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-brand-100/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND_NAME_AR} · {BRAND_MOTTO}
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2 hover:text-white focus-visible:ring-white focus-visible:ring-offset-ink"
          >
            للأعلى
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
