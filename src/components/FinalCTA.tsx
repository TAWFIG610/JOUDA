import React from "react";
import { WHATSAPP_BASE_URL, WHATSAPP_DISPLAY, BRAND_MOTTO } from "../data/thiqaData";
import {
  ArrowLeft,
  MessageSquare,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

interface FinalCTAProps {
  onOpenLeadModal: (source?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenLeadModal }) => {
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent("مرحباً فريق ثقة يوني، أود بدء التقديم واستخراج القبول الجامعي.")}`;

  return (
    <section className="relative border-t border-slate-200 bg-[#F8FAFC] py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl border border-[#0F254B] bg-[#0F254B] px-5 py-10 text-center text-white shadow-xl shadow-[#0F254B]/15 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="pointer-events-none absolute -end-20 -top-36 -z-10 h-96 w-96 rounded-full border border-white/10" aria-hidden="true" />
          <div className="pointer-events-none absolute -end-4 -top-20 -z-10 h-64 w-64 rounded-full border border-white/10" aria-hidden="true" />
          <div className="pointer-events-none absolute -start-28 -bottom-52 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" aria-hidden="true" />
          <div className="mx-auto max-w-3xl space-y-5 sm:space-y-7">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-amber-300 text-xs font-bold">
            <span className="tracking-wide text-[11px] font-bold">{BRAND_MOTTO}</span>
          </div>

          {/* Heading */}
          <h2 className="text-balance text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-5xl">
            قرارك الأكاديمي اليوم يصنع{" "}
            <span className="text-[#F59E0B]">مستقبلك المهني غداً.</span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-sm font-medium leading-relaxed text-slate-300 sm:text-base lg:text-lg">
            ناقش خيارات الدراسة ومتطلبات القبول مع فريق ثقة يوني، ثم قرر خطوتك التالية بناءً على معلومات واضحة.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col items-stretch justify-center gap-3 pt-1 sm:flex-row sm:items-center sm:gap-4 sm:pt-2">
            <button
              onClick={() => onOpenLeadModal("final_cta_primary")}
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-thiqa-gold px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-thiqa-gold-hover hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F254B] sm:w-auto sm:px-9 sm:text-base"
            >
              <span>ناقش طلب القبول مع مستشار</span>
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-colors duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F254B] sm:w-auto sm:px-7 sm:text-base"
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-[#F59E0B]" />
              <span>تواصل مباشرة عبر واتساب</span>
            </a>
          </div>

          {/* Contact Bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
              <span>شريك معتمد وممثل رسمي للجامعات</span>
            </span>
            <span className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-[#F59E0B]" />
              <strong dir="ltr" className="font-sans text-white">{WHATSAPP_DISPLAY}</strong>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
              <span>اسأل عن خطوات تقييم المؤهلات</span>
            </span>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
