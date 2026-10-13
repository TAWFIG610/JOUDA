import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Globe,
  GraduationCap,
  Landmark,
  PenTool,
  Plane,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { prefersReducedMotion } from "../hooks/useInView";

interface HeroProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenAdvisorModal: () => void;
}

const HEADLINE = ["خطوتك", "للدراسة", "في", "ماليزيا"];

const ROTATING_MAJORS = [
  "الطب البشري",
  "الذكاء الاصطناعي",
  "إدارة الأعمال",
  "الأمن السيبراني",
  "طب الأسنان",
  "الهندسة",
];

const JOURNEY_STEPS = [
  ["١", "حدّد المرحلة والتخصص", "وضّح ما تريد دراسته."],
  ["٢", "قارن الخيارات", "راجع البرامج والرسوم والمتطلبات."],
  ["٣", "تحقق من أهليتك", "ناقش تفاصيل ملفك مع مستشار."],
  ["٤", "ابدأ التقديم", "جهّز مستنداتك وتابع الإجراءات."],
];

const FLOATING_ICONS = [
  { Icon: GraduationCap, className: "top-28 start-[6%] h-10 w-10 text-brand-300", delay: "0s" },
  { Icon: BookOpen, className: "bottom-10 end-[46%] h-8 w-8 text-gold-400", delay: "1.5s" },
  { Icon: Globe, className: "top-40 end-[4%] h-9 w-9 text-brand-200", delay: "0.8s" },
  { Icon: PenTool, className: "bottom-16 end-[30%] h-7 w-7 text-brand-300", delay: "2.2s" },
  { Icon: Plane, className: "top-[22%] start-[46%] h-7 w-7 text-gold-300", delay: "3s" },
];

