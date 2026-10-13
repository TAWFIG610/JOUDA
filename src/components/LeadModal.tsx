import React, { useState } from "react";
import { WHATSAPP_BASE_URL, PARTNER_UNIVERSITIES } from "../data/thiqaData";
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
import { Modal } from "./ui/Modal";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
  pathwaySummary?: string;
}

interface CountryQuickPick {
  name: string;
  code: string;
}

const POPULAR_COUNTRIES: CountryQuickPick[] = [
  { name: "السعودية", code: "+966" },
  { name: "مصر", code: "+20" },
  { name: "اليمن", code: "+967" },
  { name: "الإمارات", code: "+971" },
  { name: "ماليزيا", code: "+60" },
  { name: "عُمان", code: "+968" },
  { name: "الكويت", code: "+965" },
  { name: "قطر", code: "+974" },
  { name: "الأردن", code: "+962" },
  { name: "السودان", code: "+249" },
];

const DEGREE_OPTIONS = ["بكالوريوس", "ماجستير", "دكتوراه", "لغة إنجليزية", "دبلوم / تحضيري"];

const SUGGESTED_MAJORS = [
  "الذكاء الاصطناعي",
  "الأمن السيبراني",
  "الطب البشري",
  "طب الأسنان",
  "إدارة الأعمال",
  "هندسة البرمجيات",
];

