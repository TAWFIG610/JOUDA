import React, { useEffect, useState } from "react";
import { PARTNER_UNIVERSITIES, whatsappUrl } from "../data/thiqaData";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";
import type { Localized } from "../types";
import { Modal } from "./ui/Modal";
import { useLang } from "../i18n/LanguageContext";
import { track } from "../lib/analytics";
import { leadsEnabled, saveLead } from "../lib/leads";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
  pathwaySummary?: string;
}

interface CountryQuickPick {
  name: Localized;
  code: string;
}

const POPULAR_COUNTRIES: CountryQuickPick[] = [
  { name: { ar: "السعودية", en: "Saudi Arabia" }, code: "+966" },
  { name: { ar: "مصر", en: "Egypt" }, code: "+20" },
  { name: { ar: "اليمن", en: "Yemen" }, code: "+967" },
  { name: { ar: "الإمارات", en: "UAE" }, code: "+971" },
  { name: { ar: "ماليزيا", en: "Malaysia" }, code: "+60" },
  { name: { ar: "عُمان", en: "Oman" }, code: "+968" },
  { name: { ar: "الكويت", en: "Kuwait" }, code: "+965" },
  { name: { ar: "قطر", en: "Qatar" }, code: "+974" },
  { name: { ar: "الأردن", en: "Jordan" }, code: "+962" },
  { name: { ar: "السودان", en: "Sudan" }, code: "+249" },
];

const DEGREE_OPTIONS: Localized[] = [
  { ar: "بكالوريوس", en: "Bachelor's" },
  { ar: "ماجستير", en: "Master's" },
  { ar: "دكتوراه", en: "PhD" },
  { ar: "لغة إنجليزية", en: "English course" },
  { ar: "دبلوم / تحضيري", en: "Diploma / Foundation" },
];

const SUGGESTED_MAJORS: Localized[] = [
  { ar: "الذكاء الاصطناعي", en: "Artificial Intelligence" },
  { ar: "الأمن السيبراني", en: "Cyber Security" },
  { ar: "الطب البشري", en: "Medicine" },
  { ar: "طب الأسنان", en: "Dentistry" },
  { ar: "إدارة الأعمال", en: "Business" },
  { ar: "هندسة البرمجيات", en: "Software Engineering" },
];

const STEP_ICONS = [GraduationCap, User, Phone];

