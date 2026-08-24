import React from "react";
import { CORE_PROBLEMS } from "../data/joudaData";
import { HelpCircle, AlertCircle, ArrowDown, Sparkles } from "lucide-react";

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>بداية واضحة بدون حيرة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            الدراسة في ماليزيا فرصة عظيمة...{" "}
            <span className="text-gradient-emerald">
              لكن البداية قد تكون مربكة
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            معظم الطلاب يواجهون نفس المخاوف عند اتخاذ قرار الدراسة بالخارج،
            وإليك كيف نحول كل قلق إلى خطوة سهلة ومضمونة:
          </p>
        </div>

        {/* 4 Crisp Problem & Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {CORE_PROBLEMS.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-6 rounded-3xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 transition-all duration-200 space-y-4 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {item.q}
                </h3>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-xs sm:text-sm text-emerald-900 leading-relaxed flex items-start gap-2.5 font-medium">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item.solution}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transition Bridge to Solution */}
        <div className="text-center pt-2">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
            <span>اكتشف كيف ننظم لك كل هذه الخطوات معاً</span>
            <ArrowDown className="w-4 h-4 text-emerald-600 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
