import React from "react";
import { ArrowLeft, MapPin } from "lucide-react";
import { PARTNER_UNIVERSITIES, POPULAR_MAJORS } from "../data/thiqaData";
import { useLang } from "../i18n/LanguageContext";

interface HeroProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenAdvisorModal: () => void;
}

const HERO_LOGOS = PARTNER_UNIVERSITIES.filter((u) => u.logoUrl).slice(0, 6);

const TEXT = {
  ar: {
    place: "استشارات قبول جامعي · كوالالمبور، ماليزيا",
    title: "ادرس في ماليزيا، ونحن نتابع معك القبول والتأشيرة والسكن.",
    body: "نساعدك على اختيار الجامعة والتخصص المناسبين لمعدلك وميزانيتك، ونتابع طلبك حتى تصل إلى ماليزيا وتبدأ الدراسة. الاستشارة الأولى مجانية.",
    primary: "اطلب استشارة مجانية",
    secondary: "ساعدني أختار التخصص",
    majors: "يسأل الطلاب عادةً عن:",
    panelTitle: "جامعات نقدّم إليها",
    panelBody: "حكومية وخاصة وفروع جامعات أجنبية.",
    askAbout: "اسأل عن",
    seeAll: "عرض كل الجامعات",
  },
  en: {
    place: "University admissions advice · Kuala Lumpur, Malaysia",
    title: "Study in Malaysia. We handle admission, visa and housing with you.",
    body: "We help you pick a university and major that fit your grades and budget, and follow your application until you arrive in Malaysia and start classes. Your first consultation is free.",
    primary: "Get a free consultation",
    secondary: "Help me choose a major",
    majors: "Students often ask about:",
    panelTitle: "Universities we apply to",
    panelBody: "Public, private and international branch campuses.",
    askAbout: "Ask about",
    seeAll: "See all universities",
  },
};

export const Hero: React.FC<HeroProps> = ({ onOpenLeadModal, onOpenAdvisorModal }) => {
  const { lang, t } = useLang();
  const text = TEXT[lang];

  return (
    <section id="hero" className="border-b border-line bg-gradient-to-b from-brand-50/70 to-paper pb-12 pt-24 sm:pb-20 sm:pt-32 lg:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:px-8 xl:grid-cols-[1.15fr_0.85fr] xl:gap-16">
        <div className="animate-fade-up">
          <p className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 sm:text-base">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {text.place}
          </p>

          <h1 className="max-w-2xl text-balance font-display text-[2rem] font-bold leading-[1.3] tracking-tight text-ink sm:text-5xl sm:leading-[1.2] xl:text-[3.4rem]">
            {text.title}
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted">{text.body}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => onOpenLeadModal("hero_primary")} className="btn btn-primary min-h-14 px-8 text-lg">
              {text.primary}
              <ArrowLeft className="flip-ltr h-5 w-5" />
            </button>
            <button type="button" onClick={onOpenAdvisorModal} className="btn btn-outline min-h-14 px-7 text-lg">
              {text.secondary}
            </button>
          </div>

          <div className="mt-8 border-t border-line pt-5">
            <p className="mb-2 text-sm font-semibold text-slate-500">{text.majors}</p>
            <ul className="flex flex-wrap gap-2">
              {POPULAR_MAJORS.map((major) => (
                <li key={major.en}>
                  <button
                    type="button"
                    onClick={() => onOpenLeadModal(`major_${t(major)}`)}
                    className="min-h-11 rounded-full border border-line bg-white px-4 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-500 hover:text-brand-700"
                  >
                    {t(major)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Real proof instead of decoration: universities we apply to */}
        <aside className="hidden animate-fade-up rounded-3xl border border-line bg-white p-7 shadow-sm [animation-delay:120ms] xl:block">
          <h2 className="text-lg font-bold text-ink">{text.panelTitle}</h2>
          <p className="mt-1 text-sm text-muted">{text.panelBody}</p>
          <ul className="mt-6 grid grid-cols-3 gap-3">
            {HERO_LOGOS.map((uni) => (
              <li key={uni.id}>
                <button
                  type="button"
                  onClick={() => onOpenLeadModal(`university_${uni.id}`)}
                  className="flex h-20 w-full items-center justify-center rounded-xl border border-line bg-white p-3 transition-colors hover:border-brand-500"
                  aria-label={`${text.askAbout} ${lang === "ar" ? uni.nameAr : uni.nameEn}`}
                >
                  <img src={uni.logoUrl} alt={uni.nameEn} className="max-h-full max-w-full object-contain" />
                </button>
              </li>
            ))}
          </ul>
          <a href="#universities" className="text-link mt-4 text-sm">
            {text.seeAll} ({PARTNER_UNIVERSITIES.length})
            <ArrowLeft className="flip-ltr h-4 w-4" />
          </a>
        </aside>
      </div>
    </section>
  );
};
