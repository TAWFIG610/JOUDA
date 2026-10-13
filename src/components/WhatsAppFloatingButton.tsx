import React from "react";
import { WHATSAPP_BASE_URL, WHATSAPP_DISPLAY, BRAND_NAME_AR } from "../data/thiqaData";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloatingButton: React.FC = () => {
  const message = encodeURIComponent(
    `مرحباً فريق ${BRAND_NAME_AR}، أود الاستفسار عن فرص القبول في الجامعات الدولية والتخصصات المتاحة.`,
  );
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${message}`;

  return (
    <div className="group fixed bottom-6 start-6 z-30 hidden lg:block">
      <div className="pointer-events-none absolute bottom-full start-0 mb-3 flex translate-y-1 items-center gap-2 whitespace-nowrap rounded-xl bg-ink px-3.5 py-2 text-xs font-bold text-white opacity-0 shadow-xl transition-all duration-200 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100">
        <span>مستشار {BRAND_NAME_AR} المباشر:</span>
        <span className="font-latin text-gold-300" dir="ltr">{WHATSAPP_DISPLAY}</span>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل مع مستشار ثقة يوني عبر واتساب"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-success-600 text-white shadow-lg ring-4 ring-white transition-all duration-200 hover:scale-105 hover:bg-success-700 active:scale-95"
      >
        <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-success-600" aria-hidden="true" />
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
};
