import React from "react";
import { PARTNER_UNIVERSITIES } from "../data/joudaData";
import { Sparkles, CheckCircle2, ArrowLeft } from "lucide-react";

interface UniversitiesSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

export const UniversitiesSection: React.FC<UniversitiesSectionProps> = ({
  onOpenLeadModal,
}) => {
  const row1 = PARTNER_UNIVERSITIES.slice(0, 6);
  const row2 = PARTNER_UNIVERSITIES.slice(6);

  const list1 = [...row1, ...row1, ...row1];
  const list2 = [...row2, ...row2, ...row2];

  return (
    <section
      id="universities"
      className="py-14 sm:py-20 lg:py-28 bg-[#FAFCFF] relative overflow-hidden border-y border-slate-200/80"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 start-10 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 end-10 -translate-y-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-12">
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>شراكات وتنسيق رسمي معتمد</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight text-balance">
            الجامعات الماليزية التي{" "}
            <span className="text-gradient-emerald">
              نتعاقد وننسق معها مباشرة
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            نؤمن لك القبول الجامعي الرسمي من أقوى الجامعات الحكومية والخاصة
            وفروع الجامعات العالمية البريطانية والأسترالية في ماليزيا.
          </p>
        </div>
      </div>

      {/* Row 1: Forward Marquee */}
      <div className="relative w-full overflow-hidden py-3">
        <div className="animate-marquee-rtl flex items-center gap-4 hover:[animation-play-state:paused]">
          {list1.map((uni, idx) => (
            <div
              key={`${uni.id}-${idx}`}
              className="w-44 sm:w-52 shrink-0 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col items-center gap-2.5 text-center cursor-pointer hover:border-emerald-500/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              onClick={() => onOpenLeadModal(`university_${uni.id}`)}
            >
              <div
                className="w-13 h-13 rounded-full flex items-center justify-center text-white font-black text-sm shadow-md shrink-0 ring-4 ring-slate-100"
                style={{ backgroundColor: uni.accent }}
              >
                {uni.shortName}
              </div>
              <p className="text-xs font-bold text-slate-800 font-sans leading-snug">
                {uni.nameEn}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Reverse Marquee */}
      <div className="relative w-full overflow-hidden py-3 mt-1.5">
        <div className="animate-marquee-reverse-rtl flex items-center gap-4 hover:[animation-play-state:paused]">
          {list2.map((uni, idx) => (
            <div
              key={`${uni.id}-rev-${idx}`}
              className="w-44 sm:w-52 shrink-0 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col items-center gap-2.5 text-center cursor-pointer hover:border-emerald-500/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              onClick={() => onOpenLeadModal(`university_${uni.id}`)}
            >
              <div
                className="w-13 h-13 rounded-full flex items-center justify-center text-white font-black text-sm shadow-md shrink-0 ring-4 ring-slate-100"
                style={{ backgroundColor: uni.accent }}
              >
                {uni.shortName}
              </div>
              <p className="text-xs font-bold text-slate-800 font-sans leading-snug">
                {uni.nameEn}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Box Below Marquee */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 p-5 sm:p-8 text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start border border-emerald-500/30">
          <div className="space-y-1.5">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>شريك معتمد مع أكثر من 12 جامعة ماليزية مرموقة</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              تواصل معنا ونحن نجد الجامعة الأنسب لملفك ومعدلك الأكاديمي مجاناً.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenLeadModal("universities_ticker_cta")}
              className="w-full sm:w-auto min-h-[48px] flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-l from-emerald-500 to-teal-500 text-slate-950 hover:from-emerald-400 hover:to-teal-400 shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <span>استشر مجاناً الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
