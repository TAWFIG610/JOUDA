import React, { useState } from 'react';
import { FAQS, WHATSAPP_BASE_URL } from '../data/joudaData';
import { HelpCircle, ChevronDown, MessageSquare, Search } from 'lucide-react';

interface FAQSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenLeadModal }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [search, setSearch] = useState('');

  const filtered = FAQS.filter(
    (f) => f.q.includes(search) || f.a.includes(search)
  );

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3.5 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>إجابات مباشرة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            الأسئلة الأكثر <span className="text-gradient-emerald">شيوعاً وتكراراً</span>
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            كل ما يهمك معرفته حول شروط القبول، التكاليف، والتأشيرة الدراسية.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 relative">
          <Search className="w-4 h-4 text-slate-400 absolute top-1/2 start-4 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ابحث في الأسئلة الشائعة..."
            className="w-full ps-11 pe-4 py-3 min-h-[44px] rounded-2xl bg-slate-50 border border-slate-200 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 shadow-xs transition-colors duration-200"
          />
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-10">
          {filtered.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full min-h-[48px] p-5 text-start flex items-center justify-between gap-4 focus:outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {faq.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      {faq.q}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Question Box */}
        <div className="p-4 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">لديك استفسار خاص بحالتك ومعدلك؟</h4>
            <p className="text-sm text-slate-600 font-medium">مستشار جودة جاهز للإجابة الفورية عبر واتساب مجاناً.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0">
            <button
              onClick={() => onOpenLeadModal('faq_custom_question')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <span>طلب دراسة حالة</span>
            </button>
            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent('مرحباً، لدي استفسار خاص حول القبول والتخصصات المتاحة.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors duration-200 shadow-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>تحدث عبر واتساب</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
