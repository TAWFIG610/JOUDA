import React from "react";
import { COMPARISON_ROWS } from "../data/thiqaData";
import { ShieldCheck, CheckCircle2, XCircle, ArrowLeft, Award } from "lucide-react";

interface WhyThiqaProps {
  onOpenLeadModal: (source?: string) => void;
}

export const WhyThiqaSection: React.FC<WhyThiqaProps> = ({
  onOpenLeadModal,
}) => {
  return (
    <section
      id="why-thiqa"
      className="py-16 sm:py-24 bg-[#F8FAFC] relative border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F254B]/5 border border-[#0F254B]/15 text-[#0F254B] text-xs font-bold shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
            <span>فارق التميز مع ثقة يوني</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F254B] tracking-tight leading-tight text-balance">
            لماذا يختار الطلاب والآباء منظومة{" "}
            <span className="text-[#D97706]">ثقة يوني</span>؟
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-medium">
            مقارنة موضوعية توضح الفارق الجوهري بين التعامل التجاري العشوائي وبين الشريك الأكاديمي الدولي المعتمد.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#0F254B] p-4 text-xs font-bold text-white hidden lg:grid">
            <div className="lg:col-span-4 text-slate-200">المعيار والخدمة</div>
            <div className="lg:col-span-4 text-rose-200">
              المكاتب والوسطاء التجاريون
            </div>
            <div className="lg:col-span-4 text-[#F59E0B] flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>منظومة ثقة يوني الرسمية</span>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 p-4 sm:p-6 gap-3.5 sm:gap-4 items-center hover:bg-slate-50 transition-colors"
              >
                <div className="lg:col-span-4 font-bold text-sm sm:text-base text-[#0F172A]">
                  {row.feature}
                </div>
                <div className="lg:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-rose-800 bg-rose-50/70 p-3.5 rounded-xl border border-rose-100">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{row.traditional}</span>
                </div>
                <div className="lg:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-[#0F254B] bg-amber-500/10 p-3.5 rounded-xl border border-amber-500/20 font-bold shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span>{row.thiqa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => onOpenLeadModal("why_thiqa_cta")}
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-xl text-sm font-bold bg-[#0F254B] hover:bg-[#F59E0B] text-white transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            <span>انضم للطلاب المقبولين مع ثقة يوني الآن</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
