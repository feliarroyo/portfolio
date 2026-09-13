"use client";

import { useState, useEffect } from "react";
import Tooltip from "./Tooltip";
import { useLanguage } from "../context/LanguageContext";
import { useUI } from "../context/UIContext";
import Image from "next/image";

type ChestState = "idle" | "hover" | "opening" | "opened";

export default function ProjectsButton() {
    const [state, setState] = useState<ChestState>("idle");
    const [frame, setFrame] = useState(0);
    const { setProjectsOpen } = useUI();
    const { t } = useLanguage();

    const FRAME_SIZE = 64;

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (state === "hover") {
            timer = setInterval(() => {
                setFrame((prev) => (prev >= 3 ? 0 : prev + 1));
            }, 150);
        } else if (state === "opening") {
            timer = setInterval(() => {
                setFrame((prev) => {
                    if (prev >= 3) {
                        clearInterval(timer);
                        setState("opened");

                        setTimeout(() => {
                            // Open projects page and reset chest
                            setProjectsOpen(true);
                            setTimeout(() => {
                                setState("idle");
                                setFrame(0);
                            }, 500);
                        }, 250);

                        return 3;
                    }
                    return prev + 1;
                });
            }, 150);
        }

        return () => clearInterval(timer);
    }, [state, setProjectsOpen]);

    const row = state === "opening" || state === "opened" ? 1 : 0;
    const xPos = -frame * FRAME_SIZE;
    const yPos = -row * FRAME_SIZE;

    // --- Extracted Handlers ---
    const handleMouseEnter = () => {
        if (state === "idle") {
            setState("hover");
        }
    };

    const handleMouseLeave = () => {
        if (state === "hover") {
            setState("idle");
            setFrame(0);
        }
    };

    const handleClick = () => {
        if (state !== "opened" && state !== "opening") {
            setState("opening");
            setFrame(0);
        }
    };

    return (
        <Tooltip text={t.nav.projects} position="bottom">
            <button
                type="button"
                aria-label={t.nav.projects}
                // Added relative to the button to contain the absolutely positioned document
                className="relative group flex items-center justify-center cursor-pointer bg-transparent border-none p-0 select-none transition-transform"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                {/* Document Sprite (z-0: behind the chest, grows on click)
                */}
                <div
                    className={`absolute inset-0 m-auto w-8 h-8 pointer-events-none z-0 ${
                        state === "opening" || state === "opened"
                            ? "transition-all duration-800 ease-in translate-y-[-120vh] scale-110"
                            : "transition-none translate-y-4 scale-80"
                    }`}
                >
                    <Image
                        src="/images/icons/chest/documents.png"
                        alt="Project Document"
                        width={96}
                        height={96}
                        unoptimized
                        className="object-contain"
                        style={{ imageRendering: "pixelated" }}
                    />
                </div>

                {/* The Chest Sprite (z-10 to be infront of document) */}
                <div
                    className="relative z-10"
                    style={{
                        width: `${FRAME_SIZE}px`,
                        height: `${FRAME_SIZE}px`,
                        backgroundImage: "url('/images/icons/chest/chest-spritesheet.png')",
                        backgroundPosition: `${xPos}px ${yPos}px`,
                        backgroundSize: `${FRAME_SIZE * 4}px ${FRAME_SIZE * 2}px`,
                        imageRendering: "pixelated",
                    }}
                />
            </button>
        </Tooltip>
    );
}