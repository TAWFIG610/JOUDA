import React from "react";
import { PARTNER_UNIVERSITIES } from "../data/thiqaData";
import type { PartnerUniversity } from "../types";
import { CheckCircle2, ArrowLeft, Award } from "lucide-react";

interface UniversitiesSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

interface UniversityMarqueeRowProps {
  universities: PartnerUniversity[];
  onOpenLeadModal: (source?: string) => void;
  reverse?: boolean;
}

const UniversityMarqueeRow: React.FC<UniversityMarqueeRowProps> = ({
  universities,
  onOpenLeadModal,
  reverse = false,
}) => (
  <div
    className={`universities-marquee relative w-full overflow-hidden py-2 sm:py-3 ${
      reverse ? "mt-1 sm:mt-2" : ""
    }`}
  >
    <div
      className={`${reverse ? "animate-marquee-reverse-rtl" : "animate-marquee-rtl"} flex items-center gap-3 sm:gap-5 hover:[animation-play-state:paused]`}
    >
      {[...universities, ...universities, ...universities].map((uni, index) => (
        <button
          type="button"
          key={`${uni.id}-${index}`}
          aria-label={`استفسر عن ${uni.nameAr}، ${uni.ranking}`}
          className="group flex w-44 shrink-0 cursor-pointer flex-col items-center gap-2.5 rounded-2xl border border-slate-200/90 bg-white p-3 text-center shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#F59E0B]/60 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2 sm:w-60 sm:p-5"
          onClick={() => onOpenLeadModal(`university_${uni.id}`)}
        >
          <div className="flex h-14 w-full items-center justify-center rounded-xl border border-slate-100 bg-[#F8FAFC] p-2 transition-colors group-hover:bg-white sm:h-[4.5rem]">
            {uni.logoUrl ? (
              <img
                src={uni.logoUrl}
                alt={uni.nameEn}
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <span className="text-xs font-bold text-[#0F254B]">
                {uni.shortName}
              </span>
            )}
          </div>

          <div className="w-full space-y-0.5 text-center">
            <span             className="block text-[10px] font-bold text-thiqa-gold sm:text-[11px]">
              {uni.ranking}
            </span>
            <p
              className="line-clamp-1 w-full text-center font-sans text-xs font-bold leading-snug tracking-wide text-[#0F172A] transition-colors group-hover:text-[#0F254B] sm:text-sm"
              dir="ltr"
            >
              {uni.nameEn}
            </p>
          </div>
        </button>
      ))}
    </div>
  </div>
);

export const UniversitiesSection: React.FC<UniversitiesSectionProps> = ({
  onOpenLeadModal,
}) => {
  const half = Math.ceil(PARTNER_UNIVERSITIES.length / 2);
  const row1 = PARTNER_UNIVERSITIES.slice(0, half);
  const row2 = PARTNER_UNIVERSITIES.slice(half);

  return (
    <section
      id="universities"
      className="py-14 sm:py-20 lg:py-24 bg-[#F8FAFC] relative overflow-hidden border-y border-slate-200/80"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-12">
        {/* KPI Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div className="text-center p-3.5 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <span className="text-2xl sm:text-3xl font-black font-sans text-[#0F254B] block">+35</span>
            <span className="text-xs sm:text-sm font-bold text-slate-800">جامعة ماليزية معتمدة</span>
            <span className="text-[11px] text-slate-500 block">شراكات وتمثيل مباشر</span>
          </div>
          <div className="text-center p-3.5 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <span className="text-2xl sm:text-3xl font-black font-sans text-thiqa-gold block">100%</span>
            <span className="text-xs sm:text-sm font-bold text-slate-800">متابعة تأشيرة EMGS</span>
            <span className="text-[11px] text-slate-500 block">إشراف حكومي رسمي</span>
          </div>
          <div className="text-center p-3.5 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <span className="text-2xl sm:text-3xl font-black font-sans text-[#0F254B] block">+1,500</span>
            <span className="text-xs sm:text-sm font-bold text-slate-800">طالب تم توجيههم</span>
            <span className="text-[11px] text-slate-500 block">من كافة الدول العربية</span>
          </div>
          <div className="text-center p-3.5 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <span className="text-2xl sm:text-3xl font-black font-sans text-thiqa-gold block">0$</span>
            <span className="text-xs sm:text-sm font-bold text-slate-800">رسوم الاستشارة والتقديم</span>
            <span className="text-[11px] text-slate-500 block">خدمة مجانية بالكامل</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F254B]/5 border border-[#0F254B]/15 text-[#0F254B] text-xs font-bold shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>شراكات وتمثيل رسمي معتمد</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F254B] tracking-tight leading-tight text-balance">
            أعرق الجامعات الحكومية والخاصة في ماليزيا
          </h2>

          <p className="text-xs sm:text-base text-[#64748B] leading-relaxed font-medium">
            استكشف أفضل الجامعات الماليزية وفروع الجامعات البريطانية والأسترالية العالمية، وقارن بين تخصصاتها بكل شفافية.
          </p>
        </div>
      </div>

      <UniversityMarqueeRow
        universities={row1}
        onOpenLeadModal={onOpenLeadModal}
      />
      <UniversityMarqueeRow
        universities={row2}
        onOpenLeadModal={onOpenLeadModal}
        reverse
      />

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
              className="w-full sm:w-auto min-h-[44px] flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl text-xs sm:text-sm font-bold bg-thiqa-gold hover:bg-thiqa-gold-hover text-white shadow-lg transition-all duration-200 cursor-pointer"
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
