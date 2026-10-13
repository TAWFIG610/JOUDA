import React, { useState } from "react";
import { PARTNER_UNIVERSITIES } from "../data/thiqaData";
import type { PartnerUniversity } from "../types";
import { ArrowLeft, ChevronDown, MapPin } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";

interface UniversitiesSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

type Filter = "all" | NonNullable<PartnerUniversity["type"]>;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "الكل" },
  { id: "حكومية", label: "حكومية" },
  { id: "خاصة", label: "خاصة" },
  { id: "دولية فرع", label: "فروع جامعات أجنبية" },
];

/** On phones only the first few are shown until the visitor asks for more. */
const MOBILE_PREVIEW = 6;

export const UniversitiesSection: React.FC<UniversitiesSectionProps> = ({ onOpenLeadModal }) => {
  const [filter, setFilter] = useState<Filter>("all");
  const [expanded, setExpanded] = useState(false);

  const list = PARTNER_UNIVERSITIES.filter((u) => filter === "all" || u.type === filter);
  const hiddenOnMobile = !expanded && list.length > MOBILE_PREVIEW;

  return (
    <section id="universities" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            align="start"
            className="mb-0 sm:mb-0"
            title="الجامعات التي نقدّم إليها"
            description="اضغط على أي جامعة لتسألنا عن برامجها ورسومها ومواعيد القبول القادمة."
          />

          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0" role="group" aria-label="تصفية الجامعات">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => {
                  setFilter(f.id);
                  setExpanded(false);
                }}
                aria-pressed={filter === f.id}
                className={`choice-pill shrink-0 rounded-full px-4 ${filter === f.id ? "choice-pill-on" : "choice-pill-off"}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4" aria-live="polite">
          {list.map((uni, idx) => (
            <li key={uni.id} className={hiddenOnMobile && idx >= MOBILE_PREVIEW ? "hidden sm:block" : ""}>
              <button
                type="button"
                onClick={() => onOpenLeadModal(`university_${uni.id}`)}
                className="content-card group flex h-full w-full items-center gap-4 p-4 text-start sm:flex-col sm:items-stretch sm:p-5"
              >
                <span className="flex h-16 w-20 shrink-0 items-center justify-center rounded-xl bg-paper p-2 sm:h-20 sm:w-full">
                  {uni.logoUrl ? (
                    <img src={uni.logoUrl} alt="" className="max-h-full max-w-full object-contain" loading="lazy" />
                  ) : (
                    <span className="font-latin text-sm font-bold text-brand-800">{uni.shortName}</span>
                  )}
                </span>

                <span className="min-w-0 flex-1 space-y-1">
                  <span className="block font-bold leading-snug text-ink">{uni.nameAr}</span>
                  <span className="block truncate font-latin text-xs text-slate-500" dir="ltr">
                    {uni.nameEn}
                  </span>
                  <span className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-xs text-muted">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {uni.location}
                    </span>
                    {uni.type && <span className="rounded-md bg-brand-50 px-1.5 py-0.5 font-semibold text-brand-700">{uni.type}</span>}
                  </span>
                </span>

                <span className="hidden items-center gap-1 border-t border-line pt-3 text-sm font-bold text-brand-700 sm:flex">
                  اسأل عن القبول
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
                </span>
              </button>
            </li>
          ))}
        </ul>

        {hiddenOnMobile && (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="btn btn-outline mt-4 w-full sm:hidden"
          >
            عرض كل الجامعات ({list.length})
            <ChevronDown className="h-4 w-4" />
          </button>
        )}

        <p className="mt-8 text-center text-base text-muted">
          جامعتك غير موجودة في القائمة؟{" "}
          <button type="button" onClick={() => onOpenLeadModal("universities_other")} className="text-link">
            اسألنا عنها
          </button>
        </p>
      </div>
    </section>
  );
};
