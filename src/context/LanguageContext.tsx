import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import fr from "../locales/fr";
import en from "../locales/en";

export type Language = "fr" | "en";

const translations = {
  fr,
  en,
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof fr;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({
  children,
}: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("portfolio-language");

    if (savedLanguage === "en" || savedLanguage === "fr") {
      return savedLanguage;
    }

    return "fr";
  });

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("portfolio-language", newLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage doit être utilisé à l'intérieur de LanguageProvider.",
    );
  }

  return context;
};