import React, { useState } from "react";
import { NAV_LINKS, WHATSAPP_BASE_URL, BRAND_NAME_EN, BRAND_TAGLINE } from "../data/thiqaData";
import { Menu, X, ArrowLeft, Compass, MessageCircle } from "lucide-react";
import { useActiveSection, usePageScroll } from "../hooks/useScroll";

interface NavbarProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenAdvisorModal: () => void;
}

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

export const Navbar: React.FC<NavbarProps> = ({
  onOpenLeadModal,
  onOpenAdvisorModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { progress, scrolled } = usePageScroll();
  const activeSection = useActiveSection(SECTION_IDS);
  const solid = scrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        solid
          ? "border-b border-line/80 bg-white/90 shadow-[0_8px_30px_-18px_rgb(10_24_56/0.35)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* Reading progress */}
      <div
        className="absolute inset-x-0 bottom-0 h-0.5 origin-right bg-gradient-to-l from-gold-400 to-gold-600 transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between gap-4 transition-all duration-300 ${
            solid ? "py-1.5" : "py-3"
          }`}
        >
          <a
            href="#hero"
            className="group shrink-0 rounded-xl py-1"
            aria-label={`${BRAND_NAME_EN} - ${BRAND_TAGLINE}`}
          >
            <img
              src="/thiqa-logo.png"
              alt="شعار ثقة يوني — الشريك الأكاديمي الدولي للتعليم العالي"
              width="176"
              height="88"
              fetchPriority="high"
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.03] ${
                solid ? "h-11 sm:h-12 lg:h-14" : "h-12 sm:h-14 lg:h-16"
              }`}
            />
          </a>

          <nav aria-label="التنقل الرئيسي" className="hidden items-center gap-0.5 xl:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold transition-colors xl:px-3.5 ${
                    isActive
                      ? "bg-brand-50 text-brand-800"
                      : "text-slate-600 hover:bg-brand-50/60 hover:text-brand-800"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-center rounded-full bg-gold-500 transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          <div className="ms-auto hidden shrink-0 items-center gap-2 lg:flex xl:ms-0">
            <button
              type="button"
              onClick={onOpenAdvisorModal}
              className="btn min-h-11 px-3.5 py-2 text-sm text-brand-800 hover:bg-brand-50"
            >
              <Compass className="h-4 w-4 text-gold-600" />
              <span>مستشار التخصص</span>
            </button>

            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("مرحباً فريق ثقة يوني، أود الاستفسار عن فرص القبول في الجامعات الدولية والماليزية.")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر واتساب"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-success-100 bg-success-50 text-success-600 transition-colors hover:bg-success-100"
            >
              <MessageCircle className="h-5 w-5" />
            </a>

            <button
              type="button"
              onClick={() => onOpenLeadModal("navbar_primary")}
              className="btn btn-primary min-h-11 px-5 py-2 text-sm sm:text-sm"
            >
              <span>قدّم طلبك الآن</span>
              <ArrowLeft className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-white/80 text-brand-800 backdrop-blur transition-colors hover:bg-brand-50 xl:hidden"
            aria-label={mobileMenuOpen ? "إغلاق القائمة الرئيسية" : "فتح القائمة الرئيسية"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100dvh-4.5rem)] animate-drawer-in overflow-y-auto border-t border-line bg-white shadow-xl xl:hidden"
        >
          <div className="mx-auto max-w-7xl space-y-3 px-4 py-4 sm:px-6">
            <nav aria-label="التنقل الرئيسي" className="flex flex-col gap-1">
              {NAV_LINKS.map((link, idx) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ animationDelay: `${idx * 40}ms` }}
                    className={`flex min-h-12 animate-fade-up items-center justify-between rounded-2xl px-4 py-2.5 text-base font-bold transition-colors ${
                      isActive ? "bg-brand-50 text-brand-800" : "text-slate-800 hover:bg-brand-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowLeft className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  </a>
                );
              })}
            </nav>

            <div className="grid gap-2.5 border-t border-line pt-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdvisorModal();
                }}
                className="btn btn-outline w-full"
              >
                <Compass className="h-4 w-4 text-gold-600" />
                <span>اكتشف التخصص والجامعة المناسبة</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal("mobile_drawer");
                }}
                className="btn btn-primary w-full"
              >
                <span>ابدأ رحلتك الآن مع ثقة يوني</span>
                <ArrowLeft className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
