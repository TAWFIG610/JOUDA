import React, { useEffect, useState } from "react";
import { NAV_LINKS, WHATSAPP_GREETING, whatsappUrl, BRAND_NAME_EN, BRAND_TAGLINE } from "../data/thiqaData";
import { Menu, X, Compass, MessageCircle, Languages } from "lucide-react";
import { useActiveSection, usePageScroll } from "../hooks/useScroll";
import { useLang } from "../i18n/LanguageContext";
import { track } from "../lib/analytics";

interface NavbarProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenAdvisorModal: () => void;
}

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

const TEXT = {
  ar: {
    logoAlt: "شعار ثقة يوني",
    mainNav: "التنقل الرئيسي",
    help: "ساعدني أختار",
    helpLong: "ساعدني أختار التخصص",
    whatsapp: "واتساب",
    whatsappLabel: "تواصل عبر واتساب",
    apply: "اطلب استشارة",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    switchTo: "English",
    switchLabel: "Switch to English",
  },
  en: {
    logoAlt: "THIQA UNI logo",
    mainNav: "Main navigation",
    help: "Help me choose",
    helpLong: "Help me choose a major",
    whatsapp: "WhatsApp",
    whatsappLabel: "Chat on WhatsApp",
    apply: "Free consultation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchTo: "العربية",
    switchLabel: "التبديل إلى العربية",
  },
};

export const Navbar: React.FC<NavbarProps> = ({ onOpenLeadModal, onOpenAdvisorModal }) => {
  const { lang, setLang, t } = useLang();
  const text = TEXT[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const { progress, scrolled } = usePageScroll();
  const activeSection = useActiveSection(SECTION_IDS);
  const solid = scrolled || menuOpen;
  const waUrl = whatsappUrl(t(WHATSAPP_GREETING));

  // Lock page scroll behind the open phone menu.
  useEffect(() => {
    document.body.classList.toggle("scroll-locked", menuOpen);
    return () => document.body.classList.remove("scroll-locked");
  }, [menuOpen]);

  const switchLang = () => {
    const next = lang === "ar" ? "en" : "ar";
    track("language_switch", { to: next });
    setLang(next);
  };

  const langButton = (extra: string) => (
    <button
      type="button"
      onClick={switchLang}
      aria-label={text.switchLabel}
      lang={lang === "ar" ? "en" : "ar"}
      className={`btn min-h-11 gap-1.5 px-3 text-[15px] text-slate-700 hover:bg-brand-50 hover:text-brand-800 ${extra}`}
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      {text.switchTo}
    </button>
  );

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
        className="absolute inset-x-0 bottom-0 h-0.5 bg-gold-500 ltr:origin-left rtl:origin-right"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <a href="#hero" className="shrink-0 rounded-lg" aria-label={`${BRAND_NAME_EN} - ${t(BRAND_TAGLINE)}`}>
          <img
            src="/thiqa-logo-trim.png"
            alt={text.logoAlt}
            width="591"
            height="170"
            fetchPriority="high"
            className="h-10 w-auto sm:h-12 lg:h-[3.25rem]"
          />
        </a>

        <nav aria-label={text.mainNav} className="hidden items-center gap-1 xl:flex">
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
                {t(link.name)}
                {isActive && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold-500" aria-hidden="true" />}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {langButton("hidden sm:inline-flex")}
          <button
            type="button"
            onClick={onOpenAdvisorModal}
            className="btn hidden min-h-11 px-3 text-[15px] text-brand-800 hover:bg-brand-50 2xl:inline-flex"
          >
            <Compass className="h-4 w-4" />
            {text.help}
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-place="navbar"
            aria-label={text.whatsappLabel}
            className="hidden h-11 w-11 items-center justify-center rounded-xl text-success-600 transition-colors hover:bg-success-50 xl:flex"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => onOpenLeadModal("navbar_primary")}
            className="btn btn-primary hidden min-h-11 px-5 text-[15px] sm:inline-flex"
          >
            {text.apply}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-ink transition-colors hover:bg-brand-50 xl:hidden"
            aria-label={menuOpen ? text.closeMenu : text.openMenu}
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
          className="fixed inset-x-0 bottom-0 top-16 animate-drawer-in overflow-y-auto overscroll-contain bg-white sm:top-[4.5rem] xl:hidden"
        >
          <div className="mx-auto flex min-h-full max-w-xl flex-col px-4 pb-28 pt-4 sm:px-6">
            <nav aria-label={text.mainNav} className="divide-y divide-line">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex min-h-14 items-center text-lg font-bold ${
                    activeSection === link.href.slice(1) ? "text-brand-700" : "text-ink"
                  }`}
                >
                  {t(link.name)}
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
                {text.apply}
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
                {text.helpLong}
              </button>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" data-place="mobile_menu" className="btn btn-whatsapp w-full">
                <MessageCircle className="h-5 w-5" />
                {text.whatsapp}
              </a>
              {langButton("btn-outline w-full sm:hidden")}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
