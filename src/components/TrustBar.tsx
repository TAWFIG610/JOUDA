import React from "react";
import { TRUST_STATS } from "../data/thiqaData";

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-5 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#F59E0B]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-2 shadow-xs group"
            >
              <div
                className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight font-sans text-[#0F254B] group-hover:text-[#D97706] transition-colors"
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0F172A]">
                {stat.label}
              </div>
              <div className="text-xs text-[#64748B] font-medium">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
