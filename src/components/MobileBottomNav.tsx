import React from "react";
import { WHATSAPP_GREETING, whatsappUrl } from "../data/thiqaData";
import { Compass, GraduationCap, MessageCircle } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

interface MobileBottomNavProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenAdvisorModal: () => void;
}

const TEXT = {
  ar: { label: "اختصارات سريعة", universities: "الجامعات", major: "التخصص", whatsapp: "واتساب", apply: "اطلب استشارة" },
  en: { label: "Quick links", universities: "Universities", major: "Major", whatsapp: "WhatsApp", apply: "Free consultation" },
};

const itemClass =
  "flex min-h-12 min-w-14 flex-col items-center justify-center rounded-xl px-1 text-center text-slate-600 transition-colors hover:text-brand-700";

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenLeadModal, onOpenAdvisorModal }) => {
  const { lang, t } = useLang();
  const text = TEXT[lang];

  return (
    <nav
      aria-label={text.label}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden"
    >
      <div className="mx-auto flex max-w-lg items-center gap-1 px-3 pt-2">
        <a href="#universities" className={itemClass}>
          <GraduationCap className="h-5 w-5" />
          <span className="mt-0.5 text-xs font-semibold">{text.universities}</span>
        </a>
        <button type="button" onClick={onOpenAdvisorModal} className={itemClass}>
          <Compass className="h-5 w-5" />
          <span className="mt-0.5 text-xs font-semibold">{text.major}</span>
        </button>
        <a
          href={whatsappUrl(t(WHATSAPP_GREETING))}
          target="_blank"
          rel="noopener noreferrer"
          data-place="bottom_bar"
          className={`${itemClass} text-success-600`}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="mt-0.5 text-xs font-semibold">{text.whatsapp}</span>
        </a>
        <button type="button" onClick={() => onOpenLeadModal("mobile_bottom_bar")} className="btn btn-primary ms-auto min-h-12 flex-1 px-4">
          {text.apply}
        </button>
      </div>
    </nav>
  );
};
