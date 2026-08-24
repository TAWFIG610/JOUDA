import React from 'react';
import { COMPARISON_ROWS } from '../data/joudaData';
import { ShieldCheck, CheckCircle2, XCircle, ArrowLeft } from 'lucide-react';

interface WhyJoudaProps {
  onOpenLeadModal: (source?: string) => void;
}

export const WhyJoudaSection: React.FC<WhyJoudaProps> = ({ onOpenLeadModal }) => {
  return (
    <section id="why-jouda" className="py-20 lg:py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>الفرق الذي يصنعه فريق جودة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            لماذا يختار الطلاب <span className="text-gradient-emerald">منظومة جَـوْدَة؟</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            مقارنة واضحة توضح الفارق الجوهري بين التعامل مع وكيل عشوائي وبين العمل مع منظومة جودة الاحترافية.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-md mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-slate-50 border-b border-slate-200 p-4 text-xs font-bold text-slate-700 hidden lg:grid">
            <div className="lg:col-span-4">المعيار والخدمة</div>
            <div className="lg:col-span-4 text-rose-700">الوكيل أو المكتب التقليدي</div>
            <div className="lg:col-span-4 text-emerald-700">منظومة جَـوْدَة (JOUDA)</div>
          </div>

          <div className="divide-y divide-slate-100">
            {COMPARISON_ROWS.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 p-5 gap-4 items-center">
                <div className="lg:col-span-4 font-bold text-sm text-slate-900">
                  {row.feature}
                </div>
                <div className="lg:col-span-4 flex items-start gap-2 text-xs text-rose-800 bg-rose-50 p-3 rounded-xl border border-rose-100">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{row.traditional}</span>
                </div>
                <div className="lg:col-span-4 flex items-start gap-2 text-xs text-emerald-900 bg-emerald-50 p-3 rounded-xl border border-emerald-200 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{row.jouda}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => onOpenLeadModal('why_jouda_cta')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-all shadow-md"
          >
            <span>انضم للطلاب المسجلين مع جودة الآن</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
