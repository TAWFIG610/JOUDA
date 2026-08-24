import React from 'react';
import { JOUDA_STEPS } from '../data/joudaData';
import { CheckCircle, ArrowLeft } from 'lucide-react';

interface SolutionSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onOpenLeadModal }) => {
  return (
    <section className="py-20 lg:py-24 bg-[#FAFCFF] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-xs">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>منظومة جودة المتكاملة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            من أول سؤال... إلى <span className="text-gradient-emerald">أول يوم لك في جامعتك بماليزيا</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            قسمنا رحلتك إلى 6 محطات واضحة ومنظمة لتصل وأنت مرتاح البال ومستعد لبدء دراستك بنجاح.
          </p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {JOUDA_STEPS.map((s) => (
            <div
              key={s.step}
              className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500/40 hover:shadow-lg transition-all space-y-3 group shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-emerald-600 font-sans">
                  {s.step}
                </span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                  {s.badge}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {s.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quick CTA */}
        <div className="text-center">
          <button
            onClick={() => onOpenLeadModal('solution_section')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-all shadow-md shadow-emerald-600/20"
          >
            <span>ابدأ الخطوة الأولى الآن مجاناً</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
