import React, { useEffect, useState } from "react";
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
import type { Localized } from "../types";
import { Modal } from "./ui/Modal";
import { useLang } from "../i18n/LanguageContext";
import { track } from "../lib/analytics";

interface PathwayAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPathway: (result: string) => void;
}

interface Option {
  label: Localized;
  hint?: Localized;
  icon: LucideIcon;
}

const DEGREES: Option[] = [
  { label: { ar: "بكالوريوس (جامعي)", en: "Bachelor's degree" }, icon: GraduationCap },
  { label: { ar: "ماجستير", en: "Master's degree" }, icon: Library },
  { label: { ar: "دكتوراه", en: "PhD" }, icon: BookOpen },
  { label: { ar: "دورة لغة إنجليزية مكثفة", en: "Intensive English course" }, icon: Languages },
  {
    label: { ar: "سنة تحضيرية (Foundation)", en: "Foundation year" },
    hint: { ar: "قبل البكالوريوس", en: "Before a bachelor's degree" },
    icon: School,
  },
];

const FIELDS: Option[] = [
  { label: { ar: "الطب والعلوم الصحية", en: "Medicine and health sciences" }, icon: Stethoscope },
  { label: { ar: "الحاسوب والذكاء الاصطناعي", en: "Computing and AI" }, icon: Cpu },
  { label: { ar: "الهندسة", en: "Engineering" }, icon: Wrench },
  { label: { ar: "إدارة الأعمال والمالية", en: "Business and finance" }, icon: Briefcase },
  { label: { ar: "لست متأكداً بعد", en: "Not sure yet" }, icon: Compass },
];

const BUDGETS: Option[] = [
  { label: { ar: "اقتصادية", en: "Economical" }, hint: { ar: "أقل من 4,000 دولار سنوياً", en: "Under $4,000 a year" }, icon: Wallet },
  { label: { ar: "متوسطة", en: "Mid-range" }, hint: { ar: "4,000 – 7,500 دولار سنوياً", en: "$4,000 – $7,500 a year" }, icon: Wallet },
  {
    label: { ar: "متقدمة / جامعات عالمية", en: "Higher / international campuses" },
    hint: { ar: "+7,500 دولار سنوياً", en: "Over $7,500 a year" },
    icon: Landmark,
  },
];

const TOTAL_STEPS = 3;

const TEXT = {
  ar: {
    question: (n: number) => `سؤال ${n} من ${TOTAL_STEPS}`,
    summaryLabel: "ملخص اختياراتك",
    title: "ساعدني أختار التخصص",
    summaryTitle: "هذا ما سنرسله للمستشار",
    q1: "ما هي المرحلة الدراسية المستهدفة؟",
    q2: "ما المجال الذي يجذبك أكثر؟",
    q2Note: "تخصص محدد في ذهنك؟ (اختياري)",
    q2Placeholder: "مثال: طب الأسنان، الأمن السيبراني...",
    q3: "ما الميزانية السنوية المتوقعة للرسوم الدراسية؟",
    level: "المرحلة",
    interest: "الاهتمام",
    budget: "الميزانية",
    notSet: "لم يُحدد بعد",
    disclaimer: "سنرسل هذا الملخص للمستشار ليقترح عليك جامعات وبرامج مناسبة. هذه ليست نتيجة قبول نهائية.",
    back: "رجوع",
    next: "التالي",
    showSummary: "اعرض ملخصي",
    send: "أرسل اختياراتي للمستشار",
  },
  en: {
    question: (n: number) => `Question ${n} of ${TOTAL_STEPS}`,
    summaryLabel: "Your choices",
    title: "Help me choose a major",
    summaryTitle: "This is what we'll send the advisor",
    q1: "What level do you want to study?",
    q2: "Which field interests you most?",
    q2Note: "A specific major in mind? (optional)",
    q2Placeholder: "e.g. Dentistry, Cyber Security...",
    q3: "What is your expected yearly tuition budget?",
    level: "Level",
    interest: "Interest",
    budget: "Budget",
    notSet: "Not decided yet",
    disclaimer: "We'll send this summary to an advisor, who will suggest suitable universities and programs. This is not an admission decision.",
    back: "Back",
    next: "Next",
    showSummary: "Show my summary",
    send: "Send my choices to an advisor",
  },
};

