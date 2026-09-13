"use client";

import { useState, useEffect } from "react";
import Tooltip from "./Tooltip";
import { useLanguage } from "../context/LanguageContext";

type AvatarState = "idle" | "talking";

export default function AboutMeButton() {
    const [state, setState] = useState<AvatarState>("idle");
    const [frame, setFrame] = useState(0);
    const { t } = useLanguage();

    const FRAME_WIDTH = 57;
    const FRAME_HEIGHT = 90;
    const idleInterval = 400;
    const talkingInterval = 250;

    useEffect(() => {
        const timer = setInterval(() => {
            setFrame((prev) => (prev >= 1 ? 0 : prev + 1));
        }, state == "idle" ? idleInterval : talkingInterval);

        return () => clearInterval(timer);
    }, [state]);

    // row 0 = idle, row 1 = talking
    const row = state === "talking" ? 1 : 0;
    const xPos = -frame * FRAME_WIDTH;
    const yPos = -row * FRAME_HEIGHT;

    return (
        <Tooltip text={t.nav.aboutMe} position="bottom">
            <button
                type="button"
                aria-label={t.nav.aboutMe}
                className="group flex items-center justify-center cursor-pointer bg-transparent border-none p-0 select-none transition-transform"
                onMouseEnter={() => setState("talking")}
                onMouseLeave={() => setState("idle")}
                // Route to the about-me page instead of opening the Projects drawer
                onClick={() => window.open("/about-me", "_blank")} 
            >
                <div
                    style={{
                        width: `${FRAME_WIDTH}px`,
                        height: `${FRAME_HEIGHT}px`,
                        backgroundImage: "url('/images/icons/avatar/avatar-spritesheet.png')",
                        backgroundPosition: `${xPos}px ${yPos}px`,
                        // 2 frames, 2 states (idle and talking)
                        backgroundSize: `${FRAME_WIDTH * 2}px ${FRAME_HEIGHT * 2}px`, 
                        imageRendering: "pixelated",
                        transformOrigin: "center"
                    }}
                />
            </button>
        </Tooltip>
    );
}