import React, { useState } from "react";
import { FAQS, whatsappUrl } from "../data/thiqaData";
import { MessageCircle, Plus } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { useLang } from "../i18n/LanguageContext";

interface FAQSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

const TEXT = {
  ar: {
    title: "أسئلة شائعة",
    notHere: "سؤالك غير موجود هنا؟",
    sendIt: "أرسله لنا على واتساب أو اترك بياناتك ونتواصل معك.",
    whatsapp: "واتساب",
    callMe: "اطلب اتصالاً",
    message: "مرحباً فريق ثقة يوني، عندي سؤال عن الدراسة في ماليزيا.",
  },
  en: {
    title: "Frequently asked questions",
    notHere: "Don't see your question?",
    sendIt: "Send it to us on WhatsApp, or leave your details and we'll get back to you.",
    whatsapp: "WhatsApp",
    callMe: "Request a call",
    message: "Hello THIQA UNI team, I have a question about studying in Malaysia.",
  },
};

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenLeadModal }) => {
  const { lang, t } = useLang();
  const text = TEXT[lang];
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper section">
      <div className="page-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader align="start" className="mb-6 sm:mb-6" title={text.title} />
          <div className="surface-dark relative overflow-hidden rounded-2xl p-6 shadow-raised">
            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-gold-400 to-gold-600" aria-hidden="true" />
            <p className="font-bold text-white">{text.notHere}</p>
            <p className="mt-1 text-sm leading-relaxed text-brand-100">{text.sendIt}</p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={whatsappUrl(text.message)}
                target="_blank"
                rel="noopener noreferrer"
                data-place="faq"
                className="btn btn-whatsapp flex-1 focus-visible:ring-offset-brand-900"
              >
                <MessageCircle className="h-5 w-5" />
                {text.whatsapp}
              </a>
              <button type="button" onClick={() => onOpenLeadModal("faq_bottom_cta")} className="btn btn-on-dark flex-1">
                {text.callMe}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q.en}
                className={`card px-5 transition-[border-color,box-shadow] duration-200 ${isOpen ? "border-brand-200 shadow-raised" : ""}`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    id={`faq-question-${idx}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="flex min-h-16 w-full items-center justify-between gap-4 py-5 text-start"
                  >
                    <span className="text-base font-bold text-ink sm:text-lg">{t(faq.q)}</span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                        isOpen ? "bg-brand-700 text-white" : "bg-brand-50 text-brand-700"
                      }`}
                    >
                      <Plus className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`} aria-hidden="true" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  inert={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-base leading-relaxed text-muted">{t(faq.a)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
