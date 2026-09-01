import React from "react";
import {
  GraduationCap,
  ShieldCheck,
  MapPin,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

interface SolutionSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

const benefits = [
  {
    icon: GraduationCap,
    color: "emerald",
    title: "القبول الأكاديمي الرسمي المباشر",
    desc: "ندرس ملفك ومؤهلاتك ونقدّم طلبك مباشرة للجامعات الماليزية المعتمدة ونضمن استخراج القبول الرسمي (Offer Letter).",
    iconBg: "bg-emerald-100/70 text-emerald-700",
    border: "border-emerald-100 hover:border-emerald-300",
    badge: "ضمان رسمي",
  },
  {
    icon: ShieldCheck,
    color: "blue",
    title: "متابعة تأشيرة الدراسة كاملة (EMGS)",
    desc: "نتولى كافة الإجراءات الحكومية لطلب التأشيرة وموافقة الدخول (VAL) مع إشراف يومي على نسبة الإنجاز.",
    iconBg: "bg-blue-100/70 text-blue-700",
    border: "border-blue-100 hover:border-blue-300",
    badge: "متابعة 100%",
  },
  {
    icon: MapPin,
    color: "amber",
    title: "الاستقبال والاستقرار في ماليزيا",
    desc: "مندوبنا يستقبلك في مطار كوالالمبور، نوفر خيارات سكن آمنة، ونرافقك للفحص الطبي وبدء أول محاضرة باطمئنان.",
    iconBg: "bg-amber-100/70 text-amber-700",
    border: "border-amber-100 hover:border-amber-300",
    badge: "ميداني وشامل",
  },
];

export const SolutionSection: React.FC<SolutionSectionProps> = ({
  onOpenLeadModal,
}) => {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-[#FAFCFF] relative border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 text-xs font-bold shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>منظومة جودة المتكاملة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight text-balance">
            من أول سؤال...{" "}
            <span className="text-gradient-emerald">
              إلى أول يوم لك في جامعتك
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            3 ركائز أساسية تضمن لك رحلة دراسية مريحة وآمنة خالية من المفاجآت أو
            الرسوم الخفية.
          </p>
        </div>

        {/* 3 Horizontal Benefit Blocks */}
        <div className="flex flex-col gap-4 sm:gap-5 mb-10">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-5 sm:p-7 rounded-3xl bg-white border ${b.border} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group`}
              >
                <div
                  className={`shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center ${b.iconBg} shadow-xs group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {b.title}
                    </h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                      {b.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA */}
        <div className="text-center">
          <button
            onClick={() => onOpenLeadModal("solution_section")}
            className="inline-flex items-center gap-2.5 px-9 py-4 min-h-[48px] rounded-2xl text-sm font-bold bg-gradient-to-l from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 transition-all duration-200 shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <span>ابدأ الخطوة الأولى الآن مجاناً</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
