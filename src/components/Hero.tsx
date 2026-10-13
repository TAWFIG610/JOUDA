import React from "react";
import { ArrowLeft, MapPin } from "lucide-react";
import { PARTNER_UNIVERSITIES, POPULAR_MAJORS } from "../data/thiqaData";

interface HeroProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenAdvisorModal: () => void;
}

const HERO_LOGOS = PARTNER_UNIVERSITIES.filter((u) => u.logoUrl).slice(0, 6);

export const Hero: React.FC<HeroProps> = ({ onOpenLeadModal, onOpenAdvisorModal }) => (
  <section id="hero" className="border-b border-line bg-gradient-to-b from-brand-50/70 to-paper pb-12 pt-24 sm:pb-20 sm:pt-32 lg:pt-36">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:px-8 xl:grid-cols-[1.15fr_0.85fr] xl:gap-16">
      <div className="animate-fade-up">
        <p className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 sm:text-base">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          استشارات قبول جامعي · كوالالمبور، ماليزيا
        </p>

        <h1 className="max-w-2xl text-balance font-display text-[2rem] font-bold leading-[1.3] tracking-tight text-ink sm:text-5xl sm:leading-[1.25] xl:text-[3.4rem]">
          ادرس في ماليزيا، ونحن نتابع معك القبول والتأشيرة والسكن.
        </h1>

        <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted">
          نساعدك على اختيار الجامعة والتخصص المناسبين لمعدلك وميزانيتك، ونتابع طلبك حتى تصل إلى ماليزيا وتبدأ الدراسة.
          الاستشارة الأولى مجانية.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={() => onOpenLeadModal("hero_primary")} className="btn btn-primary min-h-14 px-8 text-lg">
            اطلب استشارة مجانية
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button type="button" onClick={onOpenAdvisorModal} className="btn btn-outline min-h-14 px-7 text-lg">
            ساعدني أختار التخصص
          </button>
        </div>

        <div className="mt-8 border-t border-line pt-5">
          <p className="mb-2 text-sm font-semibold text-slate-500">يسأل الطلاب عادةً عن:</p>
          <ul className="flex flex-wrap gap-2">
            {POPULAR_MAJORS.map((major) => (
              <li key={major}>
                <button
                  type="button"
                  onClick={() => onOpenLeadModal(`major_${major}`)}
                  className="min-h-11 rounded-full border border-line bg-white px-4 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-500 hover:text-brand-700"
                >
                  {major}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Real proof instead of decoration: universities we apply to */}
      <aside className="hidden animate-fade-up rounded-3xl border border-line bg-white p-7 shadow-sm [animation-delay:120ms] xl:block">
        <h2 className="text-lg font-bold text-ink">جامعات نقدّم إليها</h2>
        <p className="mt-1 text-sm text-muted">حكومية وخاصة وفروع جامعات أجنبية.</p>
        <ul className="mt-6 grid grid-cols-3 gap-3">
          {HERO_LOGOS.map((uni) => (
            <li key={uni.id}>
              <button
                type="button"
                onClick={() => onOpenLeadModal(`university_${uni.id}`)}
                className="flex h-20 w-full items-center justify-center rounded-xl border border-line bg-white p-3 transition-colors hover:border-brand-500"
                aria-label={`اسأل عن ${uni.nameAr}`}
              >
                <img src={uni.logoUrl} alt={uni.nameEn} className="max-h-full max-w-full object-contain" />
              </button>
            </li>
          ))}
        </ul>
        <a href="#universities" className="text-link mt-4 text-sm">
          عرض كل الجامعات ({PARTNER_UNIVERSITIES.length})
          <ArrowLeft className="h-4 w-4" />
        </a>
      </aside>
    </div>
  </section>
);
