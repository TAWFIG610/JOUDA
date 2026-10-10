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
    badge: "متابعة الإجراءات",
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
        <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center sm:mb-14">
          <div className="section-eyebrow">
            <Briefcase className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>خدمات طلابية متكاملة</span>
          </div>

          <h2 className="section-title">
            خدمات متكاملة تغطي كافة متطلبات دراستك
          </h2>

          <p className="section-description">
            من تجهيز الأوراق الأكاديمية حتى الاستقرار الكامل في الحرم الجامعي، نقدم حلولاً احترافية بمعايير عالمية.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:mb-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="content-card flex flex-col justify-between p-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#0F254B]/5 text-[#0F254B] group-hover:bg-[#0F254B] group-hover:text-white transition-colors flex items-center justify-center">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-amber-50 text-thiqa-gold border border-amber-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#0F254B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenLeadModal(`service_${idx + 1}`)}
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#0F254B] transition-colors hover:text-[#B45309] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2"
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
            className="inline-flex min-h-12 items-center gap-2.5 rounded-xl bg-[#0F254B] px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#17376B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2"
          >
            <span>استفسر عن باقة الخدمات الشاملة</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
