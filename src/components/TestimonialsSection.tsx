import React from "react";
import { GOOGLE_REVIEWS_URL, TESTIMONIALS } from "../data/thiqaData";
import { SectionHeader } from "./ui/SectionHeader";
import { useLang } from "../i18n/LanguageContext";

const TEXT = {
  ar: { title: "تجارب الطلاب", reviews: "اقرأ تقييماتنا على Google", open: "«", close: "»" },
  en: { title: "Student stories", reviews: "Read our Google reviews", open: "“", close: "”" },
};

export const TestimonialsSection: React.FC = () => {
  const { lang, t } = useLang();
  const text = TEXT[lang];

  return (
    <section id="stories" className="section" aria-labelledby="stories-title">
      <div className="page-container">
        <SectionHeader id="stories-title" title={text.title}>
          {GOOGLE_REVIEWS_URL && (
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="link mt-1">
              {text.reviews}
            </a>
          )}
        </SectionHeader>

        {/* Swipe on phones, three columns on desktop */}
        <ul className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
          {TESTIMONIALS.map((s) => (
            <li key={s.id} className="card flex w-[86%] shrink-0 snap-center flex-col justify-between gap-5 sm:w-[60%] lg:w-auto">
              <blockquote>
                {text.open}
                {t(s.quote)}
                {text.close}
              </blockquote>
              <div className="flex items-center gap-3">
                {s.photo ? (
                  <img src={s.photo} alt="" className="h-14 w-14 shrink-0 rounded-full object-cover" loading="lazy" />
                ) : (
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-tint font-bold text-navy" aria-hidden="true">
                    {t(s.name).charAt(0)}
                  </span>
                )}
                <p className="text-sm text-muted">
                  <span className="block text-base font-bold text-ink">{t(s.name)}</span>
                  {t(s.program)} · <span dir="ltr">{s.university}</span> · {t(s.country)} · {s.year}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
