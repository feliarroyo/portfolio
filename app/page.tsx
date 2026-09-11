import { ThemeProvider } from "next-themes";
import DarkModeToggle from "./components/DarkModeToggle";
import SocialMediaIcons from "./components/SocialMediaIcons";
import AboutMeButton from "./components/AboutMeButton";
import ProjectsButton from "./components/ProjectsButton";
import IdeaBoxButton from "./components/IdeaBoxButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-cyan-500 font-sans dark:bg-purple-950">
      {/* Social Media Icons go on the top right */}
      <div className="flex items-right">
        <SocialMediaIcons className="fixed top-4 right-4 z-50" />
      </div>
      {/* Dark Mode Toggle should be on the top center */}
      <div>
        <DarkModeToggle className="flex items-center justify-center" />
      </div>
      <main className="flex flex-col items-center">
        {/* Header */}
        <h1>Felipe Arroyo</h1>
        {/* Buttons should be in the center of the page, over the foreground (yet to be added) */}
        <div className="flex flex-row justify-between">
          <AboutMeButton />
          <ProjectsButton />
          <IdeaBoxButton />
        </div>
      </main>
    </div >
  );
}
