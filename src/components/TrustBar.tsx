import React from "react";
import { TRUST_STATS } from "../data/joudaData";

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-white py-8 sm:py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {TRUST_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-3 sm:p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all space-y-1.5"
            >
              <div className="text-xl sm:text-2xl lg:text-4xl font-black tracking-tight font-sans text-slate-900">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800">
                {stat.label}
              </div>
              <div className="text-xs text-slate-600 font-medium">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
