import React from "react";
import { PARTNER_UNIVERSITIES } from "../data/thiqaData";
import type { PartnerUniversity } from "../types";
import { ArrowLeft, Award, Landmark, MessageCircleQuestion, Users, WalletCards, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";
import { CountUp } from "./ui/CountUp";

interface UniversitiesSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

const KPIS = [
  { icon: Landmark, value: "+35", label: "جامعة ماليزية معتمدة", hint: "شراكات وتمثيل مباشر", tone: "brand" },
  { icon: ShieldCheck, value: "100%", label: "متابعة تأشيرة EMGS", hint: "إشراف حكومي رسمي", tone: "gold" },
  { icon: Users, value: "+1,500", label: "طالب تم توجيههم", hint: "من كافة الدول العربية", tone: "brand" },
  { icon: WalletCards, value: "0$", label: "رسوم الاستشارة والتقديم", hint: "خدمة مجانية بالكامل", tone: "gold" },
] as const;

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
  <div className="universities-marquee marquee-fade relative w-full overflow-hidden py-3">
    <div className={`${reverse ? "animate-marquee-reverse-rtl" : "animate-marquee-rtl"} flex items-stretch gap-4 sm:gap-5`}>
      {[...universities, ...universities, ...universities].map((uni, index) => (
        <button
          type="button"
          key={`${uni.id}-${index}`}
          aria-label={`استفسر عن ${uni.nameAr}، ${uni.ranking}`}
          tabIndex={index < universities.length ? 0 : -1}
          aria-hidden={index >= universities.length ? true : undefined}
          className="group relative flex w-48 shrink-0 flex-col items-center gap-3 overflow-hidden rounded-3xl border border-line bg-white p-4 text-center shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-300 hover:shadow-[0_20px_40px_-20px_rgb(10_24_56/0.3)] sm:w-60 sm:p-5"
          onClick={() => onOpenLeadModal(`university_${uni.id}`)}
        >
          <div className="flex h-16 w-full items-center justify-center rounded-2xl bg-paper p-2.5 transition-colors group-hover:bg-white sm:h-20">
            {uni.logoUrl ? (
              <img
                src={uni.logoUrl}
                alt={uni.nameEn}
                className="max-h-full max-w-full object-contain opacity-80 grayscale transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                loading="lazy"
              />
            ) : (
              <span className="text-xs font-bold text-brand-800">{uni.shortName}</span>
            )}
          </div>

          <div className="w-full space-y-1">
            <span className="inline-block rounded-full bg-gold-50 px-2 py-0.5 text-[11px] font-bold text-gold-700">
              {uni.ranking}
            </span>
            <p className="line-clamp-1 font-latin text-sm font-bold text-ink" dir="ltr">
              {uni.nameEn}
            </p>
          </div>

          {/* Quick action revealed on hover/focus */}
          <span className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-1.5 bg-brand-800 py-2 text-xs font-bold text-white transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
            <MessageCircleQuestion className="h-3.5 w-3.5 text-gold-300" aria-hidden="true" />
            اسأل عن هذه الجامعة
          </span>
        </button>
      ))}
    </div>
  </div>
);

export const UniversitiesSection: React.FC<UniversitiesSectionProps> = ({ onOpenLeadModal }) => {
  const half = Math.ceil(PARTNER_UNIVERSITIES.length / 2);
  const row1 = PARTNER_UNIVERSITIES.slice(0, half);
  const row2 = PARTNER_UNIVERSITIES.slice(half);

  return (
    <section id="universities" className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="bg-dots absolute inset-x-0 top-0 h-64 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />

      <div className="relative mx-auto mb-10 max-w-7xl px-4 sm:mb-12 sm:px-6 lg:px-8">
        {/* KPI counters */}
        <div className="mb-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {KPIS.map(({ icon: Icon, value, label, hint, tone }, i) => (
            <Reveal key={label} delay={i * 90}>
              <div className="group h-full rounded-3xl border border-line bg-paper p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:p-6">
                <span
                  className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-2xl ${
                    tone === "gold" ? "bg-gold-100 text-gold-700" : "bg-brand-100 text-brand-700"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <CountUp
                  value={value}
                  className={`block font-latin text-3xl font-extrabold sm:text-4xl ${
                    tone === "gold" ? "text-gold-600" : "text-brand-700"
                  }`}
                />
                <span className="mt-1 block text-sm font-bold text-ink">{label}</span>
                <span className="block text-xs text-muted">{hint}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionHeader
          className="mb-0! sm:mb-0!"
          icon={Award}
          eyebrow="شراكات وتمثيل رسمي معتمد"
          title={
            <>
              أعرق الجامعات <span className="text-gradient-gold">الحكومية والخاصة</span> في ماليزيا
            </>
          }
          description="استكشف أفضل الجامعات الماليزية وفروع الجامعات البريطانية والأسترالية العالمية، واضغط على أي جامعة للاستفسار عنها مباشرة."
        />
      </div>

      <UniversityMarqueeRow universities={row1} onOpenLeadModal={onOpenLeadModal} />
      <UniversityMarqueeRow universities={row2} onOpenLeadModal={onOpenLeadModal} reverse />

      <Reveal className="mx-auto mt-12 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-l from-brand-800 to-brand-900 p-6 text-white shadow-xl sm:p-8">
          <div className="bg-dots-light absolute inset-0" aria-hidden="true" />
          <div className="relative flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-start">
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold sm:text-xl">لم تجد جامعتك؟ لدينا أكثر من 35 خياراً معتمداً</h3>
              <p className="text-sm leading-relaxed text-brand-100/80">
                تواصل مع مستشاري ثقة يوني وسنساعدك في اختيار الجامعة الأنسب لطموحك ومعدلك الأكاديمي مجاناً.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenLeadModal("universities_ticker_cta")}
              className="btn btn-primary w-full shrink-0 sm:w-auto"
            >
              <span>استشر مجاناً الآن</span>
              <ArrowLeft className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
