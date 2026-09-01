import React, { useState } from "react";
import { WHATSAPP_BASE_URL } from "../data/joudaData";
import {
  X,
  CheckCircle2,
  Send,
  MessageCircle,
  AlertCircle,
  Phone,
  Mail,
  User,
  MapPin,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import confetti from "canvas-confetti";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
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
  { name: "عمان", code: "+968", flag: "🇴🇲" },
  { name: "الكويت", code: "+965", flag: "🇰🇼" },
  { name: "قطر", code: "+974", flag: "🇶🇦" },
  { name: "الأردن", code: "+962", flag: "🇯🇴" },
  { name: "السودان", code: "+249", flag: "🇸🇩" },
];

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  initialInterest,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [country, setCountry] = useState("");
  const [degreeLevel, setDegreeLevel] = useState("بكالوريوس");
  const [fieldOfInterest, setFieldOfInterest] = useState(initialInterest || "");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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

    // 1. Name validation (Must be at least 3 parts, each >= 2 chars)
    const trimmedName = name.trim();
    const nameParts = trimmedName.split(/\s+/).filter((p) => p.length >= 2);
    if (!trimmedName) {
      newErrors.name = "الاسم الكامل مطلوب";
    } else if (nameParts.length < 3) {
      newErrors.name = "يرجى إدخال الاسم الثلاثي كاملاً (مثال: محمد أحمد علي)";
    }

    // 2. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!emailRegex.test(trimmedEmail)) {
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

  const handleOpenWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `مرحباً جودة! أريد التسجيل والبدء للدراسة في ماليزيا.
الاسم الثلاثي: ${name.trim()}
البريد الإلكتروني: ${email.trim()}
رقم الواتساب: ${whatsapp.trim()}
دولة الإقامة: ${country.trim()}
المرحلة الدراسية: ${degreeLevel}
التخصص/المجال المطلوب: ${fieldOfInterest.trim()}
ملاحظات إضافية: ${message.trim() || "لا يوجد"}`,
    );
    window.open(`${WHATSAPP_BASE_URL}?text=${text}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
        });
      } catch {
        // ignore
      }

      // Auto-redirect to WhatsApp immediately
      handleOpenWhatsAppDirect();
    }, 350);
  };

  // Helper to check valid live formats
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isWhatsappValid =
    (whatsapp.trim().startsWith("+") || whatsapp.trim().startsWith("00")) &&
    whatsapp.replace(/[^\d]/g, "").length >= 9;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-7 lg:p-8 shadow-2xl border border-slate-200/80 relative overflow-hidden my-6 text-slate-900">
        <button
          onClick={onClose}
          className="absolute top-4 start-4 sm:top-5 sm:start-5 min-h-[44px] min-w-[44px] p-2.5 rounded-2xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 flex items-center justify-center"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-5">
            {/* Modal Header with Official Logo */}
            <div className="text-center space-y-2 pt-2">
              <div className="w-16 h-16 rounded-2xl bg-white p-1 flex items-center justify-center mx-auto shadow-md border border-slate-100/90 ring-4 ring-emerald-500/10">
                <img
                  src="/logo.png"
                  alt="شعار جودة للدراسة في ماليزيا"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                ابدأ رحلتك الأكاديمية مع{" "}
                <span className="text-gradient-emerald">جَـوْدَة</span>
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium max-w-xs mx-auto">
                سجل بياناتك لدراسة ملفك واقتراح أنسب التخصصات والجامعات مجاناً.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-emerald-600" />
                  <span>الاسم الكامل (ثلاثي) *</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name)
                      setErrors((prev) => ({ ...prev, name: "" }));
                  }}
                  placeholder="مثال: عمر محمد أحمد"
                  className={`w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-slate-50 border ${
                    errors.name
                      ? "border-red-500 bg-red-50/20"
                      : name.trim().split(/\s+/).length >= 3
                        ? "border-emerald-500/60 bg-emerald-50/10"
                        : "border-slate-200"
                  } text-sm sm:text-base text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition-colors`}
                />
                {errors.name && (
                  <p className="text-red-600 text-xs mt-1 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email & WhatsApp Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-emerald-600" />
                    <span>البريد الإلكتروني *</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email)
                        setErrors((prev) => ({ ...prev, email: "" }));
                    }}
                    placeholder="name@example.com"
                    dir="ltr"
                    className={`w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-slate-50 border ${
                      errors.email
                        ? "border-red-500 bg-red-50/20"
                        : isEmailValid
                          ? "border-emerald-500/60 bg-emerald-50/10"
                          : "border-slate-200"
                    } text-sm sm:text-base text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition-colors text-start`}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-xs mt-1 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>رقم واتساب (مع الرمز) *</span>
                  </label>
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => {
                      setWhatsapp(e.target.value);
                      if (errors.whatsapp)
                        setErrors((prev) => ({ ...prev, whatsapp: "" }));
                    }}
                    placeholder="+966501234567"
                    dir="ltr"
                    className={`w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-slate-50 border ${
                      errors.whatsapp
                        ? "border-red-500 bg-red-50/20"
                        : isWhatsappValid
                          ? "border-emerald-500/60 bg-emerald-50/10"
                          : "border-slate-200"
                    } text-sm sm:text-base text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 text-start transition-colors font-sans`}
                  />
                  {errors.whatsapp && (
                    <p className="text-red-600 text-xs mt-1 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.whatsapp}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Quick Country Selector Pills */}
              <div className="space-y-1.5 pt-0.5">
                <span className="block text-[11px] font-bold text-slate-500">
                  اختر دولتك للرمز السريع:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {POPULAR_COUNTRIES.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => handleCountrySelect(c)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                        country === c.name || whatsapp.startsWith(c.code)
                          ? "bg-emerald-100 text-emerald-900 border-emerald-300 shadow-xs scale-105"
                          : "bg-slate-100/80 text-slate-700 border-slate-200 hover:bg-slate-200/80"
                      }`}
                    >
                      <span>{c.flag}</span>
                      <span dir="ltr">{c.code}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Country & Degree Level Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Country */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
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
                    placeholder="السعودية، مصر، اليمن..."
                    className={`w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-slate-50 border ${
                      errors.country
                        ? "border-red-500 bg-red-50/20"
                        : "border-slate-200"
                    } text-sm sm:text-base text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition-colors`}
                  />
                  {errors.country && (
                    <p className="text-red-600 text-xs mt-1 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.country}</span>
                    </p>
                  )}
                </div>

                {/* Degree Level */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                    <span>المرحلة الدراسية *</span>
                  </label>
                  <select
                    value={degreeLevel}
                    onChange={(e) => setDegreeLevel(e.target.value)}
                    className="w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-slate-50 border border-slate-200 text-sm sm:text-base text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 cursor-pointer"
                  >
                    <option value="بكالوريوس">بكالوريوس (جامعي)</option>
                    <option value="ماجستير">ماجستير</option>
                    <option value="دكتوراه">دكتوراه</option>
                    <option value="لغة إنجليزية">كورس لغة إنجليزية</option>
                    <option value="دبلوم">دبلوم مهني/جامعي</option>
                  </select>
                </div>
              </div>

              {/* Field of Interest */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
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
                  placeholder="مثال: الأمن السيبراني، الذكاء الاصطناعي، إدارة الأعمال، الطب..."
                  className={`w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-slate-50 border ${
                    errors.fieldOfInterest
                      ? "border-red-500 bg-red-50/20"
                      : "border-slate-200"
                  } text-sm sm:text-base text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition-colors`}
                />
                {errors.fieldOfInterest && (
                  <p className="text-red-600 text-xs mt-1 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.fieldOfInterest}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  ملاحظات أو أسئلة إضافية (اختياري)
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="أي تفاصيل عن معدلك أو ميزانيتك أو تفضيلاتك..."
                  className="w-full px-4 py-2 min-h-[44px] rounded-xl bg-slate-50 border border-slate-200 text-sm sm:text-base text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2.5 py-4 min-h-[48px] rounded-2xl text-sm font-bold bg-gradient-to-l from-emerald-600 via-emerald-500 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                {loading ? (
                  <span>جاري التحقق والإرسال...</span>
                ) : (
                  <>
                    <span>إرسال طلب التسجيل والتواصل الفوري</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto ring-8 ring-emerald-50">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-slate-900">
              تم تحويلك للواتساب بنجاح!
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto font-medium">
              شكراً لك يا{" "}
              <span className="font-bold text-slate-900">{name}</span>. تم فتح
              تطبيق الواتساب لتتمكن من إرسال تفاصيلك مباشرة إلى مستشار جودة
              المعتمد.
            </p>

            <div className="pt-4 space-y-2.5">
              <button
                onClick={handleOpenWhatsAppDirect}
                className="w-full flex items-center justify-center gap-2 py-3.5 min-h-[44px] rounded-2xl text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all duration-200 shadow-md cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>إعادة فتح الواتساب إذا لم يفتح تلقائياً</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-3 min-h-[44px] rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                إغلاق
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
