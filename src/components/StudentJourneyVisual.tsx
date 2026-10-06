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
      className="py-16 sm:py-24 bg-white relative border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F254B]/5 border border-[#0F254B]/15 text-[#0F254B] text-xs font-bold shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>THE 4-STAGE EXPERIENCE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F254B] tracking-tight leading-tight text-balance">
            رحلة الطالب مع THIQA UNI: من الاكتشاف حتى الوصول
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-medium">
            Discover → Compare → Choose → Apply. خطوات واضحة ومدروسة تضمن لك قبولاً رسمياً وتأشيرة دراسية دون أي ارتباك.
          </p>
        </div>

        {/* 4 Steps Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {DISCOVER_TO_APPLY_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || Compass;
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl border text-start transition-all duration-300 cursor-pointer flex flex-col justify-between ${
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
                      STEP {step.number}
                    </span>
                    <Icon className={`w-5 h-5 ${isSelected ? "text-[#F59E0B]" : "text-[#0F254B]"}`} />
                  </div>

                  <span
                    className={`text-[11px] font-sans font-bold uppercase tracking-wider block mb-1 ${
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
        <div className="rounded-3xl bg-[#F8FAFC] border border-slate-200 p-6 sm:p-10 shadow-sm relative overflow-hidden">
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
                  <span>تنسيق ومتابعة معتمدة 100%</span>
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
                className="w-full md:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold bg-[#F59E0B] hover:bg-[#D97706] text-white shadow-lg shadow-amber-500/25 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>ابدأ هذه الخطوة الآن مع THIQA UNI</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
