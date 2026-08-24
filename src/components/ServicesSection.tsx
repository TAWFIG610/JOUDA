import React from 'react';
import { CORE_SERVICES } from '../data/joudaData';
import { Sparkles, ArrowLeft } from 'lucide-react';

interface ServicesSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenLeadModal }) => {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-[#FAFCFF] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>خدمات شاملة للطلاب الدوليين</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            كل ما تحتاجه لبدء دراستك في <span className="text-gradient-emerald">ماليزيا بكل ثقة</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            خدمات متكاملة تغطي كافة مراحل التقديم والتأشيرة والاستقبال لتضمن تجربة دراسية ناجحة ومريحة.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((s) => (
            <div
              key={s.id}
              className="p-4 sm:p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between space-y-4 shadow-xs group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {s.highlight}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-200">
                  {s.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {s.desc}
                </p>
              </div>

              <button
                onClick={() => onOpenLeadModal(`service_${s.id}`)}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <span>طلب هذه الخدمة</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