export const Hero: React.FC<HeroProps> = ({ onOpenLeadModal, onOpenAdvisorModal }) => {
  const [majorIndex, setMajorIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const timer = window.setInterval(
      () => setMajorIndex((i) => (i + 1) % ROTATING_MAJORS.length),
      2400,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-paper pb-16 pt-28 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40"
    >
      {/* Background: notebook grid, soft colour blobs, floating study icons */}
      <div
        className="bg-notebook absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        aria-hidden="true"
      />
      <div className="absolute -top-32 end-[-10%] -z-10 h-[28rem] w-[28rem] animate-blob rounded-full bg-brand-200/50 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 start-[-8%] -z-10 h-[26rem] w-[26rem] animate-blob rounded-full bg-gold-200/50 blur-3xl [animation-delay:-6s]" aria-hidden="true" />
      {FLOATING_ICONS.map(({ Icon, className, delay }, i) => (
        <Icon
          key={i}
          className={`absolute -z-10 hidden animate-float lg:block ${className}`}
          style={{ animationDelay: delay }}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      ))}

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8">
        <div className="space-y-7 text-center lg:text-start">
          <div className="section-eyebrow animate-fade-up">
            <ShieldCheck className="h-4 w-4 text-gold-600" aria-hidden="true" />
            <span>إرشاد أكاديمي للطلاب الراغبين بالدراسة في ماليزيا</span>
          </div>

          <h1 className="mx-auto max-w-3xl text-balance font-display text-[2.4rem] font-bold leading-[1.25] tracking-tight text-ink sm:text-6xl lg:mx-0 lg:text-[4.1rem]">
            {HEADLINE.map((word, i) => (
              <React.Fragment key={word}>
                <span className="word-rise" style={{ "--word-delay": `${120 + i * 90}ms` } as React.CSSProperties}>
                  {word}
                </span>{" "}
              </React.Fragment>
            ))}
            <span
              className="word-rise text-gradient-gold block pb-2"
              style={{ "--word-delay": "520ms" } as React.CSSProperties}
            >
              تبدأ باختيارٍ واعٍ.
            </span>
          </h1>

          <p className="mx-auto max-w-2xl animate-fade-up text-lg leading-relaxed text-muted [animation-delay:650ms] sm:text-xl lg:mx-0">
            تعرّف على البرامج والجامعات، قارن متطلباتها وتكاليفها، ثم تواصل مع مستشار لمراجعة خياراتك وخطوات التقديم.
          </p>

          {/* Rotating majors */}
          <div className="flex animate-fade-up items-center justify-center gap-2 text-sm font-semibold text-slate-600 [animation-delay:750ms] lg:justify-start">
            <Sparkles className="h-4 w-4 text-gold-500" aria-hidden="true" />
            <span>استكشف برامج</span>
            <span className="relative inline-flex min-w-36 justify-center overflow-hidden rounded-full bg-brand-700 px-3.5 py-1 text-white shadow-sm lg:justify-start">
              <span key={majorIndex} className="animate-chip-in" aria-live="polite">
                {ROTATING_MAJORS[majorIndex]}
              </span>
            </span>
          </div>

          <div className="mx-auto flex max-w-md animate-fade-up flex-col items-stretch justify-center gap-3 [animation-delay:850ms] sm:max-w-none sm:flex-row sm:items-center lg:mx-0 lg:justify-start">
            <button
              type="button"
              onClick={() => onOpenLeadModal("hero_primary")}
              className="btn btn-primary btn-shimmer min-h-14 px-8 text-base sm:text-lg"
            >
              <span>تحدث مع مستشار أكاديمي</span>
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={onOpenAdvisorModal}
              className="btn btn-outline min-h-14 px-7 text-base sm:text-lg"
            >
              <GraduationCap className="h-5 w-5 text-brand-600" />
              <span>اكتشف تخصصك المناسب</span>
            </button>
          </div>

          {/* Trust row */}
          <div className="flex animate-fade-up flex-col items-center gap-4 [animation-delay:950ms] sm:flex-row sm:justify-center lg:justify-start">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-sm">
                <Landmark className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold text-ink">
                <span className="font-latin">+35</span> جامعة ماليزية معتمدة
              </span>
            </div>
            <span className="hidden h-6 w-px bg-line sm:block" aria-hidden="true" />
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-semibold text-slate-700">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-success-600" />
                دعم في القبول والتأشيرة
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-success-600" />
                استشارة أولية مجانية
              </span>
            </div>
          </div>
        </div>

        {/* Journey card */}
        <div className="relative mx-auto w-full max-w-md animate-sheet-in [animation-delay:300ms]">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-gold-300/40 via-transparent to-brand-300/40 blur-2xl" aria-hidden="true" />

          <aside className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-800 via-brand-900 to-ink p-6 text-white shadow-[0_30px_60px_-25px_rgb(10_24_56/0.6)] sm:p-8">
            <div className="bg-dots-light absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="absolute -end-16 -top-20 h-56 w-56 rounded-full border border-white/10" aria-hidden="true" />
            <div className="absolute -end-6 -top-10 h-36 w-36 rounded-full border border-white/10" aria-hidden="true" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-gold-300">دليلك للدراسة بالخارج</p>
                <GraduationCap className="h-6 w-6 text-gold-400" aria-hidden="true" />
              </div>
              <h2 className="mt-2 text-xl font-bold leading-snug sm:text-2xl">رحلة التقديم، خطوة بخطوة</h2>

              <ol className="relative mt-6 space-y-5">
                <span
                  className="absolute bottom-5 start-4 top-5 w-px origin-top animate-draw-y bg-gradient-to-b from-gold-400 to-white/20"
                  aria-hidden="true"
                />
                {JOURNEY_STEPS.map(([number, title, description], i) => (
                  <li
                    key={number}
                    className="relative flex animate-fade-up items-start gap-3"
                    style={{ animationDelay: `${600 + i * 160}ms` }}
                  >
                    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 text-sm font-bold text-ink shadow-[0_0_0_4px_rgb(14_33_80)]">
                      {number}
                    </span>
                    <span>
                      <span className="block text-sm font-bold">{title}</span>
                      <span className="mt-0.5 block text-sm leading-relaxed text-brand-100/80">{description}</span>
                    </span>
                  </li>
                ))}
              </ol>

              <p className="mt-6 border-t border-white/15 pt-4 text-xs leading-relaxed text-brand-100/70">
                تختلف شروط القبول والرسوم ومواعيد التقديم حسب الجامعة والبرنامج.
              </p>
            </div>
          </aside>

          {/* Floating badges */}
          <div className="absolute -top-7 end-6 hidden animate-float-slow items-center gap-2 rounded-2xl border border-line bg-white px-3.5 py-2.5 shadow-lg sm:flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-success-50 text-success-600">
              <CheckCircle2 className="h-5 w-5" />
            </span>
            <span className="text-start">
              <span className="block text-xs font-bold text-ink">خطاب القبول</span>
              <span className="block text-[11px] text-muted">Offer Letter</span>
            </span>
          </div>
          <div className="absolute -bottom-6 -end-3 hidden animate-float items-center gap-2 rounded-2xl border border-line bg-white px-3.5 py-2.5 shadow-lg [animation-delay:-3s] sm:flex lg:-end-8">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gold-50 text-gold-600">
              <Plane className="h-5 w-5" />
            </span>
            <span className="text-start">
              <span className="block text-xs font-bold text-ink">استقبال في المطار</span>
              <span className="block text-[11px] text-muted">كوالالمبور KLIA</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
