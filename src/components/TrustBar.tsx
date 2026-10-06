import React from "react";
import { TRUST_STATS } from "../data/thiqaData";

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-white py-8 sm:py-14 lg:py-16 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {TRUST_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-3.5 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#F59E0B]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-1 sm:space-y-2 shadow-2xs group"
            >
              <div
                className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight font-sans text-[#0F254B] group-hover:text-[#D97706] transition-colors"
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0F172A]">
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-xs text-[#64748B] font-medium leading-tight">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
