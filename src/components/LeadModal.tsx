import React, { useState } from "react";
import {
  WHATSAPP_BASE_URL,
  PARTNER_UNIVERSITIES,
  DISCOVER_TO_APPLY_STEPS,
} from "../data/thiqaData";
import {
  X,
  CheckCircle2,
  MessageCircle,
  AlertCircle,
  Phone,
  Mail,
  User,
  MapPin,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  ArrowLeft,
  FileText,
} from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
  pathwaySummary?: string;
}

interface CountryQuickPick {
  name: string;
  code: string;
  flag: string;
}

const POPULAR_COUNTRIES: CountryQuickPick[] = [
  { name: "السعودية", code: "+966", flag: "🇸🇦" },
  { name: "مصر", code: "+20", flag: "🇪🇬" },
  { name: "اليمن", code: "+967", flag: "🇾🇪" },
  { name: "الإمارات", code: "+971", flag: "🇦🇪" },
  { name: "ماليزيا", code: "+60", flag: "🇲🇾" },
  { name: "عُمان", code: "+968", flag: "🇴🇲" },
  { name: "الكويت", code: "+965", flag: "🇰🇼" },
  { name: "قطر", code: "+974", flag: "🇶🇦" },
  { name: "الأردن", code: "+962", flag: "🇯🇴" },
  { name: "السودان", code: "+249", flag: "🇸🇩" },
];

const DEGREE_OPTIONS = [
  "بكالوريوس",
  "ماجستير",
  "دكتوراه",
  "لغة إنجليزية",
  "دبلوم / تحضيري",
];

