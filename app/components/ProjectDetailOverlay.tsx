"use client";

import { useEffect, useState } from "react";
import { useUI } from "../context/UIContext";
import { useLanguage } from "../context/LanguageContext";
import { ProjectItem } from "../content/project_registry";
import Image from "next/image";

export default function ProjectDetailOverlay() {
  const { activeProject, setActiveProject } = useUI();
  const { language } = useLanguage();
  
  const [displayProject, setDisplayProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (activeProject) {
      setDisplayProject(activeProject);
    }
  }, [activeProject]);

  const isOpen = activeProject !== null;

  if (!displayProject) return null;

  const title = displayProject.title[language as keyof typeof displayProject.title] || displayProject.title.en;
  const description = displayProject.description[language as keyof typeof displayProject.description] || displayProject.description.en;

  return (
    <div
      className={`fixed inset-0 z-60 flex justify-center p-4 sm:p-8 pt-16 sm:pt-12 transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="relative w-full max-w-5xl h-full flex flex-col">
        
        {/* Back Button */}
        <button
          onClick={() => setActiveProject(null)}
          className="absolute -top-14 left-0 md:-left-16 md:top-0 z-50 flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-800 border-4 border-slate-900 dark:border-slate-300 hover:scale-110 active:scale-95 transition-transform cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
          aria-label="Back to Projects"
        >
          <span className="text-xl font-bold font-pixel text-slate-900 dark:text-white">
            {"<"}
          </span>
        </button>

        {/* Pixel Paper Background */}
        <div className="w-full h-full bg-[#fdfaf3] dark:bg-slate-900 overflow-y-auto border-4 border-slate-900 dark:border-slate-500 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.4)] dark:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] p-6 md:p-12">
          
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            
            {/* Left Column: Logo, Tech Stack, & Links */}
            <div className="flex flex-col md:w-1/3 shrink-0">
              <div className="w-full h-48 bg-slate-100 dark:bg-slate-800 border-4 border-slate-900 dark:border-slate-700 relative p-4 flex items-center justify-center mb-6">
                <Image
                  src={displayProject.logoUrl}
                  alt={`${title} logo`}
                  fill
                  className="object-contain p-4"
                />
              </div>
              
              <div className="w-full">
                <h4 className="font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-widest font-pixel text-sm border-b-2 border-slate-200 dark:border-slate-700 pb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {displayProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-bold bg-slate-200 dark:bg-slate-700 border-2 border-slate-900 dark:border-slate-500 text-slate-700 dark:text-slate-200 uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons / Links */}
              {displayProject.links.length > 0 && (
                <div className="w-full mt-8">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-widest font-pixel text-sm border-b-2 border-slate-200 dark:border-slate-700 pb-2">
                    Links
                  </h4>
                  <div className="flex flex-col gap-4">
                    {displayProject.links.map((link, idx) => {
                      const linkLabel = link.label[language as keyof typeof link.label] || link.label.en;
                      return (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-center px-4 py-3 bg-slate-900 dark:bg-slate-200 text-white dark:text-slate-900 font-pixel text-sm hover:-translate-y-1 active:translate-y-0 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,0.3)]"
                        >
                          {linkLabel}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Title & Description */}
            <div className="flex flex-col md:w-2/3">
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 font-pixel">
                {title}
              </h2>
              
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8 whitespace-pre-wrap min-h-37.5">
                {description}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}