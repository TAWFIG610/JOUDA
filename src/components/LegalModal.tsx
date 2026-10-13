import React from "react";
import { Shield } from "lucide-react";
import { Modal } from "./ui/Modal";
import { useLang } from "../i18n/LanguageContext";

interface LegalModalProps {
  isOpen: boolean;
  type: "privacy" | "terms" | "refund" | null;
  onClose: () => void;
}

const CONTENT = {
  privacy: {
    title: { ar: "سياسة الخصوصية وأمان البيانات", en: "Privacy and data security" },
    body: {
      ar: "نحن في منصة ثقة يوني نلتزم بأعلى معايير حماية وخصوصية بيانات الطلاب والدارسين وأولياء الأمور. نقوم بجمع الوثائق الأكاديمية والمستندات الثبوتية لغرض التقديم الرسمي للجامعات الشريكة واستخراج الموافقات والتأشيرات فقط، مع تشفير وحفظ سري متكامل.",
      en: "THIQA UNI is committed to protecting the privacy of students and parents. We collect academic and identity documents only to apply to partner universities and to obtain approvals and visas, and we keep them confidential.",
    },
  },
  terms: {
    title: { ar: "الشروط والأحكام الأكاديمية", en: "Terms and conditions" },
    body: {
      ar: "منصة ثقة يوني تقدم خدمات التمثيل الأكاديمي والتوجيه والتسجيل في الجامعات الدولية والماليزية المعتمدة طبقاً للوائح وزارات التعليم العالي وهيئة الهجرة (EMGS). كافة إجراءاتنا تتم بصفة قانونية معتمدة ومباشرة مع إدارات القبول.",
      en: "THIQA UNI provides academic representation, guidance and enrolment services for accredited Malaysian and international universities, in line with higher-education regulations and EMGS requirements. We work directly with admissions offices.",
    },
  },
  refund: {
    title: { ar: "ميثاق الشفافية والرسوم المباشرة", en: "Fees and transparency" },
    body: {
      ar: "خدمات الاستشارة والتقييم واختيار الجامعات لدى ثقة يوني مجانية تماماً (0$). الرسوم الدراسية تُسدد مباشرة للجامعات الرسمية بفواتير معتمدة بدون أي عمولات خفية أو وسطاء إضافيين.",
      en: "Consultation, assessment and university selection at THIQA UNI are free. Tuition fees are paid directly to the university against official invoices, with no hidden commissions.",
    },
  },
};

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  const { lang, t } = useLang();
  if (!type) return null;
  const content = CONTENT[type];

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="legal-modal-title" maxWidth="sm:max-w-lg">
      <div className="space-y-5 pt-6 sm:pt-2">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-100 text-gold-700">
            <Shield className="h-5 w-5" />
          </span>
          <h2 id="legal-modal-title" className="text-lg font-bold text-ink">
            {t(content.title)}
          </h2>
        </div>
        <p className="rounded-2xl border border-line bg-paper p-4 text-base leading-relaxed text-slate-700">{t(content.body)}</p>
        <button type="button" onClick={onClose} className="btn btn-dark w-full">
          {lang === "ar" ? "إغلاق" : "Close"}
        </button>
      </div>
    </Modal>
  );
};
