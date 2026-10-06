import React, { useState } from "react";
import { POPULAR_PROGRAMS } from "../data/thiqaData";
import { ArrowLeft, BookOpen, Clock, DollarSign, Sparkles, Building2 } from "lucide-react";

interface ProgramsSectionProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenAdvisorModal: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onOpenLeadModal,
  onOpenAdvisorModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredPrograms = POPULAR_PROGRAMS.filter((prog) => {
    if (selectedCategory === "all") return true;
    return prog.category === selectedCategory;
  });

  return (
    <section
      id="programs"
      className="py-16 sm:py-24 bg-white relative border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F254B]/5 border border-[#0F254B]/15 text-[#0F254B] text-xs font-bold shadow-xs">
            <BookOpen className="w-4 h-4 text-[#F59E0B]" />
            <span>GLOBAL FUTURE PROGRAMS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F254B] tracking-tight leading-tight text-balance">
            التخصصات الأكاديمية والمهنية الأكثر طلباً عالمياً
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-medium">
            برامج معتمدة دولياً تؤهلك لسوق العمل العالمي في أسرع المجالات نمواً، مع توفر فترات تدريب عملي وشراكات صناعية.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-[#0F254B] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              جميع التخصصات
            </button>
            <button
              onClick={() => setSelectedCategory("ai_tech")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === "ai_tech"
                  ? "bg-[#0F254B] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              الذكاء الاصطناعي والتكنولوجيا
            </button>
            <button
              onClick={() => setSelectedCategory("health")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === "health"
                  ? "bg-[#0F254B] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              العلوم الطبية وطب الأسنان
            </button>
            <button
              onClick={() => setSelectedCategory("business")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === "business"
                  ? "bg-[#0F254B] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              إدارة الأعمال والتكنولوجيا المالية
            </button>
            <button
              onClick={() => setSelectedCategory("engineering")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === "engineering"
                  ? "bg-[#0F254B] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              الهندسة المتقدمة والروبوتات
            </button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] hover:bg-white p-6 shadow-xs hover:border-[#F59E0B]/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#0F254B]/5 text-[#0F254B] border border-[#0F254B]/10">
                    {prog.level}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                    {prog.durationYears}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#0F254B] transition-colors mb-1">
                  {prog.nameAr}
                </h3>
                <p className="text-xs text-[#64748B] font-sans tracking-wide mb-4" dir="ltr">
                  {prog.nameEn}
                </p>

                {/* Specs Box */}
                <div className="bg-white rounded-xl p-3 border border-slate-200/70 space-y-2 text-xs mb-4">
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-[#D97706]" />
                      متوسط الرسوم:
                    </span>
                    <strong className="text-[#0F254B] font-sans">{prog.avgTuitionAnnual}</strong>
                  </div>

                  <div className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500">فصول القبول:</span>
                    <span className="font-medium text-slate-800">{prog.intakes}</span>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-slate-600">
                    <Building2 className="w-3.5 h-3.5 text-[#0F254B] shrink-0" />
                    <span className="text-[11px]">الجامعات المتميزة:</span>
                    <span className="text-[11px] font-bold text-[#0F254B]">
                      {prog.popularUniversities.join(" • ")}
                    </span>
                  </div>
                </div>

                {/* Career Roles */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-slate-500 block mb-1.5">المستقبل الوظيفي:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {prog.careerRoles.map((role, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100/90 text-slate-700 font-medium"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => onOpenLeadModal(`program_${prog.id}`)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-[#0F254B] text-white hover:bg-[#F59E0B] transition-colors cursor-pointer shadow-xs"
              >
                <span>التقديم واستخراج القبول لهذا التخصص</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Advisor Help Box */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0F254B] to-[#1E3A8A] p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#F59E0B]/20">
          <div className="space-y-2 text-center md:text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F59E0B] text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>مستشار التخصص الذكي</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black">
              لم تجد تخصصك بالتحديد أو غير متأكد من المتطلبات؟
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              استخدم أداة مستشار المسار التفاعلية أو تواصل مع مستشاري THIQA UNI لترشيح البرنامج الأنسب لمؤهلاتك الثانوية أو الجامعية.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={onOpenAdvisorModal}
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#F59E0B] hover:bg-[#D97706] text-white shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>جرب مستشار التخصص</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onOpenLeadModal("programs_direct_consult")}
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>طلب استشارة مباشرة</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
