import React from "react";
import { BadgeCheck, Clock, FileText, Languages, Mail, MapPin, MessageCircle, Receipt, ShieldCheck, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { COMPANY, WHATSAPP_DISPLAY } from "../data/thiqaData";
import type { Localized } from "../types";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";
import { useLang } from "../i18n/LanguageContext";

const TEXT = {
  ar: {
    title: "من نحن",
    lead: "ثقة يوني فريق استشارات قبول جامعي يعمل من كوالالمبور، ويساعد الطلاب العرب وأهاليهم على الدراسة في ماليزيا.",
    body: "نساعدك على اختيار الجامعة والتخصص، ونقدّم طلب القبول ونتابعه مع الجامعة، ونتابع تأشيرة الطالب عبر EMGS، ثم نستقبلك عند وصولك ونساعدك في السكن والتسجيل. نتعامل مع مكاتب القبول في الجامعات مباشرة، ونتواصل معك بالعربية أو الإنجليزية طوال الطريق.",
    factsTitle: "بيانات الشركة",
    location: "المقر",
    locationValue: "كوالالمبور، ماليزيا",
    languages: "لغات التواصل",
    languagesValue: "العربية والإنجليزية",
    whatsapp: "واتساب",
    registration: "رقم السجل التجاري",
    address: "العنوان",
    hours: "ساعات العمل",
    email: "البريد الإلكتروني",
    commitmentsTitle: "التزاماتنا معك",
  },
  en: {
    title: "About us",
    lead: "THIQA UNI is a university admissions team based in Kuala Lumpur, helping Arab students and their families study in Malaysia.",
    body: "We help you choose a university and major, submit and follow up your application with the university, follow your student visa through EMGS, then meet you on arrival and help with housing and registration. We work directly with university admissions offices and talk to you in Arabic or English the whole way.",
    factsTitle: "Company details",
    location: "Based in",
    locationValue: "Kuala Lumpur, Malaysia",
    languages: "Languages",
    languagesValue: "Arabic and English",
    whatsapp: "WhatsApp",
    registration: "Company registration",
    address: "Address",
    hours: "Office hours",
    email: "Email",
    commitmentsTitle: "Our commitments to you",
  },
};

/** Taken from THIQA UNI's own fee, privacy and service terms. */
const COMMITMENTS: { icon: LucideIcon; title: Localized; desc: Localized }[] = [
  {
    icon: BadgeCheck,
    title: { ar: "الاستشارة الأولى مجانية", en: "Your first consultation is free" },
    desc: {
      ar: "نراجع وضعك ونقترح عليك خيارات مناسبة قبل أن تلتزم بأي شيء.",
      en: "We review your situation and suggest suitable options before you commit to anything.",
    },
  },
  {
    icon: Receipt,
    title: { ar: "الرسوم الدراسية تُدفع للجامعة مباشرة", en: "Tuition is paid to the university directly" },
    desc: {
      ar: "تدفع رسومك للجامعة بفاتورة رسمية باسمها، بدون عمولات مخفية.",
      en: "You pay your fees to the university against its official invoice, with no hidden commissions.",
    },
  },
  {
    icon: Wallet,
    title: { ar: "أي تكلفة تكون مكتوبة مسبقاً", en: "Any cost is written down first" },
    desc: {
      ar: "إن كانت هناك رسوم على خدمة إضافية، نكتبها لك بوضوح قبل أن نبدأ.",
      en: "If an extra service has a fee, we put it in writing before we start.",
    },
  },
  {
    icon: ShieldCheck,
    title: { ar: "مستنداتك للتقديم فقط", en: "Your documents are used only to apply" },
    desc: {
      ar: "نستخدم وثائقك للتقديم للجامعة وطلب التأشيرة فقط، ونحفظها بسرية.",
      en: "We use your documents only for your university and visa applications, and keep them confidential.",
    },
  },
];

export const AboutSection: React.FC = () => {
  const { lang, t } = useLang();
  const text = TEXT[lang];

  const facts: { icon: LucideIcon; label: string; value: string; ltr?: boolean }[] = [
    { icon: MapPin, label: text.location, value: text.locationValue },
    { icon: Languages, label: text.languages, value: text.languagesValue },
    { icon: MessageCircle, label: text.whatsapp, value: WHATSAPP_DISPLAY, ltr: true },
    // Optional details: shown only once filled in src/data/thiqaData.ts
    { icon: FileText, label: text.registration, value: COMPANY.registration, ltr: true },
    { icon: MapPin, label: text.address, value: t(COMPANY.address) },
    { icon: Clock, label: text.hours, value: t(COMPANY.hours) },
    { icon: Mail, label: text.email, value: COMPANY.email, ltr: true },
  ].filter((fact) => fact.value);

  return (
    <section id="about" className="bg-white section">
      <div className="page-container">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <SectionHeader align="start" className="mb-5 sm:mb-6" title={text.title} />
            <Reveal className="max-w-2xl space-y-4">
              <p className="text-lead font-semibold text-ink">{text.lead}</p>
              <p className="text-base leading-loose text-muted sm:text-lg">{text.body}</p>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div className="surface-dark relative overflow-hidden rounded-2xl p-6 shadow-raised sm:p-7">
              <span className="accent-top" aria-hidden="true" />
              <h3 className="text-base font-bold text-white">{text.factsTitle}</h3>
              <dl className="mt-4 divide-y divide-white/10">
                {facts.map(({ icon: Icon, label, value, ltr }) => (
                  <div key={label} className="flex items-start gap-3 py-3.5 first:pt-0 last:pb-0">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
                    <div className="min-w-0">
                      <dt className="text-xs font-semibold text-brand-200">{label}</dt>
                      <dd className={`text-base font-semibold text-white ${ltr ? "font-latin" : ""}`} dir={ltr ? "ltr" : undefined}>
                        {value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 sm:mt-20">
          <h3 className="subsection-title">{text.commitmentsTitle}</h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {COMMITMENTS.map(({ icon: Icon, title, desc }, idx) => (
              <Reveal as="li" key={title.en} delay={idx * 70} className="card p-5">
                <span className="brand-tile h-11 w-11">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-4 font-bold text-ink">{t(title)}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{t(desc)}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
