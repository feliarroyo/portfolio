"use client";

import { useState, useEffect } from "react";
import { useUI } from "../context/UIContext";
import { useLanguage } from "../context/LanguageContext";

export default function AboutOverlay() {
    const { isAboutOpen, setAboutOpen, isAboutTyping: isTyping, setAboutTyping: setIsTyping } = useUI();
    const { t } = useLanguage();
    
    const [displayedText, setDisplayedText] = useState("");
    const fullText = t.text.aboutMeContent;

    // Reset when opening/closing
    useEffect(() => {
        setIsTyping(isAboutOpen);
    }, [isAboutOpen, setIsTyping]);

    // Typewriter effect
    useEffect(() => {
        if (!isTyping) return; 

        let currentIndex = 0;
        
        const typingTimer = setInterval(() => {
            setDisplayedText(fullText.slice(0, currentIndex + 1));
            currentIndex++;
            
            if (currentIndex >= fullText.length) {
                clearInterval(typingTimer);
                setIsTyping(false);
            }
        }, 40); 

        return () => clearInterval(typingTimer);
    }, [isTyping, fullText, setIsTyping]);

    const handleSkip = () => {
        if (isTyping) {
            setIsTyping(false); 
            setDisplayedText(fullText); 
        }
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 transition-all duration-500 ease-in-out ${
                isAboutOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
            }`}
        >
            <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start gap-8">
                
                <button
                    onClick={() => setAboutOpen(false)}
                    className="absolute -top-16 right-0 md:-left-16 md:top-0 z-50 flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-800 border-4 border-slate-900 dark:border-slate-300 hover:scale-110 active:scale-95 transition-transform cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                    aria-label="Close About Me"
                >
                    <span className="text-xl font-bold font-pixel text-slate-900 dark:text-white">X</span>
                </button>

                <div 
                    onClick={handleSkip}
                    className="w-full bg-[#fdfaf3] dark:bg-slate-900 border-4 border-slate-900 dark:border-slate-500 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.4)] dark:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] p-6 md:p-10 flex flex-col cursor-pointer"
                >
                    <div className="grow min-h-30">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-widest border-b-2 border-slate-200 dark:border-slate-700 pb-2">
                            {t.nav.aboutMe}
                        </h2>
                        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed min-h-25">
                            {displayedText}
                            <span className={`inline-block w-3 h-6 bg-slate-800 dark:bg-slate-200 ml-1 align-middle ${isTyping ? '' : 'animate-pulse'}`}></span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}