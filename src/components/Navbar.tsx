import React, { useState, useEffect } from "react";
import { NAV_LINKS, WHATSAPP_BASE_URL, BRAND_NAME_EN, BRAND_TAGLINE } from "../data/thiqaData";
import { Menu, X, ArrowLeft, Compass, MessageSquare } from "lucide-react";

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
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-2"
          : "bg-white/90 backdrop-blur-sm py-3 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo - THIQA UNI Official Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2 shrink-0 py-0.5"
            aria-label={`${BRAND_NAME_EN} - ${BRAND_TAGLINE}`}
          >
            <img
              src="/thiqa-logo.png"
              alt="شعار ثقة يوني — الشريك الأكاديمي الدولي للتعليم العالي"
              width="128"
              height="64"
              fetchPriority="high"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 justify-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-[#0F254B] transition-colors py-1.5 focus:outline-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAdvisorModal}
              className="flex items-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold text-[#0F254B] bg-[#0F254B]/5 hover:bg-[#0F254B]/10 border border-[#0F254B]/15 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2 whitespace-nowrap"
            >
              <Compass className="w-4 h-4 text-[#D97706]" />
              <span>مستشار التخصص</span>
            </button>

            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("مرحباً فريق ثقة يوني، أود الاستفسار عن فرص القبول في الجامعات الدولية والماليزية.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 text-[#0F254B]" />
              <span>واتساب</span>
            </a>

            <button
              onClick={() => onOpenLeadModal("navbar_primary")}
              className="flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold bg-[#F59E0B] hover:bg-[#D97706] text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2 whitespace-nowrap"
            >
              <span>قدّم طلبك الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200 focus:outline-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2 transition-colors"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
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
                  className="px-3.5 py-2.5 min-h-[44px] flex items-center rounded-xl text-sm font-bold text-slate-800 hover:bg-[#0F254B]/5 hover:text-[#0F254B] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2"
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
                className="w-full flex items-center justify-center gap-2 py-3 min-h-[44px] rounded-xl text-sm font-bold text-[#0F254B] bg-slate-100 border border-slate-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2"
              >
                <Compass className="w-4 h-4 text-[#D97706]" />
                <span>مستشار التخصص والجامعة السريع</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal("mobile_drawer");
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 min-h-[44px] rounded-xl text-sm font-bold bg-[#F59E0B] hover:bg-[#D97706] text-white shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F254B] focus-visible:ring-offset-2"
              >
                <span>ابدأ رحلتك الآن مع ثقة يوني</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
