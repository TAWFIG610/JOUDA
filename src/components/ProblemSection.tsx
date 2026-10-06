import React from "react";
import { CORE_PROBLEMS } from "../data/thiqaData";
import { HelpCircle, AlertCircle, ArrowDown, CheckCircle2 } from "lucide-react";

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F254B]/5 border border-[#0F254B]/15 text-[#0F254B] text-xs font-bold shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>بداية واضحة ومدروسة بدون حيرة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F254B] tracking-tight">
            الدراسة في الخارج استثمار مستقبلي كبير...{" "}
            <span className="text-[#D97706]">
              لكن الخطوات الأولى قد تبدو معقدة
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            يواجه أغلب الطلاب تضارب المعلومات حول متطلبات القبول والفيزا والرسوم؛ إليك كيف تجعل THIQA UNI المسار سهلاً وموثوقاً:
          </p>
        </div>

        {/* 4 Crisp Problem & Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {CORE_PROBLEMS.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#F59E0B]/40 transition-all duration-200 space-y-4 shadow-xs"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                  {item.q}
                </h3>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm text-[#0F254B] leading-relaxed flex items-start gap-2.5 font-medium shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>{item.solution}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transition Bridge to Solution */}
        <div className="text-center pt-2">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold">
            <span>اكتشف كيف تقدم لك THIQA UNI الدعم الأكاديمي الشامل</span>
            <ArrowDown className="w-4 h-4 text-[#F59E0B] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
