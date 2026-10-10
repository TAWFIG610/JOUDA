import React, { useState } from "react";
import { X, Compass, ArrowLeft } from "lucide-react";

interface PathwayAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPathway: (result: string) => void;
}

export const PathwayAdvisorModal: React.FC<PathwayAdvisorModalProps> = ({
  isOpen,
  onClose,
  onSelectPathway,
}) => {
  const [step, setStep] = useState(1);
  const [degree, setDegree] = useState("بكالوريوس (جامعي)");
  const [field, setField] = useState("");
  const [budget, setBudget] = useState("متوسطة (4,000 - 7,500 دولار سنوياً)");

  if (!isOpen) return null;

  const handleFinish = () => {
    const summary = `المرحلة: ${degree} | الاهتمام: ${field || "لم يُحدد"} | الميزانية: ${budget}`;
    onSelectPathway(summary);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto bg-slate-950/75 p-0 backdrop-blur-md animate-in fade-in duration-200 sm:items-center sm:p-4">
      <div className="relative my-0 max-h-[94dvh] w-full max-w-lg overflow-y-auto rounded-t-[28px] border-t border-slate-200/90 bg-white p-5 text-slate-900 shadow-2xl animate-in slide-in-from-bottom-4 duration-300 sm:my-8 sm:max-h-[90vh] sm:rounded-3xl sm:border sm:p-8" role="dialog" aria-modal="true" aria-labelledby="advisor-modal-title">
        {/* Mobile Pull / Drag Indicator */}
        <div className="w-12 h-1.5 rounded-full bg-slate-300 mx-auto mb-2 block sm:hidden" />

        <button
          onClick={onClose}
          className="absolute top-4 start-4 sm:top-5 sm:start-5 min-h-[44px] min-w-[44px] p-2.5 rounded-2xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2 flex items-center justify-center"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mt-4 space-y-6 sm:mt-0">
          <div className="text-center space-y-1">
            <div className="section-eyebrow">
              <Compass className="w-3.5 h-3.5 text-[#D97706]" />
              <span>مستشار التوجيه الأكاديمي • خطوة {step} من 3</span>
            </div>
            <h2 id="advisor-modal-title" className="text-xl font-black text-[#0F254B] sm:text-2xl">
              شاركنا تفضيلاتك الدراسية
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              أجب عن ثلاثة أسئلة قصيرة. سنلخّص اختياراتك لتشاركها مع المستشار؛ هذه ليست نتيجة قبول نهائية.
            </p>
          </div>

          {step === 1 && (
            <div className="space-y-3">
              <p id="advisor-degree-question" className="text-sm font-bold text-slate-700">
                1. ما هي المرحلة الدراسية المستهدفة؟
              </p>
              <div role="group" aria-labelledby="advisor-degree-question" className="space-y-3">
              {[
                "بكالوريوس (جامعي)",
                "ماجستير",
                "دكتوراه",
                "دورة لغة إنجليزية مكثفة",
                "سنة تحضيرية (Foundation)",
              ].map((d) => (
                <button
                  key={d}
                  onClick={() => setDegree(d)}
                  aria-pressed={degree === d}
                  className={`w-full min-h-[48px] rounded-xl border p-3.5 text-sm font-bold text-start transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2 ${
                    degree === d
                      ? "bg-amber-500/10 border-[#F59E0B] text-[#0F254B]"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {d}
                </button>
              ))}
              </div>
              <button
                onClick={() => setStep(2)}
                className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0F254B] py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#17376B] focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2"
              >
                <span>المتابعة للخطوة التالية</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <label htmlFor="advisor-field" className="block text-sm font-bold text-slate-700">
                2. ما هو اهتمامك الدراسي أو ميولك المهنية؟ (اختياري)
              </label>
              <textarea
                id="advisor-field"
                value={field}
                onChange={(e) => setField(e.target.value)}
                placeholder="مثال: ذكاء اصطناعي، طب أسنان، هندسة، إدارة أعمال، أو لست متأكداً بعد..."
                rows={3}
                className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-base text-slate-800 placeholder:text-slate-500 transition-all duration-200 focus:border-[#0F254B] focus:outline-none focus:ring-2 focus:ring-[#0F254B]/20"
                dir="rtl"
              />
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="min-h-11 w-1/3 rounded-xl bg-slate-100 py-3 text-sm font-bold text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus-visible:ring-2 focus-visible:ring-[#0F254B]"
                >
                  رجوع
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex min-h-11 w-2/3 items-center justify-center gap-2 rounded-xl bg-[#0F254B] py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#17376B] focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2"
                >
                  <span>التالي</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              <p id="advisor-budget-question" className="text-sm font-bold text-slate-700">
                3. ما هي الميزانية السنوية المتوقعة للرسوم الدراسية؟
              </p>
              <div role="group" aria-labelledby="advisor-budget-question" className="space-y-3">
              {[
                "اقتصادية (أقل من 4,000 دولار سنوياً)",
                "متوسطة (4,000 - 7,500 دولار سنوياً)",
                "متقدمة / جامعات عالمية (+7,500 دولار سنوياً)",
              ].map((b) => (
                <button
                  key={b}
                  onClick={() => setBudget(b)}
                  aria-pressed={budget === b}
                  className={`w-full min-h-[48px] rounded-xl border p-3.5 text-sm font-bold text-start transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2 ${
                    budget === b
                      ? "bg-amber-500/10 border-[#F59E0B] text-[#0F254B]"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {b}
                </button>
              ))}
              </div>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setStep(2)}
                  className="w-1/3 min-h-[44px] py-3 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-200 cursor-pointer"
                >
                  رجوع
                </button>
                <button
                  onClick={handleFinish}
                  className="w-2/3 min-h-[44px] py-3 rounded-xl text-xs font-bold bg-[#F59E0B] hover:bg-[#D97706] text-white transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>مشاركة اختياراتي مع المستشار</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
