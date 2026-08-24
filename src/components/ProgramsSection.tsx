import React from "react";
import { STUDY_PROGRAMS } from "../data/joudaData";
import { Sparkles, ArrowLeft, Clock } from "lucide-react";

interface ProgramsSectionProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenAdvisorModal: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onOpenLeadModal,
  onOpenAdvisorModal,
}) => {
  return (
    <section
      id="programs"
      className="py-12 sm:py-16 lg:py-24 bg-[#FAFCFF] relative border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>تخصصات المستقبل الأكثر طلباً</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            اختر تخصصك وابنِ{" "}
            <span className="text-gradient-emerald">
              مستقبلك المهني العالمي
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            برامج معتمدة بأعلى المعايير الأكاديمية مع ارتباط مباشر بأسواق العمل
            الإقليمية والدولية.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {STUDY_PROGRAMS.map((p) => (
            <div
              key={p.id}
              className="p-4 sm:p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500/40 hover:shadow-lg transition-all flex flex-col justify-between space-y-4 shadow-xs group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span
                    className="font-bold px-2.5 py-0.5 rounded-md"
                    style={{
                      color: p.accentColor,
                      backgroundColor: `${p.accentColor}15`,
                    }}
                  >
                    {p.level}
                  </span>
                  <span className="text-slate-500 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{p.duration}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-200">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans mt-0.5 font-medium">
                    {p.titleEn}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {p.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-600">
                    فرص العمل المستقبلية:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {p.careerPaths.map((c, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenLeadModal(`program_${p.id}`)}
                className="w-full flex items-center justify-center gap-2 py-3 min-h-[44px] rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors duration-200 shadow-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <span>التقديم على هذا التخصص</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Advisor Help Box */}
        <div className="rounded-3xl bg-white border border-slate-200 p-4 sm:p-6 text-center space-y-3 shadow-xs">
          <h4 className="text-sm font-bold text-slate-900">
            تريد استشارة خاصة لمعدلك وتخصصك؟
          </h4>
          <button
            onClick={onOpenAdvisorModal}
            className="px-6 py-3 min-h-[44px] rounded-xl text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            افتح مستشار التخصصات السريع
          </button>
        </div>
      </div>
    </section>
  );
};
