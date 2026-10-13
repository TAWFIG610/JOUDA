import React from "react";
import { Languages, ShieldCheck, WalletCards } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

interface MalaysiaSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

const POINTS = [
  {
    icon: WalletCards,
    title: "التكلفة",
    desc: "تختلف الرسوم وتكاليف المعيشة حسب الجامعة والمدينة ونوع السكن. اطلب منا مقارنة التكلفة الكاملة لخياراتك قبل أن تقرر.",
  },
  {
    icon: Languages,
    title: "لغة الدراسة",
    desc: "كثير من البرامج المتاحة للطلاب الدوليين تُدرَّس بالإنجليزية، وشروط اللغة تختلف من برنامج لآخر. إن لم تكن لديك شهادة لغة، اسأل عن خيار دورة اللغة قبل البرنامج.",
  },
  {
    icon: ShieldCheck,
    title: "الحياة اليومية",
    desc: "بلد أغلبيته مسلمة، والطعام الحلال متوفر بسهولة، والبيئة مريحة للطلاب العرب وعائلاتهم.",
  },
];

export const MalaysiaSection: React.FC<MalaysiaSectionProps> = ({ onOpenLeadModal }) => (
  <section id="why-malaysia" className="bg-paper py-14 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        align="start"
        title="ما الذي تحتاج معرفته عن الدراسة في ماليزيا"
        description="ثلاثة أمور يسألنا عنها الطلاب وأهاليهم قبل أي شيء آخر."
      />

      <div className="grid gap-8 md:grid-cols-3 md:gap-10">
        {POINTS.map(({ icon: Icon, title, desc }, idx) => (
          <Reveal key={title} delay={idx * 80} className="border-t-2 border-brand-700 pt-5">
            <Icon className="h-6 w-6 text-brand-700" aria-hidden="true" />
            <h3 className="mt-3 text-xl font-bold text-ink">{title}</h3>
            <p className="mt-2 text-base leading-relaxed text-muted">{desc}</p>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-base text-muted">
        تريد أرقاماً لجامعة معيّنة؟{" "}
        <button type="button" onClick={() => onOpenLeadModal("why_malaysia_cta")} className="text-link">
          اطلب مقارنة تكاليف
        </button>
      </p>
    </div>
  </section>
);
