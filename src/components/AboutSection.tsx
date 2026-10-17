import React from "react";
import { COMPANY, PARTNER_UNIVERSITIES, TEAM, TRUST_LOGO_IDS, WHATSAPP_DISPLAY } from "../data/thiqaData";
import { useLang } from "../i18n/LanguageContext";

const TEXT = {
  ar: {
    title: "من نحن",
    lead: "فريق قبول جامعي في كوالالمبور يساعد الطلاب العرب وأهاليهم على الدراسة في ماليزيا.",
    body: "نتعامل مع مكاتب القبول في الجامعات مباشرة، ونتابع ملفك حتى تصل وتبدأ الدراسة. ونتواصل معك بالعربية أو الإنجليزية طوال الطريق.",
    students: "طالب ساعدناهم",
    founded: "سنة التأسيس",
    advisors: "مستشارون في الفريق",
    universities: "جامعة نقدّم إليها",
    details: "بيانات الشركة",
    base: "المقر",
    baseValue: "كوالالمبور، ماليزيا",
    languages: "اللغات",
    languagesValue: "العربية والإنجليزية",
    whatsapp: "واتساب",
    partners: "الجامعات",
    partnersValue: (n: number) => `${n} جامعة حكومية وخاصة`,
    registeredName: "الاسم المسجّل",
    ssm: "رقم التسجيل (SSM)",
    address: "عنوان المكتب",
    map: "الخريطة",
    hours: "ساعات العمل",
    email: "البريد الإلكتروني",
    authorisation: "تفويض الجامعات",
    team: "مستشاروك",
    logos: "بعض الجامعات التي نقدّم إليها",
  },
  en: {
    title: "Who we are",
    lead: "An admissions team based in Kuala Lumpur, helping Arab students and their families study in Malaysia.",
    body: "We deal with university admissions offices directly and follow your file until you arrive and start classes, speaking with you in Arabic or English the whole way.",
    students: "students helped",
    founded: "founded",
    advisors: "advisors on the team",
    universities: "universities we apply to",
    details: "Company details",
    base: "Based in",
    baseValue: "Kuala Lumpur, Malaysia",
    languages: "Languages",
    languagesValue: "Arabic and English",
    whatsapp: "WhatsApp",
    partners: "Universities",
    partnersValue: (n: number) => `${n} public and private universities`,
    registeredName: "Registered name",
    ssm: "SSM registration no.",
    address: "Office address",
    map: "Map",
    hours: "Office hours",
    email: "Email",
    authorisation: "University authorisation",
    team: "Your advisors",
    logos: "Some of the universities we apply to",
  },
};

export const AboutSection: React.FC = () => {
  const { lang, t } = useLang();
  const text = TEXT[lang];

  // Figures strip appears once at least two real company figures exist.
  const companyStats = [
    { value: COMPANY.studentsHelped, label: text.students },
    { value: COMPANY.founded, label: text.founded },
    { value: COMPANY.advisors, label: text.advisors },
  ].filter((s) => s.value);
  const stats = companyStats.length >= 2 ? [...companyStats, { value: String(PARTNER_UNIVERSITIES.length), label: text.universities }] : [];

  // Known facts first; official details join as they are filled in.
  const facts: { label: string; value: React.ReactNode; ltr?: boolean }[] = [
    { label: text.registeredName, value: t(COMPANY.registeredName) },
    { label: text.ssm, value: COMPANY.ssm, ltr: true },
    { label: text.base, value: text.baseValue },
    {
      label: text.address,
      value: t(COMPANY.address) && (
        <>
          {t(COMPANY.address)}
          {COMPANY.mapUrl && (
            <>
              {" · "}
              <a href={COMPANY.mapUrl} target="_blank" rel="noopener noreferrer" className="link min-h-0">
                {text.map}
              </a>
            </>
          )}
        </>
      ),
    },
    { label: text.hours, value: t(COMPANY.hours) },
    { label: text.partners, value: text.partnersValue(PARTNER_UNIVERSITIES.length) },
    { label: text.languages, value: text.languagesValue },
    { label: text.whatsapp, value: WHATSAPP_DISPLAY, ltr: true },
    { label: text.email, value: COMPANY.email, ltr: true },
    { label: text.authorisation, value: t(COMPANY.authorisation) },
  ].filter((f) => f.value);

  const logos = TRUST_LOGO_IDS.map((id) => PARTNER_UNIVERSITIES.find((u) => u.id === id)!);

  return (
    <section className="section" aria-labelledby="about-title">
      <div className="page-container">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <h2 id="about-title" className="text-xl lg:text-2xl">
              {text.title}
            </h2>
            <p className="mt-5 font-medium text-ink lg:text-lg">{text.lead}</p>
            <p className="mt-4 text-muted lg:text-lg">{text.body}</p>

            {stats.length > 0 && (
              <ul className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
                {stats.map((s) => (
                  <li key={s.label} className="bg-white p-5">
                    <span className="block text-xl font-bold text-navy">{s.value}</span>
                    <span className="text-sm text-muted">{s.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="card self-start">
            <h3 className="text-lg">{text.details}</h3>
            <dl className="mt-4 divide-y divide-line">
              {facts.map((f) => (
                <div key={f.label} className="grid grid-cols-[40%_1fr] gap-4 py-3.5 first:pt-0 last:pb-0">
                  <dt className="text-muted">{f.label}</dt>
                  <dd className="font-medium" dir={f.ltr ? "ltr" : undefined} style={f.ltr ? { textAlign: lang === "ar" ? "right" : "left" } : undefined}>
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {TEAM.length > 0 && (
          <div className="mt-12">
            <h3 className="text-lg">{text.team}</h3>
            <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {TEAM.map((m) => (
                <li key={m.name.en}>
                  <img src={m.photo} alt="" className="aspect-square w-full rounded-xl object-cover" loading="lazy" />
                  <p className="mt-2 font-bold">{t(m.name)}</p>
                  <p className="text-sm text-muted">{t(m.role)}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <ul aria-label={text.logos} className="mt-12 grid grid-cols-3 gap-3 md:grid-cols-6 lg:mt-16 lg:gap-4">
          {logos.map((u) => (
            <li key={u.id} className="flex h-20 items-center justify-center rounded-xl border border-line px-4 lg:h-24">
              <img src={u.logoUrl} alt={u.nameEn} className="max-h-12 w-auto lg:max-h-14" loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
