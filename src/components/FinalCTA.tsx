import React from "react";
import { WHATSAPP_BASE_URL, WHATSAPP_DISPLAY, BRAND_MOTTO } from "../data/thiqaData";
import { ArrowLeft, BookOpen, CheckCircle2, GraduationCap, MessageCircle, PhoneCall, ShieldCheck } from "lucide-react";
import { Reveal } from "./ui/Reveal";

interface FinalCTAProps {
  onOpenLeadModal: (source?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenLeadModal }) => {
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent("مرحباً فريق ثقة يوني، أود بدء التقديم واستخراج القبول الجامعي.")}`;

  return (
    <section className="relative bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-900 to-ink px-5 py-14 text-center text-white shadow-[0_40px_80px_-40px_rgb(10_24_56/0.8)] sm:px-10 sm:py-20 lg:px-16">
            <div className="bg-dots-light absolute inset-0 -z-10" aria-hidden="true" />
            <div className="absolute -top-32 start-1/4 -z-10 h-80 w-80 animate-blob rounded-full bg-gold-500/25 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-40 end-0 -z-10 h-96 w-96 animate-blob rounded-full bg-brand-500/30 blur-3xl [animation-delay:-8s]" aria-hidden="true" />
            <GraduationCap className="absolute end-[8%] top-10 -z-10 hidden h-16 w-16 animate-float text-gold-300/40 md:block" aria-hidden="true" />
            <BookOpen className="absolute bottom-12 start-[8%] -z-10 hidden h-12 w-12 animate-float-slow text-white/20 md:block" aria-hidden="true" />

            <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold text-gold-300 backdrop-blur-sm">
                {BRAND_MOTTO}
              </span>

              <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                قرارك الأكاديمي اليوم يصنع <span className="text-gradient-gold">مستقبلك المهني غداً.</span>
              </h2>

              <p className="mx-auto max-w-2xl text-base leading-relaxed text-brand-100/85 sm:text-lg">
                ناقش خيارات الدراسة ومتطلبات القبول مع فريق ثقة يوني، ثم قرر خطوتك التالية بناءً على معلومات واضحة.
              </p>

              <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
                <button
                  type="button"
                  onClick={() => onOpenLeadModal("final_cta_primary")}
                  className="btn btn-primary btn-shimmer min-h-14 px-9 text-base focus-visible:ring-offset-brand-900"
                >
                  <span>ابدأ طلب القبول الآن</span>
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-glass min-h-14 px-7 text-base">
                  <MessageCircle className="h-5 w-5 text-gold-300" />
                  <span>تواصل مباشرة عبر واتساب</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-brand-100/85">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-gold-300" />
                  شريك معتمد وممثل رسمي للجامعات
                </span>
                <span className="flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-gold-300" />
                  <strong dir="ltr" className="font-latin text-white">{WHATSAPP_DISPLAY}</strong>
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold-300" />
                  اسأل عن خطوات تقييم المؤهلات
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
