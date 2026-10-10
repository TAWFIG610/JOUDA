import React, { useState } from "react";
import { FAQS } from "../data/thiqaData";
import { HelpCircle, ChevronDown, Search } from "lucide-react";

interface FAQSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenLeadModal }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [search, setSearch] = useState("");

  const filtered = FAQS.filter(
    (f) => f.q.includes(search) || f.a.includes(search),
  );

  return (
    <section
      id="faq"
      className="py-10 sm:py-20 lg:py-24 bg-white relative border-t border-slate-200/80"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 space-y-3 text-center sm:mb-14">
          <div className="section-eyebrow">
            <HelpCircle className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>إجابات واضحة وموثوقة</span>
          </div>

          <h2 className="section-title">
            الأسئلة الأكثر شيوعاً واستفساراً
          </h2>

          <p className="section-description">
            كل ما يهمك معرفته حول شروط القبول، التكاليف المالية، وإجراءات تأشيرة الطالب الدولية.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="w-4 h-4 text-slate-400 absolute top-1/2 start-4 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="ابحث في الأسئلة الشائعة"
            aria-controls="faq-results"
            placeholder="ابحث في الأسئلة الشائعة (مثال: التأشيرة، التكاليف، شروط اللغة)..."
            className="min-h-12 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] py-3.5 pe-4 ps-11 text-base text-[#0F172A] placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0F254B]"
          />
        </div>

        {/* Accordion */}
        <div id="faq-results" className="space-y-3 mb-10" aria-live="polite">
          {filtered.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] transition-colors duration-200 hover:border-amber-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  id={`faq-question-${idx}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="flex min-h-14 w-full items-center justify-between p-4 text-start transition-colors sm:p-5"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] pe-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#D97706]" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  aria-labelledby={`faq-question-${idx}`}
                  hidden={!isOpen}
                  className="border-t border-slate-200/60 bg-white px-4 pb-5 pt-3 text-sm leading-relaxed text-slate-700 sm:px-5"
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
          {filtered.length === 0 && (
            <p className="rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-6 text-center text-sm text-slate-600">
              لا توجد أسئلة تطابق بحثك. جرّب كلمة أخرى أو تواصل مع مستشارنا.
            </p>
          )}
        </div>

        {/* Help Banner */}
        <div className="rounded-2xl bg-[#0F254B] p-6 text-white text-center sm:text-start flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#F59E0B]/30">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">
              لديك سؤال خاص بملفك أو معدلك الأكاديمي؟
            </h4>
            <p className="text-xs text-slate-300">
              مستشارو ثقة يوني جاهزون للإجابة المباشرة وتقديم المشورة مجاناً.
            </p>
          </div>

          <button
            onClick={() => onOpenLeadModal("faq_bottom_cta")}
            className="min-h-11 rounded-xl bg-[#F59E0B] px-6 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#D97706] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F254B]"
          >
            تحدث مع مستشار أكاديمي
          </button>
        </div>
      </div>
    </section>
  );
};
