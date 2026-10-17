import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { COMPANY, CTA, MAJORS, PARTNER_UNIVERSITIES, whatsappUrl } from "../data/thiqaData";
import type { FieldId, Localized } from "../types";
import { Modal } from "./ui/Modal";
import { BrandIcon } from "./ui/BrandIcon";
import { useLang } from "../i18n/LanguageContext";
import { track } from "../lib/analytics";
import { leadsEnabled } from "../lib/leads";
import { consultationMessage, isValidContact, submitConsultation, type ContactDetails } from "../lib/consult";
import { ContactFields } from "./ContactFields";

interface ConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
  source: string;
  /** "quiz" opens the major finder; "done" shows the confirmation after the hero form. */
  start?: View;
  prefill?: ContactDetails;
}

export type View = "form" | "quiz" | "done";
type Answer = { level: string; field: FieldId | "any"; pref: "public" | "private" | "any" };

const QUESTIONS: { key: keyof Answer; q: Localized; opts: { v: string; label: Localized }[] }[] = [
  {
    key: "level",
    q: { ar: "ما المرحلة التي تريد دراستها؟", en: "What level do you want to study?" },
    opts: [
      { v: "bachelor", label: { ar: "بكالوريوس", en: "Bachelor's" } },
      { v: "master", label: { ar: "ماجستير", en: "Master's" } },
      { v: "phd", label: { ar: "دكتوراه", en: "PhD" } },
      { v: "foundation", label: { ar: "سنة تأسيسية", en: "Foundation year" } },
      { v: "english", label: { ar: "دورة لغة إنجليزية", en: "English course" } },
    ],
  },
  {
    key: "field",
    q: { ar: "أي مجال يهمّك أكثر؟", en: "Which field interests you most?" },
    opts: [
      { v: "med", label: { ar: "الطب والصحة", en: "Medicine & health" } },
      { v: "eng", label: { ar: "الهندسة", en: "Engineering" } },
      { v: "it", label: { ar: "الحاسوب وتقنية المعلومات", en: "Computing & IT" } },
      { v: "bus", label: { ar: "إدارة الأعمال", en: "Business" } },
      { v: "any", label: { ar: "لست متأكداً", en: "Not sure yet" } },
    ],
  },
  {
    key: "pref",
    q: { ar: "هل تفضّل جامعة حكومية أم خاصة؟", en: "Do you prefer a public or private university?" },
    opts: [
      { v: "public", label: { ar: "حكومية", en: "Public" } },
      { v: "private", label: { ar: "خاصة", en: "Private" } },
      { v: "any", label: { ar: "لا يهم", en: "No preference" } },
    ],
  },
];

const TEXT = {
  ar: {
    reply: (h: string) => `يرد عليك مستشار خلال ${h} ساعات عمل.`,
    replyDefault: "الاستشارة الأولى مجانية.",
    toQuiz: "لست متأكداً ماذا تدرس؟ أجب عن 3 أسئلة واحصل على اقتراحات",
    question: (n: number) => `سؤال ${n} من 3`,
    next: "التالي",
    show: "اعرض الاقتراحات",
    send: "إرسال",
    sendRecs: "أرسل لي الاقتراحات",
    majors: "تخصصات مقترحة",
    unis: "جامعات مقترحة",
    recNote: "اقتراحات مبدئية حسب إجاباتك، يؤكدها المستشار حسب معدلك وميزانيتك. اترك بياناتك ليرسلها لك:",
    error: "أدخل اسمك ودولتك ورقم واتساب مع رمز الدولة.",
    savedTitle: "استلمنا طلبك",
    saved: (h: string) => `حفظنا بياناتك، وسيراسلك مستشار على واتساب${h ? ` خلال ${h} ساعات عمل` : " قريباً"}.`,
    orWhatsapp: "أو راسلنا الآن على واتساب",
    lastStepTitle: "خطوة أخيرة",
    lastStep: "أرسل بياناتك لنا على واتساب ليبدأ مستشارك العمل على ملفك.",
    sendWhatsapp: "أرسل على واتساب",
  },
  en: {
    reply: (h: string) => `An advisor replies within ${h} working hours.`,
    replyDefault: "Your first consultation is free.",
    toQuiz: "Not sure what to study? Answer 3 questions for suggestions",
    question: (n: number) => `Question ${n} of 3`,
    next: "Next",
    show: "Show suggestions",
    send: "Send",
    sendRecs: "Send me the suggestions",
    majors: "Suggested majors",
    unis: "Suggested universities",
    recNote: "Initial suggestions based on your answers; an advisor will confirm them against your grades and budget. Leave your details to receive them:",
    error: "Enter your name, country and WhatsApp number with country code.",
    savedTitle: "We've received your request",
    saved: (h: string) => `Your details are saved. An advisor will message you on WhatsApp${h ? ` within ${h} working hours` : " soon"}.`,
    orWhatsapp: "Or message us now on WhatsApp",
    lastStepTitle: "One last step",
    lastStep: "Send your details to us on WhatsApp so your advisor can start on your file.",
    sendWhatsapp: "Send on WhatsApp",
  },
};

const EMPTY_ANSWER: Answer = { level: "", field: "any", pref: "any" };

