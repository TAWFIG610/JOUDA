import React, { useRef, useState } from "react";
import { TESTIMONIALS } from "../data/thiqaData";
import { BadgeCheck, ChevronLeft, ChevronRight, GraduationCap, Quote, Star } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

const AVATAR_TONES = [
  "from-brand-500 to-brand-800",
  "from-gold-400 to-gold-700",
  "from-success-600 to-brand-800",
];

export const TestimonialsSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const cardWidth = () => {
    const first = trackRef.current?.firstElementChild as HTMLElement | null;
    return first ? first.offsetWidth + 16 : 0;
  };

  const goTo = (next: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(TESTIMONIALS.length - 1, next));
    // RTL: moving forward means scrolling towards negative scrollLeft.
    track.scrollTo({ left: -clamped * cardWidth(), behavior: "smooth" });
  };

  const onScroll = () => {
    const width = cardWidth();
    if (width) setIndex(Math.round(Math.abs(trackRef.current?.scrollLeft ?? 0) / width));
  };

  return (
    <section id="testimonials" className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="absolute start-1/2 top-24 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-100/60 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={Star}
          eyebrow="قصص نجاح طلابنا الحقيقية"
          title={
            <>
              تجارب حقيقية لطلاب <span className="text-gradient-gold block">بدأوا رحلتهم معنا</span>
            </>
          }
          description="قصص طلاب انطلقوا من مختلف الدول العربية وبدأوا دراستهم في جامعاتهم المفضلة باطمئنان."
        />

        <div
          ref={trackRef}
          onScroll={onScroll}
          role="region"
          aria-roledescription="carousel"
          aria-label="آراء الطلاب"
          className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0"
        >
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.id}
              delay={i * 110}
              as="article"
              className="w-[85%] shrink-0 snap-center sm:w-[60%] lg:w-auto"
            >
              <div
                className="content-card relative flex h-full flex-col justify-between gap-6 p-6 sm:p-7"
                aria-roledescription="slide"
                aria-label={`${i + 1} من ${TESTIMONIALS.length}`}
              >
                <Quote className="absolute end-5 top-5 h-10 w-10 -scale-x-100 text-gold-200" aria-hidden="true" />

                <div className="space-y-4">
                  <div className="flex items-center gap-0.5" aria-label={`تقييم ${t.rating} من 5`}>
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-gold-500 text-gold-500" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-base leading-relaxed text-slate-700">"{t.quote}"</p>
                </div>

                <div className="space-y-3 border-t border-line pt-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-lg font-bold text-white ${AVATAR_TONES[i % AVATAR_TONES.length]}`}
                      aria-hidden="true"
                    >
                      {t.name.charAt(0)}
                    </span>
                    <div className="min-w-0">
                      <h3 className="flex items-center gap-1.5 text-sm font-bold text-ink">
                        {t.name}
                        <BadgeCheck className="h-4 w-4 text-success-600" aria-label="طالب معتمد" />
                      </h3>
                      <p className="truncate text-xs text-muted">{t.country}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-brand-700">
                      <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                      <span dir="ltr" className="font-latin">{t.university}</span>
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">{t.program}</span>
                    <span className="rounded-full bg-gold-50 px-2.5 py-1 text-gold-700">{t.year}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Carousel controls (phones and tablets) */}
        <div className="mt-4 flex items-center justify-center gap-4 lg:hidden">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-brand-800 shadow-xs transition-colors hover:bg-brand-50 disabled:opacity-40"
            aria-label="الشهادة السابقة"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-1.5" aria-live="polite">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`عرض الشهادة ${i + 1}`}
                aria-current={i === index}
                className="flex h-11 w-6 items-center justify-center"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-gold-500" : "w-2 bg-slate-300"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === TESTIMONIALS.length - 1}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-brand-800 shadow-xs transition-colors hover:bg-brand-50 disabled:opacity-40"
            aria-label="الشهادة التالية"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
