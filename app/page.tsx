import DarkModeToggle from "./components/DarkModeToggle";
import SocialMediaIcons from "./components/SocialMediaIcons";
import AboutMeButton from "./components/AboutMeButton";
import ProjectsButton from "./components/ProjectsButton";
import IdeaBoxButton from "./components/IdeaBoxButton";
import LanguageToggle from "./components/LanguageToggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cyan-500 font-sans dark:bg-purple-950 p-4 sm:p-8">
      
      {/* TOP ROW: 3-column grid keeps the center perfectly aligned */}
      <header className="grid grid-cols-3 w-full items-start">
        
        {/* Top Left: FLAG */}
        <div className="flex justify-start">
          <LanguageToggle />
        </div>
        
        {/* Top Center: SUN */}
        <div className="flex justify-center">
          <DarkModeToggle />
        </div>
        
        {/* Top Right: SM */}
        <div className="flex justify-end">
          <SocialMediaIcons /> 
        </div>
      </header>

      {/* MIDDLE ROW: flex-grow pushes the header up and footer down */}
      <main className="flex flex-col items-center justify-center grow">
        <h1 className="text-4xl text-white dark:text-gray-100 mb-4">
          Felipe Arroyo
        </h1>
      </main>

      {/* BOTTOM ROW: Space-evenly distributes the buttons equally */}
      <footer className="w-full mb-4">
        <div className="flex flex-row justify-evenly items-center max-w-4xl mx-auto">
          <AboutMeButton />   {/* ME */}
          <ProjectsButton />  {/* HOUSE */}
          <IdeaBoxButton />   {/* CHEST */}
        </div>
      </footer>

    </div>
  );
}
