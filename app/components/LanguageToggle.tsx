"use client";

import Image from "next/image";
import Tooltip from "./Tooltip";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();
  const { t } = useLanguage();
  const [rotation, setRotation] = useState(0);

  const toggleLanguage = () => {
    setRotation((prev) => prev + 360);
    setLanguage(language === "en" ? "es" : "en");
  };

  return (


    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <button onClick={toggleLanguage} className={`group flex flex-col items-center justify-center text-center`}>
        <Tooltip text={t.nav.language} position="right">
          {/* Wrapper handles the spinning animation cleanly */}
          <div
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: "transform 600ms ease-in-out"
            }}
            className="flex items-center justify-center"
          >
            <Image
              src="/images/icons/lang_toggle.png"
              alt={t.nav.language}
              width={48}
              height={48}
              unoptimized
              className="transition-transform duration-800 ease-in-out group-hover:scale-110"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
        </Tooltip>
      </button>

      <div className="w-24 text-center mt-1">
        <span className="text-md block">
          {language === "en" ? "English" : "Español"}
        </span>
      </div>
    </div >
  );
}