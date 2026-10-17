import React from "react";
import { Check, ExternalLink } from "lucide-react";
import { COMMITMENTS, COSTS, COSTS_UPDATED, OFFICIAL_CHECKS } from "../data/thiqaData";
import { SectionHeader } from "./ui/SectionHeader";
import { useLang } from "../i18n/LanguageContext";

const TEXT = {
  ar: {
    title: "التكاليف والتزاماتنا",
    body: "نرسل لك الرسوم الرسمية لكل برنامج مكتوبة قبل أن تقرر.",
    updated: "آخر تحديث:",
    costs: "تكاليف نموذجية",
    commitments: "التزاماتنا معك",
    verify: "تحقّق بنفسك قبل أن تدفع",
    verifyBody: "لا تعتمد على كلامنا فقط. هذه الجهات الرسمية تساعدك على التأكد من كل خطوة:",
  },
  en: {
    title: "Costs and our commitments",
    body: "We send you the official fees for each program in writing before you decide.",
    updated: "Updated:",
    costs: "Sample costs",
    commitments: "Our commitments to you",
    verify: "Verify before you pay",
    verifyBody: "Don't rely on our word alone. These official sources let you confirm each step:",
  },
};

/** The one tinted section: costs, commitments and the official checks. */
export const CostsSection: React.FC = () => {
  const { lang, t } = useLang();
  const text = TEXT[lang];
  const rows = COSTS.filter((r) => t(r.value));
  // Only show the table once real figures exist (not just the "free" row).
  const hasFigures = rows.length > 1;

  return (
    <section id="costs" className="section section-tint" aria-labelledby="costs-title">
      <div className="page-container">
        <SectionHeader id="costs-title" title={text.title} description={text.body}>
          {t(COSTS_UPDATED) && (
            <span className="mt-3 inline-block rounded-full border border-navy px-2.5 text-sm text-navy">
              {text.updated} {t(COSTS_UPDATED)}
            </span>
          )}
        </SectionHeader>

        <div className={`grid gap-5 ${hasFigures ? "lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-6" : ""}`}>
          {hasFigures && (
            <div className="card">
              <h3 className="text-lg">{text.costs}</h3>
              <table className="mt-2 w-full border-collapse">
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.label.en} className="border-b border-line last:border-0">
                      <th scope="row" className="py-3.5 text-start font-normal">{t(r.label)}</th>
                      <td className="py-3.5 text-end whitespace-nowrap">{t(r.value)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="panel-dark">
            <h3 className="text-lg">{text.commitments}</h3>
            <ul className={`mt-4 grid gap-4 ${hasFigures ? "" : "md:grid-cols-2 md:gap-x-8"}`}>
              {COMMITMENTS.map((c) => (
                <li key={c.title.en} className="grid grid-cols-[1.5rem_1fr] gap-3">
                  <Check className="mt-1 h-5 w-5" aria-hidden="true" />
                  <div>
                    <p className="font-bold">{t(c.title)}</p>
                    <p className="mt-0.5 text-sm text-on-navy">{t(c.desc)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card mt-5">
          <h3 className="text-lg">{text.verify}</h3>
          <p className="mt-1 text-muted">{text.verifyBody}</p>
          <ul className="mt-4 grid gap-4 md:grid-cols-3">
            {OFFICIAL_CHECKS.map((c) => (
              <li key={c.name.en}>
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="link gap-1 font-bold">
                    {t(c.name)}
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <p className="flex min-h-11 items-center font-bold">{t(c.name)}</p>
                )}
                <p className="text-sm text-muted">{t(c.what)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
