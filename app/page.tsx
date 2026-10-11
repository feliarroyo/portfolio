"use client";

import DarkModeToggle from "./components/DarkModeToggle";
import SocialMediaIcons from "./components/SocialMediaIcons";
import AboutMeButton from "./components/AboutMeButton";
import ProjectsButton from "./components/ProjectsButton";
import CVButton from "./components/CVButton";
import LanguageToggle from "./components/LanguageToggle";
import ThemeBackground from "./components/ThemeBackground";
import ThemeGround from "./components/ThemeGround";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const titleText = t?.nav?.title || "Felipe Arroyo";
  const subtitleText = t?.nav?.subtitle || "Software Developer";

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <ThemeBackground />
      {/* TOP ROW: config icons and social media links */}
      <header className="relative z-60 pointer-events-none grid grid-cols-3 w-full items-start p-4 sm:p-8">
        <div className="flex justify-start pointer-events-auto"><LanguageToggle /></div>
        <div className="flex justify-center pointer-events-auto"><DarkModeToggle /></div>
        <div className="hidden sm:flex justify-end pointer-events-auto"><SocialMediaIcons /></div>
      </header>

      {/* MIDDLE ROW */}
      <main className="grow pointer-events-none z-10">
        <div className="fixed inset-0 flex flex-col items-center justify-center p-4 pointer-events-none">
          <div className="flex flex-col items-center justify-center text-center">
            <h1
              suppressHydrationWarning
              className="text-4xl text-black dark:text-gray-100 mb-4 crisp-pixel-font text-center"
            >
              {titleText}
            </h1>
            <h2
              suppressHydrationWarning
              className="text-2xl text-black dark:text-gray-100 crisp-pixel-font text-center"
            >
              {subtitleText}
            </h2>
            {/* Visible only on mobile/small screens */}
            <div className="sm:hidden flex justify-center mt-4 pointer-events-auto relative z-60">
              <SocialMediaIcons />
            </div>
          </div>
        </div>
      </main>

      {/* BOTTOM ROW: selectable objects on the ground */}
      <ThemeGround>
        <ProjectsButton />
        <AboutMeButton />
        <CVButton />
      </ThemeGround>
    </div>
  );
}