const TEXT = {
  ar: {
    title: "اطلب استشارة مجانية",
    intro: "ثلاث خطوات قصيرة، ثم نفتح لك رسالة واتساب جاهزة لترسلها لفريقنا.",
    steps: ["خطتك الدراسية", "بياناتك", "التواصل"],
    stepsLabel: "خطوات النموذج",
    pathwaySummary: "ملخص اختياراتك في مستشار المسار",
    selectedUni: "الجامعة المحددة",
    degree: "المرحلة الدراسية المطلوبة *",
    field: "التخصص أو المجال الدراسي المطلوب *",
    fieldPlaceholder: "مثال: الأمن السيبراني، الطب، إدارة الأعمال...",
    name: "الاسم الكامل *",
    namePlaceholder: "مثال: عمر محمد أحمد",
    country: "دولة الإقامة الحالية *",
    countryLabel: "دولة الإقامة الحالية",
    countryPlaceholder: "أو اكتب دولتك هنا...",
    whatsapp: "رقم واتساب (مع رمز الدولة) *",
    email: "البريد الإلكتروني (اختياري)",
    notes: "ملاحظات أو أسئلة إضافية (اختياري)",
    notesPlaceholder: "أي تفاصيل عن معدلك، ميزانيتك، أو الجامعة المفضلة...",
    back: "رجوع",
    next: "التالي",
    submit: "متابعة إلى واتساب",
    privacy: "ستفتح رسالة واتساب لتراجعها وترسلها بنفسك. لا تُرسل بياناتك قبل الضغط على إرسال داخل واتساب.",
    privacySaved: "نحفظ بياناتك لدى فريقنا لنتواصل معك، ونفتح لك رسالة واتساب جاهزة لتراجعها وترسلها.",
    popupBlocked: "تعذر فتح واتساب. يرجى السماح بالنوافذ المنبثقة ثم المحاولة مجدداً.",
    doneTitle: "رسالتك جاهزة في واتساب",
    doneBody: (name: string) =>
      `شكراً لك يا ${name}. تم فتح واتساب برسالة مُعبأة مسبقاً. راجعها ثم أرسلها إلى فريق ثقة يوني لبدء المحادثة.`,
    reopen: "إعادة فتح الواتساب إذا لم يفتح تلقائياً",
    close: "إغلاق النافذة",
    errors: {
      name: "الاسم الكامل مطلوب",
      email: "يرجى إدخال بريد إلكتروني صحيح (مثال: name@gmail.com)",
      whatsappMissing: "رقم الواتساب مع رمز الدولة مطلوب",
      whatsappCode: "يرجى إدخال رقم الواتساب مع رمز الدولة (مثال: +966501234567)",
      whatsappLength: "رقم الهاتف غير مكتمل، تأكد من كتابة الرقم مع مفتاح الدولة",
      countryMissing: "يرجى تحديد دولة الإقامة الحالية",
      countryShort: "يرجى كتابة اسم الدولة بشكل صحيح",
      fieldMissing: "يرجى كتابة التخصص أو المجال المطلوب",
      fieldShort: "يرجى توضيح التخصص أو اهتمامك الدراسي",
    },
    message: {
      greeting: "مرحباً فريق ثقة يوني! أود الاستفسار عن الدراسة في ماليزيا.",
      name: "الاسم",
      email: "البريد الإلكتروني",
      whatsapp: "رقم الواتساب",
      country: "دولة الإقامة",
      degree: "المرحلة الدراسية",
      field: "التخصص/المجال المطلوب",
      pathway: "ملخص مستشار المسار",
      notes: "ملاحظات إضافية",
      none: "لا يوجد",
      notGiven: "لم يذكر",
    },
  },
  en: {
    title: "Get a free consultation",
    intro: "Three short steps, then we open a ready-made WhatsApp message for you to send to our team.",
    steps: ["Your study plan", "About you", "Contact"],
    stepsLabel: "Form steps",
    pathwaySummary: "Your choices from the major finder",
    selectedUni: "Selected university",
    degree: "Level of study *",
    field: "Major or field of study *",
    fieldPlaceholder: "e.g. Cyber Security, Medicine, Business...",
    name: "Full name *",
    namePlaceholder: "e.g. Omar Mohammed Ahmed",
    country: "Country you live in *",
    countryLabel: "Country you live in",
    countryPlaceholder: "Or type your country...",
    whatsapp: "WhatsApp number (with country code) *",
    email: "Email (optional)",
    notes: "Notes or questions (optional)",
    notesPlaceholder: "Anything about your grades, budget or preferred university...",
    back: "Back",
    next: "Next",
    submit: "Continue to WhatsApp",
    privacy: "WhatsApp will open with a message for you to review and send yourself. Nothing is sent until you press send in WhatsApp.",
    privacySaved: "We keep your details so our team can contact you, and open a ready-made WhatsApp message for you to review and send.",
    popupBlocked: "Couldn't open WhatsApp. Please allow pop-ups and try again.",
    doneTitle: "Your message is ready in WhatsApp",
    doneBody: (name: string) =>
      `Thank you, ${name}. WhatsApp has opened with a pre-filled message. Review it, then send it to the THIQA UNI team to start the conversation.`,
    reopen: "Open WhatsApp again if it didn't open",
    close: "Close",
    errors: {
      name: "Please enter your full name",
      email: "Please enter a valid email (e.g. name@gmail.com)",
      whatsappMissing: "Please enter your WhatsApp number with country code",
      whatsappCode: "Please include your country code (e.g. +966501234567)",
      whatsappLength: "The number looks incomplete; check it includes the country code",
      countryMissing: "Please choose the country you live in",
      countryShort: "Please type the country name correctly",
      fieldMissing: "Please enter the major or field you want",
      fieldShort: "Please describe the major or field a little more",
    },
    message: {
      greeting: "Hello THIQA UNI team! I'd like to ask about studying in Malaysia.",
      name: "Name",
      email: "Email",
      whatsapp: "WhatsApp",
      country: "Country",
      degree: "Level of study",
      field: "Major / field",
      pathway: "Major finder summary",
      notes: "Notes",
      none: "None",
      notGiven: "Not given",
    },
  },
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Fields validated on each step (0-based). */
const STEP_FIELDS: string[][] = [["fieldOfInterest"], ["name", "country"], ["whatsapp", "email"]];

const FieldError: React.FC<{ id: string; message?: string }> = ({ id, message }) =>
  message ? (
    <p id={id} className="field-error">
      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
      <span>{message}</span>
    </p>
  ) : null;

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, initialInterest, pathwaySummary = "" }) => {
  const { lang, t } = useLang();
  const text = TEXT[lang];
  const selectedUniId = initialInterest?.startsWith("university_") ? initialInterest.replace("university_", "") : null;
  const selectedUni = PARTNER_UNIVERSITIES.find((u) => u.id === selectedUniId);
  const presetMajor = initialInterest?.startsWith("major_") ? initialInterest.replace("major_", "") : "";
  const presetField = selectedUni ? (lang === "ar" ? selectedUni.nameAr : selectedUni.nameEn) : presetMajor;

  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [country, setCountry] = useState("");
  const [degreeLevel, setDegreeLevel] = useState(DEGREE_OPTIONS[0]);
  const [fieldOfInterest, setFieldOfInterest] = useState(presetField);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) track("lead_form_open", { source: initialInterest || "direct" });
  }, [isOpen, initialInterest]);

  const clearError = (key: string) => {
    if (errors[key] || errors.form) setErrors((prev) => ({ ...prev, [key]: "", form: "" }));
  };

  const handleCountrySelect = (c: CountryQuickPick) => {
    setCountry(t(c.name));
    if (!whatsapp || whatsapp.startsWith("+")) setWhatsapp(c.code);
    clearError("country");
  };

  const collectErrors = () => {
    const e = text.errors;
    const found: Record<string, string> = {};

    if (name.trim().length < 2) found.name = e.name;

    const trimmedEmail = email.trim();
    if (trimmedEmail && !EMAIL_REGEX.test(trimmedEmail)) found.email = e.email;

    const trimmedWhatsapp = whatsapp.trim();
    const cleanDigits = trimmedWhatsapp.replace(/[^\d]/g, "");
    const hasPlusOrZero = trimmedWhatsapp.startsWith("+") || trimmedWhatsapp.startsWith("00");
    if (!trimmedWhatsapp) found.whatsapp = e.whatsappMissing;
    else if (!hasPlusOrZero && cleanDigits.length < 10) found.whatsapp = e.whatsappCode;
    else if (cleanDigits.length < 8 || cleanDigits.length > 16) found.whatsapp = e.whatsappLength;

    const trimmedCountry = country.trim();
    if (!trimmedCountry) found.country = e.countryMissing;
    else if (trimmedCountry.length < 2) found.country = e.countryShort;

    const trimmedField = fieldOfInterest.trim();
    if (!trimmedField) found.fieldOfInterest = e.fieldMissing;
    else if (trimmedField.length < 2) found.fieldOfInterest = e.fieldShort;

    return found;
  };

  /** Validates only the given step's fields; returns true when they pass. */
  const validateStep = (index: number) => {
    const found = collectErrors();
    const stepErrors = Object.fromEntries(Object.entries(found).filter(([key]) => STEP_FIELDS[index].includes(key)));
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const getWhatsAppUrl = () => {
    const m = text.message;
    return whatsappUrl(
      `${m.greeting}
${m.name}: ${name.trim()}
${m.email}: ${email.trim() || m.notGiven}
${m.whatsapp}: ${whatsapp.trim()}
${m.country}: ${country.trim()}
${m.degree}: ${t(degreeLevel)}
${m.field}: ${fieldOfInterest.trim()}
${pathwaySummary ? `${m.pathway}: ${pathwaySummary}\n` : ""}${m.notes}: ${message.trim() || m.none}`,
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < STEP_FIELDS.length - 1) {
      if (validateStep(step)) {
        track("lead_form_step", { step: step + 2 });
        setStep(step + 1);
      }
      return;
    }

    const found = collectErrors();
    if (Object.keys(found).length > 0) {
      // Send the visitor back to the first step that still has a problem.
      setStep(STEP_FIELDS.findIndex((fields) => fields.some((f) => found[f])));
      setErrors(found);
      return;
    }

    // Save a backup copy first (synchronous beacon), then open WhatsApp
    // in the same click so pop-up blockers allow it.
    saveLead({
      name: name.trim(),
      whatsapp: whatsapp.trim(),
      email: email.trim(),
      country: country.trim(),
      degree: t(degreeLevel),
      field: fieldOfInterest.trim(),
      notes: message.trim(),
      pathway: pathwaySummary,
      source: initialInterest || "direct",
      language: lang,
    });
    track("lead_submit", { source: initialInterest || "direct", degree: degreeLevel.en });

    const whatsappWindow = window.open(getWhatsAppUrl(), "_blank");
    if (!whatsappWindow) {
      setErrors({ form: text.popupBlocked });
      return;
    }
    setSubmitted(true);
  };

  const isEmailValid = EMAIL_REGEX.test(email.trim());
  const isWhatsappValid =
    (whatsapp.trim().startsWith("+") || whatsapp.trim().startsWith("00")) && whatsapp.replace(/[^\d]/g, "").length >= 9;
  const lastStep = step === STEP_FIELDS.length - 1;

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="lead-modal-title">
      {!submitted ? (
        <div className="space-y-6 pt-6 sm:pt-2">
          <div className="space-y-1.5 text-center">
            <h2 id="lead-modal-title" className="text-xl font-bold text-ink sm:text-2xl">
              {text.title}
            </h2>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-muted">{text.intro}</p>
          </div>

          <ol className="grid grid-cols-3 gap-2" aria-label={text.stepsLabel}>
            {text.steps.map((title, i) => {
              const Icon = STEP_ICONS[i];
              const done = i < step;
              const current = i === step;
              return (
                <li key={title} aria-current={current ? "step" : undefined} className="space-y-2">
                  <span className="block h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <span
                      className={`block h-full rounded-full bg-gold-500 transition-transform duration-500 ltr:origin-left rtl:origin-right ${
                        i <= step ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </span>
                  <span
                    className={`flex items-center justify-center gap-1.5 text-xs font-bold ${
                      current ? "text-ink" : done ? "text-success-600" : "text-slate-400"
                    }`}
                  >
                    {done ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Icon className="h-3.5 w-3.5" />}
                    {title}
                  </span>
                </li>
              );
            })}
          </ol>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div key={step} className="animate-fade-up space-y-4">
              {step === 0 && (
                <>
                  {pathwaySummary && (
                    <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-4">
                      <p className="text-xs font-bold text-brand-700">{text.pathwaySummary}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700">{pathwaySummary}</p>
                    </div>
                  )}
                  {selectedUni && (
                    <div className="flex items-center gap-3.5 rounded-2xl border border-brand-100 bg-brand-50/60 p-3">
                      <span className="flex h-11 w-16 shrink-0 items-center justify-center rounded-xl border border-line bg-white p-1.5">
                        {selectedUni.logoUrl ? (
                          <img src={selectedUni.logoUrl} alt={selectedUni.nameEn} className="max-h-full max-w-full object-contain" />
                        ) : (
                          <span className="text-xs font-bold text-brand-800">{selectedUni.shortName}</span>
                        )}
                      </span>
                      <span className="space-y-0.5">
                        <span className="inline-block rounded-full bg-gold-100 px-2 py-0.5 text-[11px] font-bold text-gold-700">
                          {text.selectedUni}
                        </span>
                        <span className="block font-latin text-sm font-bold text-ink" dir="ltr">
                          {selectedUni.nameEn}
                        </span>
                      </span>
                    </div>
                  )}

                  <fieldset>
                    <legend className="field-label">{text.degree}</legend>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {DEGREE_OPTIONS.map((d) => (
                        <button
                          key={d.en}
                          type="button"
                          onClick={() => setDegreeLevel(d)}
                          aria-pressed={degreeLevel === d}
                          className={`choice-pill ${degreeLevel === d ? "choice-pill-on" : "choice-pill-off"}`}
                        >
                          {t(d)}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="lead-interest" className="field-label">
                      <BookOpen className="h-4 w-4 text-brand-600" />
                      {text.field}
                    </label>
                    <input
                      id="lead-interest"
                      type="text"
                      value={fieldOfInterest}
                      onChange={(e) => {
                        setFieldOfInterest(e.target.value);
                        clearError("fieldOfInterest");
                      }}
                      placeholder={text.fieldPlaceholder}
                      className="field-input"
                      aria-invalid={Boolean(errors.fieldOfInterest)}
                      aria-describedby={errors.fieldOfInterest ? "lead-interest-error" : undefined}
                    />
                    <FieldError id="lead-interest-error" message={errors.fieldOfInterest} />
                    <div className="flex flex-wrap gap-1.5 pt-2.5">
                      {SUGGESTED_MAJORS.map((major) => {
                        const label = t(major);
                        return (
                          <button
                            key={major.en}
                            type="button"
                            onClick={() => {
                              setFieldOfInterest(label);
                              clearError("fieldOfInterest");
                            }}
                            aria-pressed={fieldOfInterest === label}
                            className={`choice-pill min-h-10 rounded-full px-3 py-1.5 text-xs ${
                              fieldOfInterest === label ? "choice-pill-on" : "choice-pill-off"
                            }`}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {step === 1 && (
                <>
                  <div>
                    <label htmlFor="lead-name" className="field-label">
                      <User className="h-4 w-4 text-brand-600" />
                      {text.name}
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      value={name}
                      autoComplete="name"
                      onChange={(e) => {
                        setName(e.target.value);
                        clearError("name");
                      }}
                      placeholder={text.namePlaceholder}
                      className="field-input"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "lead-name-error" : undefined}
                    />
                    <FieldError id="lead-name-error" message={errors.name} />
                  </div>

                  <fieldset>
                    <legend className="field-label">
                      <MapPin className="h-4 w-4 text-brand-600" />
                      {text.country}
                    </legend>
                    <div className="flex flex-wrap gap-1.5">
                      {POPULAR_COUNTRIES.map((c) => (
                        <button
                          key={c.code}
                          type="button"
                          onClick={() => handleCountrySelect(c)}
                          aria-pressed={country === t(c.name)}
                          className={`choice-pill min-h-10 rounded-full px-3 py-1.5 text-xs ${
                            country === t(c.name) ? "choice-pill-on" : "choice-pill-off"
                          }`}
                        >
                          {t(c.name)}
                        </button>
                      ))}
                    </div>
                    <input
                      id="lead-country"
                      type="text"
                      value={country}
                      autoComplete="country-name"
                      onChange={(e) => {
                        setCountry(e.target.value);
                        clearError("country");
                      }}
                      placeholder={text.countryPlaceholder}
                      aria-label={text.countryLabel}
                      className="field-input mt-2.5"
                      aria-invalid={Boolean(errors.country)}
                      aria-describedby={errors.country ? "lead-country-error" : undefined}
                    />
                    <FieldError id="lead-country-error" message={errors.country} />
                  </fieldset>
                </>
              )}

              {step === 2 && (
                <>
                  <div>
                    <label htmlFor="lead-whatsapp" className="field-label">
                      <Phone className="h-4 w-4 text-brand-600" />
                      {text.whatsapp}
                    </label>
                    <div className="relative">
                      <input
                        id="lead-whatsapp"
                        type="tel"
                        value={whatsapp}
                        autoComplete="tel"
                        inputMode="tel"
                        onChange={(e) => {
                          setWhatsapp(e.target.value);
                          clearError("whatsapp");
                        }}
                        placeholder="+966501234567"
                        dir="ltr"
                        className="field-input pe-11 text-start font-latin"
                        aria-invalid={Boolean(errors.whatsapp)}
                        aria-describedby={errors.whatsapp ? "lead-whatsapp-error" : undefined}
                      />
                      {isWhatsappValid && (
                        <CheckCircle2 className="absolute end-3.5 top-1/2 h-5 w-5 -translate-y-1/2 animate-pop text-success-600" aria-hidden="true" />
                      )}
                    </div>
                    <FieldError id="lead-whatsapp-error" message={errors.whatsapp} />
                  </div>

                  <div>
                    <label htmlFor="lead-email" className="field-label">
                      <Mail className="h-4 w-4 text-brand-600" />
                      {text.email}
                    </label>
                    <div className="relative">
                      <input
                        id="lead-email"
                        type="email"
                        value={email}
                        autoComplete="email"
                        inputMode="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                          clearError("email");
                        }}
                        placeholder="name@example.com"
                        dir="ltr"
                        className="field-input pe-11 text-start"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "lead-email-error" : undefined}
                      />
                      {isEmailValid && (
                        <CheckCircle2 className="absolute end-3.5 top-1/2 h-5 w-5 -translate-y-1/2 animate-pop text-success-600" aria-hidden="true" />
                      )}
                    </div>
                    <FieldError id="lead-email-error" message={errors.email} />
                  </div>

                  <div>
                    <label htmlFor="lead-message" className="field-label">
                      <FileText className="h-4 w-4 text-brand-600" />
                      {text.notes}
                    </label>
                    <textarea
                      id="lead-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={text.notesPlaceholder}
                      className="field-input min-h-24 resize-y py-3"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="sticky bottom-0 -mx-5 space-y-3 border-t border-line bg-white px-5 pb-5 pt-3 sm:static sm:mx-0 sm:border-0 sm:p-0">
              <div className="flex gap-2.5">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      setErrors({});
                      setStep(step - 1);
                    }}
                    className="btn btn-outline w-1/3 px-3"
                  >
                    <ArrowRight className="flip-ltr h-4 w-4" />
                    <span>{text.back}</span>
                  </button>
                )}
                <button type="submit" className={`btn flex-1 ${lastStep ? "btn-primary min-h-14 text-base" : "btn-dark"}`}>
                  {lastStep ? (
                    <>
                      <MessageCircle className="h-5 w-5" />
                      <span>{text.submit}</span>
                    </>
                  ) : (
                    <>
                      <span>{text.next}</span>
                      <ArrowLeft className="flip-ltr h-4 w-4" />
                    </>
                  )}
                </button>
              </div>

              {errors.form && (
                <p role="alert" className="field-error justify-center text-center">
                  {errors.form}
                </p>
              )}

              {lastStep && (
                <p className="flex items-start justify-center gap-1.5 text-center text-xs leading-relaxed text-muted">
                  <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-600" />
                  {leadsEnabled ? text.privacySaved : text.privacy}
                </p>
              )}
            </div>
          </form>
        </div>
      ) : (
        <div className="space-y-5 py-8 text-center">
          <div className="mx-auto flex h-20 w-20 animate-pop items-center justify-center rounded-3xl bg-success-600 text-white">
            <CheckCircle2 className="h-10 w-10" />
          </div>

          <div className="space-y-2">
            <h2 id="lead-modal-title" className="text-2xl font-bold text-ink">
              {text.doneTitle}
            </h2>
            <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted">{text.doneBody(name.trim())}</p>
          </div>

          <div className="space-y-2.5 pt-2">
            <button type="button" onClick={() => window.open(getWhatsAppUrl(), "_blank")} className="btn btn-whatsapp w-full whitespace-normal">
              <MessageCircle className="h-5 w-5" />
              <span>{text.reopen}</span>
            </button>
            <button type="button" onClick={onClose} className="btn w-full text-slate-600 hover:bg-slate-100">
              {text.close}
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};
