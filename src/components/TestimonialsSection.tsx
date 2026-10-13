import React, { useRef, useState } from "react";
import { TESTIMONIALS } from "../data/thiqaData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { useLang } from "../i18n/LanguageContext";

const TEXT = {
  ar: { title: "من طلاب قدّموا معنا", list: "تجارب الطلاب", prev: "التجربة السابقة", next: "التجربة التالية", open: "«", close: "»" },
  en: { title: "From students who applied with us", list: "Student stories", prev: "Previous story", next: "Next story", open: "“", close: "”" },
};

const ARROW_BUTTON =
  "flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink disabled:opacity-40";

export const TestimonialsSection: React.FC = () => {
  const { lang, t } = useLang();
  const text = TEXT[lang];
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  // In RTL, moving forward scrolls towards negative scrollLeft.
  const direction = lang === "ar" ? -1 : 1;

  const cardWidth = () => {
    const first = trackRef.current?.firstElementChild as HTMLElement | null;
    return first ? first.offsetWidth + 16 : 0;
  };

  const goTo = (next: number) => {
    const clamped = Math.max(0, Math.min(TESTIMONIALS.length - 1, next));
    trackRef.current?.scrollTo({ left: direction * clamped * cardWidth(), behavior: "smooth" });
  };

  const onScroll = () => {
    const width = cardWidth();
    if (width) setIndex(Math.round(Math.abs(trackRef.current?.scrollLeft ?? 0) / width));
  };

  return (
    <section id="testimonials" className="bg-white section">
      <div className="page-container">
        <SectionHeader align="start" title={text.title} />

        <ul
          ref={trackRef}
          onScroll={onScroll}
          aria-label={text.list}
          className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0"
        >
          {TESTIMONIALS.map((item) => (
            <li key={item.id} className="w-[86%] shrink-0 snap-center sm:w-[60%] lg:w-auto">
              <figure className="card flex h-full flex-col justify-between gap-6 border-s-4 border-s-gold-500 p-6">
                <blockquote className="text-base leading-loose text-ink/85">
                  {text.open}
                  {t(item.quote)}
                  {text.close}
                </blockquote>
                <figcaption className="border-t border-line pt-4">
                  <span className="block font-bold text-ink">{t(item.name)}</span>
                  <span className="mt-0.5 block text-sm text-muted">
                    {t(item.program)} · <span dir="ltr" className="font-latin">{item.university}</span>
                  </span>
                  <span className="mt-0.5 block text-sm text-slate-500">
                    {t(item.country)} · {t(item.year)}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            className={ARROW_BUTTON}
            aria-label={text.prev}
          >
            <ChevronRight className="flip-ltr h-5 w-5" />
          </button>
          <span className="min-w-12 text-center font-latin text-sm font-semibold text-slate-600" aria-live="polite">
            {index + 1} / {TESTIMONIALS.length}
          </span>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === TESTIMONIALS.length - 1}
            className={ARROW_BUTTON}
            aria-label={text.next}
          >
            <ChevronLeft className="flip-ltr h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
