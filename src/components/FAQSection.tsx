import React from "react";
import { FAQS } from "../data/thiqaData";
import { SectionHeader } from "./ui/SectionHeader";
import { useLang } from "../i18n/LanguageContext";

const TEXT = {
  ar: { title: "الأسئلة الشائعة", updated: "آخر تحديث:" },
  en: { title: "Frequently asked questions", updated: "Updated:" },
};

export const FAQSection: React.FC = () => {
  const { lang, t } = useLang();
  const text = TEXT[lang];
  // A question is published only once it has a real answer.
  const faqs = FAQS.filter((f) => f.a.some((p) => t(p)));

  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="page-container">
        <SectionHeader id="faq-title" title={text.title} />
        <div className="max-w-3xl">
          {faqs.map((f, i) => (
            <details key={f.q.en} open={i === 0} className="group border-b border-line">
              <summary className="flex min-h-16 list-none items-center justify-between gap-4 py-4 font-bold [&::-webkit-details-marker]:hidden">
                {t(f.q)}
                <span className="text-2xl font-normal leading-none text-navy group-open:hidden" aria-hidden="true">+</span>
                <span className="hidden text-2xl font-normal leading-none text-navy group-open:inline" aria-hidden="true">–</span>
              </summary>
              <div className="space-y-2 pb-5 text-muted">
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
