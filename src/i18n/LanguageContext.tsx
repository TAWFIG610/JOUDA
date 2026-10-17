import React, { createContext, useContext, useEffect, useState } from "react";
import type { Lang, Localized } from "../types";

interface LanguageState {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Picks the current language's string from an {ar, en} pair. */
  t: (text: Localized) => string;
}

const STORAGE_KEY = "thiqa-lang";

const META: Record<Lang, { title: string; description: string }> = {
  ar: {
    title: "ثقة يوني | الدراسة في ماليزيا — القبول والتأشيرة والسكن",
    description:
      "ثقة يوني تساعدك على اختيار الجامعة والتخصص في ماليزيا، وتقديم طلب القبول، ومتابعة تأشيرة الطالب EMGS، والاستقبال والسكن.",
  },
  en: {
    title: "Thiqa Uni | Study in Malaysia — admission, visa and housing",
    description:
      "Thiqa Uni helps you choose a university and major in Malaysia, apply for admission, follow your EMGS student visa, and settle in on arrival.",
  },
};

function initialLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl === "en" || fromUrl === "ar") return fromUrl;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "ar") return saved;
  } catch {
    // Storage can be unavailable (private mode); fall back to Arabic.
  }
  return "ar";
}

const LanguageContext = createContext<LanguageState | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = META[lang].title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", META[lang].description);

    // Keep the choice in the URL so it can be shared, and remember it.
    const url = new URL(window.location.href);
    if (lang === "ar") url.searchParams.delete("lang");
    else url.searchParams.set("lang", lang);
    window.history.replaceState(null, "", url);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore: remembering the language is a convenience only.
    }
  }, [lang]);

  const t = (text: Localized) => text[lang];

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
