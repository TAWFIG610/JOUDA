import React from "react";
import { PHOTOS, STEPS } from "../data/thiqaData";
import { SectionHeader } from "./ui/SectionHeader";
import { useLang } from "../i18n/LanguageContext";

const TEXT = {
  ar: {
    title: "كيف نعمل معك",
    body: "مستشار واحد يتابع ملفك من أول رسالة حتى أول يوم في الحرم الجامعي.",
    photoAlt: "فريق ثقة يوني يستقبل طالباً في مطار كوالالمبور",
  },
  en: {
    title: "How we work",
    body: "One advisor follows your file from the first message to your first day on campus.",
    photoAlt: "The Thiqa Uni team meeting a student at Kuala Lumpur airport",
  },
};

/** Services and steps in one section. */
export const HowSection: React.FC = () => {
  const { lang, t } = useLang();
  const text = TEXT[lang];

  return (
    <section id="how" className="section" aria-labelledby="how-title">
      <div className="page-container">
        <SectionHeader id="how-title" title={text.title} description={text.body} />
        <div className={`grid gap-6 ${PHOTOS.arrival ? "lg:grid-cols-2 lg:items-start lg:gap-10" : ""}`}>
          <ol className={`grid gap-3 sm:grid-cols-2 ${PHOTOS.arrival ? "" : "lg:grid-cols-4"}`}>
            {STEPS.map((step, i) => (
              <li key={step.title.en} className="card grid grid-cols-[2rem_1fr] gap-x-3 sm:block">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-navy text-sm font-bold text-navy lg:h-11 lg:w-11 lg:text-base">
                  {i + 1}
                </span>
                <h3 className="text-base sm:mt-4 sm:text-lg">{t(step.title)}</h3>
                <p className="col-start-2 mt-1 text-sm text-muted sm:mt-2 sm:text-base">{t(step.desc)}</p>
              </li>
            ))}
          </ol>
          {PHOTOS.arrival && (
            <img src={PHOTOS.arrival} alt={text.photoAlt} className="aspect-[4/3] w-full rounded-xl object-cover" loading="lazy" />
          )}
        </div>
      </div>
    </section>
  );
};
