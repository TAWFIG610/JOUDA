import React from "react";
import { COMPARISON_ROWS } from "../data/thiqaData";
import { ArrowLeft } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";

interface WhyThiqaProps {
  onOpenLeadModal: (source?: string) => void;
}

export const WhyThiqaSection: React.FC<WhyThiqaProps> = ({ onOpenLeadModal }) => (
  <section id="why-thiqa" className="bg-white py-14 sm:py-20">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="أسئلة اطرحها على أي جهة تساعدك في التقديم"
        description="سواء اخترت ثقة يوني أو غيرها، إجابات هذه الأسئلة توفر عليك مشاكل كثيرة لاحقاً."
      />

      {/* Desktop / tablet: a real table */}
      <div className="hidden overflow-hidden rounded-2xl border border-line md:block">
      <table className="w-full border-collapse text-start">
        <thead>
          <tr className="bg-brand-800 text-sm text-white">
            <th scope="col" className="w-1/5 px-5 py-4 text-start font-bold">الموضوع</th>
            <th scope="col" className="w-2/5 px-5 py-4 text-start font-bold">ما تسأل عنه</th>
            <th scope="col" className="w-2/5 px-5 py-4 text-start font-bold text-gold-300">ما نقدّمه في ثقة يوني</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {COMPARISON_ROWS.map((row) => (
            <tr key={row.feature} className="align-top">
              <th scope="row" className="px-5 py-5 text-start text-base font-bold text-ink">{row.feature}</th>
              <td className="px-5 py-5 text-base leading-relaxed text-muted">{row.traditional}</td>
              <td className="bg-gold-50/60 px-5 py-5 text-base font-semibold leading-relaxed text-ink">{row.thiqa}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      {/* Phones: one block per topic */}
      <dl className="space-y-4 md:hidden">
        {COMPARISON_ROWS.map((row) => (
          <div key={row.feature} className="overflow-hidden rounded-2xl border border-line">
            <dt className="bg-brand-800 px-4 py-3 font-bold text-white">{row.feature}</dt>
            <dd className="px-4 py-3 text-base leading-relaxed text-muted">
              <span className="block text-xs font-bold text-slate-500">ما تسأل عنه</span>
              {row.traditional}
            </dd>
            <dd className="border-t border-line bg-gold-50/60 px-4 py-3 text-base font-semibold leading-relaxed text-ink">
              <span className="block text-xs font-bold text-gold-700">ما نقدّمه</span>
              {row.thiqa}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 text-center">
        <button type="button" onClick={() => onOpenLeadModal("why_thiqa_cta")} className="btn btn-dark w-full sm:w-auto">
          اسأل مستشاراً من فريقنا
          <ArrowLeft className="h-4 w-4" />
        </button>
      </div>
    </div>
  </section>
);
