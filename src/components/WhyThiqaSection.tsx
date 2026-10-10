import React from "react";
import { COMPARISON_ROWS } from "../data/thiqaData";
import { ShieldCheck, CheckCircle2, ArrowLeft, Award } from "lucide-react";

interface WhyThiqaProps {
  onOpenLeadModal: (source?: string) => void;
}

export const WhyThiqaSection: React.FC<WhyThiqaProps> = ({
  onOpenLeadModal,
}) => {
  return (
    <section
      id="why-thiqa"
      className="py-12 sm:py-20 lg:py-24 bg-[#F8FAFC] relative border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center sm:mb-14">
          <div className="section-eyebrow">
            <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
            <span>فارق التميز مع ثقة يوني</span>
          </div>

          <h2 className="section-title">
            لماذا يختار الطلاب والآباء منظومة{" "}
            <span className="text-thiqa-gold">ثقة يوني</span>؟
          </h2>

          <p className="section-description">
            نقاط عملية تساعدك على فهم الرسوم، المدد، والجهات المسؤولة قبل اختيار برنامجك.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm sm:mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#0F254B] p-4 text-xs font-bold text-white hidden lg:grid">
            <div className="lg:col-span-4 text-slate-200">المعيار</div>
            <div className="lg:col-span-4 text-slate-200">
              ما ينبغي التحقق منه
            </div>
            <div className="lg:col-span-4 text-[#F59E0B] flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>كيف نساعدك</span>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                className="items-center space-y-3 p-4 transition-colors hover:bg-slate-50/80 sm:p-6 lg:grid lg:grid-cols-12 lg:gap-4 lg:space-y-0"
              >
                <div className="lg:col-span-4 font-black text-sm sm:text-base text-[#0F172A] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D97706] lg:hidden"></span>
                  <span>{row.feature}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-2 gap-2.5 sm:gap-4">
                  {/* General consideration */}
                  <div className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm leading-relaxed text-slate-700 sm:p-3.5">
                    <CheckCircle2 className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] font-bold text-slate-600 lg:hidden mb-0.5">تحقق من:</span>
                      <span className="font-medium">{row.traditional}</span>
                    </div>
                  </div>

                  {/* Thiqa Uni */}
                  <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/10 p-3 text-sm font-bold leading-relaxed text-[#0F254B] sm:p-3.5">
                    <CheckCircle2 className="w-4 h-4 text-thiqa-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] font-bold text-thiqa-gold lg:hidden mb-0.5">ثقة يوني:</span>
                      <span>{row.thiqa}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => onOpenLeadModal("why_thiqa_cta")}
            className="inline-flex min-h-12 items-center gap-2.5 rounded-xl bg-[#0F254B] px-9 py-4 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-[#17376B] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2"
          >
            <span>ناقش خياراتك مع مستشار أكاديمي</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
