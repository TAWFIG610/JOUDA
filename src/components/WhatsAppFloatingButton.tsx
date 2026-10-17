import React from "react";
import { WHATSAPP_GREETING, whatsappUrl } from "../data/thiqaData";
import { BrandIcon } from "./ui/BrandIcon";
import { useLang } from "../i18n/LanguageContext";

/** The one WhatsApp shortcut on the page (the other is in the footer). */
export const WhatsAppFloatingButton: React.FC = () => {
  const { t } = useLang();
  return (
    <a
      href={whatsappUrl(t(WHATSAPP_GREETING))}
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
