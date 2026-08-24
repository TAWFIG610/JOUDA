import React from "react";
import { PARTNER_UNIVERSITIES, WHATSAPP_BASE_URL } from "../data/joudaData";
import {
  Sparkles,
  MapPin,
  Award,
  CheckCircle2,
  ArrowLeft,
  MessageSquare,
} from "lucide-react";

interface UniversitiesSectionProps {
  onOpenLeadModal: (source?: string) => void;
}

export const UniversitiesSection: React.FC<UniversitiesSectionProps> = ({
  onOpenLeadModal,
}) => {
  const row1 = PARTNER_UNIVERSITIES.slice(0, 6);
  const row2 = PARTNER_UNIVERSITIES.slice(6);

  const list1 = [...row1, ...row1, ...row1];
  const list2 = [...row2, ...row2, ...row2];

  // Helper to render official university SVG emblems
  const renderOfficialLogo = (
    uniId: string,
    shortName: string,
    accent: string,
  ) => {
    switch (uniId) {
      case "um":
        return (
          <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="12" fill="#1E3A8A" />
            <path
              d="M14 14H34V20C34 26.6274 29.5228 32 24 32C18.4772 32 14 26.6274 14 20V14Z"
              fill="#F59E0B"
            />
            <path
              d="M18 18H30V21C30 24.3137 27.3137 27 24 27C20.6863 27 18 24.3137 18 21V18Z"
              fill="#1E3A8A"
            />
            <circle cx="24" cy="36" r="2" fill="#F59E0B" />
          </svg>
        );
      case "taylors":
        return (
          <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="12" fill="#DC2626" />
            <path d="M16 16H32V21H26.5V34H21.5V21H16V16Z" fill="#FFFFFF" />
            <circle cx="33" cy="15" r="2.5" fill="#FBBF24" />
          </svg>
        );
      case "apu":
        return (
          <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="12" fill="#059669" />
            <polygon
              points="24,12 35,32 30,32 24,20 18,32 13,32"
              fill="#FFFFFF"
            />
            <polygon points="24,24 28,32 20,32" fill="#F59E0B" />
          </svg>
        );
      case "sunway":
        return (
          <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="12" fill="#D97706" />
            <circle cx="24" cy="24" r="11" fill="#1E3A8A" />
            <path
              d="M24 16V32M16 24H32"
              stroke="#FBBF24"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        );
      case "ukm":
        return (
          <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="12" fill="#7C3AED" />
            <path
              d="M15 15H33V23C33 28 29 33 24 33C19 33 15 28 15 23V15Z"
              fill="#FBBF24"
            />
            <path
              d="M19 19H29V23C29 25.7614 26.7614 28 24 28C21.2386 28 19 25.7614 19 23V19Z"
              fill="#7C3AED"
            />
          </svg>
        );
      case "utm":
        return (
          <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="12" fill="#991B1B" />
            <path d="M14 16H34V22L24 34L14 22V16Z" fill="#F59E0B" />
            <circle cx="24" cy="22" r="3.5" fill="#991B1B" />
          </svg>
        );
      case "ucsi":
        return (
          <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="12" fill="#0284C7" />
            <path
              d="M16 16H22V26C22 28.5 24 30 26.5 30C29 30 31 28.5 31 26V16H37V26C37 32 32.5 35 26.5 35C20.5 35 16 32 16 26V16Z"
              fill="#FFFFFF"
            />
          </svg>
        );
      case "upm":
        return (
          <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="12" fill="#0D9488" />
            <path
              d="M15 15H33V24C33 29 29 33 24 33C19 33 15 29 15 24V15Z"
              fill="#DC2626"
            />
            <circle cx="24" cy="24" r="4" fill="#FBBF24" />
          </svg>
        );
      case "mmu":
        return (
          <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="12" fill="#4F46E5" />
            <path
              d="M14 16L24 25L34 16V32H29V23L24 28L19 23V32H14V16Z"
              fill="#F97316"
            />
          </svg>
        );
      case "uniten":
        return (
          <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="12" fill="#EA580C" />
            <path d="M26 13L15 27H23L21 35L33 21H24L26 13Z" fill="#FFFFFF" />
          </svg>
        );
      case "monash":
        return (
          <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="12" fill="#0369A1" />
            <path
              d="M16 16H32V23C32 28 28 32 24 32C20 32 16 28 16 23V16Z"
              fill="#FFFFFF"
            />
            <path
              d="M20 20H28V23C28 25.2 26.2 27 24 27C21.8 27 20 25.2 20 23V20Z"
              fill="#0369A1"
            />
            <circle cx="24" cy="35" r="1.5" fill="#FBBF24" />
          </svg>
        );
      case "nottingham":
        return (
          <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="12" fill="#047857" />
            <path
              d="M15 15H33V20C33 25.5 29 30 24 30C19 30 15 25.5 15 20V15Z"
              fill="#FFFFFF"
            />
            <path
              d="M19 18H29V20C29 22.8 26.8 25 24 25C21.2 25 19 22.8 19 20V18Z"
              fill="#047857"
            />
            <path d="M17 33H31V35H17V33Z" fill="#FBBF24" />
          </svg>
        );
      default:
        return (
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-md shrink-0"
            style={{ backgroundColor: accent }}
          >
            {shortName}
          </div>
        );
    }
  };

  return (
    <section
      id="universities"
      className="py-12 sm:py-16 lg:py-24 bg-[#FAFCFF] relative overflow-hidden border-y border-slate-200"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 start-10 -translate-y-1/2 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 end-10 -translate-y-1/2 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-10">
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>شراكات وتنسيق رسمي معتمد</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            الجامعات الماليزية التي{" "}
            <span className="text-gradient-emerald">
              نتعاقد وننسق معها مباشرة
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            نؤمن لك القبول الجامعي الرسمي من أقوى الجامعات الحكومية والخاصة
            وفروع الجامعات العالمية البريطانية والأسترالية في ماليزيا.
          </p>
        </div>
      </div>

      {/* Row 1: Forward Marquee */}
      <div className="relative w-full overflow-hidden py-3">
        <div className="animate-marquee-rtl flex items-center gap-5">
          {list1.map((uni, idx) => (
            <div
              key={`${uni.id}-${idx}`}
              className="w-60 sm:w-72 md:w-80 shrink-0 p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-200 shadow-sm group cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              onClick={() => onOpenLeadModal(`university_${uni.id}`)}
            >
              <div className="flex items-center gap-3 mb-3">
                {renderOfficialLogo(uni.id, uni.shortName, uni.accent)}
                <div className="overflow-hidden">
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-200 truncate">
                    {uni.nameAr}
                  </h3>
                  <p className="text-xs text-slate-600 font-sans truncate">
                    {uni.nameEn}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-1.5 text-amber-600 font-bold">
                  <Award className="w-3.5 h-3.5" />
                  <span>{uni.ranking}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-600 font-medium">
                  <MapPin className="w-3 h-3 text-slate-600" />
                  <span>{uni.location}</span>
                </div>
              </div>

              <div className="mt-2.5 inline-block px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-xs font-bold">
                {uni.badge}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Reverse Marquee */}
      <div className="relative w-full overflow-hidden py-3 mt-1">
        <div className="animate-marquee-reverse-rtl flex items-center gap-5">
          {list2.map((uni, idx) => (
            <div
              key={`${uni.id}-rev-${idx}`}
              className="w-60 sm:w-72 md:w-80 shrink-0 p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-200 shadow-sm group cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              onClick={() => onOpenLeadModal(`university_${uni.id}`)}
            >
              <div className="flex items-center gap-3 mb-3">
                {renderOfficialLogo(uni.id, uni.shortName, uni.accent)}
                <div className="overflow-hidden">
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-200 truncate">
                    {uni.nameAr}
                  </h3>
                  <p className="text-xs text-slate-600 font-sans truncate">
                    {uni.nameEn}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-1.5 text-amber-600 font-bold">
                  <Award className="w-3.5 h-3.5" />
                  <span>{uni.ranking}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-600 font-medium">
                  <MapPin className="w-3 h-3 text-slate-600" />
                  <span>{uni.location}</span>
                </div>
              </div>

              <div className="mt-2.5 inline-block px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-xs font-bold">
                {uni.badge}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Box Below Marquee */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 p-4 sm:p-6 lg:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-start border border-emerald-500/20">
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>تبحث عن جامعة معينة أو تخصص محدد؟</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              أرسل لنا مؤهلاتك ومعدلك وسيقوم مستشار جودة بمطابقة أنسب جامعة
              وميزانية لك فوراً وبشكل مجاني.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenLeadModal("universities_ticker_cta")}
              className="w-full sm:w-auto min-h-[44px] flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-bold bg-gradient-to-l from-emerald-500 to-teal-500 text-slate-950 hover:from-emerald-400 hover:to-teal-400 shadow-md transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <span>طلب دراسة ومطابقة مجانية</span>
              <ArrowLeft className="w-4 h-4" />
            </button>

            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("مرحباً فريق جودة، أود الاستفسار عن الجامعات والتخصصات المتاحة.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[44px] flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-xs font-semibold bg-slate-800 hover:bg-slate-750 text-white border border-slate-700 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>واتساب مباشر</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
