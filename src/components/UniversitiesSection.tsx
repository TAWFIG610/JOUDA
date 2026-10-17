import React, { useState } from "react";
import { FIELDS, PARTNER_UNIVERSITIES } from "../data/thiqaData";
import type { FieldId } from "../types";
import { SectionHeader } from "./ui/SectionHeader";
import { useLang } from "../i18n/LanguageContext";

const TEXT = {
  ar: {
    title: "الجامعات التي نقدّم إليها",
    body: "صفِّ الجامعات حسب النوع أو مجال الدراسة.",
    type: "النوع:",
    field: "المجال:",
    all: "الكل",
    public: "حكومية",
    private: "خاصة",
    intakes: "مواعيد القبول",
    fees: "الرسوم السنوية",
    requirements: "شروط القبول",
    none: "لا توجد جامعة تطابق هذا الاختيار.",
    showAll: (n: number) => `عرض كل الجامعات (${n})`,
  },
  en: {
    title: "Universities we apply to",
    body: "Filter by type or field of study.",
    type: "Type:",
    field: "Field:",
    all: "All",
    public: "Public",
    private: "Private",
    intakes: "Intakes",
    fees: "Yearly fees",
    requirements: "Entry requirements",
    none: "No university matches this filter.",
    showAll: (n: number) => `Show all universities (${n})`,
  },
};

type TypeFilter = "all" | "public" | "private";
/** On phones only the first few are shown until the visitor asks for more. */
const PHONE_PREVIEW = 3;

/** Static grid: each university appears once, nothing moves. */
export const UniversitiesSection: React.FC = () => {
  const { lang, t } = useLang();
  const text = TEXT[lang];
  const [type, setType] = useState<TypeFilter>("all");
  const [field, setField] = useState<FieldId | "all">("all");
  const [expanded, setExpanded] = useState(false);

  const list = PARTNER_UNIVERSITIES.filter((u) => (type === "all" || u.type === type) && (field === "all" || u.fields.includes(field)));
  const collapsed = !expanded && list.length > PHONE_PREVIEW;

  return (
    <section id="universities" className="section" aria-labelledby="uni-title">
      <div className="page-container">
        <SectionHeader id="uni-title" title={text.title} description={text.body} />

        <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2">
          <div role="group" aria-label={text.type} className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted">{text.type}</span>
            {(["all", "public", "private"] as const).map((v) => (
              <button key={v} type="button" className="chip" aria-pressed={type === v} onClick={() => { setType(v); setExpanded(false); }}>
                {text[v]}
              </button>
            ))}
          </div>
          <div role="group" aria-label={text.field} className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted">{text.field}</span>
            <button type="button" className="chip" aria-pressed={field === "all"} onClick={() => { setField("all"); setExpanded(false); }}>
              {text.all}
            </button>
            {(Object.keys(FIELDS) as FieldId[]).map((f) => (
              <button key={f} type="button" className="chip" aria-pressed={field === f} onClick={() => { setField(f); setExpanded(false); }}>
                {t(FIELDS[f])}
              </button>
            ))}
          </div>
        </div>

        {list.length === 0 ? (
          <p className="py-6 text-muted">{text.none}</p>
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" aria-live="polite">
            {list.map((u, i) => {
              const details = [
                { label: text.intakes, value: t(u.intakes) },
                { label: text.fees, value: t(u.fees) },
                { label: text.requirements, value: t(u.requirements) },
              ].filter((d) => d.value);
              return (
                <li key={u.id} className={`card flex flex-col gap-3 ${collapsed && i >= PHONE_PREVIEW ? "hidden sm:flex" : ""}`}>
                  <div>
                    <img src={u.logoUrl} alt="" className="block h-10 w-auto max-w-[70%] object-contain sm:h-12" loading="lazy" />
                    <div className="mt-3">
                      <h3 className="text-base leading-snug">{lang === "ar" ? u.nameAr : u.nameEn}</h3>
                      {lang === "ar" && (
                        <p className="text-sm text-muted" dir="ltr">
                          {u.nameEn}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted">
                    {u.type === "public" ? text.public : text.private}
                    {u.branch && ` · ${t(u.branch)}`} · {t(u.city)}
                    <br />
                    {u.fields.map((f) => t(FIELDS[f])).join(" · ")}
                  </p>
                  {details.length > 0 && (
                    <dl className="grid gap-1.5 border-t border-line pt-3 text-sm">
                      {details.map((d) => (
                        <div key={d.label} className="flex justify-between gap-2">
                          <dt className="text-muted">{d.label}</dt>
                          <dd className="text-end">{d.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </li>
              );
            })}
          </ul>
        )}

        {collapsed && (
          <button type="button" onClick={() => setExpanded(true)} className="btn btn-secondary mt-4 w-full sm:hidden">
            {text.showAll(list.length)}
          </button>
        )}
      </div>
    </section>
  );
};
