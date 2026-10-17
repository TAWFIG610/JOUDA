import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CTA, NAV_LINKS } from "../data/thiqaData";
import { useLang } from "../i18n/LanguageContext";
import { track } from "../lib/analytics";

interface NavbarProps {
  onOpenConsult: (source: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsult }) => {
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("scroll-locked", menuOpen);
    return () => document.body.classList.remove("scroll-locked");
  }, [menuOpen]);

  const switchLang = () => {
    const next = lang === "ar" ? "en" : "ar";
    track("language_switch", { to: next });
    setLang(next);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="page-container flex h-14 items-center gap-6 md:h-18">
        <a href="#top" className="shrink-0" aria-label="Thiqa Uni">
          <img src="/thiqa-logo-mark.png" alt="Thiqa Uni" width="581" height="162" className="h-8 w-auto md:h-10" />
        </a>

        <nav aria-label={lang === "ar" ? "القائمة الرئيسية" : "Main navigation"} className="ms-auto hidden gap-1 xl:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-tint">
              {t(link.name)}
            </a>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-2 xl:ms-2">
          <button
            type="button"
            onClick={switchLang}
            lang={lang === "ar" ? "en" : "ar"}
            className="min-h-11 rounded-lg px-2.5 text-sm font-medium text-navy hover:bg-tint"
          >
            {lang === "ar" ? "English" : "العربية"}
          </button>
          <button type="button" onClick={() => onOpenConsult("header")} className="btn btn-primary hidden min-h-11 px-4 text-sm xl:inline-flex">
            {t(CTA)}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={lang === "ar" ? "القائمة" : "Menu"}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-line xl:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-14 overflow-y-auto bg-white md:top-18 xl:hidden">
          <nav aria-label={lang === "ar" ? "القائمة الرئيسية" : "Main navigation"} className="page-container py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-14 items-center border-b border-line text-lg font-medium text-ink"
              >
                {t(link.name)}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onOpenConsult("mobile_menu");
              }}
              className="btn btn-primary mt-6 w-full"
            >
              {t(CTA)}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
