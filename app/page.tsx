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
  const subtitleText = t?.nav?.subtitle || "Systems Engineer | Backend Developer";

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <ThemeBackground />
      {/* TOP ROW: config icons and social media links */}
      <header className="grid grid-cols-3 w-full items-start p-4 sm:p-8">
        <div className="flex justify-start"><LanguageToggle /></div>
        <div className="flex justify-center"><DarkModeToggle /></div>
        <div className="flex justify-end"><SocialMediaIcons /></div>
      </header>

      {/* MIDDLE ROW: flex-grow pushes the header up and footer down */}
      <main className="flex flex-col items-center justify-center grow p-4 sm:p-8 z-10">
        <h1
          suppressHydrationWarning
          className="text-4xl text-black dark:text-gray-100 mb-4 crisp-pixel-font text-center"
        >
          {titleText}
        </h1>
        <h2
          suppressHydrationWarning
          className="text-2xl text-black dark:text-gray-100 mb-4 crisp-pixel-font text-center"
        >
          {subtitleText}
        </h2>
      </main>

      {/* BOTTOM ROW: selectable objects on the ground */}
      <ThemeGround>
        <AboutMeButton />
        <ProjectsButton />
        <CVButton />
      </ThemeGround>
    </div>
  );
}