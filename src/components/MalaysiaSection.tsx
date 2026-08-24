import React from 'react';
import { WHY_MALAYSIA_PILLARS } from '../data/joudaData';
import { Globe } from 'lucide-react';

export const MalaysiaSection: React.FC = () => {
  return (
    <section id="why-malaysia" className="py-12 sm:py-16 lg:py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-xs">
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            <span>وجهة التعليم الأولى في آسيا</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            لماذا يختار آلاف الطلاب الدوليين <span className="text-gradient-emerald">الدراسة في ماليزيا؟</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            بيئة تعليمية عالمية، أمان فائق، معيشة ميسرة، واعتراف أكاديمي معتمد في كافة أنحاء العالم.
          </p>
        </div>

        {/* 5 Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_MALAYSIA_PILLARS.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 rounded-3xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 transition-all duration-200 space-y-3 shadow-xs"
            >
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-sm">
                0{idx + 1}
              </div>

              <h3 className="text-base font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
