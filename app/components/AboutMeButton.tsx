"use client";

import { useState, useEffect } from "react";
import Tooltip from "./Tooltip";
import { useLanguage } from "../context/LanguageContext";
import { useUI } from "../context/UIContext";

type AvatarState = "idle" | "talking";

export default function AboutMeButton() {
    // Renamed to hoverState to clarify this ONLY tracks the mouse
    const [hoverState, setHoverState] = useState<AvatarState>("idle");
    const [frame, setFrame] = useState(0);
    const { t } = useLanguage();
    
    const { setAboutOpen, isAboutTyping } = useUI();

    const FRAME_WIDTH = 57;
    const FRAME_HEIGHT = 90;
    const idleInterval = 400;
    const talkingInterval = 250;

    const isTalking = isAboutTyping || hoverState === "talking";

    useEffect(() => {
        const timer = setInterval(() => {
            setFrame((prev) => (prev >= 1 ? 0 : prev + 1));
        }, isTalking ? talkingInterval : idleInterval);

        return () => clearInterval(timer);
    }, [isTalking]);

    const row = isTalking ? 1 : 0;
    const xPos = -frame * FRAME_WIDTH;
    const yPos = -row * FRAME_HEIGHT;

    return (
        <Tooltip text={t.nav.aboutMe} position="bottom">
            <button
                type="button"
                aria-label={t.nav.aboutMe}
                className="group flex items-center justify-center cursor-pointer bg-transparent border-none p-0 select-none transition-transform"
                onMouseEnter={() => setHoverState("talking")}
                onMouseLeave={() => setHoverState("idle")}
                onClick={() => setAboutOpen(true)} 
            >
                <div
                    style={{
                        width: `${FRAME_WIDTH}px`,
                        height: `${FRAME_HEIGHT}px`,
                        backgroundImage: "url('/images/icons/avatar/avatar-spritesheet.png')",
                        backgroundPosition: `${xPos}px ${yPos}px`,
                        backgroundSize: `${FRAME_WIDTH * 2}px ${FRAME_HEIGHT * 2}px`, 
                        imageRendering: "pixelated",
                        transformOrigin: "center"
                    }}
                />
            </button>
        </Tooltip>
    );
}