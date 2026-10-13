import React from "react";
import {
  FOOTER_DATA,
  WHATSAPP_DISPLAY,
  WHATSAPP_BASE_URL,
  BRAND_NAME_AR,
  BRAND_TAGLINE,
  BRAND_MOTTO,
} from "../data/thiqaData";
import { ArrowUp, Globe, MessageCircle, PhoneCall, ShieldCheck, Video } from "lucide-react";

interface FooterProps {
  onOpenLegal: (type: "privacy" | "terms" | "refund") => void;
}

const EXPLORE_LINKS = [
  { title: "الجامعات الشريكة والمعتمدة", href: "#universities" },
  { title: "الخدمات والاستشارات الأكاديمية", href: "#services" },
  { title: "مسار التقديم خطوة بخطوة", href: "#journey" },
  { title: "لماذا الدراسة في ماليزيا؟", href: "#why-malaysia" },
];

const LEGAL_LINKS = [
  { type: "privacy", title: "سياسة الخصوصية" },
  { type: "terms", title: "الشروط والأحكام الأكاديمية" },
  { type: "refund", title: "ميثاق الشفافية والرسوم المباشرة" },
] as const;

const linkClass =
  "inline-flex min-h-10 items-center gap-2 rounded-md py-1 text-start transition-colors hover:text-gold-300 focus-visible:ring-white focus-visible:ring-offset-brand-900";

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
    <footer className="relative overflow-hidden bg-gradient-to-b from-brand-900 to-ink pb-28 pt-14 text-white sm:pt-20 lg:pb-10">
      <div className="bg-dots-light absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-gold-500/60 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <div className="inline-flex rounded-2xl bg-white p-3 shadow-lg">
              <img
                src="/thiqa-logo.png"
                alt={`${BRAND_NAME_AR} — ${BRAND_TAGLINE}`}
                width="160"
                height="80"
                loading="lazy"
                className="h-14 w-auto object-contain sm:h-16"
              />
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-brand-100/75">{FOOTER_DATA.brandDesc}</p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-2xl border border-gold-500/40 bg-white/5 px-4 py-2 text-sm font-bold text-gold-300 transition-colors hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-brand-900"
            >
              <PhoneCall className="h-4 w-4" />
              <span>واتساب الاستشارات:</span>
              <span className="font-latin text-white" dir="ltr">{WHATSAPP_DISPLAY}</span>
            </a>

            <div className="flex flex-wrap items-center gap-2">
              {FOOTER_DATA.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-100 transition-all hover:-translate-y-0.5 hover:border-gold-500/50 hover:text-gold-300 focus-visible:ring-white focus-visible:ring-offset-brand-900"
                >
                  <span aria-hidden="true">{getSocialIcon(s.name)}</span>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="روابط سريعة" className="space-y-4">
            <h2 className="text-sm font-bold text-white">الروابط السريعة</h2>
            <ul className="space-y-1 text-sm text-brand-100/75">
              {FOOTER_DATA.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>
                    {l.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="استكشاف التعليم الدولي" className="space-y-4">
            <h2 className="text-sm font-bold text-white">استكشاف التعليم الدولي</h2>
            <ul className="space-y-1 text-sm text-brand-100/75">
              {EXPLORE_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>
                    {l.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4">
            <h2 className="text-sm font-bold text-white">المعايير والشفافية</h2>
            <ul className="space-y-1 text-sm text-brand-100/75">
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

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-brand-100/60 sm:flex-row">
          <p className="text-center sm:text-start">
            © {new Date().getFullYear()} ثقة يوني. يسعدنا أن نكون جزءاً من رحلتك الأكاديمية. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-brand-100/80">
              <ShieldCheck className="h-4 w-4 text-gold-400" />
              {BRAND_MOTTO}
            </span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex min-h-11 items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 text-brand-100 transition-all hover:border-gold-500/50 hover:text-white focus-visible:ring-white focus-visible:ring-offset-brand-900"
              aria-label="الرجوع للأعلى"
            >
              <span>للأعلى</span>
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
