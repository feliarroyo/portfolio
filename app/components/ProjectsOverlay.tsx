"use client";

import { useUI } from "../context/UIContext";
import { PORTFOLIO_PROJECTS } from "../content/project_registry";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "../context/LanguageContext";
import OverlayButton from "./OverlayButton";

export default function ProjectsOverlay() {
  const { isProjectsOpen, setProjectsOpen, activeProject } = useUI();
  const { t } = useLanguage();
  
  const isDetailOpen = activeProject !== null;

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center p-4 sm:p-8 pt-28 sm:pt-28 transition-transform duration-500 ease-in-out ${
        isProjectsOpen ? "translate-y-0" : "-translate-y-full"
      } ${isDetailOpen ? "pointer-events-none" : "pointer-events-auto"}`} // prevent from using UI when a project overview is active
    >

      {/* Container occupying most of the horizontal space */}
      <div className="relative w-full max-w-5xl h-full flex flex-col">

        {/* Title Label & Close Button Wrapper - Fades out when detail overlay opens */}
        <div 
          className={`absolute -top-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 transition-opacity duration-300 ${
            isDetailOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
          }`}
        >
          <div className="bg-orange-400 dark:bg-orange-400 border-4 border-slate-900 px-8 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] dark:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              {t.nav.projects}
            </h2>
          </div>

          <OverlayButton
            variant="close"
            onClick={() => setProjectsOpen(false)}
            className="static shrink-0"
            ariaLabel="Close Projects"
          />
        </div>

        {/* Pixel Paper Background (thick borders, sharp corners and blocky drop shadow) */}
        <div className="w-full h-full bg-[#fdfaf3] dark:bg-slate-900 overflow-y-auto border-4 border-slate-900 dark:border-slate-500 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.4)] dark:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] p-6 pt-16 md:p-12 md:pt-16">

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