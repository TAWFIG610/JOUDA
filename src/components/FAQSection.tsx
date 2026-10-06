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
        <div className="text-center space-y-2.5 sm:space-y-3.5 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F254B]/5 border border-[#0F254B]/15 text-[#0F254B] text-xs font-bold shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>إجابات واضحة وموثوقة</span>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#0F254B] tracking-tight leading-tight text-balance">
            الأسئلة الأكثر شيوعاً واستفساراً
          </h2>

          <p className="text-xs sm:text-base text-[#64748B] leading-relaxed font-medium">
            كل ما يهمك معرفته حول شروط القبول، التكاليف المالية، وإجراءات تأشيرة الطالب الدولية.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 relative">
          <Search className="w-4 h-4 text-slate-400 absolute top-1/2 start-4 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ابحث في الأسئلة الشائعة (مثال: التأشيرة، التكاليف، شروط اللغة)..."
            className="w-full ps-11 pe-4 py-3.5 min-h-[48px] rounded-xl bg-[#F8FAFC] border border-slate-200 text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0F254B]"
          />
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-10">
          {filtered.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#F8FAFC] border border-slate-200 overflow-hidden transition-all duration-200 hover:border-[#F59E0B]/50"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-start cursor-pointer transition-colors"
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
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
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
            className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#F59E0B] hover:bg-[#D97706] text-white transition-all cursor-pointer whitespace-nowrap shadow-md"
          >
            تحدث مع مستشار أكاديمي
          </button>
        </div>
      </div>
    </section>
  );
};
