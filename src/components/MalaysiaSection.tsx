import React from "react";
import { TrendingDown, Globe, Shield, ArrowLeft } from "lucide-react";

interface MalaysiaSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

const STAT_CARDS = [
  {
    icon: TrendingDown,
    color: "emerald",
    stat: "تكلفة أقل بنسبة 60%",
    desc: "مقارنة بالدراسة في أوروبا أو كندا مع نفس جودة الشهادة.",
  },
  {
    icon: Globe,
    color: "blue",
    stat: "شهادات معترف بها دولياً",
    desc: "الجامعات الماليزية معتمدة من وزارة التعليم وهيئات دولية.",
  },
  {
    icon: Shield,
    color: "amber",
    stat: "بيئة آمنة وودية للعرب",
    desc: "مجتمع مسلم، حياة مريحة، وكوالالمبور وجهة طلابية عالمية.",
  },
];

const colorMap: Record<string, { bg: string; text: string; icon: string }> = {
  emerald: {
    bg: "bg-emerald-100",
    text: "text-emerald-900",
    icon: "text-emerald-600",
  },
  blue: { bg: "bg-blue-100", text: "text-blue-900", icon: "text-blue-600" },
  amber: { bg: "bg-amber-100", text: "text-amber-900", icon: "text-amber-600" },
};

export const MalaysiaSection: React.FC<MalaysiaSectionProps> = ({
  onOpenLeadModal,
}) => {
  return (
    <section
      id="why-malaysia"
      className="py-12 sm:py-16 lg:py-24 bg-white relative border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-xs">
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            <span>وجهة التعليم الأولى في آسيا</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            لماذا تختار ماليزيا{" "}
            <span className="text-gradient-emerald">وجهة دراستك؟</span>
          </h2>
        </div>

        {/* 3 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 sm:mb-14">
          {STAT_CARDS.map((card, idx) => {
            const colors = colorMap[card.color];
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-200 space-y-3 shadow-xs text-center"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center mx-auto`}
                >
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className={`text-lg font-extrabold ${colors.text}`}>
                  {card.stat}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
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
            className="inline-flex items-center gap-2 px-8 py-4 min-h-[48px] rounded-2xl text-base font-bold bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <span>ابدأ رحلتك في ماليزيا</span>
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