const SUGGESTED_MAJORS = [
  "الذكاء الاصطناعي",
  "الأمن السيبراني",
  "الطب البشري",
  "طب الأسنان",
  "إدارة الأعمال",
  "هندسة البرمجيات",
];

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  initialInterest,
  pathwaySummary = "",
}) => {
  const selectedUniId = initialInterest?.startsWith("university_")
    ? initialInterest.replace("university_", "")
    : null;
  const selectedUni = PARTNER_UNIVERSITIES.find((u) => u.id === selectedUniId);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [country, setCountry] = useState("");
  const [degreeLevel, setDegreeLevel] = useState("بكالوريوس");
  const [fieldOfInterest, setFieldOfInterest] = useState(selectedUni?.nameAr ?? "");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handleCountrySelect = (c: CountryQuickPick) => {
    setCountry(c.name);
    if (!whatsapp || whatsapp.startsWith("+")) {
      setWhatsapp(c.code);
    }
    if (errors.country) setErrors((prev) => ({ ...prev, country: "" }));
    if (errors.whatsapp) setErrors((prev) => ({ ...prev, whatsapp: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // 1. Name validation
    const trimmedName = name.trim();
    if (trimmedName.length < 2) {
      newErrors.name = "الاسم الكامل مطلوب";
    }

    // 2. Email is optional; validate its format only when provided.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = email.trim();
    if (trimmedEmail && !emailRegex.test(trimmedEmail)) {
      newErrors.email = "يرجى إدخال بريد إلكتروني صحيح (مثال: name@gmail.com)";
    }

    // 3. WhatsApp with country code validation
    const trimmedWhatsapp = whatsapp.trim();
    const cleanDigits = trimmedWhatsapp.replace(/[^\d]/g, "");
    const hasPlusOrZero =
      trimmedWhatsapp.startsWith("+") || trimmedWhatsapp.startsWith("00");

    if (!trimmedWhatsapp) {
      newErrors.whatsapp = "رقم الواتساب مع رمز الدولة مطلوب";
    } else if (!hasPlusOrZero && cleanDigits.length < 10) {
      newErrors.whatsapp =
        "يرجى إدخال رقم الواتساب مع رمز الدولة (مثال: +966501234567)";
    } else if (cleanDigits.length < 8 || cleanDigits.length > 16) {
      newErrors.whatsapp =
        "رقم الهاتف غير مكتمل، تأكد من كتابة الرقم مع مفتاح الدولة";
    }

    // 4. Country validation
    const trimmedCountry = country.trim();
    if (!trimmedCountry) {
      newErrors.country = "يرجى تحديد دولة الإقامة الحالية";
    } else if (trimmedCountry.length < 2) {
      newErrors.country = "يرجى كتابة اسم الدولة بشكل صحيح";
    }

    // 5. Field of interest validation
    const trimmedField = fieldOfInterest.trim();
    if (!trimmedField) {
      newErrors.fieldOfInterest = "يرجى كتابة التخصص أو المجال المطلوب";
    } else if (trimmedField.length < 2) {
      newErrors.fieldOfInterest = "يرجى توضيح التخصص أو اهتمامك الدراسي";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

  const handleOpenWhatsAppDirect = () => {
    window.open(getWhatsAppUrl(), "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const whatsappWindow = window.open(getWhatsAppUrl(), "_blank");
    if (!whatsappWindow) {
      setErrors((prev) => ({
        ...prev,
        form: "تعذر فتح واتساب. يرجى السماح بالنوافذ المنبثقة ثم المحاولة مجدداً.",
      }));
      return;
    }

    setSubmitted(true);
  };

  // Helper to check valid live formats
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isWhatsappValid =
    (whatsapp.trim().startsWith("+") || whatsapp.trim().startsWith("00")) &&
    whatsapp.replace(/[^\d]/g, "").length >= 9;

  const selectedStepNumber = initialInterest?.startsWith("journey_step_")
    ? Number(initialInterest.replace("journey_step_", ""))
    : null;
  const selectedStep = selectedStepNumber
    ? DISCOVER_TO_APPLY_STEPS[selectedStepNumber - 1]
    : undefined;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto" role="presentation">
      <div className="bg-white rounded-t-[32px] sm:rounded-3xl max-w-xl w-full p-5 sm:p-8 shadow-2xl border-t sm:border border-slate-200/90 relative overflow-y-auto max-h-[92vh] sm:max-h-[90vh] my-0 sm:my-6 text-slate-900 animate-in slide-in-from-bottom-4 duration-300" role="dialog" aria-modal="true" aria-labelledby="lead-modal-title">
        {/* Mobile Pull / Drag Indicator */}
        <div className="w-12 h-1.5 rounded-full bg-slate-300 mx-auto mb-2 block sm:hidden" />

        {/* Subtle Top Gold Accent Bar */}
        <div className="absolute top-0 start-0 end-0 h-1.5 bg-gradient-to-r from-[#0F254B] via-[#F59E0B] to-[#0F254B] hidden sm:block" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 start-4 sm:top-5 sm:start-5 min-h-[44px] min-w-[44px] p-2.5 rounded-2xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2 flex items-center justify-center"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            {/* Modal Header */}
            <div className="text-center space-y-2.5 pt-2">
              <div className="h-18 sm:h-22 flex items-center justify-center mx-auto mb-1">
                <img
                  src="/thiqa-logo.png"
                  alt="شعار ثقة يوني — الشريك الأكاديمي الدولي"
                  width="160"
                  height="80"
                  className="max-h-full w-auto object-contain drop-shadow-xs"
                />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0F254B]/5 border border-[#0F254B]/10 text-[#0F254B] text-xs font-bold shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>تواصل مباشر مع فريق ثقة يوني</span>
              </div>

              <h2 id="lead-modal-title" className="text-xl sm:text-2xl font-black text-[#0F254B] tracking-tight">
                ابدأ رحلتك الأكاديمية مع{" "}
                <span className="text-[#D97706]">ثقة يوني</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-medium max-w-md mx-auto">
                اترك بيانات التواصل واهتماماتك الدراسية، وسنساعدك على فهم الخيارات والخطوات التالية. تختلف الشروط والرسوم حسب البرنامج والجامعة.
              </p>
            </div>

            {pathwaySummary && (
              <div className="rounded-2xl border border-[#0F254B]/15 bg-[#0F254B]/5 p-4 text-start">
                <p className="text-xs font-bold text-[#0F254B]">ملخص اختياراتك في مستشار المسار</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">{pathwaySummary}</p>
              </div>
            )}

            {selectedStep && (
              <div className="rounded-2xl border border-[#0F254B]/15 bg-[#0F254B]/5 p-4 text-start">
                <p className="text-xs font-bold text-[#0F254B]">الخطوة التي تريد مناقشتها</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  {selectedStep.titleAr}
                </p>
              </div>
            )}

            {/* Selected University Official Banner if opened from university ticker */}
            {selectedUni && (
              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#0F254B]/5 border border-[#0F254B]/15 shadow-xs">
                <div className="w-14 h-10 p-1 bg-white rounded-xl border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
                  {selectedUni.logoUrl ? (
                    <img
                      src={selectedUni.logoUrl}
                      alt={selectedUni.nameEn}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-xs font-bold text-[#0F254B]">
                      {selectedUni.shortName}
                    </span>
                  )}
                </div>
                <div className="text-start space-y-0.5">
                  <span className="text-[10px] font-bold text-[#D97706] bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    الجامعة المحددة
                  </span>
                  <p className="text-xs font-black text-slate-900 leading-tight">
                    {selectedUni.nameEn}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Group 1: Personal Contact Info */}
              <div className="space-y-3 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                <div className="flex items-center gap-2 pb-1 border-b border-slate-200/60">
                  <User className="w-4 h-4 text-[#0F254B]" />
                  <span className="text-xs font-black text-[#0F254B]">
                    بيانات الطالب والتواصل المباشر
                  </span>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    value={name}
                    autoComplete="name"
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name)
                        setErrors((prev) => ({ ...prev, name: "" }));
                    }}
                    placeholder="مثال: عمر محمد أحمد"
                    className={`w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-white border ${
                      errors.name
                        ? "border-red-500 bg-red-50/20"
                        : name.trim().length >= 2
                          ? "border-[#0F254B]/40"
                          : "border-slate-200"
                    } text-sm text-slate-900 focus:outline-none focus:border-[#0F254B] focus:ring-2 focus:ring-[#0F254B]/15 transition-all`}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "lead-name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="lead-name-error" className="text-red-600 text-xs mt-1 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email & WhatsApp Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-[#0F254B]" />
                      <span>البريد الإلكتروني (اختياري)</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      autoComplete="email"
                      inputMode="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email)
                          setErrors((prev) => ({ ...prev, email: "" }));
                      }}
                      placeholder="name@example.com"
                      dir="ltr"
                      className={`w-full px-3.5 py-2.5 min-h-[44px] rounded-xl bg-white border ${
                        errors.email
                          ? "border-red-500 bg-red-50/20"
                          : isEmailValid
                            ? "border-[#0F254B]/40"
                            : "border-slate-200"
                      } text-sm text-slate-900 focus:outline-none focus:border-[#0F254B] focus:ring-2 focus:ring-[#0F254B]/15 transition-all text-start`}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "lead-email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="lead-email-error" className="text-red-600 text-xs mt-1 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-[#0F254B]" />
                      <span>رقم واتساب (مع الرمز) *</span>
                    </label>
                    <input
                      type="tel"
                      value={whatsapp}
                      autoComplete="tel"
                      inputMode="tel"
                      onChange={(e) => {
                        setWhatsapp(e.target.value);
                        if (errors.whatsapp)
                          setErrors((prev) => ({ ...prev, whatsapp: "" }));
                      }}
                      placeholder="+966501234567"
                      dir="ltr"
                      className={`w-full px-3.5 py-2.5 min-h-[44px] rounded-xl bg-white border ${
                        errors.whatsapp
                          ? "border-red-500 bg-red-50/20"
                          : isWhatsappValid
                            ? "border-[#0F254B]/40"
                            : "border-slate-200"
                      } text-sm text-slate-900 focus:outline-none focus:border-[#0F254B] focus:ring-2 focus:ring-[#0F254B]/15 text-start transition-all font-sans`}
                      aria-invalid={Boolean(errors.whatsapp)}
                      aria-describedby={errors.whatsapp ? "lead-whatsapp-error" : undefined}
                    />
                    {errors.whatsapp && (
                      <p id="lead-whatsapp-error" className="text-red-600 text-xs mt-1 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.whatsapp}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Quick Country Selector Pills */}
                <div className="space-y-1.5 pt-1">
                  <span className="block text-[11px] font-bold text-slate-500">
                    اختر دولتك للرمز السريع:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {POPULAR_COUNTRIES.map((c) => {
                      const isActive =
                        country === c.name ||
                        (whatsapp.length > 2 && whatsapp.startsWith(c.code));
                      return (
                        <button
                          key={c.code}
                          type="button"
                          onClick={() => handleCountrySelect(c)}
                          className={`inline-flex min-h-[40px] items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                            isActive
                              ? "bg-[#0F254B] text-white border-[#0F254B] shadow-xs scale-102"
                              : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                          }`}
                        >
                          <span>{c.flag}</span>
                          <span className="text-[11px]">{c.name}</span>
                          <span
                            dir="ltr"
                            className={`text-[10px] ${
                              isActive ? "text-[#F59E0B]" : "text-slate-400"
                            }`}
                          >
                            {c.code}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Country of Residence */}
                <div className="pt-1">
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#0F254B]" />
                    <span>دولة الإقامة الحالية *</span>
                  </label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                      if (errors.country)
                        setErrors((prev) => ({ ...prev, country: "" }));
                    }}
                    placeholder="السعودية، مصر، اليمن، الإمارات..."
                    className={`w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-white border ${
                      errors.country
                        ? "border-red-500 bg-red-50/20"
                        : "border-slate-200"
                    } text-sm text-slate-900 focus:outline-none focus:border-[#0F254B] focus:ring-2 focus:ring-[#0F254B]/15 transition-all`}
                    aria-invalid={Boolean(errors.country)}
                    aria-describedby={errors.country ? "lead-country-error" : undefined}
                  />
                  {errors.country && (
                    <p id="lead-country-error" className="text-red-600 text-xs mt-1 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.country}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Group 2: Academic Goals */}
              <div className="space-y-3 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                <div className="flex items-center gap-2 pb-1 border-b border-slate-200/60">
                  <GraduationCap className="w-4 h-4 text-[#0F254B]" />
                  <span className="text-xs font-black text-[#0F254B]">
                    المسار الأكاديمي والتخصص المستهدف
                  </span>
                </div>

                {/* Degree Level as Interactive Pills */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    المرحلة الدراسية المطلوبة *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {DEGREE_OPTIONS.map((d) => {
                      const isSelected = degreeLevel === d;
                      return (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDegreeLevel(d)}
                          aria-pressed={isSelected}
                          className={`min-h-[44px] py-2 px-3 rounded-xl text-xs font-bold text-center transition-all cursor-pointer border ${
                            isSelected
                              ? "bg-[#0F254B] text-white border-[#0F254B] shadow-xs"
                              : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                          }`}
                        >
                          {d}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Field of Interest */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-[#0F254B]" />
                    <span>التخصص أو المجال الدراسي المطلوب *</span>
                  </label>
                  <input
                    type="text"
                    value={fieldOfInterest}
                    onChange={(e) => {
                      setFieldOfInterest(e.target.value);
                      if (errors.fieldOfInterest)
                        setErrors((prev) => ({ ...prev, fieldOfInterest: "" }));
                    }}
                    placeholder="مثال: الأمن السيبراني، الذكاء الاصطناعي، الطب، إدارة الأعمال..."
                    className={`w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-white border ${
                      errors.fieldOfInterest
                        ? "border-red-500 bg-red-50/20"
                        : "border-slate-200"
                    } text-sm text-slate-900 focus:outline-none focus:border-[#0F254B] focus:ring-2 focus:ring-[#0F254B]/15 transition-all`}
                    aria-invalid={Boolean(errors.fieldOfInterest)}
                    aria-describedby={errors.fieldOfInterest ? "lead-interest-error" : undefined}
                  />
                  {errors.fieldOfInterest && (
                    <p id="lead-interest-error" className="text-red-600 text-xs mt-1 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fieldOfInterest}</span>
                    </p>
                  )}

                  {/* Suggestion Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    <span className="text-[10px] font-bold text-slate-400">
                      مقترحات سريعة:
                    </span>
                    {SUGGESTED_MAJORS.map((major) => (
                      <button
                        key={major}
                        type="button"
                        onClick={() => {
                          setFieldOfInterest(major);
                          if (errors.fieldOfInterest)
                            setErrors((prev) => ({
                              ...prev,
                              fieldOfInterest: "",
                            }));
                        }}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white border border-slate-200 hover:border-[#F59E0B] hover:text-[#0F254B] text-slate-600 transition-colors cursor-pointer"
                        aria-pressed={fieldOfInterest === major}
                      >
                        {major}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-[#0F254B]" />
                    <span>ملاحظات أو أسئلة إضافية (اختياري)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="أي تفاصيل عن معدلك، ميزانيتك، أو الجامعة المفضلة..."
                    className="w-full px-4 py-2 min-h-[44px] rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#0F254B] focus:ring-2 focus:ring-[#0F254B]/15 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Action Button & Footnote */}
              <div className="space-y-2 pt-1">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 min-h-[50px] rounded-2xl text-base font-bold bg-[#F59E0B] hover:bg-[#D97706] text-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2"
                >
                  <span>متابعة إلى واتساب</span>
                  <ArrowLeft className="w-5 h-5" />
                </button>

                {errors.form && (
                  <p role="alert" className="text-center text-xs font-medium text-red-700">
                    {errors.form}
                  </p>
                )}

                <div className="flex items-center justify-center gap-1.5 text-center text-xs text-[#64748B] pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                  <span>
                    ستفتح رسالة واتساب لتراجعها وترسلها بنفسك. لا تُرسل بياناتك قبل الضغط على إرسال داخل واتساب.
                  </span>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-[#D97706] border border-amber-500/20 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h2 id="lead-modal-title" className="text-2xl font-black text-[#0F254B]">
              رسالتك جاهزة في واتساب
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto font-medium">
                شكراً لك يا{" "}
                <span className="font-bold text-slate-900">{name}</span>. تم فتح
                واتساب برسالة مُعبأة مسبقاً. راجعها ثم أرسلها إلى فريق ثقة يوني لبدء المحادثة.
              </p>
            </div>

            <div className="pt-2 space-y-3">
              <button
                onClick={handleOpenWhatsAppDirect}
                className="w-full flex items-center justify-center gap-2 py-3.5 min-h-[46px] rounded-2xl text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-200 shadow-md cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>إعادة فتح الواتساب إذا لم يفتح تلقائياً</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-3 min-h-[44px] rounded-xl text-xs font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors duration-200 cursor-pointer"
              >
                إغلاق النافذة
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