/** One flow: short consultation form, with an optional major finder that feeds into it. */
export const ConsultModal: React.FC<ConsultModalProps> = ({ isOpen, onClose, source, start = "form", prefill }) => {
  const { lang, t } = useLang();
  const text = TEXT[lang];
  const [view, setView] = useState<View>(start);
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState<Answer>(EMPTY_ANSWER);
  const [picked, setPicked] = useState<Partial<Record<keyof Answer, boolean>>>({});
  const [quizDone, setQuizDone] = useState(false);
  const [details, setDetails] = useState<ContactDetails>(prefill ?? { name: "", country: "", phone: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen && start !== "done") track(start === "quiz" ? "advisor_open" : "lead_form_open", { source });
  }, [isOpen, source, start]);

  const labelOf = (key: keyof Answer) => QUESTIONS.find((q) => q.key === key)!.opts.find((o) => o.v === answer[key])?.label;

  const recommendations = () => {
    let unis = PARTNER_UNIVERSITIES.filter(
      (u) => (answer.field === "any" || u.fields.includes(answer.field)) && (answer.pref === "any" || u.type === answer.pref),
    );
    if (!unis.length) unis = PARTNER_UNIVERSITIES.filter((u) => answer.field === "any" || u.fields.includes(answer.field));
    return { majors: MAJORS[answer.field], unis: unis.slice(0, 4) };
  };

  const quizSummary = () => {
    if (!quizDone) return undefined;
    const lvl = labelOf("level");
    const fld = labelOf("field");
    return { level: lvl ? t(lvl) : "", field: fld ? t(fld) : "", raw: `${answer.level} / ${answer.field} / ${answer.pref}` };
  };

  const submit = () => {
    if (!isValidContact(details)) {
      setError(text.error);
      return;
    }
    // Save the lead first; WhatsApp is offered only afterwards.
    submitConsultation(details, lang, source, quizSummary());
    setView("done");
  };

  const quizNext = () => {
    const key = QUESTIONS[step].key;
    if (!picked[key]) return;
    if (step < 2) {
      setStep(step + 1);
      return;
    }
    track("advisor_complete", { level: answer.level, field: answer.field, pref: answer.pref });
    setQuizDone(true);
    setView("form");
  };

  const recs = quizDone ? recommendations() : null;

  const footer =
    view === "done" ? undefined : (
      <button type="button" onClick={view === "quiz" ? quizNext : submit} className="btn btn-primary w-full">
        {view === "quiz" ? (step < 2 ? text.next : text.show) : quizDone ? text.sendRecs : text.send}
      </button>
    );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t(CTA)}
      subtitle={COMPANY.replyHours ? text.reply(COMPANY.replyHours) : text.replyDefault}
      footer={footer}
    >
      {view === "quiz" && (
        <div>
          <p className="mb-3 text-sm text-muted">{text.question(step + 1)}</p>
          <p id="quiz-q" className="mb-3 font-bold">
            {t(QUESTIONS[step].q)}
          </p>
          <div role="group" aria-labelledby="quiz-q" className="grid gap-2">
            {QUESTIONS[step].opts.map((o) => {
              const key = QUESTIONS[step].key;
              const on = picked[key] && answer[key] === o.v;
              return (
                <button
                  key={o.v}
                  type="button"
                  className="option"
                  aria-pressed={!!on}
                  onClick={() => {
                    setAnswer({ ...answer, [key]: o.v });
                    setPicked({ ...picked, [key]: true });
                  }}
                >
                  {t(o.label)}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {view === "form" && (
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          {recs && (
            <div className="mb-5">
              <h3 className="mb-1 text-base">{text.majors}</h3>
              <ul className="mb-4 divide-y divide-line">
                {recs.majors.map((m) => (
                  <li key={m.en} className="py-2.5">
                    {t(m)}
                  </li>
                ))}
              </ul>
              <h3 className="mb-1 text-base">{text.unis}</h3>
              <ul className="divide-y divide-line">
                {recs.unis.map((u) => (
                  <li key={u.id} className="flex items-center gap-3 py-2.5">
                    <img src={u.logoUrl} alt="" className="h-7 w-16 shrink-0 object-contain" />
                    {lang === "ar" ? u.nameAr : u.nameEn}
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-lg bg-tint px-3 py-2.5 text-sm text-muted">{text.recNote}</p>
            </div>
          )}

          <ContactFields
            idPrefix="c"
            value={details}
            onChange={(v) => {
              setDetails(v);
              setError("");
            }}
            error={error}
          />
          {/* Submits with Enter; the visible button is in the fixed footer */}
          <button type="submit" hidden />

          {!quizDone && (
            <button type="button" className="link mt-3 text-sm" onClick={() => {
                setStep(0);
                setView("quiz");
                track("advisor_open", { source });
              }}>
              {text.toQuiz}
            </button>
          )}
        </form>
      )}

      {view === "done" && (
        <div>
          <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-tint text-navy">
            <Check className="h-6 w-6" aria-hidden="true" />
          </span>
          {leadsEnabled ? (
            <>
              <h3 className="text-lg">{text.savedTitle}</h3>
              <p className="mt-1 text-muted">{text.saved(COMPANY.replyHours)}</p>
              <a href={whatsappUrl(consultationMessage(details, lang, quizSummary()))} target="_blank" rel="noopener noreferrer" data-place="consult_done" className="btn btn-secondary mt-5 w-full">
                <BrandIcon name="whatsapp" className="h-5 w-5" />
                {text.orWhatsapp}
              </a>
            </>
          ) : (
            <>
              {/* Without a lead store the details only reach the team through WhatsApp */}
              <h3 className="text-lg">{text.lastStepTitle}</h3>
              <p className="mt-1 text-muted">{text.lastStep}</p>
              <a href={whatsappUrl(consultationMessage(details, lang, quizSummary()))} target="_blank" rel="noopener noreferrer" data-place="consult_done" className="btn btn-primary mt-5 w-full">
                <BrandIcon name="whatsapp" className="h-5 w-5" />
                {text.sendWhatsapp}
              </a>
            </>
          )}
        </div>
      )}
    </Modal>
  );
};
