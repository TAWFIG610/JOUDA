import React from "react";
import { Languages, ShieldCheck, WalletCards } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";
import { useLang } from "../i18n/LanguageContext";

interface MalaysiaSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

const POINTS = [
  {
    icon: WalletCards,
    title: { ar: "التكلفة", en: "Cost" },
    desc: {
      ar: "تختلف الرسوم وتكاليف المعيشة حسب الجامعة والمدينة ونوع السكن. اطلب منا مقارنة التكلفة الكاملة لخياراتك قبل أن تقرر.",
      en: "Fees and living costs depend on the university, the city and the type of housing. Ask us for a full cost comparison of your options before you decide.",
    },
  },
  {
    icon: Languages,
    title: { ar: "لغة الدراسة", en: "Language of study" },
    desc: {
      ar: "كثير من البرامج المتاحة للطلاب الدوليين تُدرَّس بالإنجليزية، وشروط اللغة تختلف من برنامج لآخر. إن لم تكن لديك شهادة لغة، اسأل عن خيار دورة اللغة قبل البرنامج.",
      en: "Many programs open to international students are taught in English, and language requirements differ by program. If you don't have a language certificate, ask about an English course before your program.",
    },
  },
  {
    icon: ShieldCheck,
    title: { ar: "الحياة اليومية", en: "Daily life" },
    desc: {
      ar: "بلد أغلبيته مسلمة، والطعام الحلال متوفر بسهولة، والبيئة مريحة للطلاب العرب وعائلاتهم.",
      en: "A Muslim-majority country where halal food is easy to find, and a comfortable place for Arab students and their families.",
    },
  },
];

const TEXT = {
  ar: {
    title: "ما الذي تحتاج معرفته عن الدراسة في ماليزيا",
    description: "ثلاثة أمور يسألنا عنها الطلاب وأهاليهم قبل أي شيء آخر.",
    want: "تريد أرقاماً لجامعة معيّنة؟",
    cta: "اطلب مقارنة تكاليف",
  },
  en: {
    title: "What to know about studying in Malaysia",
    description: "Three things students and parents ask us about before anything else.",
    want: "Want figures for a specific university?",
    cta: "Ask for a cost comparison",
  },
};

export const MalaysiaSection: React.FC<MalaysiaSectionProps> = ({ onOpenLeadModal }) => {
  const { lang, t } = useLang();
  const text = TEXT[lang];

  return (
    <section id="why-malaysia" className="bg-paper py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader align="start" title={text.title} description={text.description} />

        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {POINTS.map(({ icon: Icon, title, desc }, idx) => (
            <Reveal key={title.en} delay={idx * 80} className="border-t-2 border-brand-700 pt-5">
              <Icon className="h-6 w-6 text-brand-700" aria-hidden="true" />
              <h3 className="mt-3 text-xl font-bold text-ink">{t(title)}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted">{t(desc)}</p>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-base text-muted">
          {text.want}{" "}
          <button type="button" onClick={() => onOpenLeadModal("why_malaysia_cta")} className="text-link">
            {text.cta}
          </button>
        </p>
      </div>
    </section>
  );
};
