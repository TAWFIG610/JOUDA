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
        <div className="text-center space-y-2.5 sm:space-y-3.5 max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F254B]/5 border border-[#0F254B]/15 text-[#0F254B] text-xs font-bold shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>منظومة ثقة يوني المتكاملة</span>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#0F254B] tracking-tight leading-tight text-balance">
            من أول استشارة... وحتى أول يوم في الحرم الجامعي
          </h2>

          <p className="text-xs sm:text-base text-[#64748B] leading-relaxed font-medium">
            نوفر عليك عناء المعاملات والترجمة والاتصالات الدولية؛ نتولى كافة الخطوات الرسمية بمنتهى الدقة والشفافية.
          </p>
        </div>

        {/* 3 Solution Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-[#F8FAFC] border border-slate-200/90 hover:border-[#F59E0B]/50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#0F254B]/5 text-[#0F254B] group-hover:bg-[#0F254B] group-hover:text-white transition-colors flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-amber-50 text-[#D97706] border border-amber-200">
                      {b.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#0F254B] transition-colors">
                    {b.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-medium">
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
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#F59E0B] hover:bg-[#D97706] text-white shadow-md shadow-amber-500/25 transition-all cursor-pointer"
          >
            <span>ابدأ الآن بتأمين قبولك الجامعي</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
