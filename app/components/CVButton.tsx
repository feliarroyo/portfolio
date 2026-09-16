"use client";

import { useState, useEffect } from "react";
import Tooltip from "./Tooltip";
import { useLanguage } from "../context/LanguageContext";

export default function CVButton() {
    const { t } = useLanguage();
    const [isHovered, setIsHovered] = useState(false);
    const [frame, setFrame] = useState(0);

    const FRAME_SIZE = 64;
    const TOTAL_FRAMES = 5;
    const ANIMATION_INTERVAL = 200;

    useEffect(() => {
        if (!isHovered) {
            setFrame(0);
            return;
        }

        const timer = setInterval(() => {
            setFrame((prev) => (prev >= TOTAL_FRAMES - 1 ? 0 : prev + 1));
        }, ANIMATION_INTERVAL);

        return () => clearInterval(timer);
    }, [isHovered]);

    const xPos = -frame * FRAME_SIZE;

    return (
        <Tooltip text={t.nav.cv} position="bottom">
            <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.nav.cv}
                className="group flex items-center justify-center cursor-pointer select-none"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    style={{
                        width: `${FRAME_SIZE}px`,
                        height: `${FRAME_SIZE}px`,
                        backgroundImage: "url('/images/icons/cv/cv-spritesheet.png')",
                        backgroundPosition: `${xPos}px 0px`,
                        backgroundSize: `${FRAME_SIZE * TOTAL_FRAMES}px ${FRAME_SIZE}px`,
                        imageRendering: "pixelated",
                    }}
                />
            </a>
        </Tooltip>
    );
}