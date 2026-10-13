import React, { useRef } from "react";
import { JOURNEY_STEPS } from "../data/thiqaData";
import { ArrowLeft } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { useElementProgress } from "../hooks/useScroll";
import { useLang } from "../i18n/LanguageContext";

interface JourneySectionProps {
  onOpenLeadModal: (source?: string) => void;
}

const LAST = JOURNEY_STEPS.length - 1;

const TEXT = {
  ar: {
    title: "كيف نعمل معك، خطوة بخطوة",
    description: "من أول رسالة على واتساب حتى أول يوم دراسة. تختلف المدد والشروط حسب الجامعة والبرنامج.",
    cta: "ابدأ بالخطوة الأولى",
  },
  en: {
    title: "How we work with you, step by step",
    description: "From your first WhatsApp message to your first day of classes. Timings and requirements vary by university and program.",
    cta: "Start with step one",
  },
};

export const JourneySection: React.FC<JourneySectionProps> = ({ onOpenLeadModal }) => {
  const { lang, t } = useLang();
  const text = TEXT[lang];
  const listRef = useRef<HTMLOListElement>(null);
  const progress = useElementProgress(listRef);
  const reachedIndex = Math.min(LAST, Math.floor(progress * (LAST + 0.999)));

  return (
    <section id="journey" className="surface-dark section">
      <div className="page-container">
        <SectionHeader tone="dark" title={text.title} description={text.description} />

        <ol ref={listRef} className="relative grid gap-0 lg:grid-cols-4 lg:gap-6">
          {/* Progress line: vertical on phones, horizontal on desktop */}
          <span className="absolute bottom-6 start-[21px] top-6 w-0.5 bg-white/15 lg:hidden" aria-hidden="true">
            <span className="block h-full w-full origin-top bg-gold-500" style={{ transform: `scaleY(${progress})` }} />
          </span>
          <span className="absolute inset-x-[12.5%] top-[22px] hidden h-0.5 bg-white/15 lg:block" aria-hidden="true">
            <span
              className="block h-full w-full bg-gold-500 ltr:origin-left rtl:origin-right"
              style={{ transform: `scaleX(${progress})` }}
            />
          </span>

          {JOURNEY_STEPS.map((step, idx) => {
            const reached = idx <= reachedIndex;
            return (
              <li key={step.number} className="relative flex gap-4 pb-8 last:pb-0 lg:flex-col lg:items-center lg:pb-0 lg:text-center">
                <span
                  className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 font-latin text-base font-bold transition-colors duration-300 ${
                    reached
                      ? "border-gold-400 bg-gradient-to-b from-gold-400 to-gold-500 text-ink"
                      : "border-white/25 bg-brand-900 text-brand-100"
                  }`}
                >
                  {step.number}
                </span>
                <span className="block pt-1.5 lg:pt-0">
                  <span className="block text-lg font-bold text-white">{t(step.title)}</span>
                  <span className="mt-1.5 block max-w-sm text-base leading-relaxed text-brand-100">{t(step.desc)}</span>
                </span>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button type="button" onClick={() => onOpenLeadModal("journey_cta")} className="btn btn-primary w-full focus-visible:ring-offset-brand-900 sm:w-auto">
            {text.cta}
            <ArrowLeft className="flip-ltr h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
