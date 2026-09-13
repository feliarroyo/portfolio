"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { ProjectItem } from "../content/project_registry";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();

  // English as default
  const title = project.title[language] || project.title.en;
  const blurb = project.blurb[language] || project.blurb.en;

  return (
    <div className="group flex flex-col bg-white dark:bg-slate-800 border-4 border-slate-500 dark:border-slate-500 overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer">
      
      {/* Logo/Header Area */}
      <div className="h-32 bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-4 relative border-b border-slate-200 dark:border-slate-700">
        <Image
          src={project.logoUrl}
          alt={`${title} logo`}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col grow">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
          {blurb}
        </p>
        
        {/* Tech Stack Tags */}
        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
    </div>
  );
}