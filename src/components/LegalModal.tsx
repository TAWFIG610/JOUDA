import React from "react";
import { Modal } from "./ui/Modal";
import { useLang } from "../i18n/LanguageContext";

export type LegalType = "privacy" | "terms" | "refund";

interface LegalModalProps {
  type: LegalType | null;
  onClose: () => void;
}

const CONTENT = {
  privacy: {
    title: { ar: "سياسة الخصوصية وأمان البيانات", en: "Privacy and data security" },
    body: {
      ar: "نحن في منصة ثقة يوني نلتزم بأعلى معايير حماية وخصوصية بيانات الطلاب والدارسين وأولياء الأمور. نقوم بجمع الوثائق الأكاديمية والمستندات الثبوتية لغرض التقديم الرسمي للجامعات الشريكة واستخراج الموافقات والتأشيرات فقط، مع تشفير وحفظ سري متكامل.",
      en: "Thiqa Uni is committed to protecting the privacy of students and parents. We collect academic and identity documents only to apply to partner universities and to obtain approvals and visas, and we keep them confidential.",
    },
  },
  terms: {
    title: { ar: "الشروط والأحكام الأكاديمية", en: "Terms and conditions" },
    body: {
      ar: "منصة ثقة يوني تقدم خدمات التمثيل الأكاديمي والتوجيه والتسجيل في الجامعات الدولية والماليزية المعتمدة طبقاً للوائح وزارات التعليم العالي وهيئة الهجرة (EMGS). كافة إجراءاتنا تتم بصفة قانونية معتمدة ومباشرة مع إدارات القبول.",
      en: "Thiqa Uni provides academic representation, guidance and enrolment services for accredited Malaysian and international universities, in line with higher-education regulations and EMGS requirements. We work directly with admissions offices.",
    },
  },
  refund: {
    title: { ar: "ميثاق الشفافية والرسوم المباشرة", en: "Fees and transparency" },
    body: {
      ar: "خدمات الاستشارة والتقييم واختيار الجامعات لدى ثقة يوني مجانية تماماً (0$). الرسوم الدراسية تُسدد مباشرة للجامعات الرسمية بفواتير معتمدة بدون أي عمولات خفية أو وسطاء إضافيين.",
      en: "Consultation, assessment and university selection at Thiqa Uni are free. Tuition fees are paid directly to the university against official invoices, with no hidden commissions.",
    },
  },
};

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const { lang, t } = useLang();
  if (!type) return null;
  const content = CONTENT[type];

  return (
    <Modal
      onClose={onClose}
      title={t(content.title)}
      footer={
        <button type="button" onClick={onClose} className="btn btn-secondary w-full">
          {lang === "ar" ? "إغلاق" : "Close"}
        </button>
      }
    >
      <p>{t(content.body)}</p>
    </Modal>
  );
};
