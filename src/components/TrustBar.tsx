import React from "react";
import { TRUST_STATS } from "../data/joudaData";

const statColorMap: Record<
  string,
  { text: string; bg: string; border: string }
> = {
  emerald: {
    text: "text-emerald-700",
    bg: "bg-emerald-50/50",
    border: "border-emerald-100/80 hover:border-emerald-300",
  },
  blue: {
    text: "text-blue-700",
    bg: "bg-blue-50/50",
    border: "border-blue-100/80 hover:border-blue-300",
  },
  purple: {
    text: "text-purple-700",
    bg: "bg-purple-50/50",
    border: "border-purple-100/80 hover:border-purple-300",
  },
  amber: {
    text: "text-amber-700",
    bg: "bg-amber-50/50",
    border: "border-amber-100/80 hover:border-amber-300",
  },
};

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-white py-10 sm:py-14 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6">
          {TRUST_STATS.map((stat, idx) => {
            const colors = statColorMap[stat.color] || statColorMap.emerald;
            return (
              <div
                key={idx}
                className={`text-center p-4 sm:p-6 rounded-3xl ${colors.bg} border ${colors.border} hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 space-y-1.5 shadow-xs`}
              >
                <div
                  className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight font-sans ${colors.text}`}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
