import React from "react";
import { COMPARISON_ROWS } from "../data/thiqaData";
import { ArrowLeft } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { useLang } from "../i18n/LanguageContext";

interface WhyThiqaProps {
  onOpenLeadModal: (source?: string) => void;
}

const TEXT = {
  ar: {
    title: "أسئلة اطرحها على أي جهة تساعدك في التقديم",
    description: "سواء اخترت ثقة يوني أو غيرها، إجابات هذه الأسئلة توفر عليك مشاكل كثيرة لاحقاً.",
    topic: "الموضوع",
    ask: "ما تسأل عنه",
    weDo: "ما نقدّمه في ثقة يوني",
    weDoShort: "ما نقدّمه",
    cta: "اسأل مستشاراً من فريقنا",
  },
  en: {
    title: "Questions to ask anyone helping you apply",
    description: "Whether you choose THIQA UNI or someone else, the answers to these questions will save you a lot of trouble later.",
    topic: "Topic",
    ask: "What to ask",
    weDo: "What THIQA UNI does",
    weDoShort: "What we do",
    cta: "Ask one of our advisors",
  },
};

export const WhyThiqaSection: React.FC<WhyThiqaProps> = ({ onOpenLeadModal }) => {
  const { lang, t } = useLang();
  const text = TEXT[lang];

  return (
    <section id="why-thiqa" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title={text.title} description={text.description} />

        {/* Desktop / tablet: a real table */}
        <div className="hidden overflow-hidden rounded-2xl border border-line md:block">
          <table className="w-full border-collapse text-start">
            <thead>
              <tr className="bg-brand-800 text-sm text-white">
                <th scope="col" className="w-1/5 px-5 py-4 text-start font-bold">{text.topic}</th>
                <th scope="col" className="w-2/5 px-5 py-4 text-start font-bold">{text.ask}</th>
                <th scope="col" className="w-2/5 px-5 py-4 text-start font-bold text-gold-300">{text.weDo}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.feature.en} className="align-top">
                  <th scope="row" className="px-5 py-5 text-start text-base font-bold text-ink">{t(row.feature)}</th>
                  <td className="px-5 py-5 text-base leading-relaxed text-muted">{t(row.traditional)}</td>
                  <td className="bg-gold-50/60 px-5 py-5 text-base font-semibold leading-relaxed text-ink">{t(row.thiqa)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Phones: one block per topic */}
        <dl className="space-y-4 md:hidden">
          {COMPARISON_ROWS.map((row) => (
            <div key={row.feature.en} className="overflow-hidden rounded-2xl border border-line">
              <dt className="bg-brand-800 px-4 py-3 font-bold text-white">{t(row.feature)}</dt>
              <dd className="px-4 py-3 text-base leading-relaxed text-muted">
                <span className="block text-xs font-bold text-slate-500">{text.ask}</span>
                {t(row.traditional)}
              </dd>
              <dd className="border-t border-line bg-gold-50/60 px-4 py-3 text-base font-semibold leading-relaxed text-ink">
                <span className="block text-xs font-bold text-gold-700">{text.weDoShort}</span>
                {t(row.thiqa)}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 text-center">
          <button type="button" onClick={() => onOpenLeadModal("why_thiqa_cta")} className="btn btn-dark w-full sm:w-auto">
            {text.cta}
            <ArrowLeft className="flip-ltr h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
