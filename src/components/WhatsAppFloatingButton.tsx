import React from "react";
import { WHATSAPP_BASE_URL, WHATSAPP_DISPLAY } from "../data/joudaData";
import { MessageCircle } from "lucide-react";

export const WhatsAppFloatingButton: React.FC = () => {
  const message = encodeURIComponent(
    "مرحباً فريق جودة، أود الاستفسار عن فرص الدراسة في ماليزيا والتخصصات المتاحة.",
  );
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${message}`;

  return (
    <div className="fixed bottom-4 start-4 sm:bottom-6 sm:start-6 z-40 group">
      {/* Tooltip */}
      <div className="absolute bottom-full start-0 mb-2.5 hidden sm:group-hover:flex items-center gap-2 whitespace-nowrap px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-2xl border border-slate-800 animate-in fade-in slide-in-from-bottom-1">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>تحدث مع المستشار مباشرة:</span>
        <span className="font-sans text-emerald-400" dir="ltr">
          {WHATSAPP_DISPLAY}
        </span>
        <div className="absolute top-full start-5 -translate-y-1/2 border-4 border-transparent border-t-slate-900" />
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل مع مستشار جودة عبر واتساب"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-600/40 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 cursor-pointer ring-4 ring-white/80"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-25 pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
