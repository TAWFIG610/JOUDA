import React, { useState } from "react";
import { PARTNER_UNIVERSITIES } from "../data/thiqaData";
import { CheckCircle2, ArrowLeft, Search, Award, Calendar, DollarSign } from "lucide-react";

interface UniversitiesSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

export const UniversitiesSection: React.FC<UniversitiesSectionProps> = ({
  onOpenLeadModal,
}) => {
  const [filterType, setFilterType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredUnis = PARTNER_UNIVERSITIES.filter((uni) => {
    const matchesType =
      filterType === "all" ||
      (filterType === "public" && uni.type === "حكومية") ||
      (filterType === "private" && uni.type === "خاصة") ||
      (filterType === "international" && uni.type === "دولية فرع");

    const matchesSearch =
      uni.nameAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.popularFields.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesType && matchesSearch;
  });

  return (
    <section
      id="universities"
      className="py-16 sm:py-24 bg-[#F8FAFC] relative overflow-hidden border-y border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F254B]/5 border border-[#0F254B]/15 text-[#0F254B] text-xs font-bold shadow-xs">
            <Award className="w-4 h-4 text-[#F59E0B]" />
            <span>DISCOVER & COMPARE UNIVERSITIES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F254B] tracking-tight leading-tight text-balance">
            دليل الجامعات الشريكة والمعتمدة دولياً
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed font-medium">
            استكشف أفضل الجامعات الحكومية والخاصة وفروع الجامعات العالمية. قارن الرسوم التقديرية، الترتيب العالمي، ومواعيد القبول (Intakes).
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setFilterType("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filterType === "all"
                  ? "bg-[#0F254B] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
              }`}
            >
              جميع الجامعات ({PARTNER_UNIVERSITIES.length})
            </button>
            <button
              onClick={() => setFilterType("public")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filterType === "public"
                  ? "bg-[#0F254B] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
              }`}
            >
              حكومية معتمدة
            </button>
            <button
              onClick={() => setFilterType("private")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filterType === "private"
                  ? "bg-[#0F254B] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
              }`}
            >
              خاصة رائدة
            </button>
            <button
              onClick={() => setFilterType("international")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filterType === "international"
                  ? "bg-[#0F254B] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
              }`}
            >
              فروع عالمية
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute start-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="ابحث بالاسم أو التخصص..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full ps-10 pe-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0F254B] text-slate-800 placeholder-slate-400"
            />
          </div>
        </div>

        {/* University Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUnis.map((uni) => (
            <div
              key={uni.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:border-[#F59E0B]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top: Logo & Badges */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="h-16 w-24 bg-slate-50 rounded-xl border border-slate-100 p-2 flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
                    {uni.logoUrl ? (
                      <img
                        src={uni.logoUrl}
                        alt={uni.nameEn}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <span className="font-bold text-xs text-[#0F254B]">{uni.shortName}</span>
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#0F254B]/5 text-[#0F254B] border border-[#0F254B]/10">
                      {uni.type || "جامعة معتمدة"}
                    </span>
                    <span className="text-[11px] font-semibold text-[#D97706] bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/80">
                      {uni.ranking}
                    </span>
                  </div>
                </div>

                {/* Names */}
                <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#0F254B] transition-colors line-clamp-1">
                  {uni.nameAr}
                </h3>
                <p className="text-xs text-[#64748B] font-sans tracking-wide mb-4 line-clamp-1" dir="ltr">
                  {uni.nameEn}
                </p>

                {/* Key Metadata Grid */}
                <div className="bg-[#F8FAFC] rounded-xl p-3 space-y-2 border border-slate-100 mb-4 text-xs">
                  <div className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-[#F59E0B]" />
                      الرسوم السنوية:
                    </span>
                    <strong className="text-[#0F254B] font-sans">{uni.annualTuitionUSD || "ميسرة حسب التخصص"}</strong>
                  </div>

                  <div className="flex items-center justify-between text-slate-700">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#0F254B]" />
                      أقرب موعد للقبول:
                    </span>
                    <span className="font-semibold text-slate-800">
                      {uni.nextAdmissionIntakes ? uni.nextAdmissionIntakes[0] : "متاح دورياً"}
                    </span>
                  </div>

                  {uni.scholarshipAvailable && (
                    <div className="pt-1.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-[#D97706] font-bold">
                      <span>المنح والتخفيضات:</span>
                      <span>{uni.scholarshipAvailable}</span>
                    </div>
                  )}
                </div>

                {/* Popular Fields */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-slate-500 block mb-1.5">أبرز الكليات المتميزة:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {uni.popularFields.map((field, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card CTA */}
              <button
                onClick={() => onOpenLeadModal(`university_${uni.id}`)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-[#0F254B] text-white hover:bg-[#F59E0B] transition-colors shadow-xs cursor-pointer"
              >
                <span>التقديم والاستفسار عن هذه الجامعة</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-2xl bg-[#0F254B] p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#F59E0B]/30">
          <div className="space-y-1 text-center sm:text-start">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0" />
              <span>هل تريد مقارنة تفصيلية بين جامعتين محددتين؟</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              مستشارو THIQA UNI مستعدون لإرسال جدول مقارنة كامل بين رسوم وتصنيف التخصصات لمساعدتك على الاختيار.
            </p>
          </div>

          <button
            onClick={() => onOpenLeadModal("compare_universities_cta")}
            className="w-full sm:w-auto min-h-[44px] flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#F59E0B] hover:bg-[#D97706] text-white shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            <span>طلب مقارنة مخصصة مجاناً</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
