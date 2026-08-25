import React from "react";
import {
  Sparkles,
  GraduationCap,
  ShieldCheck,
  MapPin,
  Award,
  ArrowLeft,
} from "lucide-react";

interface ServicesSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

const services = [
  {
    icon: GraduationCap,
    color: "emerald",
    title: "القبول الأكاديمي",
    desc: "نقدّم ملفك ونضمن القبول الرسمي من الجامعات المعتمدة.",
    badge: "مجاناً 100%",
    iconBg: "bg-emerald-50 text-emerald-600",
    badgeStyle: "bg-emerald-100 text-emerald-800",
  },
  {
    icon: ShieldCheck,
    color: "blue",
    title: "تأشيرة الطالب EMGS",
    desc: "نتابع طلبك لحين وصول الموافقة الرسمية إلى يدك.",
    badge: "متابعة دقيقة",
    iconBg: "bg-blue-50 text-blue-600",
    badgeStyle: "bg-blue-100 text-blue-800",
  },
  {
    icon: MapPin,
    color: "purple",
    title: "السكن والاستقبال",
    desc: "نحجز لك السكن الآمن ومندوبنا يستقبلك في المطار.",
    badge: "راحة وأمان",
    iconBg: "bg-purple-50 text-purple-600",
    badgeStyle: "bg-purple-100 text-purple-800",
  },
  {
    icon: Award,
    color: "amber",
    title: "المستندات والترجمة",
    desc: "نتولى تجهيز وترجمة جميع الأوراق الرسمية نيابة عنك.",
    badge: "سرعة ودقة",
    iconBg: "bg-amber-50 text-amber-600",
    badgeStyle: "bg-amber-100 text-amber-800",
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenLeadModal,
}) => {
  return (
    <section
      id="services"
      className="py-12 sm:py-16 lg:py-24 bg-[#FAFCFF] relative border-t border-slate-200"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>خدمات شاملة للطلاب الدوليين</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            كل ما تحتاجه لبدء دراستك في{" "}
            <span className="text-gradient-emerald">ماليزيا بكل ثقة</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            خدمات متكاملة تغطي كافة مراحل التقديم والتأشيرة والاستقبال لتضمن
            تجربة دراسية ناجحة ومريحة.
          </p>
        </div>

        {/* 2×2 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-200 flex flex-col gap-4 shadow-xs group"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${s.iconBg}`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-200">
                  {s.title}
                </h3>

                {/* Desc */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium flex-1">
                  {s.desc}
                </p>

                {/* Badge */}
                <span
                  className={`self-start text-xs font-bold px-3 py-1 rounded-full ${s.badgeStyle}`}
                >
                  {s.badge}
                </span>
              </div>
            );
          })}
        </div>

        {/* Single Bottom CTA */}
        <div className="text-center">
          <button
            onClick={() => onOpenLeadModal("services_cta")}
            className="inline-flex items-center gap-2 px-8 py-3.5 min-h-[44px] rounded-2xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-all duration-200 shadow-md shadow-emerald-600/20 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <span>اطلب خدمة الآن</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
