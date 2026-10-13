import React from "react";
import { ArrowLeft, Briefcase, FileCheck2, GraduationCap, MapPin, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

interface ServicesSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

const SERVICES = [
  {
    icon: GraduationCap,
    title: "تأمين القبول الأكاديمي المباشر",
    desc: "نراجع ملفك ونجهّز طلبك للجامعة التي تختارها، ونتواصل مع مكاتب القبول في الجامعات الحكومية والخاصة المعتمدة لمتابعة إصدار خطاب القبول الرسمي.",
    badge: "استشارة مجانية",
    span: "lg:col-span-2",
    featured: true,
  },
  {
    icon: ShieldCheck,
    title: "معاملات تأشيرة الطالب EMGS",
    desc: "إشراف وتدقيق على الفحص الطبي ومتطلبات الهجرة الرسمية حتى صدور خطاب الموافقة (VAL).",
    badge: "متابعة الإجراءات",
    span: "",
    featured: false,
  },
  {
    icon: MapPin,
    title: "الاستقبال والسكن الطلابي",
    desc: "خيارات سكن آمنة بالقرب من الحرم الجامعي، واستقبال في مطار كوالالمبور ومرافقة حتى أول محاضرة.",
    badge: "مرافقة ميدانية",
    span: "",
    featured: false,
  },
  {
    icon: FileCheck2,
    title: "تدقيق ومعادلة المستندات",
    desc: "تدقيق شامل للشهادات والأوراق وتجهيزها بالصيغة المعتمدة لدى وزارة التعليم العالي الماليزية وهيئات الاعتماد، لتقليل التأخير والرفض بسبب نقص المستندات.",
    badge: "تدقيق احترافي",
    span: "lg:col-span-2",
    featured: false,
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenLeadModal }) => (
  <section id="services" className="relative bg-white py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        icon={Briefcase}
        eyebrow="منظومة خدمات متكاملة"
        title={
          <>
            من أول استشارة... <span className="text-gradient-gold block">وحتى أول يوم في الحرم الجامعي</span>
          </>
        }
        description="نساعدك على فهم إجراءات القبول والتأشيرة وتجهيز المستندات، مع توضيح ما يعتمد على الجامعة وما يخضع للجهات الرسمية."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {SERVICES.map(({ icon: Icon, title, desc, badge, span, featured }, idx) => (
          <Reveal key={title} delay={idx * 100} className={span}>
            <article
              className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${
                featured
                  ? "bg-gradient-to-br from-brand-800 via-brand-900 to-ink text-white shadow-[0_30px_60px_-30px_rgb(10_24_56/0.7)]"
                  : "content-card"
              }`}
            >
              {featured && (
                <>
                  <div className="bg-dots-light absolute inset-0" aria-hidden="true" />
                  <GraduationCap
                    className="absolute -bottom-8 -end-6 h-44 w-44 rotate-[-12deg] text-white/5 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110"
                    aria-hidden="true"
                  />
                </>
              )}

              <div className="relative space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${
                      featured
                        ? "bg-gradient-to-br from-gold-300 to-gold-500 text-ink"
                        : "bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-200/70"
                    }`}
                  >
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      featured ? "bg-white/10 text-gold-300 ring-1 ring-white/15" : "bg-gold-50 text-gold-700 ring-1 ring-gold-200"
                    }`}
                  >
                    {badge}
                  </span>
                </div>

                <h3 className={`text-xl font-bold leading-snug ${featured ? "sm:text-2xl" : "text-ink"}`}>{title}</h3>
                <p className={`max-w-xl text-base leading-relaxed ${featured ? "text-brand-100/85" : "text-muted"}`}>{desc}</p>
              </div>

              <div className={`relative mt-6 border-t pt-4 ${featured ? "border-white/15" : "border-line"}`}>
                <button
                  type="button"
                  onClick={() => onOpenLeadModal(`service_${idx + 1}`)}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-bold transition-colors ${
                    featured ? "text-gold-300 hover:text-gold-200" : "text-brand-700 hover:text-gold-700"
                  }`}
                >
                  <span>اطلب الخدمة</span>
                  <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <button
          type="button"
          onClick={() => onOpenLeadModal("services_general_cta")}
          className="btn btn-primary btn-shimmer px-8"
        >
          <span>ابدأ الآن بتأمين قبولك الجامعي</span>
          <ArrowLeft className="h-4 w-4" />
        </button>
      </Reveal>
    </div>
  </section>
);
