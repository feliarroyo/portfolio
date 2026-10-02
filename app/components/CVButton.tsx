"use client";

import { useState, useEffect } from "react";
import Tooltip from "./Tooltip";
import { useLanguage } from "../context/LanguageContext";

export default function CVButton() {
    const { t } = useLanguage();
    const [isHovered, setIsHovered] = useState(false);
    const [frame, setFrame] = useState(0);
    const [hasHover, setHasHover] = useState(true);

    const FRAME_SIZE = 64;
    const TOTAL_FRAMES = 5;
    const ANIMATION_INTERVAL = 200;

    useEffect(() => {
        let timer: NodeJS.Timeout;

        // Loops on devices with no hover state (eg. mobile) or when hovered
        const shouldLoop = isHovered || (!isHovered && !hasHover);

        if (shouldLoop) {
            timer = setInterval(() => {
                setFrame((prev) => (prev >= TOTAL_FRAMES - 1 ? 0 : prev + 1));
            }, ANIMATION_INTERVAL);
        } else {
            setFrame(0); // Reset frame when it shouldn't loop
        }

        return () => clearInterval(timer);
    }, [isHovered, hasHover]);

    useEffect(() => {
        // Check if the device's primary input mechanism supports hover (desktop)
        const mediaQuery = window.matchMedia("(hover: hover)");
        setHasHover(mediaQuery.matches);

        // Listen for changes (e.g., rotating a 2-in-1 laptop into tablet mode)
        const handler = (e: MediaQueryListEvent) => setHasHover(e.matches);
        mediaQuery.addEventListener("change", handler);

        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    const xPos = -frame * FRAME_SIZE;

    return (
        <Tooltip text={t.nav.cv} position="top" forceTooltipOnMobile={true}>
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