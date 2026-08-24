import React, { useState } from 'react';
import { ArrowLeft, Clock, Compass } from 'lucide-react';

interface StudentJourneyVisualProps {
  onOpenLeadModal: (source?: string) => void;
}

export const StudentJourneyVisual: React.FC<StudentJourneyVisualProps> = ({ onOpenLeadModal }) => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    { num: '01', title: 'الاستشارة والتقييم', time: '1 - 2 يوم', role: 'دراسة معدلك وميزانيتك ومطابقة الجامعات مجاناً' },
    { num: '02', title: 'تجهيز وتدقيق الملف', time: '2 - 3 أيام', role: 'ترجمة وتدقيق الشهادات لضمان استيفاء شروط القبول' },
    { num: '03', title: 'استلام القبول الرسمي', time: '3 - 7 أيام', role: 'استخراج العرض الأكاديمي (Offer Letter) من الجامعة' },
    { num: '04', title: 'إجراءات التأشيرة EMGS', time: '3 - 5 أسابيع', role: 'متابعة المعاملة وإصدار خطاب الموافقة الأمنية (VAL)' },
    { num: '05', title: 'تأكيد السكن وتذكرة السفر', time: 'أسبوع قبل السفر', role: 'حجز السكن القريب وتجهيز تصريح الدخول' },
    { num: '06', title: 'الاستقبال بمطار كوالالمبور', time: 'يوم الوصول', role: 'مندوبنا يستقبلك وينهي معك إجراءات الجوازات' },
    { num: '07', title: 'الفحص الطبي وفتح الحساب', time: 'أول 3 أيام', role: 'مرافقتك للمركز الطبي المعتمد وتفعيل الشريحة والحساب' },
    { num: '08', title: 'بدء الدراسة الجامعية', time: 'الأسبوع الأول', role: 'استلام بطاقة الطالب الجامعية وبدء محاضراتك بنجاح' },
  ];

  return (
    <section id="journey" className="py-12 sm:py-16 lg:py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold shadow-xs">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>خريطة الطريق المباشرة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            مسار الطالب مع جَـوْدَة: <span className="text-gradient-emerald">خطوة بخطوة حتى الحرم الجامعي</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            انقر على أي مرحلة لاستكشاف المهام والمدة الزمنية المتوقعة لها.
          </p>
        </div>

        {/* Roadmap Stepper Pills */}
        <div className="flex overflow-x-auto gap-2 pb-2 sm:grid sm:grid-cols-4 lg:grid-cols-8 sm:gap-2.5 snap-x snap-mandatory mb-8">
          {stages.map((st, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStage(idx)}
              className={`p-3 min-h-[44px] shrink-0 w-28 sm:w-auto snap-start rounded-2xl border text-center transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                activeStage === idx
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20 font-bold sm:scale-105'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
              }`}
            >
              <div className="text-xs font-sans opacity-90">{st.num}</div>
              <div className="text-xs font-bold mt-1">{st.title}</div>
            </button>
          ))}
        </div>

        {/* Active Stage Spotlight Card */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-4 sm:p-6 lg:p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center md:text-start">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  المرحلة {stages[activeStage].num}
                </span>
                <span className="text-xs text-slate-600 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>المدة التقديرية: {stages[activeStage].time}</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {stages[activeStage].title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl font-medium">
                {stages[activeStage].role}
              </p>
            </div>

            <button
              onClick={() => onOpenLeadModal(`journey_stage_${stages[activeStage].num}`)}
              className="shrink-0 flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 min-h-[44px] rounded-2xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-all duration-200 shadow-md cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
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
