import React, { useEffect, useState } from "react";
import { NAV_LINKS, WHATSAPP_BASE_URL, BRAND_NAME_EN, BRAND_TAGLINE } from "../data/thiqaData";
import { Menu, X, Compass, MessageCircle } from "lucide-react";
import { useActiveSection, usePageScroll } from "../hooks/useScroll";

interface NavbarProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenAdvisorModal: () => void;
}

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));
const WHATSAPP_URL = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent("مرحباً فريق ثقة يوني، أود الاستفسار عن الدراسة في ماليزيا.")}`;

export const Navbar: React.FC<NavbarProps> = ({ onOpenLeadModal, onOpenAdvisorModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { progress, scrolled } = usePageScroll();
  const activeSection = useActiveSection(SECTION_IDS);
  const solid = scrolled || menuOpen;

  // Lock page scroll behind the open phone menu.
  useEffect(() => {
    document.body.classList.toggle("scroll-locked", menuOpen);
    return () => document.body.classList.remove("scroll-locked");
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,box-shadow] duration-200 ${
        // No backdrop-filter while the menu is open: it would trap the fixed drawer inside the header.
        menuOpen
          ? "border-b border-line bg-white"
          : solid
            ? "border-b border-line bg-white/95 shadow-sm backdrop-blur-md"
            : "border-b border-transparent"
      }`}
    >
      <div
        className="absolute inset-x-0 bottom-0 h-0.5 origin-right bg-gold-500"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <a href="#hero" className="shrink-0 rounded-lg" aria-label={`${BRAND_NAME_EN} - ${BRAND_TAGLINE}`}>
          <img
            src="/thiqa-logo-trim.png"
            alt="شعار ثقة يوني"
            width="591"
            height="170"
            fetchPriority="high"
            className="h-10 w-auto sm:h-12 lg:h-[3.25rem]"
          />
        </a>

        <nav aria-label="التنقل الرئيسي" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={`relative whitespace-nowrap rounded-lg px-3 py-2 text-[15px] font-semibold transition-colors ${
                  isActive ? "text-brand-800" : "text-slate-600 hover:text-brand-800"
                }`}
              >
                {link.name}
                {isActive && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold-500" aria-hidden="true" />}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onOpenAdvisorModal}
            className="btn hidden min-h-11 px-3 text-[15px] text-brand-800 hover:bg-brand-50 xl:inline-flex"
          >
            <Compass className="h-4 w-4" />
            ساعدني أختار
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصل عبر واتساب"
            className="hidden h-11 w-11 items-center justify-center rounded-xl text-success-600 transition-colors hover:bg-success-50 lg:flex"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => onOpenLeadModal("navbar_primary")}
            className="btn btn-primary hidden min-h-11 px-5 text-[15px] sm:inline-flex"
          >
            اطلب استشارة
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-ink transition-colors hover:bg-brand-50 lg:hidden"
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 bottom-0 top-16 animate-drawer-in overflow-y-auto overscroll-contain bg-white sm:top-[4.5rem] lg:hidden"
        >
          <div className="mx-auto flex min-h-full max-w-xl flex-col px-4 pb-28 pt-4 sm:px-6">
            <nav aria-label="التنقل الرئيسي" className="divide-y divide-line">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex min-h-14 items-center text-lg font-bold ${
                    activeSection === link.href.slice(1) ? "text-brand-700" : "text-ink"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-6 grid gap-3">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  onOpenLeadModal("mobile_drawer");
                }}
                className="btn btn-primary w-full"
              >
                اطلب استشارة
              </button>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  onOpenAdvisorModal();
                }}
                className="btn btn-outline w-full"
              >
                <Compass className="h-4 w-4" />
                ساعدني أختار التخصص
              </button>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full">
                <MessageCircle className="h-5 w-5" />
                واتساب
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
