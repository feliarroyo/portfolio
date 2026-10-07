"use client";

import { useState, useEffect } from "react";
import { useUI } from "../context/UIContext";
import { useLanguage } from "../context/LanguageContext";
import OverlayButton from "./OverlayButton";

type Topic = "intro" | "tech" | "education";

export default function AboutOverlay() {
    const { isAboutOpen, setAboutOpen, isAboutTyping: isTyping, setAboutTyping: setIsTyping } = useUI();
    const { t } = useLanguage();

    const [activeTopic, setActiveTopic] = useState<Topic>("intro");
    const [charCount, setCharCount] = useState(0);
    const defaultSpeed = 30;
    const [typingSpeed, setTypingSpeed] = useState<number>(defaultSpeed);

    const topicContent: Record<Topic, string> = {
        intro: t.text.aboutMeContent,
        tech: t.text.techStackContent,
        education: t.text.educationContent,
    };

    const fullText = topicContent[activeTopic];
    const displayedText = isTyping ? fullText.slice(0, charCount) : fullText;

    const [prevIsOpen, setPrevIsOpen] = useState(isAboutOpen);
    if (isAboutOpen !== prevIsOpen) {
        setPrevIsOpen(isAboutOpen);
        if (isAboutOpen) {
            setTypingSpeed(defaultSpeed);
            setActiveTopic("intro");
            setCharCount(0);
            setIsTyping(true);
        } else {
            setIsTyping(false);
        }
    }

    useEffect(() => {
        if (!isTyping || !isAboutOpen) return;

        if (charCount >= fullText.length) {
            setIsTyping(false);
            return;
        }

        const timeoutId = setTimeout(() => {
            setCharCount((prev) => prev + 1);
        }, typingSpeed);

        return () => clearTimeout(timeoutId);
    }, [isTyping, isAboutOpen, charCount, fullText.length, typingSpeed, setIsTyping]);

    const handleSkip = () => {
        if (isTyping) {
            setTypingSpeed(2);
        }
    };

    const handleTopicChange = (e: React.MouseEvent, topic: Topic) => {
        e.stopPropagation();
        if (activeTopic === topic) return;

        setTypingSpeed(defaultSpeed);
        setActiveTopic(topic);
        setCharCount(0);
        setIsTyping(true);
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 transition-all duration-500 ease-in-out ${isAboutOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                }`}
        >
            <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start gap-8">

                <OverlayButton
                    variant="close"
                    onClick={() => setAboutOpen(false)}
                    className="-top-16 right-0 md:-left-16 md:top-0"
                    ariaLabel="Close About Me"
                />

                <div
                    onClick={handleSkip}
                    className="w-full bg-[#fdfaf3] dark:bg-slate-900 border-4 border-slate-900 dark:border-slate-500 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.4)] dark:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] p-6 md:p-10 flex flex-col cursor-pointer"
                >
                    <div className="grow min-h-30">
                        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed min-h-25">
                            {displayedText}
                            <span className={`inline-block w-3 h-6 bg-slate-800 dark:bg-slate-200 ml-1 align-middle ${isTyping ? '' : 'animate-pulse'}`}></span>
                        </p>
                    </div>

                    {/* Interactive Topic Buttons */}
                    <div className="mt-6 pt-6 border-t-2 border-slate-200 dark:border-slate-700 flex flex-wrap gap-4">
                        <button
                            onClick={(e) => handleTopicChange(e, "intro")}
                            className={`px-4 py-2 font-bold uppercase tracking-wider text-sm transition-colors border-2 ${activeTopic === "intro"
                                ? "bg-slate-900 text-white border-slate-900 dark:bg-slate-200 dark:text-slate-900 dark:border-slate-200"
                                : "bg-transparent text-slate-700 border-slate-700 hover:bg-slate-200 dark:text-slate-300 dark:border-slate-500 dark:hover:bg-slate-800"
                                }`}
                        >
                            {t.nav.intro}
                        </button>
                        <button
                            onClick={(e) => handleTopicChange(e, "tech")}
                            className={`px-4 py-2 font-bold uppercase tracking-wider text-sm transition-colors border-2 ${activeTopic === "tech"
                                ? "bg-slate-900 text-white border-slate-900 dark:bg-slate-200 dark:text-slate-900 dark:border-slate-200"
                                : "bg-transparent text-slate-700 border-slate-700 hover:bg-slate-200 dark:text-slate-300 dark:border-slate-500 dark:hover:bg-slate-800"
                                }`}
                        >
                            {t.nav.techStack}
                        </button>
                        <button
                            onClick={(e) => handleTopicChange(e, "education")}
                            className={`px-4 py-2 font-bold uppercase tracking-wider text-sm transition-colors border-2 ${activeTopic === "education"
                                ? "bg-slate-900 text-white border-slate-900 dark:bg-slate-200 dark:text-slate-900 dark:border-slate-200"
                                : "bg-transparent text-slate-700 border-slate-700 hover:bg-slate-200 dark:text-slate-300 dark:border-slate-500 dark:hover:bg-slate-800"
                                }`}
                        >
                            {t.nav.education}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}