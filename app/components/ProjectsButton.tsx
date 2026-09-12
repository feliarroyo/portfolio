"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Tooltip from "./Tooltip";

type ChestState = "idle" | "hover" | "opening" | "opened";

export default function ProjectsButton() {
    const [state, setState] = useState<ChestState>("idle");
    const [frame, setFrame] = useState(0);
    const router = useRouter();

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
                            router.push("/projects");
                        }, 250); 
                        
                        return 3;
                    }
                    return prev + 1;
                });
            }, 150);
        }

        return () => clearInterval(timer);
    }, [state, router]);

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
        <Tooltip text="Projects" position="bottom">
            <button
                type="button"
                aria-label="Projects"
                className="group flex items-center justify-center cursor-pointer bg-transparent border-none p-0 select-none transition-transform"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                <div
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