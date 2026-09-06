"use client";

import { ThemeProvider } from "next-themes";
import DarkModeToggle from "./components/DarkModeToggle";
import SocialMediaIcons from "./components/SocialMediaIcons";

export default function Home() {
  return (
    <ThemeProvider>
    <div className="flex flex-col flex-1 items-center justify-center bg-cyan-500 font-sans dark:bg-purple-950">
      <main>
        <div className="flex items-right">
          <DarkModeToggle className="fixed items-center justify-center"/>
          <SocialMediaIcons className="fixed top-4 right-4 z-50"/>
        </div>
      </main>
    </div>
    </ThemeProvider>
  );
}
