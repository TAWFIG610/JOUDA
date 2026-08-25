import React, { useState } from "react";
import { X, Sparkles } from "lucide-react";

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
  const [degree, setDegree] = useState("بكالوريوس");
  const [field, setField] = useState("");
  const [budget, setBudget] = useState("متوسطة (4,000 - 7,000 دولار سنوياً)");

  if (!isOpen) return null;

  const handleFinish = () => {
    const summary = `المرحلة: ${degree} | الاهتمام: ${field || "لم يُحدد"} | الميزانية: ${budget}`;
    onSelectPathway(summary);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-4 sm:p-6 lg:p-8 shadow-2xl border border-slate-200 relative text-slate-900 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 start-4 sm:top-5 sm:start-5 min-h-[44px] min-w-[44px] p-2.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 flex items-center justify-center"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6 mt-4 sm:mt-0">
          <div className="text-center space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>مستشار التخصص السريع • خطوة {step} من 3</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              أخبرنا عنك ونحن نجد الأنسب لك
            </h3>
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
              ].map((d) => (
                <button
                  key={d}
                  onClick={() => setDegree(d)}
                  className={`w-full min-h-[48px] p-3.5 rounded-xl text-xs font-bold text-start border transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                    degree === d
                      ? "bg-emerald-50 border-emerald-500 text-emerald-900"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {d}
                </button>
              ))}
              <button
                onClick={() => setStep(2)}
                className="w-full min-h-[44px] py-3 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors duration-200 mt-4 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                المتابعة للخطوة التالية
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-700">
                2. ما هو اهتمامك الدراسي؟ (اختياري)
              </label>
              <textarea
                value={field}
                onChange={(e) => setField(e.target.value)}
                placeholder="مثال: أحب التقنية، أو لست متأكداً بعد..."
                rows={3}
                className="w-full p-3.5 rounded-xl text-xs text-slate-800 placeholder-slate-400 border border-slate-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all duration-200 resize-none bg-slate-50"
                dir="rtl"
              />
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/3 min-h-[44px] py-3 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  رجوع
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="w-2/3 min-h-[44px] py-3 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  التالي
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-700">
                3. ما هي الميزانية السنوية المتوقعة للرسوم؟
              </label>
              {[
                "اقتصادية (أقل من 4,000 دولار سنوياً)",
                "متوسطة (4,000 - 7,000 دولار سنوياً)",
                "متقدمة / جامعات عالمية (+7,000 دولار سنوياً)",
              ].map((b) => (
                <button
                  key={b}
                  onClick={() => setBudget(b)}
                  className={`w-full min-h-[48px] p-3.5 rounded-xl text-xs font-bold text-start border transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                    budget === b
                      ? "bg-emerald-50 border-emerald-500 text-emerald-900"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {b}
                </button>
              ))}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setStep(2)}
                  className="w-1/3 min-h-[44px] py-3 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  رجوع
                </button>
                <button
                  onClick={handleFinish}
                  className="w-2/3 min-h-[44px] py-3 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  إرسال لمستشارنا والتسجيل
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
