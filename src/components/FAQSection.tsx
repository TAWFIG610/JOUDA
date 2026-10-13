import React, { useState } from "react";
import { FAQS } from "../data/thiqaData";
import { ChevronDown, HelpCircle, MessageCircle, Search } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";

interface FAQSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenLeadModal }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [search, setSearch] = useState("");

  const filtered = FAQS.filter((f) => f.q.includes(search) || f.a.includes(search));

  return (
    <section id="faq" className="relative bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={HelpCircle}
          eyebrow="إجابات واضحة وموثوقة"
          title="الأسئلة الأكثر شيوعاً"
          description="كل ما يهمك معرفته حول شروط القبول، التكاليف، وإجراءات تأشيرة الطالب الدولية."
        />

        <Reveal className="relative mb-6">
          <Search className="absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
          <input
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setOpenIdx(0);
            }}
            aria-label="ابحث في الأسئلة الشائعة"
            aria-controls="faq-results"
            placeholder="ابحث: التأشيرة، التكاليف، شروط اللغة..."
            className="field-input min-h-14 rounded-2xl ps-12 shadow-xs"
          />
        </Reveal>

        <div id="faq-results" className="mb-10 space-y-3" aria-live="polite">
          {filtered.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={faq.q} delay={idx * 60}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen ? "border-gold-300 shadow-[0_16px_40px_-24px_rgb(10_24_56/0.35)]" : "border-line hover:border-brand-200"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      id={`faq-question-${idx}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                      className="flex min-h-16 w-full items-center justify-between gap-4 p-4 text-start sm:p-5"
                    >
                      <span className="flex flex-col gap-1">
                        <span className="text-xs font-bold text-gold-700">{faq.category}</span>
                        <span className="font-arabic text-base font-bold text-ink">{faq.q}</span>
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                          isOpen ? "rotate-180 bg-gold-500 text-ink" : "bg-brand-50 text-brand-700"
                        }`}
                      >
                        <ChevronDown className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    inert={!isOpen}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-line px-4 pb-5 pt-4 text-base leading-relaxed text-slate-700 sm:px-5">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
          {filtered.length === 0 && (
            <p className="rounded-2xl border border-line bg-white px-4 py-8 text-center text-sm text-muted">
              لا توجد أسئلة تطابق بحثك. جرّب كلمة أخرى أو تواصل مع مستشارنا.
            </p>
          )}
        </div>

        <Reveal>
          <div className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-brand-100 bg-gradient-to-l from-brand-50 to-white p-6 text-center sm:flex-row sm:text-start">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-white">
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-ink">لديك سؤال خاص بملفك أو معدلك؟</h3>
                <p className="text-sm text-muted">مستشارو ثقة يوني جاهزون للإجابة وتقديم المشورة مجاناً.</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onOpenLeadModal("faq_bottom_cta")}
              className="btn btn-primary w-full shrink-0 sm:w-auto"
            >
              تحدث مع مستشار أكاديمي
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
