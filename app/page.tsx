import DarkModeToggle from "./components/DarkModeToggle";
import SocialMediaIcons from "./components/SocialMediaIcons";
import AboutMeButton from "./components/AboutMeButton";
import ProjectsButton from "./components/ProjectsButton";
import IdeaBoxButton from "./components/IdeaBoxButton";
import LanguageToggle from "./components/LanguageToggle";
import ThemeBackground from "./components/ThemeBackground";
import ThemeGround from "./components/ThemeGround";

export default function Home() {
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
        <h1 className="text-4xl text-black dark:text-gray-100 mb-4 crisp-pixel-font">
          Felipe Arroyo
        </h1>
      </main>

      {/* BOTTOM ROW: selectable objects on the ground */}
      <ThemeGround>
        <AboutMeButton /> 
        <ProjectsButton /> 
        <IdeaBoxButton />  
      </ThemeGround>
      
    </div>
  );
}