const STEPS = [
  { title: "خطتك الدراسية", icon: GraduationCap },
  { title: "بياناتك", icon: User },
  { title: "التواصل", icon: Phone },
];

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
  const selectedUniId = initialInterest?.startsWith("university_") ? initialInterest.replace("university_", "") : null;
  const selectedUni = PARTNER_UNIVERSITIES.find((u) => u.id === selectedUniId);
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [country, setCountry] = useState("");
  const [degreeLevel, setDegreeLevel] = useState("بكالوريوس");
  const presetMajor = initialInterest?.startsWith("major_") ? initialInterest.replace("major_", "") : "";
  const [fieldOfInterest, setFieldOfInterest] = useState(selectedUni?.nameAr ?? presetMajor);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const clearError = (key: string) => {
    if (errors[key] || errors.form) setErrors((prev) => ({ ...prev, [key]: "", form: "" }));
  };

  const handleCountrySelect = (c: CountryQuickPick) => {
    setCountry(c.name);
    if (!whatsapp || whatsapp.startsWith("+")) setWhatsapp(c.code);
    clearError("country");
  };

  const collectErrors = () => {
    const found: Record<string, string> = {};

    if (name.trim().length < 2) found.name = "الاسم الكامل مطلوب";

    const trimmedEmail = email.trim();
    if (trimmedEmail && !EMAIL_REGEX.test(trimmedEmail)) {
      found.email = "يرجى إدخال بريد إلكتروني صحيح (مثال: name@gmail.com)";
    }

    const trimmedWhatsapp = whatsapp.trim();
    const cleanDigits = trimmedWhatsapp.replace(/[^\d]/g, "");
    const hasPlusOrZero = trimmedWhatsapp.startsWith("+") || trimmedWhatsapp.startsWith("00");
    if (!trimmedWhatsapp) {
      found.whatsapp = "رقم الواتساب مع رمز الدولة مطلوب";
    } else if (!hasPlusOrZero && cleanDigits.length < 10) {
      found.whatsapp = "يرجى إدخال رقم الواتساب مع رمز الدولة (مثال: +966501234567)";
    } else if (cleanDigits.length < 8 || cleanDigits.length > 16) {
      found.whatsapp = "رقم الهاتف غير مكتمل، تأكد من كتابة الرقم مع مفتاح الدولة";
    }

    const trimmedCountry = country.trim();
    if (!trimmedCountry) found.country = "يرجى تحديد دولة الإقامة الحالية";
    else if (trimmedCountry.length < 2) found.country = "يرجى كتابة اسم الدولة بشكل صحيح";

    const trimmedField = fieldOfInterest.trim();
    if (!trimmedField) found.fieldOfInterest = "يرجى كتابة التخصص أو المجال المطلوب";
    else if (trimmedField.length < 2) found.fieldOfInterest = "يرجى توضيح التخصص أو اهتمامك الدراسي";

    return found;
  };

  /** Validates only the given step's fields; returns true when they pass. */
  const validateStep = (index: number) => {
    const found = collectErrors();
    const stepErrors = Object.fromEntries(
      Object.entries(found).filter(([key]) => STEP_FIELDS[index].includes(key)),
    );
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `مرحباً فريق ثقة يوني! أود الاستفسار عن الدراسة في ماليزيا.
الاسم: ${name.trim()}
البريد الإلكتروني: ${email.trim() || "لم يذكر"}
رقم الواتساب: ${whatsapp.trim()}
دولة الإقامة: ${country.trim()}
المرحلة الدراسية: ${degreeLevel}
التخصص/المجال المطلوب: ${fieldOfInterest.trim()}
${pathwaySummary ? `ملخص مستشار المسار: ${pathwaySummary}\n` : ""}ملاحظات إضافية: ${message.trim() || "لا يوجد"}`,
    );
    return `${WHATSAPP_BASE_URL}?text=${text}`;
  };

  const goNext = () => {
    if (validateStep(step)) setStep(step + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < STEPS.length - 1) {
      goNext();
      return;
    }

    const found = collectErrors();
    if (Object.keys(found).length > 0) {
      // Send the visitor back to the first step that still has a problem.
      const firstBad = STEP_FIELDS.findIndex((fields) => fields.some((f) => found[f]));
      setStep(firstBad);
      setErrors(found);
      return;
    }

    const whatsappWindow = window.open(getWhatsAppUrl(), "_blank");
    if (!whatsappWindow) {
      setErrors({ form: "تعذر فتح واتساب. يرجى السماح بالنوافذ المنبثقة ثم المحاولة مجدداً." });
      return;
    }
    setSubmitted(true);
  };

  const isEmailValid = EMAIL_REGEX.test(email.trim());
  const isWhatsappValid =
    (whatsapp.trim().startsWith("+") || whatsapp.trim().startsWith("00")) && whatsapp.replace(/[^\d]/g, "").length >= 9;

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="lead-modal-title">
      {!submitted ? (
        <div className="space-y-6 pt-6 sm:pt-2">
          <div className="space-y-1.5 text-center">
            <h2 id="lead-modal-title" className="text-xl font-bold text-ink sm:text-2xl">
              اطلب استشارة مجانية
            </h2>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-muted">
              ثلاث خطوات قصيرة، ثم نفتح لك رسالة واتساب جاهزة لترسلها لفريقنا.
            </p>
          </div>

          {/* Stepper */}
          <ol className="grid grid-cols-3 gap-2" aria-label="خطوات النموذج">
            {STEPS.map(({ title, icon: Icon }, i) => {
              const done = i < step;
              const current = i === step;
              return (
                <li key={title} aria-current={current ? "step" : undefined} className="space-y-2">
                  <span className="block h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <span
                      className={`block h-full origin-right rounded-full bg-gold-500 transition-transform duration-500 ${
                        i <= step ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </span>
                  <span className={`flex items-center justify-center gap-1.5 text-xs font-bold ${current ? "text-ink" : done ? "text-success-600" : "text-slate-400"}`}>
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
                      <p className="text-xs font-bold text-brand-700">ملخص اختياراتك في مستشار المسار</p>
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
                        <span className="inline-block rounded-full bg-gold-100 px-2 py-0.5 text-[11px] font-bold text-gold-700">الجامعة المحددة</span>
                        <span className="block font-latin text-sm font-bold text-ink" dir="ltr">{selectedUni.nameEn}</span>
                      </span>
                    </div>
                  )}

                  <fieldset>
                    <legend className="field-label">المرحلة الدراسية المطلوبة *</legend>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {DEGREE_OPTIONS.map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDegreeLevel(d)}
                          aria-pressed={degreeLevel === d}
                          className={`choice-pill ${degreeLevel === d ? "choice-pill-on" : "choice-pill-off"}`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="lead-interest" className="field-label">
                      <BookOpen className="h-4 w-4 text-brand-600" />
                      التخصص أو المجال الدراسي المطلوب *
                    </label>
                    <input
                      id="lead-interest"
                      type="text"
                      value={fieldOfInterest}
                      onChange={(e) => {
                        setFieldOfInterest(e.target.value);
                        clearError("fieldOfInterest");
                      }}
                      placeholder="مثال: الأمن السيبراني، الطب، إدارة الأعمال..."
                      className="field-input"
                      aria-invalid={Boolean(errors.fieldOfInterest)}
                      aria-describedby={errors.fieldOfInterest ? "lead-interest-error" : undefined}
                    />
                    <FieldError id="lead-interest-error" message={errors.fieldOfInterest} />
                    <div className="flex flex-wrap gap-1.5 pt-2.5">
                      {SUGGESTED_MAJORS.map((major) => (
                        <button
                          key={major}
                          type="button"
                          onClick={() => {
                            setFieldOfInterest(major);
                            clearError("fieldOfInterest");
                          }}
                          aria-pressed={fieldOfInterest === major}
                          className={`choice-pill min-h-10 rounded-full px-3 py-1.5 text-xs ${
                            fieldOfInterest === major ? "choice-pill-on" : "choice-pill-off"
                          }`}
                        >
                          {major}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {step === 1 && (
                <>
                  <div>
                    <label htmlFor="lead-name" className="field-label">
                      <User className="h-4 w-4 text-brand-600" />
                      الاسم الكامل *
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
                      placeholder="مثال: عمر محمد أحمد"
                      className="field-input"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "lead-name-error" : undefined}
                    />
                    <FieldError id="lead-name-error" message={errors.name} />
                  </div>

                  <fieldset>
                    <legend className="field-label">
                      <MapPin className="h-4 w-4 text-brand-600" />
                      دولة الإقامة الحالية *
                    </legend>
                    <div className="flex flex-wrap gap-1.5">
                      {POPULAR_COUNTRIES.map((c) => (
                        <button
                          key={c.code}
                          type="button"
                          onClick={() => handleCountrySelect(c)}
                          aria-pressed={country === c.name}
                          className={`choice-pill min-h-10 rounded-full px-3 py-1.5 text-xs ${
                            country === c.name ? "choice-pill-on" : "choice-pill-off"
                          }`}
                        >
                          {c.name}
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
                      placeholder="أو اكتب دولتك هنا..."
                      aria-label="دولة الإقامة الحالية"
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
                      رقم واتساب (مع رمز الدولة) *
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
                      البريد الإلكتروني (اختياري)
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
                      ملاحظات أو أسئلة إضافية (اختياري)
                    </label>
                    <textarea
                      id="lead-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="أي تفاصيل عن معدلك، ميزانيتك، أو الجامعة المفضلة..."
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
                    <ArrowRight className="h-4 w-4" />
                    <span>رجوع</span>
                  </button>
                )}
                <button
                  type="submit"
                  className={`btn flex-1 ${step === STEPS.length - 1 ? "btn-primary min-h-14 text-base" : "btn-dark"}`}
                >
                  {step === STEPS.length - 1 ? (
                    <>
                      <MessageCircle className="h-5 w-5" />
                      <span>متابعة إلى واتساب</span>
                    </>
                  ) : (
                    <>
                      <span>التالي</span>
                      <ArrowLeft className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>

              {errors.form && (
                <p role="alert" className="field-error justify-center text-center">
                  {errors.form}
                </p>
              )}

              {step === STEPS.length - 1 && (
                <p className="flex items-start justify-center gap-1.5 text-center text-xs leading-relaxed text-muted">
                  <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-600" />
                  ستفتح رسالة واتساب لتراجعها وترسلها بنفسك. لا تُرسل بياناتك قبل الضغط على إرسال داخل واتساب.
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
              رسالتك جاهزة في واتساب
            </h2>
            <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted">
              شكراً لك يا <span className="font-bold text-ink">{name}</span>. تم فتح واتساب برسالة مُعبأة مسبقاً. راجعها ثم
              أرسلها إلى فريق ثقة يوني لبدء المحادثة.
            </p>
          </div>

          <div className="space-y-2.5 pt-2">
            <button
              type="button"
              onClick={() => window.open(getWhatsAppUrl(), "_blank")}
              className="btn btn-whatsapp w-full"
            >
              <MessageCircle className="h-5 w-5" />
              <span>إعادة فتح الواتساب إذا لم يفتح تلقائياً</span>
            </button>
            <button type="button" onClick={onClose} className="btn w-full text-slate-600 hover:bg-slate-100">
              إغلاق النافذة
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};
