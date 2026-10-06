import React from "react";
import { PARTNER_UNIVERSITIES } from "../data/thiqaData";
import { CheckCircle2, ArrowLeft, Award } from "lucide-react";

interface UniversitiesSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

export const UniversitiesSection: React.FC<UniversitiesSectionProps> = ({
  onOpenLeadModal,
}) => {
  const half = Math.ceil(PARTNER_UNIVERSITIES.length / 2);
  const row1 = PARTNER_UNIVERSITIES.slice(0, half);
  const row2 = PARTNER_UNIVERSITIES.slice(half);

  const list1 = [...row1, ...row1, ...row1];
  const list2 = [...row2, ...row2, ...row2];

  return (
    <section
      id="universities"
      className="py-14 sm:py-20 lg:py-24 bg-[#F8FAFC] relative overflow-hidden border-y border-slate-200/80"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-12">
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F254B]/5 border border-[#0F254B]/15 text-[#0F254B] text-xs font-bold shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>شراكات وتنسيق رسمي معتمد</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F254B] tracking-tight leading-tight text-balance">
            الجامعات العالمية والماليزية الشريكة
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-medium">
            تمثيل رسمي معتمد لأعرق الجامعات الحكومية والخاصة وفروع الجامعات الأسترالية والبريطانية.
          </p>
        </div>
      </div>

      {/* Row 1: Forward Marquee */}
      <div className="relative w-full overflow-hidden py-2 sm:py-3">
        <div className="animate-marquee-rtl flex items-center gap-3 sm:gap-5 hover:[animation-play-state:paused]">
          {list1.map((uni, idx) => (
            <div
              key={`${uni.id}-row1-${idx}`}
              className="w-44 sm:w-60 shrink-0 p-3 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-center gap-2.5 text-center cursor-pointer hover:border-[#F59E0B]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              onClick={() => onOpenLeadModal(`university_${uni.id}`)}
            >
              <div className="w-full h-14 sm:h-18 rounded-xl bg-[#F8FAFC] border border-slate-100 flex items-center justify-center p-2 group-hover:bg-white transition-colors">
                {uni.logoUrl ? (
                  <img
                    src={uni.logoUrl}
                    alt={uni.nameEn}
                    className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                ) : (
                  <span className="font-bold text-xs text-[#0F254B]">{uni.shortName}</span>
                )}
              </div>

              <div className="w-full text-center space-y-0.5">
                <span className="text-[10px] sm:text-[11px] font-bold text-[#D97706] block">
                  {uni.ranking}
                </span>
                <p
                  className="text-xs sm:text-sm font-bold text-[#0F172A] font-sans tracking-wide leading-snug group-hover:text-[#0F254B] transition-colors line-clamp-1 w-full text-center"
                  dir="ltr"
                >
                  {uni.nameEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Reverse Marquee */}
      <div className="relative w-full overflow-hidden py-2 sm:py-3 mt-1 sm:mt-2">
        <div className="animate-marquee-reverse-rtl flex items-center gap-3 sm:gap-5 hover:[animation-play-state:paused]">
          {list2.map((uni, idx) => (
            <div
              key={`${uni.id}-row2-${idx}`}
              className="w-44 sm:w-60 shrink-0 p-3 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-center gap-2.5 text-center cursor-pointer hover:border-[#F59E0B]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              onClick={() => onOpenLeadModal(`university_${uni.id}`)}
            >
              <div className="w-full h-14 sm:h-18 rounded-xl bg-[#F8FAFC] border border-slate-100 flex items-center justify-center p-2 group-hover:bg-white transition-colors">
                {uni.logoUrl ? (
                  <img
                    src={uni.logoUrl}
                    alt={uni.nameEn}
                    className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                ) : (
                  <span className="font-bold text-xs text-[#0F254B]">{uni.shortName}</span>
                )}
              </div>

              <div className="w-full text-center space-y-0.5">
                <span className="text-[10px] sm:text-[11px] font-bold text-[#D97706] block">
                  {uni.ranking}
                </span>
                <p
                  className="text-xs sm:text-sm font-bold text-[#0F172A] font-sans tracking-wide leading-snug group-hover:text-[#0F254B] transition-colors line-clamp-1 w-full text-center"
                  dir="ltr"
                >
                  {uni.nameEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Box Below Marquee */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        <div className="rounded-2xl bg-[#0F254B] p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start border border-[#F59E0B]/30">
          <div className="space-y-1.5">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0" />
              <span>شريك معتمد مع أكثر من 35 جامعة عالمية وماليزية مرموقة</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              تواصل مع مستشاري ثقة يوني وسنساعدك في اختيار الجامعة الأنسب لطموحك ومعدلك الأكاديمي مجاناً.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenLeadModal("universities_ticker_cta")}
              className="w-full sm:w-auto min-h-[44px] flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#F59E0B] hover:bg-[#D97706] text-white shadow-lg transition-all duration-200 cursor-pointer"
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
