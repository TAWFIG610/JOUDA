import React from "react";
import { WHATSAPP_BASE_URL } from "../data/thiqaData";
import { Compass, GraduationCap, MessageCircle } from "lucide-react";

interface MobileBottomNavProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenAdvisorModal: () => void;
}

const itemClass =
  "flex min-h-12 min-w-14 flex-col items-center justify-center rounded-xl px-1 text-center text-slate-600 transition-colors hover:text-brand-700";

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenLeadModal, onOpenAdvisorModal }) => {
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    "مرحباً فريق ثقة يوني، أود الاستفسار عن الدراسة في ماليزيا.",
  )}`;

  return (
    <nav
      aria-label="اختصارات سريعة"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden"
    >
      <div className="mx-auto flex max-w-lg items-center gap-1 px-3 pt-2">
        <a href="#universities" className={itemClass}>
          <GraduationCap className="h-5 w-5" />
          <span className="mt-0.5 text-xs font-semibold">الجامعات</span>
        </a>
        <button type="button" onClick={onOpenAdvisorModal} className={itemClass}>
          <Compass className="h-5 w-5" />
          <span className="mt-0.5 text-xs font-semibold">التخصص</span>
        </button>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${itemClass} text-success-600`}>
          <MessageCircle className="h-5 w-5" />
          <span className="mt-0.5 text-xs font-semibold">واتساب</span>
        </a>
        <button
          type="button"
          onClick={() => onOpenLeadModal("mobile_bottom_bar")}
          className="btn btn-primary ms-auto min-h-12 flex-1 px-4"
        >
          اطلب استشارة
        </button>
      </div>
    </nav>
  );
};
