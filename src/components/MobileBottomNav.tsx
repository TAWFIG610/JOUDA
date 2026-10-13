import React from "react";
import { WHATSAPP_BASE_URL } from "../data/thiqaData";
import { Award, Compass, GraduationCap, Home, MessageCircle } from "lucide-react";
import { useActiveSection } from "../hooks/useScroll";

interface MobileBottomNavProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenAdvisorModal: () => void;
}

const SECTIONS = ["hero", "universities"];

const itemClass =
  "group flex min-h-12 min-w-12 flex-col items-center justify-center rounded-xl px-1 py-1 text-center transition-colors";

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenLeadModal, onOpenAdvisorModal }) => {
  const active = useActiveSection(SECTIONS);
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    "مرحباً فريق ثقة يوني، أود الاستفسار عن فرص القبول والتسجيل في الجامعات.",
  )}`;

  const tone = (id: string) => (active === id ? "text-brand-700" : "text-slate-500 hover:text-brand-700");

  return (
    <nav
      aria-label="شريط التنقل السريع للهاتف"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/90 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-10px_30px_-15px_rgb(10_24_56/0.25)] backdrop-blur-xl lg:hidden"
    >
      <div className="mx-auto flex max-w-md items-center justify-around gap-1 px-2 pt-1.5">
        <a href="#hero" className={`${itemClass} ${tone("hero")}`} aria-current={active === "hero" ? "location" : undefined}>
          <Home className="h-5 w-5" />
          <span className="mt-1 text-[11px] font-bold">الرئيسية</span>
        </a>

        <a href="#universities" className={`${itemClass} ${tone("universities")}`} aria-current={active === "universities" ? "location" : undefined}>
          <GraduationCap className="h-5 w-5" />
          <span className="mt-1 text-[11px] font-bold">الجامعات</span>
        </a>

        <button type="button" onClick={onOpenAdvisorModal} className={`${itemClass} text-slate-500 hover:text-brand-700`}>
          <Compass className="h-5 w-5 text-gold-600" />
          <span className="mt-1 text-[11px] font-bold">المستشار</span>
        </button>

        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${itemClass} text-success-600 hover:text-success-700`}>
          <MessageCircle className="h-5 w-5" />
          <span className="mt-1 text-[11px] font-bold">واتساب</span>
        </a>

        <button
          type="button"
          onClick={() => onOpenLeadModal("mobile_bottom_bar")}
          className="btn btn-primary min-h-11 gap-1.5 rounded-xl px-3.5 py-2 text-sm sm:text-sm"
        >
          <Award className="h-4 w-4 shrink-0" />
          <span className="whitespace-nowrap">قدّم الآن</span>
        </button>
      </div>
    </nav>
  );
};
