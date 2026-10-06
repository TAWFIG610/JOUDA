import React from "react";
import { WHATSAPP_BASE_URL, WHATSAPP_DISPLAY, BRAND_NAME_EN } from "../data/thiqaData";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloatingButton: React.FC = () => {
  const message = encodeURIComponent(
    `مرحباً فريق ${BRAND_NAME_EN}، أود الاستفسار عن فرص القبول في الجامعات الدولية والتخصصات المتاحة.`,
  );
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${message}`;

  return (
    <div className="fixed bottom-4 start-4 sm:bottom-6 sm:start-6 z-40 group">
      {/* Tooltip */}
      <div className="absolute bottom-full start-0 mb-2.5 hidden sm:group-hover:flex items-center gap-2 whitespace-nowrap px-3.5 py-2 rounded-xl bg-[#0F254B] text-white text-xs font-bold shadow-2xl border border-white/10 animate-in fade-in slide-in-from-bottom-1">
        <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
        <span>مستشار {BRAND_NAME_EN} المباشر:</span>
        <span className="font-sans text-[#F59E0B]" dir="ltr">
          {WHATSAPP_DISPLAY}
        </span>
        <div className="absolute top-full start-5 -translate-y-1/2 border-4 border-transparent border-t-[#0F254B]" />
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل مع مستشار THIQA UNI عبر واتساب"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-900/30 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2 cursor-pointer ring-4 ring-white"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
