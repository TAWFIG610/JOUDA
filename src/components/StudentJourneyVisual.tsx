import React, { useState } from "react";
import { ArrowLeft, Clock, Compass, CheckCircle2 } from "lucide-react";

interface StudentJourneyVisualProps {
  onOpenLeadModal: (source?: string) => void;
}

export const StudentJourneyVisual: React.FC<StudentJourneyVisualProps> = ({
  onOpenLeadModal,
}) => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      num: "01",
      title: "الاستشارة والتقييم",
      time: "1 - 2 يوم",
      role: "ندرس ملفك ومعدلك ونحدد معك أفضل المسارات الأكاديمية مجاناً.",
      highlight: "مجاناً 100%",
    },
    {
      num: "02",
      title: "تجهيز الملف والتقديم",
      time: "2 - 5 أيام",
      role: "نجهّز أوراقك ونترجمها ونقدّم طلبك مباشرة للجامعة المعتمدة.",
      highlight: "تدقيق سريع",
    },
    {
      num: "03",
      title: "استلام القبول الرسمي",
      time: "3 - 7 أيام",
      role: "تحصل على خطاب القبول الرسمي المعتمد (Offer Letter) ومراجعة شروطه.",
      highlight: "قبول رسمي",
    },
    {
      num: "04",
      title: "إجراءات التأشيرة EMGS",
      time: "3 - 5 أسابيع",
      role: "نتابع ملفك مع هيئة EMGS حتى صدور موافقة الدخول الرسمية (VAL).",
      highlight: "متابعة دقيقة",
    },
    {
      num: "05",
      title: "الوصول والاستقرار",
      time: "يوم الوصول",
      role: "نستقبلك في المطار ونوفر السكن ونرافقك للفحص الطبي وبدء دراستك.",
      highlight: "مرافقة شاملة",
    },
  ];

  return (
    <section
      id="journey"
      className="py-14 sm:py-20 lg:py-28 bg-white relative border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-900 text-xs font-bold shadow-xs">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>خريطة الطريق المباشرة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight text-balance">
            مسار الطالب مع جَـوْدَة:{" "}
            <span className="text-gradient-emerald">
              خطوة بخطوة حتى الحرم الجامعي
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            انقر على أي مرحلة لاستكشاف المهام والمدة الزمنية المتوقعة لها.
          </p>
        </div>

        {/* Roadmap Stepper Pills */}
        <div className="flex overflow-x-auto gap-2.5 pb-2.5 sm:grid sm:grid-cols-5 sm:gap-3 snap-x snap-mandatory mb-8 scrollbar-none">
          {stages.map((st, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStage(idx)}
              className={`p-3.5 min-h-[52px] shrink-0 w-32 sm:w-auto snap-start rounded-2xl border text-center transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                activeStage === idx
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/25 font-bold sm:scale-105"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40"
              }`}
            >
              <div className="text-[11px] font-sans opacity-85 font-black">
                {st.num}
              </div>
              <div className="text-xs font-bold mt-0.5 whitespace-nowrap">
                {st.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Stage Spotlight Card */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 border border-slate-200/90 p-5 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3.5 text-center md:text-start">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200">
                  المرحلة {stages[activeStage].num}
                </span>
                <span className="text-xs text-slate-600 font-medium flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-slate-200/70">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>المدة التقديرية: {stages[activeStage].time}</span>
                </span>
                <span className="text-xs text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/70 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{stages[activeStage].highlight}</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {stages[activeStage].title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-medium">
                {stages[activeStage].role}
              </p>
            </div>

            <button
              onClick={() =>
                onOpenLeadModal(`journey_stage_${stages[activeStage].num}`)
              }
              className="shrink-0 flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-4 min-h-[48px] rounded-2xl text-sm font-bold bg-gradient-to-l from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 transition-all duration-200 shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <span>ابدأ هذه المرحلة الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
