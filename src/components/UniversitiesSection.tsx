import React from "react";
import { PARTNER_UNIVERSITIES } from "../data/thiqaData";
import type { PartnerUniversity } from "../types";
import { SectionHeader } from "./ui/SectionHeader";
import { useLang } from "../i18n/LanguageContext";

interface UniversitiesSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

const TEXT = {
  ar: {
    title: "الجامعات التي نقدّم إليها",
    description: "اضغط على أي جامعة لتسألنا عن برامجها ورسومها ومواعيد القبول القادمة.",
    askAbout: "اسأل عن",
    notListed: "جامعتك غير موجودة في القائمة؟",
    askUs: "اسألنا عنها",
  },
  en: {
    title: "Universities we apply to",
    description: "Tap any university to ask us about its programs, fees and next intakes.",
    askAbout: "Ask about",
    notListed: "Your university isn't on the list?",
    askUs: "Ask us about it",
  },
};

interface MarqueeRowProps {
  universities: PartnerUniversity[];
  onOpenLeadModal: (source?: string) => void;
  reverse?: boolean;
}

/** One moving row; items are repeated three times for a seamless loop. */
const MarqueeRow: React.FC<MarqueeRowProps> = ({ universities, onOpenLeadModal, reverse = false }) => {
  const { lang } = useLang();
  return (
    <div className="universities-marquee marquee-fade w-full overflow-hidden py-2">
      <ul className={`${reverse ? "animate-marquee-reverse-rtl" : "animate-marquee-rtl"} gap-3 sm:gap-4`}>
        {[...universities, ...universities, ...universities].map((uni, index) => {
          const isCopy = index >= universities.length;
          return (
            <li key={`${uni.id}-${index}`} aria-hidden={isCopy || undefined} className="shrink-0">
              <button
                type="button"
                tabIndex={isCopy ? -1 : 0}
                aria-label={`${TEXT[lang].askAbout} ${lang === "ar" ? uni.nameAr : uni.nameEn}`}
                onClick={() => onOpenLeadModal(`university_${uni.id}`)}
                className="flex w-44 flex-col items-center gap-3 rounded-2xl border border-line bg-white p-4 text-center transition-colors hover:border-brand-500 sm:w-56 sm:p-5"
              >
                <span className="flex h-14 w-full items-center justify-center sm:h-16">
                  {uni.logoUrl ? (
                    <img src={uni.logoUrl} alt="" className="max-h-full max-w-full object-contain" loading="lazy" />
                  ) : (
                    <span className="font-latin text-sm font-bold text-brand-800">{uni.shortName}</span>
                  )}
                </span>
                <span className="w-full space-y-0.5">
                  {lang === "ar" && <span className="block truncate text-sm font-bold text-ink">{uni.nameAr}</span>}
                  <span
                    className={`block truncate font-latin ${lang === "ar" ? "text-xs text-slate-500" : "text-sm font-bold text-ink"}`}
                    dir="ltr"
                  >
                    {uni.nameEn}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const UniversitiesSection: React.FC<UniversitiesSectionProps> = ({ onOpenLeadModal }) => {
  const { lang } = useLang();
  const text = TEXT[lang];
  const half = Math.ceil(PARTNER_UNIVERSITIES.length / 2);

  return (
    <section id="universities" className="overflow-hidden bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title={text.title} description={text.description} />
      </div>

      <MarqueeRow universities={PARTNER_UNIVERSITIES.slice(0, half)} onOpenLeadModal={onOpenLeadModal} />
      <MarqueeRow universities={PARTNER_UNIVERSITIES.slice(half)} onOpenLeadModal={onOpenLeadModal} reverse />

      <p className="mt-8 px-4 text-center text-base text-muted">
        {text.notListed}{" "}
        <button type="button" onClick={() => onOpenLeadModal("universities_other")} className="text-link">
          {text.askUs}
        </button>
      </p>
    </section>
  );
};
