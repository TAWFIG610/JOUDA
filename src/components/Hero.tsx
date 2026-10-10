import React from "react";
import { ArrowLeft, CheckCircle2, GraduationCap, ShieldCheck } from "lucide-react";

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
      className="relative flex items-center justify-center overflow-hidden border-b border-slate-200/80 bg-[linear-gradient(135deg,#F8FAFC_0%,#FFFFFF_56%,#FFF8E8_100%)] pb-14 pt-28 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40"
    >
      {/* Subtle Radial Glow in background */}
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8">
        <div className="text-center lg:text-start space-y-6 sm:space-y-7">
        {/* Top Focused Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F254B]/5 border border-[#0F254B]/15 text-[#0F254B] text-xs sm:text-sm font-bold shadow-2xs">
          <ShieldCheck className="w-4 h-4 text-thiqa-gold" />
          <span>إرشاد أكاديمي للطلاب الراغبين بالدراسة في ماليزيا</span>
        </div>

        {/* Big Bold Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F254B] leading-[1.2] tracking-tight max-w-3xl mx-auto lg:mx-0 text-balance">
          خطوتك للدراسة في ماليزيا{" "}
          <span className="text-thiqa-gold block">
            تبدأ باختيارٍ واعٍ.
          </span>
        </h1>

        {/* Crisp Business Subheadline addressing student pain points */}
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
          تعرّف على البرامج والجامعات، قارن متطلباتها وتكاليفها، ثم تواصل مع مستشار لمراجعة خياراتك وخطوات التقديم.
        </p>

        {/* Dual High-Intent CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-1 max-w-md sm:max-w-none mx-auto lg:mx-0">
          <button
            onClick={() => onOpenLeadModal("hero_primary")}
            className="flex items-center justify-center gap-3 px-8 py-4 min-h-[52px] rounded-xl text-base sm:text-lg font-bold bg-thiqa-gold hover:bg-thiqa-gold-hover text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2"
          >
            <span>تحدث مع مستشار أكاديمي</span>
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
        <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-sm text-slate-700 font-semibold">
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-thiqa-gold" />
            معلومات للمقارنة واتخاذ القرار
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0F254B]" />
            دعم في فهم القبول والتأشيرة
          </span>
        </div>
        </div>

        <aside className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-[#0F254B] bg-[#0F254B] p-6 text-white shadow-xl shadow-[#0F254B]/15 sm:p-8">
          <div className="absolute -end-20 -top-24 h-64 w-64 rounded-full border border-white/10" aria-hidden="true" />
          <div className="absolute -end-10 -top-14 h-44 w-44 rounded-full border border-white/10" aria-hidden="true" />
          <div className="relative">
          <p className="text-xs font-bold text-amber-300">دليلك للدراسة بالخارج</p>
          <h2 className="mt-2 text-xl font-black leading-snug text-white sm:text-2xl">
            رحلة التقديم، خطوة بخطوة
          </h2>
          <ol className="relative mt-6 space-y-5 before:absolute before:bottom-5 before:start-4 before:top-5 before:w-px before:bg-white/20">
            {[
              ["١", "حدّد المرحلة والتخصص", "وضّح ما تريد دراسته."],
              ["٢", "قارن الخيارات", "راجع البرامج والرسوم والمتطلبات."],
              ["٣", "تحقق من أهليتك", "ناقش تفاصيل ملفك مع مستشار."],
              ["٤", "ابدأ التقديم", "جهّز مستنداتك وتابع الإجراءات."],
            ].map(([number, title, description]) => (
              <li key={number} className="relative flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-sm font-black text-amber-300">
                  {number}
                </span>
                <span>
                  <span className="block text-sm font-bold text-white">{title}</span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-slate-300">{description}</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-6 border-t border-white/15 pt-4 text-xs leading-relaxed text-slate-300">
            تختلف شروط القبول والرسوم ومواعيد التقديم حسب الجامعة والبرنامج.
          </p>
          </div>
        </aside>
      </div>
    </section>
  );
};
