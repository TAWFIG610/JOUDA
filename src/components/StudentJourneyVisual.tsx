import React, { useState } from "react";
import { DISCOVER_TO_APPLY_STEPS } from "../data/thiqaData";
import { ArrowLeft, CheckCircle2, Compass, ShieldCheck, FileCheck, PlaneTakeoff, Search } from "lucide-react";

interface StudentJourneyVisualProps {
  onOpenLeadModal: (source?: string) => void;
}

export const StudentJourneyVisual: React.FC<StudentJourneyVisualProps> = ({
  onOpenLeadModal,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [Search, Compass, FileCheck, PlaneTakeoff];

  return (
    <section
      id="journey"
      className="relative border-t border-slate-200/80 bg-white py-14 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center sm:mb-14">
          <div className="section-eyebrow">
            <Compass className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>المسار المتكامل في 4 مراحل</span>
          </div>

          <h2 className="section-title">
            رحلة الطالب مع ثقة يوني: من الاكتشاف حتى الوصول
          </h2>

          <p className="section-description">
            استكشف ← قارن ← اختر ← قدّم. خطوات واضحة ومدروسة تضمن لك قبولاً رسمياً وتأشيرة دراسية دون أي ارتباك.
          </p>
        </div>

        {/* Mobile Horizontal Pill Selector (< sm) */}
        <div className="flex sm:hidden overflow-x-auto gap-2 pb-3 mb-4 no-scrollbar -mx-4 px-4">
          {DISCOVER_TO_APPLY_STEPS.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={`mobile-tab-${idx}`}
                onClick={() => setActiveStep(idx)}
                aria-pressed={isSelected}
                className={`flex-none inline-flex items-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-[#0F254B] text-white border-[#0F254B] shadow-xs"
                    : "bg-[#F8FAFC] text-slate-700 border-slate-200"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black ${
                    isSelected ? "bg-amber-400 text-[#0F254B]" : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {step.number}
                </span>
                <span>{step.phase}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop / Tablet Cards Grid (>= sm) */}
        <div className="mb-8 hidden grid-cols-2 gap-4 sm:grid lg:grid-cols-4">
          {DISCOVER_TO_APPLY_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || Compass;
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                aria-pressed={isSelected}
                className={`flex min-h-52 flex-col justify-between rounded-2xl border p-5 text-start transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2 ${
                  isSelected
                    ? "bg-[#0F254B] text-white border-[#0F254B] shadow-xl sm:-translate-y-1"
                    : "bg-[#F8FAFC] text-slate-800 border-slate-200 hover:border-[#F59E0B]/50 hover:bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-black font-sans px-2.5 py-1 rounded-lg ${
                        isSelected ? "bg-white/10 text-[#F59E0B]" : "bg-slate-200/60 text-slate-700"
                      }`}
                    >
                      المرحلة {step.number}
                    </span>
                    <Icon className={`w-5 h-5 ${isSelected ? "text-[#F59E0B]" : "text-[#0F254B]"}`} />
                  </div>

                  <span
                    className={`text-[11px] font-bold block mb-1 ${
                      isSelected ? "text-amber-400" : "text-[#D97706]"
                    }`}
                  >
                    {step.phase}
                  </span>
                  <h3 className="text-base font-bold mb-2">{step.titleAr}</h3>
                </div>

                <div
                  className={`text-[11px] font-bold mt-4 pt-3 border-t ${
                    isSelected ? "border-white/15 text-slate-200" : "border-slate-200 text-[#0F254B]"
                  }`}
                >
                  {step.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Spotlight Box */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[#F8FAFC] p-5 shadow-sm sm:p-8 lg:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-center md:text-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0F254B]/5 border border-[#0F254B]/10 text-[#0F254B] text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706]" />
                <span>المرحلة {DISCOVER_TO_APPLY_STEPS[activeStep].number}: {DISCOVER_TO_APPLY_STEPS[activeStep].phase}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#0F254B]">
                {DISCOVER_TO_APPLY_STEPS[activeStep].titleAr}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                {DISCOVER_TO_APPLY_STEPS[activeStep].desc}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 justify-center md:justify-start text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                  <span>إرشاد ومتابعة خلال الإجراءات</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-[#0F254B]" />
                  <span>مرافقة شاملة حتى دخول الحرم الجامعي</span>
                </span>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <button
                onClick={() => onOpenLeadModal(`journey_step_${activeStep + 1}`)}
                className="flex min-h-12 w-full items-center justify-center gap-2.5 whitespace-normal rounded-xl bg-[#F59E0B] px-6 py-4 text-sm font-bold text-white shadow-md shadow-amber-500/20 transition-colors hover:bg-[#D97706] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2 md:w-auto md:whitespace-nowrap"
              >
                <span>ابدأ هذه الخطوة الآن مع ثقة يوني</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
