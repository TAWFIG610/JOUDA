import React from "react";
import {
  COMPANY,
  FOOTER_DATA,
  WHATSAPP_DISPLAY,
  whatsappUrl,
  BRAND_NAME_AR,
  BRAND_NAME_EN,
  BRAND_TAGLINE,
  BRAND_MOTTO,
} from "../data/thiqaData";
import { ArrowUp, Globe, MessageCircle, Video } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

interface FooterProps {
  onOpenLegal: (type: "privacy" | "terms" | "refund") => void;
}

const TEXT = {
  ar: {
    site: "الموقع",
    siteLinks: "روابط الموقع",
    legal: "معلومات قانونية",
    legalLinks: { privacy: "سياسة الخصوصية", terms: "الشروط والأحكام", refund: "الرسوم والشفافية" },
    top: "للأعلى",
    registration: "رقم السجل التجاري",
    message: "مرحباً، أود التواصل مع مستشار ثقة يوني.",
  },
  en: {
    site: "Site",
    siteLinks: "Site links",
    legal: "Legal",
    legalLinks: { privacy: "Privacy policy", terms: "Terms and conditions", refund: "Fees and transparency" },
    top: "Back to top",
    registration: "Company registration",
    message: "Hello, I'd like to speak with a THIQA UNI advisor.",
  },
};

const LEGAL_TYPES = ["privacy", "terms", "refund"] as const;

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
  const { lang, t } = useLang();
  const text = TEXT[lang];
  const brandName = lang === "ar" ? BRAND_NAME_AR : BRAND_NAME_EN;

  return (
    <footer className="bg-ink pb-28 pt-14 text-brand-100 lg:pb-10">
      <div className="page-container">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-4">
            <span className="inline-flex rounded-xl bg-white px-4 py-3">
              <img
                src="/thiqa-logo-trim.png"
                alt={`${brandName} — ${t(BRAND_TAGLINE)}`}
                width="591"
                height="170"
                loading="lazy"
                className="h-12 w-auto"
              />
            </span>
            <p className="max-w-sm text-sm leading-relaxed text-brand-100/80">{t(FOOTER_DATA.brandDesc)}</p>
            <a
              href={whatsappUrl(text.message)}
              target="_blank"
              rel="noopener noreferrer"
              data-place="footer"
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
                  data-place="footer_social"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 transition-colors hover:border-white/40 hover:text-white focus-visible:ring-white focus-visible:ring-offset-ink"
                >
                  <span aria-hidden="true">{getSocialIcon(s.name)}</span>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label={text.siteLinks}>
            <h2 className="mb-3 text-sm font-bold text-white">{text.site}</h2>
            <ul className="space-y-1 text-sm">
              {FOOTER_DATA.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>
                    {t(l.title)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-3 text-sm font-bold text-white">{text.legal}</h2>
            <ul className="space-y-1 text-sm">
              {LEGAL_TYPES.map((type) => (
                <li key={type}>
                  <button type="button" onClick={() => onOpenLegal(type)} className={linkClass}>
                    {text.legalLinks[type]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-brand-100/70 sm:flex-row">
          <div className="space-y-1 text-center sm:text-start">
            <p>
              © {new Date().getFullYear()} {brandName} · {t(BRAND_MOTTO)}
            </p>
            {/* Shown once the real details are filled in COMPANY (thiqaData.ts) */}
            {(COMPANY.registration || t(COMPANY.address)) && (
              <p>
                {COMPANY.registration && (
                  <>
                    {text.registration}: <span className="font-latin" dir="ltr">{COMPANY.registration}</span>
                  </>
                )}
                {COMPANY.registration && t(COMPANY.address) && " · "}
                {t(COMPANY.address)}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2 hover:text-white focus-visible:ring-white focus-visible:ring-offset-ink"
          >
            {text.top}
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
