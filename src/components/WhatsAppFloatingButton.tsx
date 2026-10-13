import React from "react";
import { WHATSAPP_BASE_URL, BRAND_NAME_AR } from "../data/thiqaData";
import { MessageCircle } from "lucide-react";
import { usePageScroll } from "../hooks/useScroll";

/** Desktop-only WhatsApp shortcut; appears after the hero so it never covers the main buttons. */
export const WhatsAppFloatingButton: React.FC = () => {
  const { scrolled } = usePageScroll();
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    `مرحباً فريق ${BRAND_NAME_AR}، أود الاستفسار عن الدراسة في ماليزيا.`,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      className={`fixed bottom-6 end-6 z-30 hidden h-12 items-center gap-2 rounded-full bg-success-600 pe-5 ps-4 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-success-700 lg:flex ${
        scrolled ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      tabIndex={scrolled ? 0 : -1}
    >
      <MessageCircle className="h-5 w-5" />
      واتساب
    </a>
  );
};
