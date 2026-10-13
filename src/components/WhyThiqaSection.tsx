import React from "react";
import { COMPARISON_ROWS } from "../data/thiqaData";
import { ArrowLeft, Award, CheckCircle2, Search, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

interface WhyThiqaProps {
  onOpenLeadModal: (source?: string) => void;
}

export const WhyThiqaSection: React.FC<WhyThiqaProps> = ({ onOpenLeadModal }) => (
  <section id="why-thiqa" className="relative bg-paper py-16 sm:py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        icon={ShieldCheck}
        eyebrow="فارق التميز مع ثقة يوني"
        title={
          <>
            لماذا يختار الطلاب والآباء <span className="text-gradient-gold">ثقة يوني</span>؟
          </>
        }
        description="نقاط عملية تساعدك على فهم الرسوم، المدد، والجهات المسؤولة قبل اختيار برنامجك."
      />

      <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_20px_50px_-30px_rgb(10_24_56/0.35)]">
        <div className="hidden grid-cols-12 gap-4 bg-gradient-to-l from-brand-800 to-brand-900 px-6 py-4 text-sm font-bold text-white lg:grid">
          <div className="col-span-4 text-brand-100">المعيار</div>
          <div className="col-span-4 flex items-center gap-1.5 text-brand-100">
            <Search className="h-4 w-4" aria-hidden="true" />
            ما ينبغي التحقق منه
          </div>
          <div className="col-span-4 flex items-center gap-1.5 text-gold-300">
            <Award className="h-4 w-4" aria-hidden="true" />
            كيف نساعدك
          </div>
        </div>

        <div className="divide-y divide-line">
          {COMPARISON_ROWS.map((row, idx) => (
            <Reveal key={row.feature} delay={idx * 90}>
              <div className="items-center space-y-3 p-5 transition-colors hover:bg-brand-50/40 sm:p-6 lg:grid lg:grid-cols-12 lg:gap-4 lg:space-y-0">
                <div className="flex items-center gap-3 text-base font-bold text-ink lg:col-span-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-50 font-latin text-sm text-brand-700">
                    {idx + 1}
                  </span>
                  <span>{row.feature}</span>
                </div>

                <div className="flex items-start gap-2.5 rounded-2xl bg-slate-50 p-3.5 text-sm leading-relaxed text-slate-700 lg:col-span-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                  <div>
                    <span className="mb-0.5 block text-xs font-bold text-slate-500 lg:hidden">تحقق من:</span>
                    {row.traditional}
                  </div>
                </div>

                <div className="flex items-start gap-2.5 rounded-2xl bg-gradient-to-l from-gold-50 to-gold-100/70 p-3.5 text-sm font-bold leading-relaxed text-ink ring-1 ring-gold-200 lg:col-span-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                  <div>
                    <span className="mb-0.5 block text-xs font-bold text-gold-700 lg:hidden">ثقة يوني:</span>
                    {row.thiqa}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-12 text-center">
        <button type="button" onClick={() => onOpenLeadModal("why_thiqa_cta")} className="btn btn-dark px-8">
          <span>ناقش خياراتك مع مستشار أكاديمي</span>
          <ArrowLeft className="h-4 w-4" />
        </button>
      </Reveal>
    </div>
  </section>
);
