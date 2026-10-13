import React from "react";
import { ArrowLeft, FileCheck2, GraduationCap, House, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

interface ServicesSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

const SERVICES = [
  {
    icon: GraduationCap,
    title: "اختيار الجامعة وتقديم طلب القبول",
    desc: "نقترح جامعات تناسب معدلك وميزانيتك، ونجهّز طلبك ونرفعه للجامعة ونتابعه حتى يصدر خطاب القبول.",
  },
  {
    icon: FileCheck2,
    title: "تجهيز المستندات",
    desc: "نراجع شهاداتك وكشوف الدرجات وجواز السفر، ونخبرك بما يحتاج ترجمة أو تصديقاً قبل الإرسال.",
  },
  {
    icon: ShieldCheck,
    title: "متابعة تأشيرة الطالب (EMGS)",
    desc: "نتابع طلب التأشيرة والفحص الطبي حتى صدور خطاب الموافقة (VAL)، ونوضح لك كل مرحلة.",
  },
  {
    icon: House,
    title: "الاستقبال والسكن",
    desc: "نستقبلك في مطار كوالالمبور، ونساعدك في اختيار سكن قريب من الجامعة وإنهاء التسجيل.",
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenLeadModal }) => (
  <section id="services" className="bg-white py-14 sm:py-20">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionHeader
          align="start"
          className="mb-6 sm:mb-6"
          title="ما الذي نقوم به عنك"
          description="تتواصل مع شخص واحد من فريقنا طوال الطريق، من اختيار الجامعة حتى استلام السكن."
        />
        <button type="button" onClick={() => onOpenLeadModal("services_general_cta")} className="btn btn-dark hidden lg:inline-flex">
          اسأل عن خدماتنا
          <ArrowLeft className="h-4 w-4" />
        </button>
      </div>

      <ul className="divide-y divide-line border-y border-line">
        {SERVICES.map(({ icon: Icon, title, desc }, idx) => (
          <Reveal as="li" key={title} delay={idx * 60}>
            <div className="flex gap-4 py-6 sm:gap-5 sm:py-7">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-ink sm:text-xl">{title}</h3>
                <p className="mt-1.5 text-base leading-relaxed text-muted">{desc}</p>
                <button
                  type="button"
                  onClick={() => onOpenLeadModal(`service_${idx + 1}`)}
                  className="text-link mt-2 text-sm"
                >
                  اسأل عن هذه الخدمة
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>

      <button type="button" onClick={() => onOpenLeadModal("services_general_cta")} className="btn btn-dark w-full lg:hidden">
        اسأل عن خدماتنا
        <ArrowLeft className="h-4 w-4" />
      </button>
    </div>
  </section>
);
