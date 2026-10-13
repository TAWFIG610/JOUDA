import React, { useRef, useState } from "react";
import { DISCOVER_TO_APPLY_STEPS } from "../data/thiqaData";
import {
  ArrowLeft,
  CheckCircle2,
  Compass,
  FileCheck,
  Plane,
  PlaneTakeoff,
  Search,
  ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";
import { useElementProgress } from "../hooks/useScroll";

interface StudentJourneyVisualProps {
  onOpenLeadModal: (source?: string) => void;
}

const STEP_ICONS = [Search, Compass, FileCheck, PlaneTakeoff];
const LAST = DISCOVER_TO_APPLY_STEPS.length - 1;

export const StudentJourneyVisual: React.FC<StudentJourneyVisualProps> = ({ onOpenLeadModal }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const progress = useElementProgress(trackRef);
  const reachedIndex = Math.min(LAST, Math.floor(progress * (LAST + 0.999)));
  // A clicked step stays selected until scrolling reaches a different step.
  const [picked, setPicked] = useState<{ step: number; at: number } | null>(null);
  const activeStep = picked && picked.at === reachedIndex ? picked.step : reachedIndex;
  const step = DISCOVER_TO_APPLY_STEPS[activeStep];

  return (
    <section id="journey" className="relative overflow-hidden bg-paper py-16 sm:py-24">
      <div className="bg-notebook absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={Compass}
          eyebrow="المسار المتكامل في 4 مراحل"
          title={
            <>
              رحلتك مع ثقة يوني <span className="text-gradient-gold block">من الاكتشاف حتى الوصول</span>
            </>
          }
          description="استكشف ← قارن ← اختر ← قدّم. خطوات واضحة ومدروسة نرافقك فيها حتى خطاب القبول وتأشيرة الدراسة."
        />

        <div ref={trackRef} className="relative">
          {/* Desktop: horizontal flight path */}
          <div className="relative mb-6 hidden h-16 lg:block" aria-hidden="true">
            <div className="absolute inset-x-[12.5%] top-1/2 h-0 border-t-2 border-dashed border-brand-200" />
            <div
              className="absolute inset-x-[12.5%] top-1/2 h-1 -translate-y-1/2 origin-right rounded-full bg-gradient-to-l from-gold-400 to-gold-600 transition-transform duration-200"
              style={{ transform: `translateY(-50%) scaleX(${progress})` }}
            />
            <div
              className="absolute top-1/2 transition-[inset-inline-start] duration-200"
              style={{ insetInlineStart: `calc(12.5% + ${progress * 75}% - 20px)`, transform: "translateY(-50%)" }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gold-600 shadow-lg ring-4 ring-gold-100">
                <Plane className="h-5 w-5 -scale-x-100" />
              </span>
            </div>
          </div>

          <div className="relative grid gap-4 lg:grid-cols-4">
            {DISCOVER_TO_APPLY_STEPS.map((item, idx) => {
              const Icon = STEP_ICONS[idx] ?? Compass;
              const reached = idx <= reachedIndex;
              const isActive = idx === activeStep;
              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => setPicked({ step: idx, at: reachedIndex })}
                  aria-pressed={isActive}
                  className={`group relative flex items-start gap-4 rounded-3xl border p-4 text-start transition-all duration-300 lg:min-h-56 lg:flex-col lg:p-6 ${
                    isActive
                      ? "border-brand-800 bg-gradient-to-br from-brand-800 to-brand-900 text-white shadow-[0_24px_48px_-24px_rgb(10_24_56/0.6)] lg:-translate-y-2"
                      : "border-line bg-white text-ink hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg"
                  }`}
                >
                  <span
                    className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-all duration-500 ${
                      reached
                        ? "bg-gradient-to-br from-gold-300 to-gold-500 text-ink shadow-[0_8px_20px_-8px_rgb(245_158_11/0.8)]"
                        : "bg-brand-50 text-brand-300 ring-1 ring-brand-100"
                    } ${isActive ? "scale-110" : ""}`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>

                  <span className="block flex-1">
                    <span className={`flex items-center gap-2 text-xs font-bold ${isActive ? "text-gold-300" : "text-gold-700"}`}>
                      <span className="font-latin">{item.number}</span>
                      <span className="h-px w-4 bg-current opacity-50" aria-hidden="true" />
                      <span>{item.phase}</span>
                      {reached && !isActive && <CheckCircle2 className="h-3.5 w-3.5 text-success-600" aria-label="تمت" />}
                    </span>
                    <span className="mt-1.5 block text-base font-bold leading-snug">{item.titleAr}</span>
                    <span className={`mt-3 block border-t pt-3 text-xs font-bold ${isActive ? "border-white/15 text-brand-100" : "border-line text-muted"}`}>
                      {item.badge}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Spotlight for the active stage */}
        <Reveal className="mt-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-6 shadow-[0_20px_50px_-30px_rgb(10_24_56/0.35)] sm:p-8 lg:p-10">
            <div className="absolute -end-10 -top-10 h-40 w-40 rounded-full bg-gold-100/60 blur-2xl" aria-hidden="true" />
            <div key={activeStep} className="relative flex animate-fade-up flex-col items-center justify-between gap-8 md:flex-row" aria-live="polite">
              <div className="max-w-2xl space-y-4 text-center md:text-start">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold-600" />
                  <span>
                    المرحلة <span className="font-latin">{step.number}</span>: {step.phase}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-ink sm:text-3xl">{step.titleAr}</h3>
                <p className="text-base leading-relaxed text-muted">{step.desc}</p>
                <div className="flex flex-wrap justify-center gap-2.5 pt-1 text-xs font-bold text-slate-700 md:justify-start">
                  <span className="flex items-center gap-1.5 rounded-full bg-success-50 px-3 py-1.5 text-success-700">
                    <CheckCircle2 className="h-4 w-4" />
                    إرشاد ومتابعة خلال الإجراءات
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-brand-700">
                    <ShieldCheck className="h-4 w-4" />
                    مرافقة حتى دخول الحرم الجامعي
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenLeadModal(`journey_step_${activeStep + 1}`)}
                className="btn btn-primary w-full shrink-0 md:w-auto"
              >
                <span>ابدأ هذه الخطوة الآن</span>
                <ArrowLeft className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
