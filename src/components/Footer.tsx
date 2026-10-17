import React from "react";
import { BRAND_TAGLINE, COMPANY, NAV_LINKS, SOCIALS, WHATSAPP_DISPLAY, WHATSAPP_GREETING, whatsappUrl } from "../data/thiqaData";
import { BrandIcon } from "./ui/BrandIcon";
import { useLang } from "../i18n/LanguageContext";
import type { LegalType } from "./LegalModal";

interface FooterProps {
  onOpenLegal: (type: LegalType) => void;
}

const TEXT = {
  ar: {
    contact: "التواصل",
    site: "الموقع",
    legal: { privacy: "سياسة الخصوصية", terms: "الشروط والأحكام", refund: "الرسوم والشفافية" },
  },
  en: {
    contact: "Contact",
    site: "Site",
    legal: { privacy: "Privacy policy", terms: "Terms and conditions", refund: "Fees and transparency" },
  },
};

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const { lang, t } = useLang();
  const text = TEXT[lang];
  const contact = [t(COMPANY.address), t(COMPANY.hours), COMPANY.ssm && `SSM ${COMPANY.ssm}`].filter(Boolean);

  return (
    <footer className="bg-navy py-10 text-white">
      <div className="page-container">
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr_1fr] md:gap-10">
          <div>
            <img src="/thiqa-logo-white.png" alt="Thiqa Uni" width="581" height="162" className="h-9 w-auto" loading="lazy" />
            <p className="mt-2 text-sm text-on-navy">{t(BRAND_TAGLINE)}</p>
            <ul className="mt-4 flex gap-2">
              {SOCIALS.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/25 hover:border-white/60"
                  >
                    <BrandIcon name={s.id} className="h-4.5 w-4.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-sm text-white">{text.contact}</h2>
            <ul className="grid gap-1 text-sm">
              <li>
                <a href={whatsappUrl(t(WHATSAPP_GREETING))} target="_blank" rel="noopener noreferrer" data-place="footer" className="inline-flex min-h-8 items-center gap-2 hover:underline" dir="ltr">
                  <BrandIcon name="whatsapp" className="h-4.5 w-4.5" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              {COMPANY.email && (
                <li>
                  <a href={`mailto:${COMPANY.email}`} className="inline-flex min-h-8 items-center hover:underline">
                    {COMPANY.email}
                  </a>
                </li>
              )}
              {contact.map((c) => (
                <li key={c} className="text-on-navy">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Section links live in the menu on phones, so the footer stays short there */}
          <div className="hidden md:block">
            <h2 className="mb-2 text-sm text-white">{text.site}</h2>
            <ul className="grid gap-1 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="inline-flex min-h-8 items-center hover:underline">
                    {t(l.name)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-white/15 pt-4 text-sm text-on-navy">
          <span>© {new Date().getFullYear()} Thiqa Uni</span>
          <ul className="flex flex-wrap gap-x-4">
            {(Object.keys(text.legal) as LegalType[]).map((k) => (
              <li key={k}>
                <button type="button" onClick={() => onOpenLegal(k)} className="min-h-10 hover:text-white hover:underline">
                  {text.legal[k]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
