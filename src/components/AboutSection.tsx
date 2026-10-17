import React from "react";
import { COMPANY, PARTNER_UNIVERSITIES, TEAM, TRUST_LOGO_IDS } from "../data/thiqaData";
import { SectionHeader } from "./ui/SectionHeader";
import { useLang } from "../i18n/LanguageContext";

const TEXT = {
  ar: {
    title: "من نحن",
    body: "فريق قبول جامعي في كوالالمبور يساعد الطلاب العرب وأهاليهم على الدراسة في ماليزيا. نتعامل مع مكاتب القبول في الجامعات مباشرة، ونتواصل معك بالعربية أو الإنجليزية.",
    students: "طالب ساعدناهم",
    founded: "سنة التأسيس",
    universities: "جامعة نقدّم إليها",
    advisors: "مستشارون في الفريق",
    details: "بيانات الشركة",
    registeredName: "الاسم المسجّل",
    ssm: "رقم التسجيل (SSM)",
    address: "عنوان المكتب",
    map: "الخريطة",
    hours: "ساعات العمل",
    languages: "اللغات",
    languagesValue: "العربية والإنجليزية",
    authorisation: "تفويض الجامعات",
    team: "مستشاروك",
    logos: "بعض الجامعات التي نقدّم إليها",
  },
  en: {
    title: "Who we are",
    body: "An admissions team based in Kuala Lumpur, helping Arab students and their families study in Malaysia. We deal with university admissions offices directly and speak with you in Arabic or English.",
    students: "students helped",
    founded: "founded",
    universities: "universities we apply to",
    advisors: "advisors on the team",
    details: "Company details",
    registeredName: "Registered name",
    ssm: "SSM registration no.",
    address: "Office address",
    map: "Map",
    hours: "Office hours",
    languages: "Languages",
    languagesValue: "Arabic and English",
    authorisation: "University authorisation",
    team: "Your advisors",
    logos: "Some of the universities we apply to",
  },
};

export const AboutSection: React.FC = () => {
  const { lang, t } = useLang();
  const text = TEXT[lang];

  // Only real, filled-in figures are shown.
  const stats = [
    { value: COMPANY.studentsHelped, label: text.students },
    { value: COMPANY.founded, label: text.founded },
    { value: String(PARTNER_UNIVERSITIES.length), label: text.universities },
    { value: COMPANY.advisors, label: text.advisors },
  ].filter((s) => s.value);

  const facts: { label: string; value: React.ReactNode }[] = [
    { label: text.registeredName, value: t(COMPANY.registeredName) },
    { label: text.ssm, value: COMPANY.ssm },
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
    { label: text.languages, value: text.languagesValue },
    { label: text.authorisation, value: t(COMPANY.authorisation) },
  ].filter((f) => f.value);

  const logos = TRUST_LOGO_IDS.map((id) => PARTNER_UNIVERSITIES.find((u) => u.id === id)!);

  return (
    <section className="section" aria-labelledby="about-title">
      <div className="page-container">
        <SectionHeader id="about-title" title={text.title} description={text.body} />

        <ul
          className={`grid gap-px overflow-hidden rounded-xl border border-line bg-line ${
            stats.length >= 4 ? "grid-cols-2 md:grid-cols-4" : stats.length === 3 ? "grid-cols-3" : stats.length === 2 ? "grid-cols-2" : "max-w-xs grid-cols-1"
          }`}
        >
          {stats.map((s) => (
            <li key={s.label} className="bg-white p-5">
              <span className="block text-xl font-bold text-navy">{s.value}</span>
              <span className="text-sm text-muted">{s.label}</span>
            </li>
          ))}
        </ul>

        <div className={`mt-8 grid gap-8 ${TEAM.length ? "lg:grid-cols-2 lg:gap-10" : ""}`}>
          <div>
            <h3 className="text-lg">{text.details}</h3>
            <dl className="mt-3 grid gap-2.5">
              {facts.map((f) => (
                <div key={f.label} className="grid grid-cols-[40%_1fr] gap-3 md:grid-cols-[12rem_1fr]">
                  <dt className="text-sm text-muted">{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {TEAM.length > 0 && (
            <div>
              <h3 className="text-lg">{text.team}</h3>
              <ul className="mt-3 grid grid-cols-3 gap-3">
                {TEAM.map((m) => (
                  <li key={m.name.en}>
                    <img src={m.photo} alt="" className="aspect-square w-full rounded-xl object-cover" loading="lazy" />
                    <p className="mt-2 text-sm font-bold">{t(m.name)}</p>
                    <p className="text-sm text-muted">{t(m.role)}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <ul aria-label={text.logos} className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-6">
          {logos.map((u) => (
            <li key={u.id} className="flex h-18 items-center justify-center rounded-xl border border-line p-3">
              <img src={u.logoUrl} alt={u.nameEn} className="max-h-11 w-auto" loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
