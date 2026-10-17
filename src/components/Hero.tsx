import React, { useState } from "react";
import { Check } from "lucide-react";
import { COMPANY, CTA, HERO_IMAGE, PARTNER_UNIVERSITIES } from "../data/thiqaData";
import { useLang } from "../i18n/LanguageContext";
import { isValidContact, submitConsultation, type ContactDetails } from "../lib/consult";
import type { View } from "./ConsultModal";
import { ContactFields } from "./ContactFields";

interface HeroProps {
  onOpenConsult: (source: string, start?: View, prefill?: ContactDetails) => void;
}

const TEXT = {
  ar: {
    title: "الدراسة في ماليزيا، خطوة بخطوة",
    body: "نختار معك الجامعة، ونقدّم طلب القبول، ونتابع تأشيرة الطالب حتى وصولك إلى ماليزيا.",
    facts: (n: number) => ["الاستشارة الأولى مجانية", "الرسوم تُدفع للجامعة مباشرة", `${n} جامعة حكومية وخاصة`, "نتواصل بالعربية والإنجليزية"],
    helped: (n: string, since: string) => `ساعدنا ${n} طالباً${since ? ` منذ ${since}` : ""}`,
    registered: (ssm: string) => `شركة مسجّلة في ماليزيا، رقم SSM ${ssm}`,
    formSub: (h: string) => (h ? `يرد عليك مستشار خلال ${h} ساعات عمل.` : "اترك بياناتك ويتواصل معك مستشار من فريقنا."),
    quiz: "لست متأكداً ماذا تدرس؟ ساعدني أختار",
    privacy: "نستخدم بياناتك للتواصل معك بخصوص دراستك فقط.",
    error: "أدخل اسمك ودولتك ورقم واتساب مع رمز الدولة.",
  },
  en: {
    title: "Study in Malaysia, step by step",
    body: "We help you choose a university, apply for admission and follow your student visa until you arrive in Malaysia.",
    facts: (n: number) => ["Your first consultation is free", "Fees are paid to the university directly", `${n} public and private universities`, "We speak Arabic and English"],
    helped: (n: string, since: string) => `We have helped ${n} students${since ? ` since ${since}` : ""}`,
    registered: (ssm: string) => `Registered in Malaysia, SSM ${ssm}`,
    formSub: (h: string) => (h ? `An advisor replies within ${h} working hours.` : "Leave your details and one of our advisors will contact you."),
    quiz: "Not sure what to study? Help me choose",
    privacy: "We only use your details to contact you about your studies.",
    error: "Enter your name, country and WhatsApp number with country code.",
  },
};

const EMPTY: ContactDetails = { name: "", country: "", phone: "" };

export const Hero: React.FC<HeroProps> = ({ onOpenConsult }) => {
  const { lang, t } = useLang();
  const text = TEXT[lang];
  const [details, setDetails] = useState<ContactDetails>(EMPTY);
  const [error, setError] = useState("");

  // Real figures only; shown once they are filled in.
  const trust = [
    COMPANY.studentsHelped ? text.helped(COMPANY.studentsHelped, COMPANY.founded) : "",
    COMPANY.ssm ? text.registered(COMPANY.ssm) : "",
  ].filter(Boolean);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidContact(details)) {
      setError(text.error);
      return;
    }
    submitConsultation(details, lang, "hero_form");
    onOpenConsult("hero_form", "done", details);
    setDetails(EMPTY);
  };

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative bg-navy bg-cover bg-center text-white"
      style={HERO_IMAGE ? { backgroundImage: `url(${HERO_IMAGE})` } : undefined}
    >
      {/* Darkening layer keeps the text readable on any photo */}
      {HERO_IMAGE && <div className="absolute inset-0 bg-[#001842]/70" aria-hidden="true" />}

      <div className="page-container relative grid items-center gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24 xl:gap-24">
        <div>
          <h1 id="hero-title" className="text-xl text-white sm:text-2xl lg:max-w-[14ch] lg:text-3xl">
            {text.title}
          </h1>
          <p className="mt-5 max-w-xl text-on-navy lg:text-lg">{text.body}</p>

          {/* Phones: one button. Desktop uses the form beside. */}
          <button type="button" onClick={() => onOpenConsult("hero")} className="btn btn-primary mt-7 w-full sm:w-auto lg:hidden">
            {t(CTA)}
          </button>

          <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:mt-10">
            {text.facts(PARTNER_UNIVERSITIES.length).map((f) => (
              <li key={f} className="flex items-center gap-2.5">
                <Check className="h-5 w-5 shrink-0 text-white" aria-hidden="true" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {trust.length > 0 && <p className="mt-6 text-sm text-on-navy">{trust.join(" · ")}</p>}
        </div>

        {/* Desktop: the consultation form right in the hero */}
        <form noValidate onSubmit={submit} className="hidden rounded-xl bg-white p-8 text-ink lg:block" aria-labelledby="hero-form-title">
          <h2 id="hero-form-title" className="text-lg">
            {t(CTA)}
          </h2>
          <p className="mb-6 mt-1 text-sm text-muted">{text.formSub(COMPANY.replyHours)}</p>
          <ContactFields
            idPrefix="h"
            value={details}
            onChange={(v) => {
              setDetails(v);
              setError("");
            }}
            error={error}
          />
          <button type="submit" className="btn btn-primary mt-6 w-full">
            {t(CTA)}
          </button>
          <button type="button" onClick={() => onOpenConsult("hero_quiz", "quiz")} className="link mt-2 text-sm">
            {text.quiz}
          </button>
          <p className="mt-1 text-sm text-muted">{text.privacy}</p>
        </form>
      </div>
    </section>
  );
};
