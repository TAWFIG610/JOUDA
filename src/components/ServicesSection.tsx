import React from "react";
import { ArrowLeft, FileCheck2, GraduationCap, House, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";
import { useLang } from "../i18n/LanguageContext";

interface ServicesSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

const SERVICES = [
  {
    icon: GraduationCap,
    title: { ar: "اختيار الجامعة وتقديم طلب القبول", en: "Choosing a university and applying" },
    desc: {
      ar: "نقترح جامعات تناسب معدلك وميزانيتك، ونجهّز طلبك ونرفعه للجامعة ونتابعه حتى يصدر خطاب القبول.",
      en: "We suggest universities that fit your grades and budget, prepare and submit your application, and follow it until the offer letter is issued.",
    },
  },
  {
    icon: FileCheck2,
    title: { ar: "تجهيز المستندات", en: "Preparing your documents" },
    desc: {
      ar: "نراجع شهاداتك وكشوف الدرجات وجواز السفر، ونخبرك بما يحتاج ترجمة أو تصديقاً قبل الإرسال.",
      en: "We check your certificates, transcripts and passport, and tell you what needs translating or attesting before it is sent.",
    },
  },
  {
    icon: ShieldCheck,
    title: { ar: "متابعة تأشيرة الطالب (EMGS)", en: "Student visa follow-up (EMGS)" },
    desc: {
      ar: "نتابع طلب التأشيرة والفحص الطبي حتى صدور خطاب الموافقة (VAL)، ونوضح لك كل مرحلة.",
      en: "We follow the visa application and medical check until the approval letter (VAL) is issued, and explain each stage.",
    },
  },
  {
    icon: House,
    title: { ar: "الاستقبال والسكن", en: "Arrival and housing" },
    desc: {
      ar: "نستقبلك في مطار كوالالمبور، ونساعدك في اختيار سكن قريب من الجامعة وإنهاء التسجيل.",
      en: "We meet you at Kuala Lumpur airport and help you find housing near campus and complete registration.",
    },
  },
];

const TEXT = {
  ar: {
    title: "ما الذي نقوم به عنك",
    description: "تتواصل مع شخص واحد من فريقنا طوال الطريق، من اختيار الجامعة حتى استلام السكن.",
    cta: "اسأل عن خدماتنا",
    ask: "اسأل عن هذه الخدمة",
  },
  en: {
    title: "What we do for you",
    description: "You deal with one person from our team the whole way, from choosing a university to moving into your housing.",
    cta: "Ask about our services",
    ask: "Ask about this service",
  },
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenLeadModal }) => {
  const { lang, t } = useLang();
  const text = TEXT[lang];

  return (
    <section id="services" className="bg-paper section">
      <div className="page-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader align="start" className="mb-6 sm:mb-6" title={text.title} description={text.description} />
          <button type="button" onClick={() => onOpenLeadModal("services_general_cta")} className="btn btn-dark hidden lg:inline-flex">
            {text.cta}
            <ArrowLeft className="flip-ltr h-4 w-4" />
          </button>
        </div>

        <ul className="divide-y divide-line border-y border-line">
          {SERVICES.map(({ icon: Icon, title, desc }, idx) => (
            <Reveal as="li" key={title.en} delay={idx * 60}>
              <div className="flex gap-4 py-6 sm:gap-5 sm:py-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-ink sm:text-xl">{t(title)}</h3>
                  <p className="mt-1.5 text-base leading-relaxed text-muted">{t(desc)}</p>
                  <button type="button" onClick={() => onOpenLeadModal(`service_${idx + 1}`)} className="text-link mt-2 text-sm">
                    {text.ask}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <button type="button" onClick={() => onOpenLeadModal("services_general_cta")} className="btn btn-dark w-full lg:hidden">
          {text.cta}
          <ArrowLeft className="flip-ltr h-4 w-4" />
        </button>
      </div>
    </section>
  );
};
