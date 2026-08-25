import React from "react";
import { Sparkles, ArrowLeft } from "lucide-react";

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
      className="py-12 sm:py-16 lg:py-24 bg-white relative border-t border-slate-200"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-xs mb-6">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>ادرس ما تحب في ماليزيا</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          لديك تخصص في بالك؟{" "}
          <span className="text-gradient-emerald">أخبرنا به.</span>
        </h2>

        {/* Sub-headline */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto mb-10">
          لدينا شراكات في جميع المجالات — تقنية، صحة، أعمال، هندسة، وأكثر. لا
          تقلق، مستشارنا يجد الأنسب لملفك.
        </p>

        {/* Main CTA Button */}
        <button
          onClick={() => onOpenLeadModal("programs_cta")}
          className="inline-flex items-center justify-center gap-2 px-10 py-4 min-h-[52px] rounded-2xl text-sm font-bold bg-gradient-to-l from-emerald-600 to-emerald-500 text-white hover:from-emerald-500 hover:to-emerald-400 transition-all duration-200 shadow-lg shadow-emerald-600/25 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 mb-6"
        >
          <span>تواصل معنا الآن مجاناً</span>
          <ArrowLeft className="w-4 h-4" />
        </button>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600">
          <span className="flex items-center gap-1">
            <span className="text-emerald-600 font-bold">✓</span> تقييم مجاني
          </span>
          <span className="w-px h-4 bg-slate-200 hidden sm:block" />
          <span className="flex items-center gap-1">
            <span className="text-emerald-600 font-bold">✓</span> رد خلال ساعات
          </span>
          <span className="w-px h-4 bg-slate-200 hidden sm:block" />
          <span className="flex items-center gap-1">
            <span className="text-emerald-600 font-bold">✓</span> بدون التزام
          </span>
        </div>
      </div>
    </section>
  );
};
