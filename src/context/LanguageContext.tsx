import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, type Language } from "../i18n/translations";

type AnyTranslations = typeof translations["es"] | typeof translations["en"];

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: AnyTranslations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  setLang: () => {},
  t: translations.es,
});


export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("insomnia_lang");
    return (saved === "en" || saved === "es") ? saved : "es";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("insomnia_lang", newLang);
  };

  // Sync <html lang> attribute for SEO/accessibility
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
