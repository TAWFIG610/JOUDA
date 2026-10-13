import React, { useRef } from "react";
import { DISCOVER_TO_APPLY_STEPS } from "../data/thiqaData";
import { ArrowLeft } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { useElementProgress } from "../hooks/useScroll";

interface StudentJourneyVisualProps {
  onOpenLeadModal: (source?: string) => void;
}

const LAST = DISCOVER_TO_APPLY_STEPS.length - 1;

export const StudentJourneyVisual: React.FC<StudentJourneyVisualProps> = ({ onOpenLeadModal }) => {
  const listRef = useRef<HTMLOListElement>(null);
  const progress = useElementProgress(listRef);
  const reachedIndex = Math.min(LAST, Math.floor(progress * (LAST + 0.999)));

  return (
    <section id="journey" className="bg-paper py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="كيف نعمل معك، خطوة بخطوة"
          description="من أول رسالة على واتساب حتى أول يوم دراسة. تختلف المدد والشروط حسب الجامعة والبرنامج."
        />

        <ol ref={listRef} className="relative grid gap-0 lg:grid-cols-4 lg:gap-6">
          {/* Progress line: vertical on phones, horizontal on desktop */}
          <span className="absolute bottom-6 start-[19px] top-6 w-0.5 bg-line lg:hidden" aria-hidden="true">
            <span className="block h-full w-full origin-top bg-gold-500" style={{ transform: `scaleY(${progress})` }} />
          </span>
          <span className="absolute inset-x-[12.5%] top-5 hidden h-0.5 bg-line lg:block" aria-hidden="true">
            <span className="block h-full w-full origin-right bg-gold-500" style={{ transform: `scaleX(${progress})` }} />
          </span>

          {DISCOVER_TO_APPLY_STEPS.map((step, idx) => {
            const reached = idx <= reachedIndex;
            return (
              <li key={step.number} className="relative flex gap-4 pb-8 last:pb-0 lg:flex-col lg:items-center lg:pb-0 lg:text-center">
                <span
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-latin text-base font-bold transition-colors duration-300 ${
                    reached ? "border-gold-500 bg-gold-500 text-ink" : "border-line bg-white text-slate-500"
                  }`}
                >
                  {step.number}
                </span>
                <span className="block pt-1.5 lg:pt-0">
                  <span className="block text-lg font-bold text-ink">{step.titleAr}</span>
                  <span className="mt-1.5 block max-w-sm text-base leading-relaxed text-muted">{step.desc}</span>
                </span>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button type="button" onClick={() => onOpenLeadModal("journey_cta")} className="btn btn-primary w-full sm:w-auto">
            ابدأ بالخطوة الأولى
            <ArrowLeft className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
