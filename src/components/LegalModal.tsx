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
      title: "سياسة الخصوصية",
      body: "نحن في منصة جودة نلتزم بحماية خصوصية بيانات الطلاب وأولياء الأمور. نقوم بجمع البيانات الأساسية لغرض تقديم الاستشارات والتوجيه الأكاديمي للجامعات الماليزية فقط، مع تشفير وحماية تامة لكافة الوثائق الرسمية.",
    },
    terms: {
      title: "الشروط والأحكام",
      body: "منصة جودة تقدم خدمات التوجيه والإرشاد والتنسيق للجامعات الماليزية المعتمدة طبقاً للوائح الرسمية لهيئة الهجرة الماليزية (EMGS) ووزارة التعليم العالي. نلتزم بأعلى معايير الشفافية والمهنية.",
    },
    refund: {
      title: "سياسة الشفافية",
      body: "الاستشارات الأكاديمية والتقييم الأولي مجانية بالكامل. يتم توضيح كافة الرسوم الدراسية للجامعات والرسوم الإدارية الرسمية مسبقاً وبفواتير معتمدة بدون أي زيادات خفية.",
    },
  }[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-4 sm:p-6 lg:p-8 shadow-2xl border border-slate-200 relative text-slate-900 space-y-4 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 start-4 sm:top-5 sm:start-5 min-h-[44px] min-w-[44px] p-2.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 flex items-center justify-center"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mt-8 sm:mt-0">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">{content.title}</h3>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200 font-medium">
          {content.body}
        </p>

        <button
          onClick={onClose}
          className="w-full py-3 min-h-[44px] rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        >
          إغلاق
        </button>
      </div>
    </div>
  );
};
