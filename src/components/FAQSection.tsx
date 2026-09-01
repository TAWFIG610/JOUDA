import React, { useState } from "react";
import { FAQS, WHATSAPP_BASE_URL, WHATSAPP_DISPLAY } from "../data/joudaData";
import { HelpCircle, ChevronDown, Search, PhoneCall } from "lucide-react";

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
      className="py-14 sm:py-20 lg:py-28 bg-white relative border-t border-slate-200/80"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3.5 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 text-xs font-bold shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>إجابات مباشرة وشفافة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight text-balance">
            الأسئلة الأكثر{" "}
            <span className="text-gradient-emerald">شيوعاً واستفساراً</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            كل ما يهمك معرفته حول شروط القبول، التكاليف المالية، وإجراءات تأشيرة
            الطالب.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 relative">
          <Search className="w-4 h-4 text-slate-400 absolute top-1/2 start-4 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ابحث في الأسئلة الشائعة (مثال: التأشيرة، التكاليف، القبول)..."
            className="w-full ps-11 pe-4 py-3.5 min-h-[48px] rounded-2xl bg-slate-50 border border-slate-200/90 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 shadow-xs transition-colors duration-200"
          />
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-10">
          {filtered.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden transition-all duration-200 shadow-xs hover:border-emerald-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full min-h-[52px] p-5 text-start flex items-center justify-between gap-4 focus:outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.q}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Question Box */}
        <div className="p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-slate-50 to-emerald-50/40 border border-emerald-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start shadow-sm">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-2">
              <span>لديك استفسار خاص بحالتك ومعدلك؟</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              مستشار جودة متاح للإجابة المباشرة والسريعة عبر واتساب:{" "}
              <strong className="text-slate-900 font-sans" dir="ltr">
                {WHATSAPP_DISPLAY}
              </strong>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenLeadModal("faq_custom_question")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <span>طلب دراسة حالة</span>
            </button>
            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("مرحباً، لدي استفسار خاص حول القبول والتخصصات المتاحة.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors duration-200 shadow-md shadow-emerald-600/20 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>محادثة واتساب مباشرة</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
