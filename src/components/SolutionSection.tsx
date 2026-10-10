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
    title: "القبول الأكاديمي الرسمي المباشر",
    desc: "نساعدك على مراجعة ملفك وتجهيز طلبك للجامعة التي تختارها، مع توضيح المستندات والخطوات المطلوبة لإصدار خطاب القبول.",
    badge: "قبول رسمي معتمد",
  },
  {
    icon: ShieldCheck,
    title: "متابعة تأشيرة الدراسة كاملة (EMGS)",
    desc: "نتولى كافة الإجراءات الحكومية لطلب التأشيرة وموافقة الدخول (VAL) مع إشراف ومتابعة دقيقة لنسبة الإنجاز.",
    badge: "متابعة الإجراءات",
  },
  {
    icon: MapPin,
    title: "الاستقبال والتسكين الميداني في ماليزيا",
    desc: "فريقنا يستقبلك في مطار كوالالمبور، نوفر خيارات سكن آمنة ومريحة، ونرافقك للفحص الطبي وبدء أول محاضرة باطمئنان.",
    badge: "مرافقة ميدانية شاملة",
  },
];

export const SolutionSection: React.FC<SolutionSectionProps> = ({
  onOpenLeadModal,
}) => {
  return (
    <section className="py-10 sm:py-20 lg:py-24 bg-white relative border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center sm:mb-14">
          <div className="section-eyebrow">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>منظومة ثقة يوني المتكاملة</span>
          </div>

          <h2 className="section-title">
            من أول استشارة... وحتى أول يوم في الحرم الجامعي
          </h2>

          <p className="section-description">
            نساعدك على فهم إجراءات القبول والتأشيرة وتجهيز المستندات، مع توضيح ما يعتمد على الجامعة وما يخضع للجهات الرسمية.
          </p>
        </div>

        {/* 3 Solution Pillars */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:mb-14 sm:gap-6 md:grid-cols-3">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="content-card flex flex-col justify-between bg-[#F8FAFC] p-6 group hover:bg-white"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#0F254B]/5 text-[#0F254B] group-hover:bg-[#0F254B] group-hover:text-white transition-colors flex items-center justify-center">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-amber-50 text-[#D97706] border border-amber-200">
                      {b.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#0F254B] transition-colors">
                    {b.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="text-center">
          <button
            onClick={() => onOpenLeadModal("solution_section_cta")}
            className="inline-flex min-h-12 items-center gap-2.5 rounded-xl bg-[#F59E0B] px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-amber-500/25 transition-all hover:bg-[#D97706] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2"
          >
            <span>ابدأ الآن بتأمين قبولك الجامعي</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
