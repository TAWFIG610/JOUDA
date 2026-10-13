import React from "react";
import { ArrowLeft, Globe, Shield, WalletCards } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

interface MalaysiaSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

const STAT_CARDS = [
  {
    icon: WalletCards,
    stat: "خيارات متنوعة للدراسة والمعيشة",
    desc: "تختلف الرسوم وتكاليف المعيشة حسب الجامعة والمدينة ونمط السكن؛ قارن التكلفة الكاملة قبل اتخاذ القرار.",
    tone: "from-gold-100 to-gold-200 text-gold-700",
  },
  {
    icon: Globe,
    stat: "برامج بلغات ومتطلبات مختلفة",
    desc: "لغة التدريس وشروط اللغة تختلف من برنامج لآخر؛ تحقق من متطلبات البرنامج مباشرة قبل التقديم.",
    tone: "from-brand-50 to-brand-100 text-brand-700",
  },
  {
    icon: Shield,
    stat: "بيئة إسلامية آمنة ومجتمع مضياف",
    desc: "بيئة مريحة وملائمة للعائلات والطلاب العرب، أطعمة حلال متوفرة، وسهولة في إصدار وتجديد إقامة الطالب.",
    tone: "from-success-50 to-success-100 text-success-700",
  },
];

/** Simplified Kuala Lumpur skyline (Petronas Towers + KL Tower). */
const Skyline: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 1200 160" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true">
    <g fill="currentColor">
      <rect x="40" y="110" width="60" height="50" />
      <rect x="110" y="90" width="40" height="70" />
      <rect x="160" y="120" width="70" height="40" />
      <rect x="240" y="80" width="36" height="80" />
      <rect x="286" y="104" width="54" height="56" />
      {/* KL Tower */}
      <rect x="384" y="60" width="8" height="100" />
      <ellipse cx="388" cy="58" rx="18" ry="10" />
      <rect x="386" y="20" width="4" height="30" />
      <rect x="420" y="112" width="60" height="48" />
      <rect x="490" y="96" width="44" height="64" />
      {/* Petronas Twin Towers */}
      <path d="M560 160 V60 l8-10 V30 l6-8 6 8 v20 l8 10 V160 Z" />
      <path d="M640 160 V60 l8-10 V30 l6-8 6 8 v20 l8 10 V160 Z" />
      <rect x="588" y="92" width="52" height="5" />
      <rect x="700" y="100" width="50" height="60" />
      <rect x="760" y="76" width="34" height="84" />
      <rect x="804" y="118" width="72" height="42" />
      <rect x="886" y="92" width="44" height="68" />
      <rect x="940" y="110" width="66" height="50" />
      <rect x="1016" y="84" width="38" height="76" />
      <rect x="1064" y="120" width="96" height="40" />
    </g>
  </svg>
);

export const MalaysiaSection: React.FC<MalaysiaSectionProps> = ({ onOpenLeadModal }) => (
  <section id="why-malaysia" className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 to-paper pb-0 pt-16 sm:pt-24">
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        icon={Globe}
        eyebrow="وجهة دراسية عالمية رائدة"
        title={
          <>
            لماذا تُعد ماليزيا <span className="text-gradient-gold">الوجهة الأذكى</span> للطلاب الدوليين؟
          </>
        }
        description="تعرّف على بيئة الدراسة والحياة، ثم قارن التكاليف والشروط وفق احتياجك والبرنامج الذي تختاره."
      />

      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
        {STAT_CARDS.map(({ icon: Icon, stat, desc, tone }, idx) => (
          <Reveal key={stat} delay={idx * 110}>
            <article className="content-card group h-full space-y-4 p-6 sm:p-8">
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${tone}`}
              >
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold text-ink">{stat}</h3>
              <p className="text-base leading-relaxed text-muted">{desc}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <button type="button" onClick={() => onOpenLeadModal("why_malaysia_cta")} className="btn btn-dark px-8">
          <span>استكشف برامجك في ماليزيا الآن</span>
          <ArrowLeft className="h-4 w-4" />
        </button>
      </Reveal>
    </div>

    <Skyline className="mt-10 h-20 w-full text-brand-100/70 sm:h-28" />
  </section>
);
