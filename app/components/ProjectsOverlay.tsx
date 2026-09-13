"use client";

import { useUI } from "../context/UIContext";
import { PORTFOLIO_PROJECTS } from "../content/project_registry";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectsOverlay() {
  const { isProjectsOpen, setProjectsOpen } = useUI();
  const { t } = useLanguage();

  return (
    <div
      // Sliding with padding to not touch the top/bottom of the screen
      className={`fixed inset-0 z-50 flex justify-center p-4 sm:p-8 pt-16 sm:pt-12 transition-transform duration-500 ease-in-out ${
        isProjectsOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      
      {/* Container occupying most of the horizontal space */}
      <div className="relative w-full max-w-5xl h-full flex flex-col">
        
        {/* Close Button (Mobile = above the paper / Desktop = outside to the left) */}
        <button
          onClick={() => setProjectsOpen(false)}
          className="absolute -top-14 right-0 md:-left-16 md:top-0 z-50 flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-800 border-4 border-slate-900 dark:border-slate-300 hover:scale-110 active:scale-95 transition-transform cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
          aria-label="Close Projects"
        >
          <span className="text-xl font-bold font-pixel text-slate-900 dark:text-white">
            X
          </span>
        </button>

        {/* Pixel Paper Background (thick borders, sharp corners and blocky drop shadow) */}
        <div className="w-full h-full bg-[#fdfaf3] dark:bg-slate-900 overflow-y-auto border-4 border-slate-900 dark:border-slate-500 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.4)] dark:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] p-6 md:p-12">
          
          {/* Projects Content */}
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 font-pixel">
              {t.nav.projects}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}