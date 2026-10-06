import React from "react";
import {
  GraduationCap,
  ShieldCheck,
  MapPin,
  FileCheck2,
  ArrowLeft,
  Briefcase,
} from "lucide-react";

interface ServicesSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

const services = [
  {
    icon: GraduationCap,
    title: "تأمين القبول الأكاديمي المباشر",
    desc: "نقدّم ملفك ونتواصل مباشرة مع عمادات القبول في الجامعات الحكومية والخاصة المعتمدة لتسريع إصدار القبول الرسمي.",
    badge: "استشارة مجانية 0$",
  },
  {
    icon: ShieldCheck,
    title: "معاملات تأشيرة الطالب EMGS",
    desc: "إشراف وتدقيق متكامل على الفحص الطبي ومتطلبات الهجرة الرسمية حتى صدور خطاب الموافقة الأمنية والتأشيرة (VAL).",
    badge: "متابعة دقيقة 100%",
  },
  {
    icon: MapPin,
    title: "الاستقبال والسكن الطلابي",
    desc: "نوفر لك خيارات سكن آمنة ومريحة بالقرب من الحرم الجامعي، مع استقبال مندوبنا لك بصالة الوصول بمطار كوالالمبور.",
    badge: "مرافقة ميدانية",
  },
  {
    icon: FileCheck2,
    title: "تدقيق ومعادلة المستندات",
    desc: "تدقيق شامل لكافة الشهادات والأوراق وتجهيزها بالصيغة المعتمدة لدى وزارة التعليم العالي الماليزية وهيئات الاعتماد.",
    badge: "تدقيق احترافي",
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenLeadModal,
}) => {
  return (
    <section
      id="services"
      className="py-10 sm:py-20 lg:py-24 bg-[#F8FAFC] relative border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-2.5 sm:space-y-3.5 max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F254B]/5 border border-[#0F254B]/15 text-[#0F254B] text-xs font-bold shadow-2xs">
            <Briefcase className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>خدمات طلابية متكاملة</span>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#0F254B] tracking-tight leading-tight text-balance">
            خدمات متكاملة تغطي كافة متطلبات دراستك
          </h2>

          <p className="text-xs sm:text-base text-[#64748B] leading-relaxed font-medium">
            من تجهيز الأوراق الأكاديمية حتى الاستقرار الكامل في الحرم الجامعي، نقدم حلولاً احترافية بمعايير عالمية.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-white border border-slate-200 hover:border-[#F59E0B]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#0F254B]/5 text-[#0F254B] group-hover:bg-[#0F254B] group-hover:text-white transition-colors flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-amber-50 text-[#D97706] border border-amber-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#0F254B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenLeadModal(`service_${idx + 1}`)}
                    className="text-xs font-bold text-[#0F254B] group-hover:text-[#D97706] flex items-center gap-1 cursor-pointer"
                  >
                    <span>طلب الخدمة</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="text-center">
          <button
            onClick={() => onOpenLeadModal("services_general_cta")}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#0F254B] hover:bg-[#F59E0B] text-white shadow-md transition-all cursor-pointer"
          >
            <span>استفسر عن باقة الخدمات الشاملة</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
