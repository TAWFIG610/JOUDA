import React from "react";
import { Shield } from "lucide-react";
import { Modal } from "./ui/Modal";

interface LegalModalProps {
  isOpen: boolean;
  type: "privacy" | "terms" | "refund" | null;
  onClose: () => void;
}

const CONTENT = {
  privacy: {
    title: "سياسة الخصوصية وأمان البيانات",
    body: "نحن في منصة ثقة يوني نلتزم بأعلى معايير حماية وخصوصية بيانات الطلاب والدارسين وأولياء الأمور. نقوم بجمع الوثائق الأكاديمية والمستندات الثبوتية لغرض التقديم الرسمي للجامعات الشريكة واستخراج الموافقات والتأشيرات فقط، مع تشفير وحفظ سري متكامل.",
  },
  terms: {
    title: "الشروط والأحكام الأكاديمية",
    body: "منصة ثقة يوني تقدم خدمات التمثيل الأكاديمي والتوجيه والتسجيل في الجامعات الدولية والماليزية المعتمدة طبقاً للوائح وزارات التعليم العالي وهيئة الهجرة (EMGS). كافة إجراءاتنا تتم بصفة قانونية معتمدة ومباشرة مع إدارات القبول.",
  },
  refund: {
    title: "ميثاق الشفافية والرسوم المباشرة",
    body: "خدمات الاستشارة والتقييم واختيار الجامعات لدى ثقة يوني مجانية تماماً (0$). الرسوم الدراسية تُسدد مباشرة للجامعات الرسمية بفواتير معتمدة بدون أي عمولات خفية أو وسطاء إضافيين.",
  },
};

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
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
            {content.title}
          </h2>
        </div>
        <p className="rounded-2xl border border-line bg-paper p-4 text-base leading-relaxed text-slate-700">{content.body}</p>
        <button type="button" onClick={onClose} className="btn btn-dark w-full">
          إغلاق
        </button>
      </div>
    </Modal>
  );
};
