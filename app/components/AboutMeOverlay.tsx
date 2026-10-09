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
}: {
  text: string;
  isFastForward: boolean;
  onTypingChange: (isTyping: boolean) => void;
}) {
  const [charCount, setCharCount] = useState(0);
  const isFinished = charCount >= text.length;
  const speed = isFastForward ? 1 : 25;

  useEffect(() => {
    onTypingChange(!isFinished);
  }, [isFinished, onTypingChange]);

  useEffect(() => {
    if (isFinished) return;

    const timer = setTimeout(() => {
      setCharCount((c) => c + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [charCount, text.length, speed, isFinished]);

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
  sessionKey,
}: {
  onClose: () => void;
  sessionKey: number;
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
      {/* Close Button */}
      <OverlayButton
        variant="close"
        onClick={onClose}
        className="-top-12 right-0 sm:-top-12 md:-left-14 md:top-0"
        ariaLabel="Close About Me"
      />

      {/* Compact Fixed Window */}
      <div
        onClick={() => setIsFastForward(true)}
        className="relative w-full h-70 sm:h-55 bg-[#fdfaf3] dark:bg-slate-900 border-4 border-slate-900 dark:border-slate-500 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.4)] dark:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.8)] p-4 sm:p-5 flex flex-col justify-between overflow-hidden cursor-pointer select-none"
      >
        {/* Main Content Area */}
        <div className="flex flex-row items-center sm:items-start gap-4 sm:gap-5 grow overflow-hidden">
          {/* Avatar Frame & Name */}
          <div className="shrink-0 flex flex-col items-center">
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

          {/* Dialogue Text */}
          <div className="grow w-full overflow-y-auto px-4 sm:px-6 min-h-0">
            <TypewriterText
              key={`${sessionKey}-${currentPage}`}
              text={currentText}
              isFastForward={isFastForward}
              onTypingChange={setAboutTyping}
            />
          </div>
        </div>

        {/* Left Arrow Zone */}
        {canGoPrev && (
          <button
            onClick={handlePrevPage}
            aria-label="Previous Page"
            className="absolute left-0 top-0 bottom-14 w-12 sm:w-14 z-20 flex items-center justify-start pl-1 sm:pl-2 text-xl sm:text-2xl font-bold text-slate-400 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white transition-colors bg-linear-to-r from-black/10 to-transparent hover:from-black/15 select-none cursor-pointer"
          >
            &#x25C4;
          </button>
        )}

        {/* Right Arrow Zone */}
        {canGoNext && (
          <button
            onClick={handleNextPage}
            aria-label="Next Page"
            className="absolute right-0 top-0 bottom-14 w-12 sm:w-14 z-20 flex items-center justify-end pr-1 sm:pr-2 text-xl sm:text-2xl font-bold text-slate-400 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white transition-colors bg-linear-to-l from-black/10 to-transparent hover:from-black/15 select-none cursor-pointer"
          >
            &#x25BA;
          </button>
        )}

        {/* Bottom Bar */}
        <div className="mt-3 pt-3 border-t-2 border-slate-200 dark:border-slate-700 flex items-center justify-between z-10">
          {/* Section Switcher Tabs */}
          <div className="flex gap-1.5 sm:gap-2">
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

          {/* Global Page Counter & Dots (1 to 6) */}
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
  const [sessionCount, setSessionCount] = useState(0);

  // When opening, bump session count so inner dialog mounts fresh with page 0
  const [prevOpen, setPrevOpen] = useState(isAboutOpen);
  if (isAboutOpen && !prevOpen) {
    setPrevOpen(true);
    setSessionCount((s) => s + 1);
  } else if (!isAboutOpen && prevOpen) {
    setPrevOpen(false);
  }

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
        key={sessionCount}
        sessionKey={sessionCount}
        onClose={handleClose}
      />
    </div>
  );
}