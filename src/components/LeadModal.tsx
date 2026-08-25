import React, { useState } from "react";
import { WHATSAPP_BASE_URL } from "../data/joudaData";
import {
  X,
  CheckCircle2,
  Send,
  Sparkles,
  MessageCircle,
  AlertCircle,
} from "lucide-react";
import confetti from "canvas-confetti";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

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
      newErrors.whatsapp = "رقم الواتساب مع الرمز مطلوب";
    } else if (!hasPlusOrZero && cleanDigits.length < 10) {
      newErrors.whatsapp =
        "يرجى إدخال رقم الواتساب مع رمز الدولة (مثال: 966501234567+ أو 60123456789+)";
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
      `مرحباً جودة! أريد التسجيل والبدء.
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
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // ignore
      }

      // Auto-redirect to WhatsApp immediately
      handleOpenWhatsAppDirect();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-4 sm:p-6 lg:p-8 shadow-2xl border border-slate-200 relative overflow-hidden my-8 text-slate-900">
        <button
          onClick={onClose}
          className="absolute top-4 start-4 sm:top-5 sm:start-5 min-h-[44px] min-w-[44px] p-2.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 flex items-center justify-center"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center space-y-2 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-2 mt-4 sm:mt-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                ابدأ رحلتك الأكاديمية مع جَـوْدَة
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                سجل بياناتك لدراسة ملفك واقتراح أنسب التخصصات والجامعات مجاناً.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  الاسم الكامل (ثلاثي) *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  placeholder="مثال: عمر محمد أحمد"
                  className={`w-full px-4 py-2 min-h-[44px] rounded-xl bg-slate-50 border ${
                    errors.name
                      ? "border-red-500 bg-red-50/20"
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
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-2 min-h-[44px] rounded-xl bg-slate-50 border ${
                      errors.email
                        ? "border-red-500 bg-red-50/20"
                        : "border-slate-200"
                    } text-sm sm:text-base text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-xs mt-1 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    رقم واتساب (مع رمز الدولة) *
                  </label>
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => {
                      setWhatsapp(e.target.value);
                      if (errors.whatsapp)
                        setErrors({ ...errors, whatsapp: "" });
                    }}
                    placeholder="+966501234567"
                    dir="ltr"
                    className={`w-full px-4 py-2 min-h-[44px] rounded-xl bg-slate-50 border ${
                      errors.whatsapp
                        ? "border-red-500 bg-red-50/20"
                        : "border-slate-200"
                    } text-sm sm:text-base text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 text-end transition-colors`}
                  />
                  {errors.whatsapp && (
                    <p className="text-red-600 text-xs mt-1 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.whatsapp}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Country & Degree Level */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    دولة الإقامة الحالية *
                  </label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                      if (errors.country) setErrors({ ...errors, country: "" });
                    }}
                    placeholder="السعودية، مصر، اليمن، الإمارات..."
                    className={`w-full px-4 py-2 min-h-[44px] rounded-xl bg-slate-50 border ${
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

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    المرحلة الدراسية المطلوبة *
                  </label>
                  <select
                    value={degreeLevel}
                    onChange={(e) => setDegreeLevel(e.target.value)}
                    className="w-full px-4 py-2 min-h-[44px] rounded-xl bg-slate-50 border border-slate-200 text-sm sm:text-base text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 cursor-pointer"
                  >
                    <option value="بكالوريوس">بكالوريوس (جامعي)</option>
                    <option value="ماجستير">ماجستير</option>
                    <option value="دكتوراه">دكتوراه</option>
                    <option value="لغة إنجليزية">كورس لغة إنجليزية</option>
                    <option value="دبلوم">دبلوم</option>
                  </select>
                </div>
              </div>

              {/* Field of Interest */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  التخصص أو المجال الدراسي المطلوب *
                </label>
                <input
                  type="text"
                  value={fieldOfInterest}
                  onChange={(e) => {
                    setFieldOfInterest(e.target.value);
                    if (errors.fieldOfInterest)
                      setErrors({ ...errors, fieldOfInterest: "" });
                  }}
                  placeholder="مثال: الأمن السيبراني، الذكاء الاصطناعي، إدارة الأعمال، الطب..."
                  className={`w-full px-4 py-2 min-h-[44px] rounded-xl bg-slate-50 border ${
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
                className="w-full flex items-center justify-center gap-2 py-3.5 min-h-[48px] rounded-2xl text-xs font-bold bg-gradient-to-l from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-600/20 transition-all duration-200 disabled:opacity-50 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                {loading ? (
                  <span>جاري التحقق والإرسال...</span>
                ) : (
                  <>
                    <span>إرسال طلب التسجيل والتواصل الفوري</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              تم تحويلك للواتساب بنجاح!
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto font-medium">
              شكراً لك يا{" "}
              <span className="font-bold text-slate-900">{name}</span>. تم فتح
              تطبيق الواتساب لتتمكن من إرسال تفاصيلك مباشرة إلى مستشار جودة
              المعتمد.
            </p>

            <div className="pt-4 space-y-2">
              <button
                onClick={handleOpenWhatsAppDirect}
                className="w-full flex items-center justify-center gap-2 py-3 min-h-[44px] rounded-xl text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors duration-200 shadow-md cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>إعادة فتح الواتساب إذا لم يفتح تلقائياً</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-3 min-h-[44px] rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
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