const OptionCard: React.FC<{ option: Option; selected: boolean; onSelect: () => void; delay: number }> = ({
  option,
  selected,
  onSelect,
  delay,
}) => {
  const { t } = useLang();
  const Icon = option.icon;
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      style={{ animationDelay: `${delay}ms` }}
      className={`flex min-h-16 w-full animate-fade-up items-center gap-3 rounded-2xl border-2 p-3.5 text-start transition-all duration-200 ${
        selected ? "border-gold-500 bg-gold-50" : "border-line bg-white hover:border-brand-200 hover:bg-brand-50/40"
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
        <span className="block text-sm font-bold text-ink sm:text-base">{t(option.label)}</span>
        {option.hint && <span className="block text-xs text-muted">{t(option.hint)}</span>}
      </span>
      {selected && <CheckCircle2 className="h-5 w-5 shrink-0 animate-pop text-gold-600" aria-hidden="true" />}
    </button>
  );
};

export const PathwayAdvisorModal: React.FC<PathwayAdvisorModalProps> = ({ isOpen, onClose, onSelectPathway }) => {
  const { lang, t } = useLang();
  const text = TEXT[lang];
  const [step, setStep] = useState(1);
  const [degree, setDegree] = useState(DEGREES[0]);
  const [field, setField] = useState<Option | null>(null);
  const [fieldNote, setFieldNote] = useState("");
  const [budget, setBudget] = useState(BUDGETS[1]);

  useEffect(() => {
    if (isOpen) track("advisor_open");
  }, [isOpen]);

  const interest = [field ? t(field.label) : "", fieldNote.trim()].filter(Boolean).join(" — ");
  const budgetText = `${t(budget.label)} (${budget.hint ? t(budget.hint) : ""})`;
  const isResult = step > TOTAL_STEPS;

  const handleFinish = () => {
    track("advisor_complete", { degree: degree.label.en, field: field?.label.en ?? "none", budget: budget.label.en });
    onSelectPathway(`${text.level}: ${t(degree.label)} | ${text.interest}: ${interest || text.notSet} | ${text.budget}: ${budgetText}`);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="advisor-modal-title" maxWidth="sm:max-w-lg">
      <div className="space-y-6 pt-6 sm:pt-2">
        <div className="space-y-3 text-center">
          <p className="text-sm font-semibold text-slate-500">{isResult ? text.summaryLabel : text.question(step)}</p>
          <h2 id="advisor-modal-title" className="text-xl font-bold text-ink sm:text-2xl">
            {isResult ? text.summaryTitle : text.title}
          </h2>

          <div className="mx-auto flex max-w-xs gap-1.5" aria-hidden="true">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <span key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                <span
                  className={`block h-full rounded-full bg-gold-500 transition-transform duration-500 ltr:origin-left rtl:origin-right ${
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
              <p id="advisor-q1" className="text-base font-bold text-slate-800">{text.q1}</p>
              <div role="group" aria-labelledby="advisor-q1" className="space-y-2.5">
                {DEGREES.map((d, i) => (
                  <OptionCard key={d.label.en} option={d} selected={degree === d} onSelect={() => setDegree(d)} delay={i * 50} />
                ))}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <p id="advisor-q2" className="text-base font-bold text-slate-800">{text.q2}</p>
              <div role="group" aria-labelledby="advisor-q2" className="space-y-2.5">
                {FIELDS.map((f, i) => (
                  <OptionCard
                    key={f.label.en}
                    option={f}
                    selected={field === f}
                    onSelect={() => setField(field === f ? null : f)}
                    delay={i * 50}
                  />
                ))}
              </div>
              <label htmlFor="advisor-field" className="field-label pt-2">
                {text.q2Note}
              </label>
              <input
                id="advisor-field"
                value={fieldNote}
                onChange={(e) => setFieldNote(e.target.value)}
                placeholder={text.q2Placeholder}
                className="field-input"
              />
            </>
          )}

          {step === 3 && (
            <>
              <p id="advisor-q3" className="text-base font-bold text-slate-800">{text.q3}</p>
              <div role="group" aria-labelledby="advisor-q3" className="space-y-2.5">
                {BUDGETS.map((b, i) => (
                  <OptionCard key={b.label.en} option={b} selected={budget === b} onSelect={() => setBudget(b)} delay={i * 50} />
                ))}
              </div>
            </>
          )}

          {isResult && (
            <div className="space-y-4">
              <dl className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-paper">
                {[
                  [text.level, t(degree.label)],
                  [text.interest, interest || text.notSet],
                  [text.budget, budgetText],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-start justify-between gap-4 px-4 py-3 text-sm">
                    <dt className="font-bold text-muted">{k}</dt>
                    <dd className="text-end font-bold text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-center text-sm leading-relaxed text-muted">{text.disclaimer}</p>
            </div>
          )}
        </div>

        <div className="flex gap-2.5">
          {step > 1 && (
            <button type="button" onClick={() => setStep(step - 1)} className="btn btn-outline w-1/3 px-3">
              <ArrowRight className="flip-ltr h-4 w-4" />
              <span>{text.back}</span>
            </button>
          )}
          {isResult ? (
            <button type="button" onClick={handleFinish} className="btn btn-primary flex-1 whitespace-normal">
              <span>{text.send}</span>
              <ArrowLeft className="flip-ltr h-4 w-4" />
            </button>
          ) : (
            <button type="button" onClick={() => setStep(step + 1)} className="btn btn-dark flex-1">
              <span>{step === TOTAL_STEPS ? text.showSummary : text.next}</span>
              <ArrowLeft className="flip-ltr h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};
