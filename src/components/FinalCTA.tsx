import React from "react";
import { WHATSAPP_BASE_URL, WHATSAPP_DISPLAY } from "../data/joudaData";
import {
  ArrowLeft,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

interface FinalCTAProps {
  onOpenLeadModal: (source?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenLeadModal }) => {
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent("مرحباً فريق جودة، أود البدء والتسجيل للجامعات الماليزية.")}`;

  return (
    <section className="py-14 sm:py-18 lg:py-28 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-6 sm:p-10 md:p-14 lg:p-16 text-white shadow-2xl overflow-hidden border border-emerald-500/30 text-center space-y-7">
          {/* Ambient background glows */}
          <div className="absolute -top-24 -start-24 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -end-24 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>ابدأ مستقبلك اليوم — قراراتك تصنع مستقبلك</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black tracking-tight leading-[1.2] text-balance">
            قرارك اليوم يُحدد{" "}
            <span className="text-gradient-emerald">مستقبلك غداً.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
            آلاف الطلاب العرب بدأوا رحلتهم في ماليزيا عبر جودة وحصلوا على
            قبولاتهم المعتمدة. أنت التالي — تواصل معنا الآن مجاناً.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenLeadModal("final_cta_primary")}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-9 py-4 min-h-[48px] rounded-2xl text-base font-bold bg-gradient-to-l from-emerald-500 via-emerald-400 to-teal-500 text-slate-950 shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <span>سجل الآن مجاناً</span>
              <ArrowLeft className="w-5 h-5" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 min-h-[48px] rounded-2xl text-base font-bold text-white bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 shadow-md"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>استشرنا عبر واتساب</span>
            </a>
          </div>

          {/* Phone pill on dark background */}
          <div className="pt-2 flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs text-slate-200 transition-colors cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>واتساب المستشار المعتمد:</span>
              <strong className="text-white font-sans tracking-wide" dir="ltr">
                {WHATSAPP_DISPLAY}
              </strong>
            </a>
          </div>

          {/* Trust Checkmarks */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>تقييم مجاني 100%</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>رد سريع ومباشر</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>مرافقة شاملة حتى وصولك الحرم الجامعي</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
