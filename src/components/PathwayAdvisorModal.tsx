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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-t-[32px] sm:rounded-3xl max-w-lg w-full p-5 sm:p-7 lg:p-8 shadow-2xl border-t sm:border border-slate-200/90 relative text-slate-900 overflow-y-auto max-h-[92vh] sm:max-h-[90vh] my-0 sm:my-8 animate-in slide-in-from-bottom-4 duration-300" role="dialog" aria-modal="true" aria-labelledby="advisor-modal-title">
        {/* Mobile Pull / Drag Indicator */}
        <div className="w-12 h-1.5 rounded-full bg-slate-300 mx-auto mb-2 block sm:hidden" />

        <button
          onClick={onClose}
          className="absolute top-4 start-4 sm:top-5 sm:start-5 min-h-[44px] min-w-[44px] p-2.5 rounded-2xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2 flex items-center justify-center"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6 mt-4 sm:mt-0">
          <div className="text-center space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0F254B]/5 text-[#0F254B] text-xs font-bold border border-[#0F254B]/10">
              <Compass className="w-3.5 h-3.5 text-[#D97706]" />
              <span>مستشار التوجيه الأكاديمي • خطوة {step} من 3</span>
            </div>
            <h2 id="advisor-modal-title" className="text-lg sm:text-xl font-bold text-[#0F254B]">
              شاركنا تفضيلاتك الدراسية
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              أجب عن ثلاثة أسئلة قصيرة. سنلخّص اختياراتك لتشاركها مع المستشار؛ هذه ليست نتيجة قبول نهائية.
            </p>
          </div>

          {step === 1 && (
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-700">
                1. ما هي المرحلة الدراسية المستهدفة؟
              </label>
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
                  className={`w-full min-h-[48px] p-3.5 rounded-xl text-xs font-bold text-start border transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2 ${
                    degree === d
                      ? "bg-amber-500/10 border-[#F59E0B] text-[#0F254B]"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {d}
                </button>
              ))}
              <button
                onClick={() => setStep(2)}
                className="w-full min-h-[44px] py-3 rounded-xl text-xs font-bold bg-[#0F254B] hover:bg-[#F59E0B] text-white transition-colors duration-200 mt-4 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2 flex items-center justify-center gap-2"
              >
                <span>المتابعة للخطوة التالية</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-700">
                2. ما هو اهتمامك الدراسي أو ميولك المهنية؟ (اختياري)
              </label>
              <textarea
                value={field}
                onChange={(e) => setField(e.target.value)}
                placeholder="مثال: ذكاء اصطناعي، طب أسنان، هندسة، إدارة أعمال، أو لست متأكداً بعد..."
                rows={3}
                className="w-full p-3.5 rounded-xl text-xs text-slate-800 placeholder-slate-400 border border-slate-200 focus:border-[#0F254B] focus:outline-none focus:ring-2 focus:ring-[#0F254B]/20 transition-all duration-200 resize-none bg-slate-50"
                dir="rtl"
              />
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/3 min-h-[44px] py-3 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-200 cursor-pointer"
                >
                  رجوع
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="w-2/3 min-h-[44px] py-3 rounded-xl text-xs font-bold bg-[#0F254B] hover:bg-[#F59E0B] text-white transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>التالي</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-700">
                3. ما هي الميزانية السنوية المتوقعة للرسوم الدراسية؟
              </label>
              {[
                "اقتصادية (أقل من 4,000 دولار سنوياً)",
                "متوسطة (4,000 - 7,500 دولار سنوياً)",
                "متقدمة / جامعات عالمية (+7,500 دولار سنوياً)",
              ].map((b) => (
                <button
                  key={b}
                  onClick={() => setBudget(b)}
                  aria-pressed={budget === b}
                  className={`w-full min-h-[48px] p-3.5 rounded-xl text-xs font-bold text-start border transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2 ${
                    budget === b
                      ? "bg-amber-500/10 border-[#F59E0B] text-[#0F254B]"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {b}
                </button>
              ))}
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
