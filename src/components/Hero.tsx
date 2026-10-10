import React from "react";
import {
  ArrowLeft,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

interface HeroProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenAdvisorModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenLeadModal,
  onOpenAdvisorModal,
}) => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pt-24 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 bg-white border-b border-slate-200/80 overflow-hidden"
    >
      {/* Subtle Radial Glow in background */}
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-6 sm:space-y-8">
        {/* Top Focused Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F254B]/5 border border-[#0F254B]/15 text-[#0F254B] text-xs sm:text-sm font-bold shadow-2xs mx-auto">
          <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
          <span>شريكك المعتمد للدراسة في ماليزيا • قبولات رسمية 100%</span>
        </div>

        {/* Big Bold Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0F254B] leading-[1.2] sm:leading-[1.15] tracking-tight max-w-4xl mx-auto text-balance">
          قبولك الجامعي في ماليزيا...{" "}
          <span className="text-[#D97706] block sm:inline">
            مباشر، معتمد، وبدون رسوم خدمة.
          </span>
        </h1>

        {/* Crisp Business Subheadline addressing student pain points */}
        <p className="text-sm sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          نمثّل أكثر من 35 جامعة ماليزية رائدة. نتولى تدقيق ملفك، تأمين خطاب القبول الرسمي (Offer Letter)، ومتابعة تأشيرة EMGS خطوة بخطوة بكل شفافية.
        </p>

        {/* Dual High-Intent CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 pt-2 max-w-md sm:max-w-none mx-auto">
          <button
            onClick={() => onOpenLeadModal("hero_primary")}
            className="flex items-center justify-center gap-3 px-8 py-4 min-h-[52px] rounded-xl text-base sm:text-lg font-bold bg-[#F59E0B] hover:bg-[#D97706] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2"
          >
            <span>احصل على قبولك مجاناً الآن</span>
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenAdvisorModal}
            className="flex items-center justify-center gap-2.5 px-7 py-4 min-h-[52px] rounded-xl text-base sm:text-lg font-bold text-[#0F254B] bg-[#F8FAFC] hover:bg-slate-100 border border-slate-300 shadow-2xs hover:shadow-sm transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2"
          >
            <GraduationCap className="w-5 h-5 text-[#0F254B]" />
            <span>مستشار التخصص والجامعة</span>
          </button>
        </div>

        {/* Clean Trust Proof Strip */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm text-slate-700 font-bold">
          <div className="inline-flex items-center gap-1.5 bg-[#F8FAFC] px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-[#D97706]" />
            <span>تمثيل جامعي رسمي معتمد</span>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-[#F8FAFC] px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-[#0F254B]" />
            <span>متابعة تأشيرة EMGS خطوة بخطوة</span>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-[#F8FAFC] px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-[#D97706]" />
            <span>استشارة وتقييم أكاديمي 0$ مجاناً</span>
          </div>
        </div>
      </div>
    </section>
  );
};

