"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useUI } from "../context/UIContext";
import { useLanguage } from "../context/LanguageContext";
import OverlayButton from "./OverlayButton";

type Topic = "intro" | "tech" | "education";

const TOPICS: Topic[] = ["intro", "tech", "education"];

function TypewriterText({
  text,
  isFastForward,
  onTypingChange,
  isActive,
}: {
  text: string;
  isFastForward: boolean;
  onTypingChange: (isTyping: boolean) => void;
  isActive: boolean;
}) {
  const [charCount, setCharCount] = useState(0);
  const isFinished = charCount >= text.length;
  const speed = isFastForward ? 1 : 25;

  useEffect(() => {
    if (!isActive) {
      onTypingChange(false);
      return;
    }
    onTypingChange(!isFinished);
  }, [isFinished, onTypingChange, isActive]);

  useEffect(() => {
    if (isFinished || !isActive) return;

    const timer = setTimeout(() => {
      setCharCount((c) => c + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [charCount, text.length, speed, isFinished, isActive]);

  return (
    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-mono">
      {text.slice(0, charCount)}
      <span
        className={`inline-block w-2 h-4 sm:w-2.5 sm:h-5 bg-slate-800 dark:bg-slate-200 ml-1 align-middle ${
          isFinished ? "animate-pulse" : ""
        }`}
      />
    </p>
  );
}

// Inner dialog
function AboutDialogContent({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) {
  const { setAboutTyping } = useUI();
  const { t } = useLanguage();

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isFastForward, setIsFastForward] = useState<boolean>(false);

  const topicTitles: Record<Topic, string> = {
    intro: t.nav.intro,
    tech: t.nav.techStack,
    education: t.nav.education,
  };

  const pages: { topic: Topic; text: string }[] = [];

  const rawSections: Record<Topic, unknown> = {
    intro: t.text.aboutMeContent,
    tech: t.text.techStackContent,
    education: t.text.educationContent,
  };

  TOPICS.forEach((topic) => {
    const content = rawSections[topic];
    if (Array.isArray(content)) {
      content.forEach((textItem) => {
        pages.push({ topic, text: String(textItem) });
      });
    } else {
      pages.push({ topic, text: String(content || "") });
    }
  });

  const totalPages = pages.length;
  const activePage =
    pages[currentPage] || pages[0] || { topic: "intro" as Topic, text: "" };
  const activeTopic = activePage.topic;
  const currentText = activePage.text;

  const handleTopicChange = (topic: Topic) => {
    const targetIndex = pages.findIndex((p) => p.topic === topic);
    if (targetIndex !== -1 && targetIndex !== currentPage) {
      setCurrentPage(targetIndex);
      setIsFastForward(false);
    }
  };

  const canGoPrev = currentPage > 0;
  const canGoNext = currentPage < totalPages - 1;

  const handlePrevPage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFastForward(false);
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFastForward(false);
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="relative w-full max-w-2xl">
      {/* Sprite Animation Styles */}
      <style>{`
        @keyframes arrow-sprite-play {
          from { background-position: 0% center; }
          to { background-position: 133.333% center; }
        }
        .arrow-sprite {
          background-image: url('/assets/arrow.png');
          background-size: 400% 100%;
          background-repeat: no-repeat;
          image-rendering: pixelated;
          animation: arrow-sprite-play 0.6s steps(4) infinite alternate;
        }
      `}</style>

      {/* Close Button */}
      <OverlayButton
        variant="close"
        onClick={onClose}
        className="-top-12 right-0 sm:-top-12 md:-left-14 md:top-0"
        ariaLabel="Close About Me"
      />

      {/* Desktop Left Arrow Zone */}
      {canGoPrev && (
        <button
          onClick={handlePrevPage}
          aria-label="Previous Page"
          className="hidden sm:block absolute -left-10 sm:-left-16 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 z-20 hover:scale-110 transition-transform cursor-pointer"
        >
          <div className="w-full h-full arrow-sprite scale-x-[-1]" />
        </button>
      )}

      {/* Desktop Right Arrow Zone */}
      {canGoNext && (
        <button
          onClick={handleNextPage}
          aria-label="Next Page"
          className="hidden sm:block absolute -right-10 sm:-right-16 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 z-20 hover:scale-110 transition-transform cursor-pointer"
        >
          <div className="w-full h-full arrow-sprite" />
        </button>
      )}

      {/* Compact Fixed Window */}
      <div
        onClick={() => setIsFastForward(true)}
        className="relative w-full h-96 sm:h-55 bg-[#fdfaf3] dark:bg-slate-900 border-4 border-slate-900 dark:border-slate-500 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.4)] dark:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.8)] p-4 sm:p-5 flex flex-col justify-between overflow-hidden cursor-pointer select-none"
      >
        {/* Main Content Area */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 grow overflow-hidden h-full">
          
          {/* Avatar Frame, Name & Mobile Arrows */}
          <div className="shrink-0 flex flex-row sm:flex-col items-center justify-center gap-6 sm:gap-0 w-full sm:w-auto">
            
            {/* Mobile Left Arrow */}
            {canGoPrev ? (
              <button
                onClick={handlePrevPage}
                aria-label="Previous Page"
                className="sm:hidden w-8 h-8 z-20 hover:scale-110 transition-transform cursor-pointer"
              >
                <div className="w-full h-full arrow-sprite scale-x-[-1]" />
              </button>
            ) : (
              <div className="sm:hidden w-8 h-8" /> /* Spacing placeholder to keep Avatar centered */
            )}

            {/* Avatar Box */}
            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 border-3 border-slate-900 dark:border-slate-400 bg-amber-100 dark:bg-slate-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] overflow-hidden">
                <Image
                  src="/images/profile.png"
                  alt="Profile"
                  fill
                  sizes="80px"
                  className="object-cover"
                  priority
                />
              </div>
              <span className="mt-1.5 text-xs font-bold font-mono tracking-widest text-slate-800 dark:text-slate-200 uppercase select-none">
                FELIPE
              </span>
            </div>

            {/* Mobile Right Arrow */}
            {canGoNext ? (
              <button
                onClick={handleNextPage}
                aria-label="Next Page"
                className="sm:hidden w-8 h-8 z-20 hover:scale-110 transition-transform cursor-pointer"
              >
                <div className="w-full h-full arrow-sprite" />
              </button>
            ) : (
              <div className="sm:hidden w-8 h-8" /> /* Spacing placeholder to keep Avatar centered */
            )}
          </div>

          {/* Dialogue Text */}
          <div className="flex-1 w-full overflow-y-auto px-2 sm:px-6 min-h-0 h-full">
            <TypewriterText
              key={currentPage}
              text={currentText}
              isFastForward={isFastForward}
              onTypingChange={setAboutTyping}
              isActive={isOpen}
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-3 pt-3 border-t-2 border-slate-200 dark:border-slate-700 flex items-center justify-between z-10 shrink-0">
          
          {/* Section Switcher */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Desktop Tabs */}
            <div className="hidden sm:flex gap-1.5 sm:gap-2">
              {TOPICS.map((topic) => (
                <button
                  key={topic}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTopicChange(topic);
                  }}
                  className={`px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider border-2 transition-colors cursor-pointer ${
                    activeTopic === topic
                      ? "bg-slate-900 text-white border-slate-900 dark:bg-slate-200 dark:text-slate-900 dark:border-slate-200"
                      : "bg-transparent text-slate-700 border-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:border-slate-500 dark:hover:bg-slate-800"
                  }`}
                >
                  {topicTitles[topic]}
                </button>
              ))}
            </div>

            {/* Mobile Title View */}
            <div className="sm:hidden px-2 py-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                {topicTitles[activeTopic]}
              </span>
            </div>
          </div>

          {/* Global Page Counter & Dots */}
          {totalPages > 1 && (
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-600 dark:text-slate-400">
                {currentPage + 1}/{totalPages}
              </span>
              <div className="flex gap-1 sm:gap-1.5 items-center">
                {pages.map((_, idx) => (
                  <span
                    key={idx}
                    className={`inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors ${
                      currentPage === idx
                        ? "bg-slate-800 dark:bg-slate-200"
                        : "bg-slate-300 dark:bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Parent: purely controls visibility & entrance/exit animations
export default function AboutOverlay() {
  const { isAboutOpen, setAboutOpen, setAboutTyping } = useUI();

  const handleClose = () => {
    setAboutOpen(false);
    setAboutTyping(false);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pb-24 sm:pb-32 transition-all duration-500 ease-in-out ${
        isAboutOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <AboutDialogContent
        isOpen={isAboutOpen}
        onClose={handleClose}
      />
    </div>
  );
}