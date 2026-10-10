import React from "react";
import { PARTNER_UNIVERSITIES } from "../data/thiqaData";
import { ArrowLeft, BookOpen, MapPin, WalletCards } from "lucide-react";

interface UniversitiesSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

export const UniversitiesSection: React.FC<UniversitiesSectionProps> = ({
  onOpenLeadModal,
}) => {
  return (
    <section
      id="universities"
      className="border-y border-slate-200/80 bg-[#F8FAFC] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-10 max-w-3xl space-y-3 text-center sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0F254B]/15 bg-[#0F254B]/5 px-4 py-1.5 text-xs font-bold text-[#0F254B]">
            <BookOpen className="h-4 w-4 text-[#D97706]" aria-hidden="true" />
            <span>قارن خياراتك الأكاديمية</span>
          </div>
          <h2 className="text-balance text-2xl font-black leading-tight tracking-tight text-[#0F254B] sm:text-3xl lg:text-4xl">
            استكشف الجامعات والبرامج في ماليزيا
          </h2>
          <p className="text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
            اطلع على نبذة عن كل جامعة، والرسوم الدراسية السنوية التقديرية والتخصصات الشائعة، ثم اسأل عن متطلبات البرنامج الذي يهمك.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNER_UNIVERSITIES.map((university) => (
            <article
              key={university.id}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-16 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-[#F8FAFC] p-2">
                  {university.logoUrl ? (
                    <img
                      src={university.logoUrl}
                      alt=""
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-sm font-bold text-[#0F254B]">
                      {university.shortName}
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold leading-snug text-slate-900">
                    {university.nameAr}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600" dir="ltr">
                    {university.nameEn}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {university.type && (
                  <span className="rounded-full bg-[#0F254B]/5 px-2.5 py-1 text-xs font-semibold text-[#0F254B]">
                    {university.type}
                  </span>
                )}
                <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">
                  {university.ranking}
                </span>
              </div>

              <div className="mt-4 space-y-3 border-t border-slate-100 pt-4">
                <p className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0F254B]" aria-hidden="true" />
                  <span>{university.location}</span>
                </p>
                {university.annualTuitionUSD && (
                  <p className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                    <WalletCards className="mt-0.5 h-4 w-4 shrink-0 text-[#0F254B]" aria-hidden="true" />
                    <span>
                      رسوم دراسية سنوية تقديرية:{" "}
                      <strong className="font-bold text-slate-900" dir="ltr">
                        {university.annualTuitionUSD}
                      </strong>
                    </span>
                  </p>
                )}
                <p className="text-sm leading-relaxed text-slate-600">
                  <span className="font-semibold text-slate-800">مجالات شائعة: </span>
                  {university.popularFields.join("، ")}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenLeadModal(`university_${university.id}`)}
                className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 self-start pt-5 text-sm font-bold text-[#0F254B] transition-colors hover:text-[#B45309] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2"
              >
                <span>اسأل عن هذه الجامعة</span>
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-4xl text-center text-xs leading-relaxed text-slate-500">
          الرسوم والتخصصات ومواعيد القبول قابلة للتغيير وتختلف باختلاف البرنامج؛ تحقّق من التفاصيل الحالية مع الجامعة قبل التقديم.
        </p>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => onOpenLeadModal("universities_general_cta")}
            className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-[#0F254B] px-7 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#17376B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2"
          >
            <span>ناقش خياراتك مع مستشار</span>
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};
