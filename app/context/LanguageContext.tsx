"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Language, Dictionary } from "../dictionaries/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const savedLang = localStorage.getItem("portfolio_lang") as Language;
      
      if (savedLang && translations[savedLang]) {
        setLanguageState(savedLang);
      } else {
        const browserLang = navigator.language.startsWith("es") ? "es" : "en";
        setLanguageState(browserLang);
      }
      
      setIsMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio_lang", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {!isMounted ? (
        <div className="invisible">{children}</div>
      ) : (
        children
      )}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};