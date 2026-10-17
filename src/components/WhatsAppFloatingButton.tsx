import React from "react";
import { whatsappUrl } from "../data/thiqaData";
import { BrandIcon } from "./ui/BrandIcon";
import { useLang } from "../i18n/LanguageContext";

const MESSAGE = {
  ar: "مرحباً فريق ثقة يوني، أود الاستفسار عن الدراسة في ماليزيا.",
  en: "Hello Thiqa Uni team, I'd like to ask about studying in Malaysia.",
};

/** The one WhatsApp shortcut on the page (the other is in the footer). */
export const WhatsAppFloatingButton: React.FC = () => {
  const { lang } = useLang();
  return (
    <a
      href={whatsappUrl(MESSAGE[lang])}
      target="_blank"
      rel="noopener noreferrer"
      data-place="floating"
      aria-label="WhatsApp"
      className="fixed bottom-4 end-4 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-[0_2px_8px_rgba(0,0,0,0.18)] [body.scroll-locked_&]:hidden"
    >
      <BrandIcon name="whatsapp" className="h-7.5 w-7.5" />
    </a>
  );
};
