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
      className="fixed bottom-0 start-0 end-0 z-40 border-t border-slate-200/90 bg-white/95 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(15,37,75,0.06)] backdrop-blur-md transition-transform duration-300 lg:hidden"
    >
      <div className="mx-auto flex max-w-md items-center justify-around gap-1 px-2 py-1.5 sm:px-3">
        {/* Home */}
        <a
          href="#hero"
          className="group flex min-h-12 min-w-12 flex-col items-center justify-center rounded-xl py-1 text-center text-slate-600 transition-colors hover:text-[#0F254B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B]"
        >
          <Home className="w-5 h-5 text-slate-500 group-hover:text-[#0F254B] transition-colors" />
          <span className="mt-1 text-[11px] font-bold tracking-tight">
            الرئيسية
          </span>
        </a>

        {/* Universities */}
        <a
          href="#universities"
          className="group flex min-h-12 min-w-12 flex-col items-center justify-center rounded-xl py-1 text-center text-slate-600 transition-colors hover:text-[#0F254B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B]"
        >
          <GraduationCap className="w-5 h-5 text-slate-500 group-hover:text-[#0F254B] transition-colors" />
          <span className="mt-1 text-[11px] font-bold tracking-tight">
            الجامعات
          </span>
        </a>

        {/* Advisor Modal Trigger */}
        <button
          type="button"
          onClick={onOpenAdvisorModal}
          className="group flex min-h-12 min-w-12 flex-col items-center justify-center rounded-xl py-1 text-center text-slate-600 transition-colors hover:text-[#0F254B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B]"
        >
          <Compass className="w-5 h-5 text-[#D97706] group-hover:text-[#0F254B] transition-colors" />
          <span className="mt-1 text-[11px] font-bold tracking-tight">
            المستشار
          </span>
        </button>

        {/* WhatsApp Direct */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-12 min-w-12 flex-col items-center justify-center rounded-xl py-1 text-center text-emerald-700 transition-colors hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
        >
          <MessageCircle className="w-5 h-5 text-emerald-600 group-hover:scale-105 transition-transform" />
          <span className="mt-1 text-[11px] font-bold tracking-tight">
            واتساب
          </span>
        </a>

        {/* Primary CTA Apply */}
        <button
          type="button"
          onClick={() => onOpenLeadModal("mobile_bottom_bar")}
          className="flex min-h-11 items-center gap-1.5 rounded-xl bg-[#F59E0B] px-3 py-2 text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#D97706] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2 sm:px-3.5 sm:text-sm"
        >
          <Award className="w-4 h-4 shrink-0" />
          <span className="whitespace-nowrap">قدّم الآن</span>
        </button>
      </div>
    </nav>
  );
};
