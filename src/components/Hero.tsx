import React from "react";
import { COMPANY, CTA, HERO_IMAGE } from "../data/thiqaData";
import { useLang } from "../i18n/LanguageContext";

interface HeroProps {
  onOpenConsult: (source: string) => void;
}

const TEXT = {
  ar: {
    title: "الدراسة في ماليزيا، خطوة بخطوة",
    body: "نختار معك الجامعة، ونقدّم طلب القبول، ونتابع تأشيرة الطالب حتى وصولك. الاستشارة الأولى مجانية.",
    helped: (n: string, since: string) => `ساعدنا ${n} طالباً${since ? ` منذ ${since}` : ""}`,
    registered: (ssm: string) => `شركة مسجّلة في ماليزيا، رقم SSM ${ssm}`,
    fallback: "فريقنا في كوالالمبور · نتواصل بالعربية والإنجليزية",
  },
  en: {
    title: "Study in Malaysia, step by step",
    body: "We help you choose a university, apply for admission and follow your student visa until you arrive. Your first consultation is free.",
    helped: (n: string, since: string) => `We have helped ${n} students${since ? ` since ${since}` : ""}`,
    registered: (ssm: string) => `Registered in Malaysia, SSM ${ssm}`,
    fallback: "Based in Kuala Lumpur · We speak Arabic and English",
  },
};

export const Hero: React.FC<HeroProps> = ({ onOpenConsult }) => {
  const { lang, t } = useLang();
  const text = TEXT[lang];

  // Trust line uses real figures only; until they are filled in, a plain fact is shown.
  const trust = [
    COMPANY.studentsHelped ? text.helped(COMPANY.studentsHelped, COMPANY.founded) : "",
    COMPANY.ssm ? text.registered(COMPANY.ssm) : "",
  ].filter(Boolean);

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative bg-navy bg-cover bg-center text-white"
      style={HERO_IMAGE ? { backgroundImage: `url(${HERO_IMAGE})` } : undefined}
    >
      {/* Darkening layer keeps the text readable on any photo */}
      {HERO_IMAGE && <div className="absolute inset-0 bg-[#001842]/70" aria-hidden="true" />}
      <div className="page-container relative py-14 md:py-28">
        <h1 id="hero-title" className="max-w-[15ch] text-2xl text-white md:text-3xl">
          {text.title}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-on-navy">{text.body}</p>
        <button type="button" onClick={() => onOpenConsult("hero")} className="btn btn-primary mt-7">
          {t(CTA)}
        </button>
        <p className="mt-5 text-sm text-on-navy">{trust.length ? trust.join(" · ") : text.fallback}</p>
      </div>
    </section>
  );
};
