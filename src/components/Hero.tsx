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
      className="relative flex items-center justify-center pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 bg-white border-b border-slate-200/80 overflow-hidden"
    >
      {/* Subtle Radial Glow in background */}
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-[1.15fr_0.85fr] items-center gap-10 lg:gap-16">
        <div className="text-center lg:text-start space-y-6 sm:space-y-7">
        {/* Top Focused Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F254B]/5 border border-[#0F254B]/15 text-[#0F254B] text-xs sm:text-sm font-bold shadow-2xs">
          <ShieldCheck className="w-4 h-4 text-[#D97706]" />
          <span>إرشاد أكاديمي للطلاب الراغبين بالدراسة في ماليزيا</span>
        </div>

        {/* Big Bold Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F254B] leading-[1.2] tracking-tight max-w-3xl mx-auto lg:mx-0 text-balance">
          خطوتك للدراسة في ماليزيا{" "}
          <span className="text-[#D97706] block">
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
            className="flex items-center justify-center gap-3 px-8 py-4 min-h-[52px] rounded-xl text-base sm:text-lg font-bold bg-[#F59E0B] hover:bg-[#D97706] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2"
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
            <CheckCircle2 className="w-4 h-4 text-[#D97706]" />
            معلومات للمقارنة واتخاذ القرار
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0F254B]" />
            دعم في فهم القبول والتأشيرة
          </span>
        </div>
        </div>

        <aside className="relative mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-[#F8FAFC] p-5 sm:p-7 shadow-sm">
          <div className="absolute inset-x-8 top-0 h-1 rounded-b-full bg-gradient-to-l from-[#F59E0B] to-[#0F254B]" />
          <p className="text-xs font-bold text-[#D97706]">ابدأ من هنا</p>
          <h2 className="mt-2 text-xl sm:text-2xl font-black text-[#0F254B]">
            رحلة التقديم، خطوة بخطوة
          </h2>
          <ol className="mt-5 space-y-4">
            {[
              ["١", "حدّد المرحلة والتخصص", "وضّح ما تريد دراسته."],
              ["٢", "قارن الخيارات", "راجع البرامج والرسوم والمتطلبات."],
              ["٣", "تحقق من أهليتك", "ناقش تفاصيل ملفك مع مستشار."],
              ["٤", "ابدأ التقديم", "جهّز مستنداتك وتابع الإجراءات."],
            ].map(([number, title, description]) => (
              <li key={number} className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-black text-[#0F254B] border border-slate-200">
                  {number}
                </span>
                <span>
                  <span className="block text-sm font-bold text-slate-900">{title}</span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-slate-600">{description}</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-5 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500">
            تختلف شروط القبول والرسوم ومواعيد التقديم حسب الجامعة والبرنامج.
          </p>
        </aside>
      </div>
    </section>
  );
};
