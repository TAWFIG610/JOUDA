import React from 'react';
import { WHATSAPP_BASE_URL, WHATSAPP_DISPLAY } from '../data/joudaData';
import { ArrowLeft, MessageSquare, CheckCircle2, Sparkles, Compass, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenAdvisorModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLeadModal, onOpenAdvisorModal }) => {
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent('مرحباً فريق جودة، أود الاستفسار عن التقديم للجامعات الماليزية والتخصصات المتاحة.')}`;

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden bg-white vibrant-mesh-hero">
      
      {/* Light subtle glows */}
      <div className="absolute top-10 start-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 end-0 w-[450px] h-[450px] bg-blue-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copywriting Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>شريكك المعتمد والرسمي للدراسة في ماليزيا</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
              طريقك المباشر إلى الدراسة في <span className="text-gradient-emerald">ماليزيا</span> يبدأ من هنا.
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              احصل على قبولك الجامعي المعتمد وتأشيرتك الرسمية خطوة بخطوة. استشارة مجانية، إجراءات شفافة بدون رسوم خفية، ومرافقة ميدانية متكاملة حتى استقرارك في ماليزيا.
            </p>

            {/* Dual High-Intent CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenLeadModal('hero_primary')}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold bg-gradient-to-l from-emerald-600 via-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 hover:-translate-y-0.5 transition-all focus:outline-none"
              >
                <span>ابدأ رحلتك الآن</span>
                <ArrowLeft className="w-5 h-5" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all focus:outline-none"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>تحدث مع مستشار عبر واتساب</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-600 font-bold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>استشارة وتقييم أكاديمي مجاني</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>قبولات رسمية مباشرة من الجامعات</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>متابعة كاملة لتأشيرة الطالب (EMGS)</span>
              </div>
            </div>

          </div>

          {/* Interactive Hero Visual / Pathway Card */}
          <div className="lg:col-span-5 relative">
            
            <div className="relative rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xl space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-900">
                    مستشارك الأكاديمي المباشر
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  متاح الآن
                </span>
              </div>

              {/* 4 Feature Quick Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1">
                  <span className="text-[10px] font-semibold text-slate-500">القبول الجامعي</span>
                  <p className="text-xs font-bold text-emerald-900">رسمي وسريع</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-1">
                  <span className="text-[10px] font-semibold text-slate-500">تأشيرة EMGS</span>
                  <p className="text-xs font-bold text-blue-900">متابعة 100%</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-1">
                  <span className="text-[10px] font-semibold text-slate-500">الاستقبال والسكن</span>
                  <p className="text-xs font-bold text-purple-900">ميداني وآمن</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-1">
                  <span className="text-[10px] font-semibold text-slate-500">دراسة الملف</span>
                  <p className="text-xs font-bold text-amber-900">مجاني 0$</p>
                </div>
              </div>

              {/* Interactive Matcher trigger banner */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-emerald-600" />
                  <h4 className="text-xs font-bold text-slate-900">
                    لست متأكداً أي جامعة وتخصص يناسبك؟
                  </h4>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  استخدم أداة المطابقة الذكية لمعرفة الجامعة والتخصص والميزانية المناسبة لك في 3 خطوات.
                </p>
                <button
                  onClick={onOpenAdvisorModal}
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-xs"
                >
                  جرّب مستشار التخصص الآن
                </button>
              </div>

              {/* Direct advisor phone preview */}
              <div className="flex items-center gap-2 text-[11px] text-slate-500 justify-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>رقم المستشار المعتمد: <strong className="text-slate-800 font-sans" dir="ltr">{WHATSAPP_DISPLAY}</strong></span>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
