"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import Tooltip from "./Tooltip";
import { useLanguage } from "../context/LanguageContext";
import { isSfxEnabled, setSfxEnabled, playSound, subscribeSfx } from "../utils/sound";

interface SoundToggleProps {
    className?: string;
}

export default function SoundToggle({ className = "" }: SoundToggleProps) {
    const { t, language } = useLanguage();

    const mounted = useSyncExternalStore(
        () => () => { },
        () => true,
        () => false
    );

    const sfxOn = useSyncExternalStore(
        subscribeSfx,
        () => isSfxEnabled(),
        () => false
    );

    if (!mounted) return null;

    const handleToggle = () => {
        const nextState = !sfxOn;
        setSfxEnabled(nextState);

        // Play a confirmation blip when sound is turned back on
        if (nextState) {
            playSound("click", { forcePlay: true, volume: 0.3 });
        }
    };

    // Tooltip label with fallback for both languages
    const tooltipText = sfxOn
        ? (t.nav.soundOff || (language === "es" ? "Silenciar" : "Mute Sound"))
        : (t.nav.soundOn || (language === "es" ? "Activar sonido" : "Enable Sound"));

    const spriteSrc = sfxOn
        ? "/images/icons/music-on.png"
        : "/images/icons/music-off.png";

    return (
        <div
            className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-60 pointer-events-auto ${className}`.trim()}
        >
            <Tooltip text={tooltipText} position="left" forceTooltipOnMobile={false}>
                <button
                    onClick={handleToggle}
                    aria-label={tooltipText}
                    className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-75 cursor-pointer select-none"
                >
                    <div className="relative w-10 h-10 transition-transform duration-100 group-hover:scale-110">
                        <Image
                            src={spriteSrc}
                            alt={tooltipText}
                            fill
                            sizes="24px"
                            unoptimized
                            className="object-contain"
                            style={{ imageRendering: "pixelated" }}
                        />
                    </div>
                </button>
            </Tooltip>
        </div>
    );
}