import React from "react";
import { TrendingDown, Globe, Shield, ArrowLeft } from "lucide-react";

interface MalaysiaSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

const STAT_CARDS = [
  {
    icon: TrendingDown,
    stat: "تكلفة دراسة ومعيشة أقل 60%",
    desc: "مقارنة بالدراسة في بريطانيا أو أستراليا أو كندا، مع نفس جودة الاعتماد المزدوج والشهادات الدولية المرموقة.",
  },
  {
    icon: Globe,
    stat: "تعليم باللغة الإنجليزية بالكامل",
    desc: "كافة المناهج والمحاضرات تقدم بالإنجليزية، مع تواجد جامعات مصنفة ضمن أفضل 100 إلى 200 جامعة عالمياً حسب QS.",
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
        <div className="text-center space-y-2.5 sm:space-y-3.5 max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F254B]/5 border border-[#0F254B]/15 text-[#0F254B] text-xs font-bold shadow-2xs">
            <Globe className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>وجهة دراسية عالمية رائدة</span>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#0F254B] tracking-tight leading-tight text-balance">
            لماذا تعد ماليزيا الوجهة الأذكى للطلاب الدوليين؟
          </h2>

          <p className="text-xs sm:text-base text-[#64748B] leading-relaxed font-medium">
            تجمع بين قوة التصنيف الأكاديمي العالمي، الرسوم الميسرة، ونمط الحياة الحديث الآمن.
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {STAT_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-5 sm:p-8 bg-[#F8FAFC] border border-slate-200/90 hover:border-[#F59E0B]/50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 sm:space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F254B]/5 text-[#0F254B] group-hover:bg-[#0F254B] group-hover:text-white transition-colors flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#0F254B] transition-colors">
                  {card.stat}
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-medium">
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
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#0F254B] hover:bg-[#F59E0B] text-white shadow-md transition-all cursor-pointer"
          >
            <span>استكشف برامجك في ماليزيا الآن</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
