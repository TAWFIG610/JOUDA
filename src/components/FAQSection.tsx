import React from "react";
import { FAQS } from "../data/thiqaData";
import { useLang } from "../i18n/LanguageContext";

interface FAQSectionProps {
  onOpenConsult: (source: string) => void;
}

const TEXT = {
  ar: {
    title: "الأسئلة الشائعة",
    body: "إجابات مباشرة عن الرسوم والقبول والتأشيرة.",
    other: "سؤالك غير موجود؟",
    ask: "اسأل مستشاراً مجاناً",
    updated: "آخر تحديث:",
  },
  en: {
    title: "Frequently asked questions",
    body: "Straight answers about fees, admission and the visa.",
    other: "Don't see your question?",
    ask: "Ask an advisor for free",
    updated: "Updated:",
  },
};

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsult }) => {
  const { lang, t } = useLang();
  const text = TEXT[lang];
  // A question is published only once it has a real answer.
  const faqs = FAQS.filter((f) => f.a.some((p) => t(p)));

  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="page-container grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="faq-title" className="text-xl lg:text-2xl">
            {text.title}
          </h2>
          <p className="mt-3 text-muted lg:text-lg">{text.body}</p>
          <p className="mt-6 hidden text-muted lg:block">
            {text.other}{" "}
            <button type="button" onClick={() => onOpenConsult("faq")} className="link">
              {text.ask}
            </button>
          </p>
        </div>

        <div className="border-t border-line">
          {faqs.map((f, i) => (
            <details key={f.q.en} open={i === 0} className="group border-b border-line">
              <summary className="flex min-h-16 list-none items-center justify-between gap-4 py-5 font-bold lg:text-lg [&::-webkit-details-marker]:hidden">
                {t(f.q)}
                <span className="text-xl font-normal leading-none text-navy group-open:hidden" aria-hidden="true">+</span>
                <span className="hidden text-xl font-normal leading-none text-navy group-open:inline" aria-hidden="true">–</span>
              </summary>
              <div className="space-y-2 pb-6 text-muted">
                {f.a.filter((p) => t(p)).map((p) => (
                  <p key={p.en}>{t(p)}</p>
                ))}
                {t(f.updated) && (
                  <p className="text-sm">
                    {text.updated} {t(f.updated)}
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
