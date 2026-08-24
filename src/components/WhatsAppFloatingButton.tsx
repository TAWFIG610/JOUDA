import React from 'react';
import { WHATSAPP_BASE_URL, WHATSAPP_DISPLAY } from '../data/joudaData';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const message = encodeURIComponent('مرحباً فريق جودة، أود الاستفسار عن فرص الدراسة في ماليزيا والتخصصات المتاحة.');
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${message}`;

  return (
    <div className="fixed bottom-4 start-4 sm:bottom-6 sm:start-6 z-40 group">
      {/* Tooltip */}
      <div className="absolute bottom-full start-0 mb-2 hidden sm:group-hover:block whitespace-nowrap px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-lg border border-slate-800 animate-in fade-in slide-in-from-bottom-1">
        تحدث مع المستشار مباشرة ({WHATSAPP_DISPLAY})
        <div className="absolute top-full start-4 -translate-y-1/2 border-4 border-transparent border-t-slate-900" />
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-600/30 hover:scale-105 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 cursor-pointer"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30 pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
