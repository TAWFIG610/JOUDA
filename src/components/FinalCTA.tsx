import React from "react";
import { WHATSAPP_DISPLAY, whatsappUrl } from "../data/thiqaData";
import { MessageCircle } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

interface FinalCTAProps {
  onOpenLeadModal: (source?: string) => void;
}

const TEXT = {
  ar: {
    title: "جاهز تبدأ؟ تواصل معنا الآن.",
    body: "أخبرنا بشهادتك والتخصص الذي تفكر فيه، ويرد عليك مستشار من فريقنا. الاستشارة الأولى مجانية.",
    primary: "اطلب استشارة مجانية",
    message: "مرحباً فريق ثقة يوني، أود البدء في التقديم للدراسة في ماليزيا.",
  },
  en: {
    title: "Ready to start? Get in touch.",
    body: "Tell us about your certificate and the major you have in mind, and one of our advisors will reply. Your first consultation is free.",
    primary: "Get a free consultation",
    message: "Hello THIQA UNI team, I'd like to start applying to study in Malaysia.",
  },
};

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenLeadModal }) => {
  const { lang } = useLang();
  const text = TEXT[lang];

  return (
    <section className="bg-white section">
      <div className="page-container">
        <div className="surface-dark relative flex flex-col gap-8 overflow-hidden rounded-3xl px-6 py-10 shadow-raised sm:px-10 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:px-14">
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-gold-400 to-gold-600" aria-hidden="true" />
          <div className="max-w-xl">
            <h2 className="text-balance text-2xl font-bold leading-snug sm:text-3xl">{text.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-brand-100 sm:text-lg">{text.body}</p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => onOpenLeadModal("final_cta_primary")}
              className="btn btn-primary min-h-14 px-8 focus-visible:ring-offset-brand-900"
            >
              {text.primary}
            </button>
            <a
              href={whatsappUrl(text.message)}
              target="_blank"
              rel="noopener noreferrer"
              data-place="final_cta"
              className="btn btn-on-dark min-h-14 px-6"
            >
              <MessageCircle className="h-5 w-5" />
              <span dir="ltr" className="font-latin">{WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
