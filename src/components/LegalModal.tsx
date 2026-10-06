import React from "react";
import { X, Shield } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  type: "privacy" | "terms" | "refund" | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  type,
  onClose,
}) => {
  if (!isOpen || !type) return null;

  const content = {
    privacy: {
      title: "سياسة الخصوصية وأمان البيانات",
      body: "نحن في منصة THIQA UNI نلتزم بأعلى معايير حماية وخصوصية بيانات الطلاب والدارسين وأولياء الأمور. نقوم بجمع الوثائق الأكاديمية والمستندات الثبوتية لغرض التقديم الرسمي للجامعات الشريكة واستخراج الموافقات والتأشيرات فقط، مع تشفير وحفظ سري متكامل.",
    },
    terms: {
      title: "الشروط والأحكام الأكاديمية",
      body: "منصة THIQA UNI تقدم خدمات التمثيل الأكاديمي والتوجيه والتسجيل في الجامعات الدولية والماليزية المعتمدة طبقاً للوائح وزارات التعليم العالي وهيئة الهجرة (EMGS). كافة إجراءاتنا تتم بصفة قانونية معتمدة ومباشرة مع إدارات القبول.",
    },
    refund: {
      title: "ميثاق الشفافية والرسوم المباشرة",
      body: "خدمات الاستشارة والتقييم واختيار الجامعات لدى THIQA UNI مجانية تماماً (0$). الرسوم الدراسية تُسدد مباشرة للجامعات الرسمية بفواتير معتمدة بدون أي عمولات خفية أو وسطاء إضافيين.",
    },
  }[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-7 lg:p-8 shadow-2xl border border-slate-200 relative text-slate-900 space-y-4 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 start-4 sm:top-5 sm:start-5 min-h-[44px] min-w-[44px] p-2.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2 flex items-center justify-center"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mt-8 sm:mt-0">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-[#D97706] flex items-center justify-center">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-[#0F254B]">{content.title}</h3>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed bg-[#F8FAFC] p-4 rounded-2xl border border-slate-200 font-medium">
          {content.body}
        </p>

        <button
          onClick={onClose}
          className="w-full py-3 min-h-[44px] rounded-xl text-xs font-bold bg-[#0F254B] hover:bg-[#F59E0B] text-white transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2"
        >
          إغلاق
        </button>
      </div>
    </div>
  );
};
