import React from "react";
import { GraduationCap, ShieldCheck, MapPin, ArrowLeft } from "lucide-react";

interface SolutionSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

const benefits = [
  {
    icon: GraduationCap,
    color: "emerald",
    title: "القبول الأكاديمي الرسمي",
    desc: "نجهّز ملفك الكامل ونقدمه مباشرة للجامعات المعتمدة ونضمن حصولك على القبول الرسمي.",
    iconBg: "bg-emerald-50 text-emerald-600",
    border: "border-emerald-100",
  },
  {
    icon: ShieldCheck,
    color: "blue",
    title: "تأشيرة الدراسة كاملة (EMGS)",
    desc: "نتولى جميع إجراءات التأشيرة الطلابية من البداية حتى وصول الموافقة الرسمية إلى يدك.",
    iconBg: "bg-blue-50 text-blue-600",
    border: "border-blue-100",
  },
  {
    icon: MapPin,
    color: "amber",
    title: "الاستقبال والاستقرار في ماليزيا",
    desc: "مندوبنا يستقبلك في المطار ويرافقك حتى تبدأ أول محاضرة في جامعتك بثقة واطمئنان.",
    iconBg: "bg-amber-50 text-amber-600",
    border: "border-amber-100",
  },
];

export const SolutionSection: React.FC<SolutionSectionProps> = ({
  onOpenLeadModal,
}) => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#FAFCFF] relative border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            من أول سؤال...{" "}
            <span className="text-gradient-emerald">
              إلى أول يوم لك في جامعتك
            </span>
          </h2>
        </div>

        {/* 3 Horizontal Benefit Blocks */}
        <div className="flex flex-col gap-5 mb-10">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-5 p-5 sm:p-6 rounded-3xl bg-white border ${b.border} border-slate-200 shadow-xs hover:shadow-md transition-all duration-200`}
              >
                <div
                  className={`shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center ${b.iconBg}`}
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {b.title}
                  </h3>
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
            className="inline-flex items-center gap-2 px-8 py-3.5 min-h-[44px] rounded-2xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-all duration-200 shadow-md shadow-emerald-600/20 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <span>ابدأ الخطوة الأولى الآن مجاناً</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
