import React from "react";
import { WHATSAPP_BASE_URL } from "../data/thiqaData";
import {
  Home,
  GraduationCap,
  Compass,
  MessageCircle,
  Award,
} from "lucide-react";

interface MobileBottomNavProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenAdvisorModal: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onOpenLeadModal,
  onOpenAdvisorModal,
}) => {
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    "مرحباً فريق ثقة يوني، أود الاستفسار عن فرص القبول والتسجيل في الجامعات.",
  )}`;

  return (
    <nav
      aria-label="شريط التنقل السريع للهاتف"
      className="fixed bottom-0 start-0 end-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(15,37,75,0.06)] pb-[max(0.5rem,env(safe-area-inset-bottom))] transition-transform duration-300"
    >
      <div className="max-w-md mx-auto px-3 py-1.5 flex items-center justify-around">
        {/* Home */}
        <a
          href="#hero"
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[48px] py-1 text-slate-600 hover:text-[#0F254B] active:scale-95 transition-all text-center group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] rounded-xl"
        >
          <Home className="w-5 h-5 text-slate-500 group-hover:text-[#0F254B] transition-colors" />
          <span className="text-[10px] font-bold mt-1 tracking-tight">
            الرئيسية
          </span>
        </a>

        {/* Universities */}
        <a
          href="#universities"
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[48px] py-1 text-slate-600 hover:text-[#0F254B] active:scale-95 transition-all text-center group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] rounded-xl"
        >
          <GraduationCap className="w-5 h-5 text-slate-500 group-hover:text-[#0F254B] transition-colors" />
          <span className="text-[10px] font-bold mt-1 tracking-tight">
            الجامعات
          </span>
        </a>

        {/* Advisor Modal Trigger */}
        <button
          type="button"
          onClick={onOpenAdvisorModal}
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[48px] py-1 text-slate-600 hover:text-[#0F254B] active:scale-95 transition-all text-center group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] rounded-xl"
        >
          <Compass className="w-5 h-5 text-[#D97706] group-hover:text-[#0F254B] transition-colors" />
          <span className="text-[10px] font-bold mt-1 tracking-tight">
            المستشار
          </span>
        </button>

        {/* WhatsApp Direct */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-w-[56px] min-h-[48px] py-1 text-emerald-700 hover:text-emerald-800 active:scale-95 transition-all text-center group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-xl"
        >
          <MessageCircle className="w-5 h-5 text-emerald-600 group-hover:scale-105 transition-transform" />
          <span className="text-[10px] font-bold mt-1 tracking-tight">
            واتساب
          </span>
        </a>

        {/* Primary CTA Apply */}
        <button
          type="button"
          onClick={() => onOpenLeadModal("mobile_bottom_bar")}
          className="flex items-center gap-1.5 px-3.5 py-2 min-h-[44px] rounded-xl bg-[#F59E0B] active:bg-[#D97706] text-white shadow-sm active:scale-95 transition-all cursor-pointer font-bold text-xs"
        >
          <Award className="w-4 h-4 shrink-0" />
          <span className="whitespace-nowrap">قدّم الآن</span>
        </button>
      </div>
    </nav>
  );
};
