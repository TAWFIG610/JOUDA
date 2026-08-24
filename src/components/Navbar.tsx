import React, { useState, useEffect } from "react";
import { NAV_LINKS, WHATSAPP_BASE_URL } from "../data/joudaData";
import {
  Menu,
  X,
  ArrowLeft,
  GraduationCap,
  Compass,
  MessageSquare,
} from "lucide-react";

interface NavbarProps {
  onOpenLeadModal: (source?: string) => void;
  onOpenAdvisorModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenLeadModal,
  onOpenAdvisorModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 start-0 end-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3"
          : "bg-white/70 backdrop-blur-sm py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tight text-slate-900 font-arabic">
                  جَــوْدَة
                </span>
                <span className="text-[12px] font-bold tracking-widest px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                  JOUDA
                </span>
              </div>
              <span className="hidden sm:block text-[12px] text-slate-500 font-medium">
                بوابتك للدراسة في ماليزيا
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-700 hover:text-emerald-600 transition-colors py-1 focus:outline-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenAdvisorModal}
              className="flex items-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-xl text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>مستشار التخصص</span>
            </button>

            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("مرحباً جودة، أود الاستفسار عن فرص الدراسة في ماليزيا.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-xl text-sm font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>واتساب</span>
            </a>

            <button
              onClick={() => onOpenLeadModal("navbar_primary")}
              className="flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-xl text-sm font-bold bg-gradient-to-l from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-600/20 hover:-translate-y-0.5 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <span>ابدأ رحلتك</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenLeadModal("mobile_nav_quick")}
              className="sm:hidden px-3 py-1.5 min-h-[44px] rounded-lg text-sm font-bold bg-emerald-600 text-white shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              ابدأ الآن
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 focus:outline-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl animate-in fade-in slide-in-from-top-2 overflow-y-auto max-h-[80vh]">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            <nav className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 min-h-[44px] flex items-center rounded-xl text-sm font-bold text-slate-800 hover:bg-emerald-50 hover:text-emerald-700 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdvisorModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 min-h-[44px] rounded-xl text-sm font-bold text-slate-800 bg-slate-100 border border-slate-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <Compass className="w-4 h-4 text-emerald-600" />
                <span>مستشار التخصص والجامعة السريع</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal("mobile_drawer");
                }}
                className="w-full flex items-center justify-center gap-2 py-3 min-h-[44px] rounded-xl text-sm font-bold bg-emerald-600 text-white shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <span>ابدأ رحلتك الآن مجاناً</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
