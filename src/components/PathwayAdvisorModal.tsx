import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Compass,
  Cpu,
  GraduationCap,
  Landmark,
  Languages,
  Library,
  School,
  Stethoscope,
  Wallet,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Modal } from "./ui/Modal";

interface PathwayAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPathway: (result: string) => void;
}

interface Option {
  label: string;
  hint?: string;
  icon: LucideIcon;
}

const DEGREES: Option[] = [
  { label: "بكالوريوس (جامعي)", icon: GraduationCap },
  { label: "ماجستير", icon: Library },
  { label: "دكتوراه", icon: BookOpen },
  { label: "دورة لغة إنجليزية مكثفة", icon: Languages },
  { label: "سنة تحضيرية (Foundation)", hint: "قبل البكالوريوس", icon: School },
];

const FIELDS: Option[] = [
  { label: "الطب والعلوم الصحية", icon: Stethoscope },
  { label: "الحاسوب والذكاء الاصطناعي", icon: Cpu },
  { label: "الهندسة", icon: Wrench },
  { label: "إدارة الأعمال والمالية", icon: Briefcase },
  { label: "لست متأكداً بعد", icon: Compass },
];

const BUDGETS: Option[] = [
  { label: "اقتصادية", hint: "أقل من 4,000 دولار سنوياً", icon: Wallet },
  { label: "متوسطة", hint: "4,000 – 7,500 دولار سنوياً", icon: Wallet },
  { label: "متقدمة / جامعات عالمية", hint: "+7,500 دولار سنوياً", icon: Landmark },
];

const TOTAL_STEPS = 3;

const OptionCard: React.FC<{ option: Option; selected: boolean; onSelect: () => void; delay: number }> = ({
  option,
  selected,
  onSelect,
  delay,
}) => {
  const Icon = option.icon;
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      style={{ animationDelay: `${delay}ms` }}
      className={`flex min-h-16 w-full animate-fade-up items-center gap-3 rounded-2xl border-2 p-3.5 text-start transition-all duration-200 ${
        selected
          ? "border-gold-500 bg-gold-50 "
          : "border-line bg-white hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50/40"
      }`}
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
          selected ? "bg-gold-500 text-ink" : "bg-brand-50 text-brand-700"
        }`}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="flex-1">
        <span className="block text-sm font-bold text-ink sm:text-base">{option.label}</span>
        {option.hint && <span className="block text-xs text-muted">{option.hint}</span>}
      </span>
      {selected && <CheckCircle2 className="h-5 w-5 shrink-0 animate-pop text-gold-600" aria-hidden="true" />}
    </button>
  );
};

export const PathwayAdvisorModal: React.FC<PathwayAdvisorModalProps> = ({ isOpen, onClose, onSelectPathway }) => {
  const [step, setStep] = useState(1);
  const [degree, setDegree] = useState(DEGREES[0].label);
  const [field, setField] = useState("");
  const [fieldNote, setFieldNote] = useState("");
  const [budget, setBudget] = useState(BUDGETS[1]);

  const interest = [field, fieldNote.trim()].filter(Boolean).join(" — ");
  const isResult = step > TOTAL_STEPS;

  const handleFinish = () => {
    const summary = `المرحلة: ${degree} | الاهتمام: ${interest || "لم يُحدد"} | الميزانية: ${budget.label} (${budget.hint})`;
    onSelectPathway(summary);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="advisor-modal-title" maxWidth="sm:max-w-lg">
      <div className="space-y-6 pt-6 sm:pt-2">
        <div className="space-y-3 text-center">
          <p className="text-sm font-semibold text-slate-500">
            {isResult ? "ملخص اختياراتك" : `سؤال ${step} من ${TOTAL_STEPS}`}
          </p>
          <h2 id="advisor-modal-title" className="text-xl font-bold text-ink sm:text-2xl">
            {isResult ? "هذا ما سنرسله للمستشار" : "ساعدني أختار التخصص"}
          </h2>

          {/* Progress */}
          <div className="mx-auto flex max-w-xs gap-1.5" aria-hidden="true">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <span key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                <span
                  className={`block h-full origin-right rounded-full bg-gold-500 transition-transform duration-500 ${
                    i < step ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </span>
            ))}
          </div>
        </div>

        <div key={step} className="animate-fade-up space-y-3">
          {step === 1 && (
            <>
              <p id="advisor-q1" className="text-base font-bold text-slate-800">ما هي المرحلة الدراسية المستهدفة؟</p>
              <div role="group" aria-labelledby="advisor-q1" className="space-y-2.5">
                {DEGREES.map((d, i) => (
                  <OptionCard key={d.label} option={d} selected={degree === d.label} onSelect={() => setDegree(d.label)} delay={i * 50} />
                ))}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <p id="advisor-q2" className="text-base font-bold text-slate-800">ما المجال الذي يجذبك أكثر؟</p>
              <div role="group" aria-labelledby="advisor-q2" className="space-y-2.5">
                {FIELDS.map((f, i) => (
                  <OptionCard
                    key={f.label}
                    option={f}
                    selected={field === f.label}
                    onSelect={() => setField(field === f.label ? "" : f.label)}
                    delay={i * 50}
                  />
                ))}
              </div>
              <label htmlFor="advisor-field" className="field-label pt-2">
                تخصص محدد في ذهنك؟ (اختياري)
              </label>
              <input
                id="advisor-field"
                value={fieldNote}
                onChange={(e) => setFieldNote(e.target.value)}
                placeholder="مثال: طب الأسنان، الأمن السيبراني..."
                className="field-input"
              />
            </>
          )}

          {step === 3 && (
            <>
              <p id="advisor-q3" className="text-base font-bold text-slate-800">ما الميزانية السنوية المتوقعة للرسوم الدراسية؟</p>
              <div role="group" aria-labelledby="advisor-q3" className="space-y-2.5">
                {BUDGETS.map((b, i) => (
                  <OptionCard key={b.label} option={b} selected={budget.label === b.label} onSelect={() => setBudget(b)} delay={i * 50} />
                ))}
              </div>
            </>
          )}

          {isResult && (
            <div className="space-y-4">
              <dl className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-paper">
                {[
                  ["المرحلة", degree],
                  ["الاهتمام", interest || "لم يُحدد بعد"],
                  ["الميزانية", `${budget.label} (${budget.hint})`],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-start justify-between gap-4 px-4 py-3 text-sm">
                    <dt className="font-bold text-muted">{k}</dt>
                    <dd className="text-end font-bold text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-center text-sm leading-relaxed text-muted">
                سنرسل هذا الملخص للمستشار ليقترح عليك جامعات وبرامج مناسبة. هذه ليست نتيجة قبول نهائية.
              </p>
            </div>
          )}
        </div>

        <div className="flex gap-2.5">
          {step > 1 && (
            <button type="button" onClick={() => setStep(step - 1)} className="btn btn-outline w-1/3 px-3">
              <ArrowRight className="h-4 w-4" />
              <span>رجوع</span>
            </button>
          )}
          {isResult ? (
            <button type="button" onClick={handleFinish} className="btn btn-primary flex-1">
              <span>أرسل اختياراتي للمستشار</span>
              <ArrowLeft className="h-4 w-4" />
            </button>
          ) : (
            <button type="button" onClick={() => setStep(step + 1)} className="btn btn-dark flex-1">
              <span>{step === TOTAL_STEPS ? "اعرض ملخصي" : "التالي"}</span>
              <ArrowLeft className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};
