import React from "react";
import { WHATSAPP_BASE_URL, WHATSAPP_DISPLAY, BRAND_MOTTO } from "../data/thiqaData";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  PhoneCall,
  GraduationCap,
} from "lucide-react";

interface HeroProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenAdvisorModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenLeadModal,
  onOpenAdvisorModal,
}) => {
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent("مرحباً فريق ثقة يوني، أود الاستفسار عن التقديم للجامعات المعترف بها والتخصصات الأنسب لي.")}`;

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 sm:pt-36 sm:pb-24 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Copywriting Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F254B]/5 border border-[#0F254B]/15 text-[#0F254B] text-xs font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
              <span className="tracking-wide text-[11px] font-bold text-[#0F254B]">{BRAND_MOTTO}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F254B] leading-[1.18] tracking-tight text-balance">
              بوابتك المعتمدة للتعليم العالي الدولي مع{" "}
              <span className="text-[#D97706]">
                ثقة يوني
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              شريكك الأكاديمي الدولي المباشر. استكشف خياراتك، قارن التخصصات والجامعات،
              واحصل على قبولك الرسمي وتأشيرتك الدراسية بكل شفافية وبدون رسوم خفية.
            </p>

            {/* Dual High-Intent CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenLeadModal("hero_primary")}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 min-h-[48px] rounded-xl text-base font-bold bg-[#F59E0B] hover:bg-[#D97706] text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2"
              >
                <span>قدّم طلب قبولك الآن</span>
                <ArrowLeft className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenAdvisorModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 min-h-[48px] rounded-xl text-base font-bold text-[#0F254B] bg-[#F8FAFC] hover:bg-slate-100 border border-slate-300 shadow-2xs hover:shadow-sm transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2"
              >
                <GraduationCap className="w-5 h-5 text-[#0F254B]" />
                <span>مستشار التخصص والجامعة</span>
              </button>
            </div>

            {/* Trust highlights with refined styling */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2.5 text-xs text-slate-700 font-bold">
              <div className="inline-flex items-center gap-1.5 bg-[#F8FAFC] px-3 py-1.5 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#D97706]" />
                <span>استشارة وتقييم أكاديمي 0$</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-[#F8FAFC] px-3 py-1.5 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#0F254B]" />
                <span>تمثيل جامعي رسمي ومعتمد</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-[#F8FAFC] px-3 py-1.5 rounded-lg border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#D97706]" />
                <span>متابعة تأشيرة EMGS 100%</span>
              </div>
            </div>
          </div>

          {/* Institutional Advisor Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-5 sm:p-7 shadow-sm space-y-6">
              {/* Card Header with Status */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                  <span className="text-xs sm:text-sm font-bold text-[#0F254B]">
                    مكتب الاستشارات الأكاديمية المعتمد
                  </span>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-white text-[#0F254B] border border-slate-200">
                  استشارة رسمية
                </span>
              </div>

              {/* 4 Trust Stat Mini-Cards with Luxury Navy & Gold */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-[#0F254B]/5 border border-[#0F254B]/10 space-y-1 shadow-xs hover:border-[#0F254B]/30 transition-colors">
                  <span className="text-[11px] font-bold text-slate-600">
                    طالب تم توجيههم
                  </span>
                  <p className="text-xl font-black text-[#0F254B] font-sans">
                    +1,500
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-1 shadow-xs hover:border-amber-500/40 transition-colors">
                  <span className="text-[11px] font-bold text-slate-600">
                    جامعة شريكة معتمدة
                  </span>
                  <p className="text-xl font-black text-[#D97706] font-sans">
                    +35
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 shadow-xs hover:border-slate-300 transition-colors">
                  <span className="text-[11px] font-bold text-slate-600">
                    رسوم الاستشارة
                  </span>
                  <p className="text-xl font-black text-[#0F254B] font-sans">
                    0$ مجاناً
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0F254B]/5 border border-[#0F254B]/10 space-y-1 shadow-xs hover:border-[#0F254B]/30 transition-colors">
                  <span className="text-[11px] font-bold text-slate-600">
                    شفافية في التعامل
                  </span>
                  <p className="text-xl font-black text-[#D97706] font-sans">
                    100%
                  </p>
                </div>
              </div>

              {/* Direct advisor phone interactive capsule */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-amber-50/50 border border-slate-200 hover:border-amber-300 transition-all duration-200 group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#0F254B] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-start">
                    <span className="text-[11px] font-bold text-slate-500">
                      تواصل مباشر عبر واتساب:
                    </span>
                    <strong
                      className="text-xs sm:text-sm text-[#0F254B] font-sans tracking-wide"
                      dir="ltr"
                    >
                      {WHATSAPP_DISPLAY}
                    </strong>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#D97706] group-hover:underline flex items-center gap-1">
                  <span>محادثة فورية</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* Verified seal */}
              <div className="flex items-center gap-2 text-xs text-slate-500 justify-center">
                <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                <span>إشراف وتنسيق معتمد لجميع الإجراءات والأوراق الرسمية</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
