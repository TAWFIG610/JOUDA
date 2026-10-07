import React from "react";
import {
  FOOTER_DATA,
  WHATSAPP_DISPLAY,
  WHATSAPP_BASE_URL,
  BRAND_NAME_AR,
  BRAND_TAGLINE,
  BRAND_MOTTO,
} from "../data/thiqaData";
import {
  MessageCircle,
  Video,
  ArrowUp,
  Globe,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

interface FooterProps {
  onOpenLegal: (type: "privacy" | "terms" | "refund") => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent("مرحباً، أود التواصل مع مستشار ثقة يوني.")}`;

  const getSocialIcon = (name: string) => {
    switch (name) {
      case "WhatsApp":
        return <MessageCircle className="w-4 h-4" />;
      case "TikTok":
        return <Video className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F254B] text-white pt-10 sm:pt-16 pb-8 sm:pb-10 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 pb-8 sm:pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-14 bg-white p-1.5 rounded-xl shadow-md border border-white/20 shrink-0">
                <img
                  src="/thiqa-logo.png"
                  alt={`${BRAND_NAME_AR} — ${BRAND_TAGLINE}`}
                  width="112"
                  height="56"
                  loading="lazy"
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              {FOOTER_DATA.brandDesc}
            </p>

            <div className="inline-block px-3 py-1 rounded-md bg-white/10 text-[#F59E0B] text-xs font-bold font-sans tracking-wide">
              {BRAND_MOTTO}
            </div>

            {/* Clickable advisor phone capsule */}
            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 border border-[#F59E0B]/40 text-[#F59E0B] hover:bg-white/20 transition-colors text-xs font-bold"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>واتساب الاستشارات:</span>
                <span className="font-sans tracking-wide text-white" dir="ltr">
                  {WHATSAPP_DISPLAY}
                </span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {FOOTER_DATA.socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 text-slate-300 hover:text-[#F59E0B] hover:border-[#F59E0B]/40 hover:bg-white/15 transition-all cursor-pointer"
                >
                  {getSocialIcon(s.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide border-b border-white/10 pb-2">
              الروابط السريعة
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              {FOOTER_DATA.links.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    className="inline-block py-1 hover:text-[#F59E0B] transition-colors cursor-pointer"
                  >
                    {l.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Education Pathways */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide border-b border-white/10 pb-2">
              استكشاف التعليم الدولي
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <a
                  href="#universities"
                  className="inline-block py-1 hover:text-[#F59E0B] transition-colors cursor-pointer"
                >
                  الجامعات الشريكة والمعتمدة
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="inline-block py-1 hover:text-[#F59E0B] transition-colors cursor-pointer"
                >
                  الخدمات والاستشارات الأكاديمية
                </a>
              </li>
              <li>
                <a
                  href="#journey"
                  className="inline-block py-1 hover:text-[#F59E0B] transition-colors cursor-pointer"
                >
                  مسار التقديم (من الاستكشاف للتقديم)
                </a>
              </li>
              <li>
                <a
                  href="#why-thiqa"
                  className="inline-block py-1 hover:text-[#F59E0B] transition-colors cursor-pointer"
                >
                  الاعتمادات ومزايا ثقة يوني
                </a>
              </li>
            </ul>
          </div>

          {/* Legal and Transparency */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide border-b border-white/10 pb-2">
              المعايير والشفافية
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <button
                  onClick={() => onOpenLegal("privacy")}
                  className="inline-block py-1 hover:text-[#F59E0B] transition-colors text-start cursor-pointer"
                >
                  سياسة الخصوصية
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal("terms")}
                  className="inline-block py-1 hover:text-[#F59E0B] transition-colors text-start cursor-pointer"
                >
                  الشروط والأحكام الأكاديمية
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal("refund")}
                  className="inline-block py-1 hover:text-[#F59E0B] transition-colors text-start cursor-pointer"
                >
                  ميثاق الشفافية والرسوم المباشرة
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-start">
            © 2026 ثقة يوني (THIQA UNI) للخدمات الأكاديمية والتعليم الدولي. جميع الحقوق محفوظة.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
              <span>{BRAND_MOTTO}</span>
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-slate-300 hover:text-white hover:border-[#F59E0B]/50 transition-all cursor-pointer"
              aria-label="الرجوع للأعلى"
            >
              <span>للأعلى</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
