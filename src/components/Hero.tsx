import React from "react";
import { WHATSAPP_BASE_URL, WHATSAPP_DISPLAY } from "../data/joudaData";
import {
  ArrowLeft,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  PhoneCall,
} from "lucide-react";

interface HeroProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenAdvisorModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenLeadModal,
  onOpenAdvisorModal: _onOpenAdvisorModal,
}) => {
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent("مرحباً فريق جودة، أود الاستفسار عن التقديم للجامعات الماليزية والتخصصات المتاحة.")}`;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-24 pb-14 sm:pt-32 sm:pb-24 overflow-hidden bg-gradient-to-b from-emerald-50/40 via-white to-white"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-12 start-1/2 -translate-x-1/2 w-[350px] h-[350px] sm:w-[650px] sm:h-[650px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 end-4 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Copywriting Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-900 text-xs font-bold shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span>شريكك المعتمد والرسمي للدراسة في ماليزيا</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight text-balance">
              طريقك المباشر إلى الدراسة في{" "}
              <span className="text-gradient-emerald">ماليزيا</span> يبدأ من
              هنا.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              نضمن لك القبول الأكاديمي الرسمي وتأشيرة الدراسة خطوة بخطوة.
              استشارة مجانية معتمدة بدون رسوم خفية ومرافقة شاملة حتى وصولك الحرم
              الجامعي.
            </p>

            {/* Dual High-Intent CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenLeadModal("hero_primary")}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 min-h-[48px] rounded-2xl text-base font-bold bg-gradient-to-l from-emerald-600 via-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-600/25 hover:shadow-2xl hover:shadow-emerald-600/35 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <span>ابدأ رحلتك الآن مجاناً</span>
                <ArrowLeft className="w-5 h-5" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 min-h-[48px] rounded-2xl text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-md shadow-slate-200/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>تحدث مع مستشار عبر واتساب</span>
              </a>
            </div>

            {/* Trust highlights with refined styling */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2.5 text-xs text-slate-700 font-bold">
              <div className="inline-flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-slate-200/70 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>استشارة وتقييم مجاني 0$</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-slate-200/70 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>قبولات رسمية مباشرة</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-slate-200/70 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>متابعة تأشيرة EMGS 100%</span>
              </div>
            </div>
          </div>

          {/* Interactive Hero Visual / Advisor Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 p-5 sm:p-7 shadow-2xl space-y-6">
              {/* Card Header with Status */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    مستشارك الأكاديمي المباشر
                  </span>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  متصل الآن 🟢
                </span>
              </div>

              {/* 4 Trust Stat Mini-Cards with Glassmorphism */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-emerald-100/30 border border-emerald-100/80 space-y-1 shadow-xs hover:border-emerald-300 transition-colors">
                  <span className="text-[11px] font-bold text-slate-600">
                    طلاب سجّلوا معنا
                  </span>
                  <p className="text-xl font-black text-emerald-900 font-sans">
                    +1,500
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50/80 to-blue-100/30 border border-blue-100/80 space-y-1 shadow-xs hover:border-blue-300 transition-colors">
                  <span className="text-[11px] font-bold text-slate-600">
                    جامعة شريكة معتمدة
                  </span>
                  <p className="text-xl font-black text-blue-900 font-sans">
                    +12
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50/80 to-purple-100/30 border border-purple-100/80 space-y-1 shadow-xs hover:border-purple-300 transition-colors">
                  <span className="text-[11px] font-bold text-slate-600">
                    رسوم الاستشارة
                  </span>
                  <p className="text-xl font-black text-purple-900 font-sans">
                    0$ مجاناً
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50/80 to-amber-100/30 border border-amber-100/80 space-y-1 shadow-xs hover:border-amber-300 transition-colors">
                  <span className="text-[11px] font-bold text-slate-600">
                    شفافية في التعامل
                  </span>
                  <p className="text-xl font-black text-amber-900 font-sans">
                    100%
                  </p>
                </div>
              </div>

              {/* Direct advisor phone interactive capsule */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-200/90 hover:border-emerald-300 transition-all duration-200 group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-start">
                    <span className="text-[11px] font-bold text-slate-500">
                      رقم المستشار المباشر:
                    </span>
                    <strong
                      className="text-xs sm:text-sm text-slate-900 font-sans tracking-wide"
                      dir="ltr"
                    >
                      {WHATSAPP_DISPLAY}
                    </strong>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 group-hover:underline flex items-center gap-1">
                  <span>محادثة فورية</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* Verified seal */}
              <div className="flex items-center gap-2 text-xs text-slate-500 justify-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>إشراف وتنسيق معتمد لجميع الإجراءات</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
