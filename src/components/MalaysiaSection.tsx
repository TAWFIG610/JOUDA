import React from "react";
import { WalletCards, Globe, Shield, ArrowLeft } from "lucide-react";

interface MalaysiaSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

const STAT_CARDS = [
  {
    icon: WalletCards,
    stat: "خيارات متنوعة للدراسة والمعيشة",
    desc: "تختلف الرسوم وتكاليف المعيشة حسب الجامعة والمدينة ونمط السكن؛ قارن التكلفة الكاملة قبل اتخاذ القرار.",
  },
  {
    icon: Globe,
    stat: "برامج بلغات ومتطلبات مختلفة",
    desc: "لغة التدريس وشروط اللغة تختلف من برنامج لآخر؛ تحقق من متطلبات البرنامج مباشرة قبل التقديم.",
  },
  {
    icon: Shield,
    stat: "بيئة إسلامية آمنة ومجتمع مضياف",
    desc: "بيئة مريحة وملائمة للعائلات والطلاب العرب، أطعمة حلال متوفرة، وسهولة في إصدار وتجديد إقامة الطالب.",
  },
];

export const MalaysiaSection: React.FC<MalaysiaSectionProps> = ({
  onOpenLeadModal,
}) => {
  return (
    <section
      id="why-malaysia"
      className="py-10 sm:py-20 lg:py-24 bg-white relative border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center sm:mb-14">
          <div className="section-eyebrow">
            <Globe className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>وجهة دراسية عالمية رائدة</span>
          </div>

          <h2 className="section-title">
            لماذا تعد ماليزيا الوجهة الأذكى للطلاب الدوليين؟
          </h2>

          <p className="section-description">
            تعرّف على بيئة الدراسة والحياة، ثم قارن التكاليف والشروط وفق احتياجك والبرنامج الذي تختاره.
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:mb-14 sm:gap-6 md:grid-cols-3">
          {STAT_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="content-card space-y-4 bg-[#F8FAFC] p-6 sm:p-8 group hover:bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F254B]/5 text-[#0F254B] group-hover:bg-[#0F254B] group-hover:text-white transition-colors flex items-center justify-center">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#0F254B] transition-colors">
                  {card.stat}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Call */}
        <div className="text-center">
          <button
            onClick={() => onOpenLeadModal("why_malaysia_cta")}
            className="inline-flex min-h-12 items-center gap-2.5 rounded-xl bg-[#0F254B] px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#17376B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2"
          >
            <span>استكشف برامجك في ماليزيا الآن</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
