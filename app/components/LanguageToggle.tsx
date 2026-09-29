"use client";

import Image from "next/image";
import Tooltip from "./Tooltip";
import { useLanguage } from "../context/LanguageContext";

interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();
  const { t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    
      
        <div className={`flex flex-col items-center justify-center text-center ${className}`}>
          <button onClick={toggleLanguage} >
          <Tooltip text={t.nav.language} position="right">
          <Image
            src="/images/icons/lang_toggle.png"
            alt={t.nav.language}
            width={54}
            height={54}
            unoptimized
            style={{ imageRendering: 'pixelated' }}
          />
          </Tooltip>
          </button>
          <div className="w-24 text-center mt-1">
            <span className="text-md block">
              {language === "en" ? "English" : "Español"}
            </span>
          </div>
        </div>
  );
}