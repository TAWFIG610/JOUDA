import React from "react";
import {
  GraduationCap,
  ShieldCheck,
  MapPin,
  FileCheck2,
  ArrowLeft,
} from "lucide-react";

interface ServicesSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

const services = [
  {
    icon: GraduationCap,
    color: "emerald",
    title: "تأمين القبول الأكاديمي المباشر",
    desc: "نقدّم ملفك ونتواصل مباشرة مع إدارات القبول في الجامعات الحكومية والخاصة المعتمدة لتسريع إصدار القبول.",
    badge: "مجاناً 100%",
    iconBg: "bg-emerald-100/80 text-emerald-700",
    badgeStyle: "bg-emerald-100 text-emerald-900 border border-emerald-200",
    border: "hover:border-emerald-300",
  },
  {
    icon: ShieldCheck,
    color: "blue",
    title: "معاملات تأشيرة الطالب EMGS",
    desc: "إشراف قانوني وفني متكامل على الفحص الطبي ومتطلبات الهجرة حتى صدور خطاب الموافقة الرسمية (VAL).",
    badge: "متابعة دقيقة 100%",
    iconBg: "bg-blue-100/80 text-blue-700",
    badgeStyle: "bg-blue-100 text-blue-900 border border-blue-200",
    border: "hover:border-blue-300",
  },
  {
    icon: MapPin,
    color: "purple",
    title: "الاستقبال والسكن الطلابي",
    desc: "نوفر لك خيارات سكن آمنة ومريحة بالقرب من الحرم الجامعي، مع استقبال مندوبنا لك بصالة الوصول بمطار كوالالمبور.",
    badge: "راحة وأمان",
    iconBg: "bg-purple-100/80 text-purple-700",
    badgeStyle: "bg-purple-100 text-purple-900 border border-purple-200",
    border: "hover:border-purple-300",
  },
  {
    icon: FileCheck2,
    color: "amber",
    title: "تدقيق وترجمة المستندات",
    desc: "تدقيق شامل لكافة الشهادات والأوراق وتجهيزها بالصيغة المعتمدة لدى وزارة التعليم العالي الماليزية.",
    badge: "سرعة ودقة",
    iconBg: "bg-amber-100/80 text-amber-700",
    badgeStyle: "bg-amber-100 text-amber-900 border border-amber-200",
    border: "hover:border-amber-300",
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenLeadModal,
}) => {
  return (
    <section
      id="services"
      className="py-14 sm:py-20 lg:py-28 bg-[#FAFCFF] relative border-t border-slate-200/80"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 text-xs font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>خدمات شاملة للطلاب الدوليين</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight text-balance">
            كل ما تحتاجه لبدء دراستك في{" "}
            <span className="text-gradient-emerald">ماليزيا بكل ثقة</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            خدمات متكاملة تغطي كافة مراحل التقديم والتأشيرة والاستقبال لتضمن
            تجربة دراسية ناجحة ومريحة.
          </p>
        </div>

        {/* 2×2 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-10">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 ${s.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 shadow-sm group`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${s.iconBg} shadow-xs group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${s.badgeStyle}`}
                  >
                    {s.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-700 transition-colors duration-200">
                  {s.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium flex-1">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Single Bottom CTA */}
        <div className="text-center">
          <button
            onClick={() => onOpenLeadModal("services_cta")}
            className="inline-flex items-center gap-2.5 px-9 py-4 min-h-[48px] rounded-2xl text-sm font-bold bg-gradient-to-l from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 transition-all duration-200 shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <span>اطلب خدمتك الآن مجاناً</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
