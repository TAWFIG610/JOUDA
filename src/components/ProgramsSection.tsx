import React from "react";
import { Sparkles, ArrowLeft, CheckCircle2 } from "lucide-react";

interface ProgramsSectionProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenAdvisorModal: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onOpenLeadModal,
}) => {
  return (
    <section
      id="programs"
      className="py-14 sm:py-20 lg:py-28 bg-white relative border-t border-slate-200/80"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl bg-gradient-to-br from-emerald-50/50 via-slate-50/70 to-teal-50/40 border border-emerald-200/60 p-7 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-900 text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>ادرس ما تحب في ماليزيا</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight text-balance">
            لديك تخصص في بالك؟{" "}
            <span className="text-gradient-emerald">
              أخبرنا به وسنجد الأنسب لك.
            </span>
          </h2>

          {/* Sub-headline */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto font-medium">
            تنسيق مباشر وشراكات معتمدة في كافة التخصصات — تقنية، طب وعلوم صحية،
            أعمال وتمويل، هندسة متقدمة، وأكثر.
          </p>

          {/* Main CTA Button */}
          <div className="pt-2">
            <button
              onClick={() => onOpenLeadModal("programs_cta")}
              className="inline-flex items-center justify-center gap-3 px-10 py-4 min-h-[50px] rounded-2xl text-sm sm:text-base font-bold bg-gradient-to-l from-emerald-600 via-emerald-500 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 transition-all duration-200 shadow-xl shadow-emerald-600/25 hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <span>تواصل معنا الآن مجاناً</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-bold text-slate-700">
            <span className="inline-flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-full border border-slate-200 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>تقييم مجاني 100%</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-full border border-slate-200 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>رد سريع خلال ساعات</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-full border border-slate-200 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>بدون أي التزام مالي</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
