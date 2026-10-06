import React from "react";
import { WHATSAPP_BASE_URL, WHATSAPP_DISPLAY, BRAND_MOTTO } from "../data/thiqaData";
import {
  ArrowLeft,
  MessageSquare,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface FinalCTAProps {
  onOpenLeadModal: (source?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenLeadModal }) => {
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent("مرحباً فريق THIQA UNI، أود بدء التقديم واستخراج القبول الجامعي.")}`;

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#0F254B] p-8 sm:p-12 md:p-16 text-white shadow-2xl overflow-hidden border border-[#F59E0B]/30 text-center space-y-7">
          {/* Ambient background glows */}
          <div className="absolute -top-24 -start-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -end-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F59E0B] text-xs font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
            <span className="font-sans font-bold tracking-wider uppercase">{BRAND_MOTTO}</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black tracking-tight leading-[1.2] text-balance">
            قرارك الأكاديمي اليوم يصنع{" "}
            <span className="text-[#F59E0B]">مستقبلك المهني غداً.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
            آلاف الطلاب بدأت مسيرتهم الدولية بثقة تامة عبر THIQA UNI. احجز تقييمك واستشارتك المجانية اليوم وانطلق نحو طموحك.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenLeadModal("final_cta_primary")}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-9 py-4 min-h-[48px] rounded-xl text-base font-bold bg-[#F59E0B] hover:bg-[#D97706] text-white shadow-xl shadow-amber-500/25 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-5 h-5" />
              <span>قدّم طلب القبول الآن مجاناً</span>
              <ArrowLeft className="w-5 h-5" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 min-h-[48px] rounded-xl text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 cursor-pointer shadow-md"
            >
              <MessageSquare className="w-5 h-5 text-[#F59E0B]" />
              <span>تواصل مباشرة عبر واتساب</span>
            </a>
          </div>

          {/* Contact Bar */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
              <span>شريك معتمد وممثل رسمي للجامعات</span>
            </span>
            <span className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-[#F59E0B]" />
              <strong dir="ltr" className="font-sans text-white">{WHATSAPP_DISPLAY}</strong>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
              <span>تقييم المؤهلات مجاني 100%</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
