import React from "react";
import { WHATSAPP_BASE_URL } from "../data/joudaData";
import { ArrowLeft, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";

interface FinalCTAProps {
  onOpenLeadModal: (source?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenLeadModal }) => {
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent("مرحباً فريق جودة، أود البدء والتسجيل للجامعات الماليزية.")}`;

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-5 sm:p-8 md:p-12 lg:p-16 text-white shadow-2xl overflow-hidden border border-emerald-500/30 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>ابدأ مستقبلك اليوم — قراراتك تصنع مستقبلك</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
            قرارك اليوم يُحدد{" "}
            <span className="text-gradient-emerald">مستقبلك غداً.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
            آلاف الطلاب العرب بدأوا رحلتهم في ماليزيا عبر جودة. أنت التالي —
            تواصل معنا الآن مجاناً.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onOpenLeadModal("final_cta_primary")}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-9 py-4 min-h-[48px] rounded-2xl text-base font-bold bg-gradient-to-l from-emerald-500 via-emerald-400 to-teal-500 text-slate-950 shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <span>سجل الآن مجاناً</span>
              <ArrowLeft className="w-5 h-5" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 min-h-[48px] rounded-2xl text-base font-bold text-white bg-slate-800/90 hover:bg-slate-800 border border-slate-700 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>استشرنا عبر واتساب</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>تقييم مجاني 100%</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>رد سريع ومباشر</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>مرافقة شاملة حتى وصولك</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
