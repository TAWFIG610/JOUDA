import React from "react";
import { TrendingDown, Globe, Shield, ArrowLeft } from "lucide-react";

interface MalaysiaSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

const STAT_CARDS = [
  {
    icon: TrendingDown,
    color: "emerald",
    stat: "تكلفة دراسة ومعيشة أقل 60%",
    desc: "مقارنة بالدراسة في بريطانيا أو أستراليا مع نفس جودة الاعتماد والشهادات الدولية.",
  },
  {
    icon: Globe,
    color: "blue",
    stat: "شهادات معترف بها دولياً بالإنجليزية",
    desc: "دراسة كاملة باللغة الإنجليزية في جامعات مصنفة عالمياً ضمن تصنيفات QS العالمية.",
  },
  {
    icon: Shield,
    color: "amber",
    stat: "بيئة آمنة ومجتمع مضياف للطلاب العرب",
    desc: "بيئة إسلامية متعددة الثقافات ونمط حياة مريح يضمن الاستقرار والاندماج السريع.",
  },
];

const colorMap: Record<
  string,
  { bg: string; text: string; icon: string; border: string }
> = {
  emerald: {
    bg: "bg-emerald-100/80",
    text: "text-emerald-900",
    icon: "text-emerald-700",
    border: "hover:border-emerald-300",
  },
  blue: {
    bg: "bg-blue-100/80",
    text: "text-blue-900",
    icon: "text-blue-700",
    border: "hover:border-blue-300",
  },
  amber: {
    bg: "bg-amber-100/80",
    text: "text-amber-900",
    icon: "text-amber-700",
    border: "hover:border-amber-300",
  },
};

export const MalaysiaSection: React.FC<MalaysiaSectionProps> = ({
  onOpenLeadModal,
}) => {
  return (
    <section
      id="why-malaysia"
      className="py-14 sm:py-20 lg:py-28 bg-[#FAFCFF] relative border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 text-xs font-bold shadow-xs">
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            <span>وجهة التعليم الأولى في آسيا</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight text-balance">
            لماذا تختار ماليزيا{" "}
            <span className="text-gradient-emerald">
              وجهة دراستك الأكاديمية؟
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            تجمع ماليزيا بين الجودة العالمية في التعليم والتكلفة الاقتصادية
            المدروسة.
          </p>
        </div>

        {/* 3 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-14">
          {STAT_CARDS.map((card, idx) => {
            const colors = colorMap[card.color];
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 ${colors.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3.5 shadow-sm text-center group`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mx-auto shadow-xs group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                <h3 className={`text-lg font-black ${colors.text}`}>
                  {card.stat}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => onOpenLeadModal("malaysia_cta")}
            className="inline-flex items-center gap-2.5 px-9 py-4 min-h-[48px] rounded-2xl text-sm font-bold bg-gradient-to-l from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <span>ابدأ رحلتك في ماليزيا الآن</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
