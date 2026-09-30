import React from "react";

interface OverlayButtonProps {
    onClick: () => void;
    variant?: "close" | "back";
    className?: string;
    ariaLabel?: string;
    customStyles?: string;
}

export default function OverlayButton({
    onClick,
    variant = "close",
    className = "",
    ariaLabel,
    customStyles,
}: OverlayButtonProps) {

    const spriteUrl = variant === "close" ? "url('/assets/close.png')" : "url('/assets/back.png')";
    const defaultStyles = "bg-white dark:bg-slate-800 border-4 border-slate-900 dark:border-slate-300 cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] w-12 h-12";

    const appliedStyles = customStyles || defaultStyles;

    return (
        <button
            onClick={onClick}
            className={`absolute z-50 flex items-center justify-center ${appliedStyles} ${className}`}
            aria-label={ariaLabel || (variant === "close" ? "Close" : "Back")}
        >
            <div
                className="w-full h-full"
                style={{
                    backgroundImage: spriteUrl,
                    backgroundSize: "24px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    imageRendering: "pixelated"
                }}
            />
        </button>
    );
}