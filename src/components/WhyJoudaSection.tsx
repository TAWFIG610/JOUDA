import React from "react";
import { COMPARISON_ROWS } from "../data/joudaData";
import { ShieldCheck, CheckCircle2, XCircle, ArrowLeft } from "lucide-react";

interface WhyJoudaProps {
  onOpenLeadModal: (source?: string) => void;
}

export const WhyJoudaSection: React.FC<WhyJoudaProps> = ({
  onOpenLeadModal,
}) => {
  return (
    <section
      id="why-jouda"
      className="py-14 sm:py-20 lg:py-28 bg-white relative border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 text-xs font-bold shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>الفرق الذي يصنعه فريق جودة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight text-balance">
            لماذا يختار الطلاب{" "}
            <span className="text-gradient-emerald">منظومة جَـوْدَة؟</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            مقارنة واضحة توضح الفارق الجوهري بين التعامل مع وكيل عشوائي وبين
            العمل مع منظومة جودة الاحترافية المعتمدة.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xl mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-slate-50/90 border-b border-slate-200 p-4 text-xs font-bold text-slate-700 hidden lg:grid">
            <div className="lg:col-span-4">المعيار والخدمة</div>
            <div className="lg:col-span-4 text-rose-700">
              الوكيل أو المكتب التقليدي
            </div>
            <div className="lg:col-span-4 text-emerald-700">
              منظومة جَـوْدَة (JOUDA)
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 p-4 sm:p-6 gap-3.5 sm:gap-4 items-center hover:bg-slate-50/50 transition-colors"
              >
                <div className="lg:col-span-4 font-bold text-sm sm:text-base text-slate-900">
                  {row.feature}
                </div>
                <div className="lg:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-rose-800 bg-rose-50/80 p-3 rounded-2xl border border-rose-100/90">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{row.traditional}</span>
                </div>
                <div className="lg:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-emerald-900 bg-emerald-50/80 p-3 rounded-2xl border border-emerald-200/90 font-bold shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{row.jouda}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => onOpenLeadModal("why_jouda_cta")}
            className="inline-flex items-center gap-2.5 px-9 py-4 min-h-[48px] rounded-2xl text-sm font-bold bg-gradient-to-l from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 transition-all duration-200 shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <span>انضم للطلاب المسجلين مع جودة الآن</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
