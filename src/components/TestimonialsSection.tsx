import React, { useRef, useState } from "react";
import { TESTIMONIALS } from "../data/thiqaData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";

export const TestimonialsSection: React.FC = () => {
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  const cardWidth = () => {
    const first = trackRef.current?.firstElementChild as HTMLElement | null;
    return first ? first.offsetWidth + 16 : 0;
  };

  const goTo = (next: number) => {
    const clamped = Math.max(0, Math.min(TESTIMONIALS.length - 1, next));
    // RTL: moving forward means scrolling towards negative scrollLeft.
    trackRef.current?.scrollTo({ left: -clamped * cardWidth(), behavior: "smooth" });
  };

  const onScroll = () => {
    const width = cardWidth();
    if (width) setIndex(Math.round(Math.abs(trackRef.current?.scrollLeft ?? 0) / width));
  };

  return (
    <section id="testimonials" className="bg-paper py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader align="start" title="من طلاب قدّموا معنا" />

        <ul
          ref={trackRef}
          onScroll={onScroll}
          aria-label="تجارب الطلاب"
          className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0"
        >
          {TESTIMONIALS.map((t) => (
            <li key={t.id} className="w-[86%] shrink-0 snap-center sm:w-[60%] lg:w-auto">
              <figure className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-line bg-white p-6">
                <blockquote className="text-base leading-loose text-slate-700">«{t.quote}»</blockquote>
                <figcaption className="border-t border-line pt-4">
                  <span className="block font-bold text-ink">{t.name}</span>
                  <span className="mt-0.5 block text-sm text-muted">
                    {t.program} · <span dir="ltr" className="font-latin">{t.university}</span>
                  </span>
                  <span className="mt-0.5 block text-sm text-slate-500">
                    {t.country} · {t.year}
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
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink disabled:opacity-40"
            aria-label="التجربة السابقة"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <span className="min-w-12 text-center font-latin text-sm font-semibold text-slate-600" aria-live="polite">
            {index + 1} / {TESTIMONIALS.length}
          </span>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === TESTIMONIALS.length - 1}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink disabled:opacity-40"
            aria-label="التجربة التالية"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
