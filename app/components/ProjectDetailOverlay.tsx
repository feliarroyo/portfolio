"use client";

import { useEffect, useState } from "react";
import { useUI } from "../context/UIContext";
import { useLanguage } from "../context/LanguageContext";
import { ProjectItem } from "../content/project_registry";
import Image from "next/image";
import TechBadge from "../components/TechBadge";
import OverlayButton from "./OverlayButton";

// Helper function to identify YouTube URLs and show them as embeds
const getYouTubeEmbedUrl = (url: string) => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};

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

  const title = displayProject
    ? displayProject.title[language as keyof typeof displayProject.title] || displayProject.title.en
    : "";
  const descriptionArray = displayProject ? displayProject.description[language as keyof typeof displayProject.description] || displayProject.description.en : [""];
  const headerBg = displayProject?.theme?.headerBgClass || "bg-slate-100 dark:bg-slate-900";
  const mediaUrls = displayProject?.mediaUrls || [];
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  return (
    <div
      className={`fixed inset-0 z-60 flex justify-center p-4 sm:p-8 pt-28 sm:pt-28 transition-transform duration-500 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="relative w-full max-w-5xl h-full flex flex-col">
        {displayProject && (
          <>
            {/* Back Button */}
            <OverlayButton
              variant="back"
              onClick={() => setActiveProject(null)}
              className="-top-16 right-0 md:-left-16 md:top-0"
              ariaLabel="Back to Projects"
            />

            {/* Title Label */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 bg-orange-400 dark:bg-orange-400 border-4 border-slate-900 px-8 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] dark:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)]">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight text-center">
                {title}
              </h2>
            </div>

            {/* Pixel Paper Background */}
            <div className="w-full h-full bg-[#fdfaf3] dark:bg-slate-900 overflow-y-auto border-4 border-slate-900 dark:border-slate-500 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.4)] dark:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.8)] p-6 pt-16 md:p-12 md:pt-16">

              <div className="flex flex-col md:flex-row gap-8 lg:gap-12">

                {/* Left Column: Logo, Tech Stack, & Links */}
                <div className="flex flex-col md:w-1/3 shrink-0">
                  <div className={`w-full h-48 ${headerBg} border-4 border-slate-900 dark:border-slate-700 relative p-4 flex items-center justify-center mb-6`}>
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
                    <div className="flex flex-wrap gap-2 mt-4">
                      {displayProject.techStack.map((tech) => (
                        <TechBadge key={tech} name={tech} />
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

                {/* Right Column: Pictures/Videos & Description */}
                <div className="flex flex-col md:w-2/3">

                  {/* Gallery Section */}
                  {mediaUrls.length > 0 && (
                    <div className="flex overflow-x-auto gap-4 p-2 snap-x snap-mandatory items-center">
                      {mediaUrls.map((url, index) => {
                        const youtubeEmbedUrl = getYouTubeEmbedUrl(url);

                        return youtubeEmbedUrl ? (
                          /* Video Container: Fixed aspect ratio */
                          <div
                            key={index}
                            className="shrink-0 h-48 md:h-64 aspect-video relative snap-center border-4 border-gray-800 bg-black"
                          >
                            <iframe
                              src={youtubeEmbedUrl}
                              title={`${displayProject.title} video ${index + 1}`}
                              className="w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        ) : (
                          /* Image Container: Auto width to eliminate black bars */
                          <div
                            key={index}
                            className="shrink-0 h-48 md:h-64 relative snap-center border-4 border-gray-800 bg-black cursor-pointer hover:scale-[1.02] transition-transform"
                            onClick={() => setExpandedImage(url)}
                          >
                            <Image
                              src={url}
                              alt={`${displayProject.title} media ${index + 1}`}
                              width={0}
                              height={0}
                              sizes="(max-width: 768px) 100vw, 400px"
                              className="w-auto h-full object-contain"
                            />
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Full-size Image Lightbox Overlay */}
                  {expandedImage && (
                    <div
                      className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 md:p-12 cursor-pointer"
                      onClick={() => setExpandedImage(null)}
                    >
                      {/* Framed Container */}
                      <div
                        className="relative bg-[#e6e6e6] dark:bg-gray-800 border-4 border-black dark:border-white p-3 md:p-5 shadow-[8px_8px_0_0_rgba(0,0,0,1)] cursor-default flex flex-col items-center justify-center max-w-[95vw] max-h-[95vh]"
                        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the frame
                      >
                        {/* Close Button */}
                        <OverlayButton
                          variant="close"
                          onClick={() => setExpandedImage(null)}
                          className="-top-5 -right-5 md:-top-6 md:-right-6 md:w-12 md:h-12 z-10"
                          ariaLabel="Close Image"
                        />

                        {/* Constrained Image */}
                        <div className="relative flex justify-center items-center max-h-[80vh]">
                          <Image
                            src={expandedImage}
                            alt="Expanded project view"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-auto h-auto max-w-[85vw] max-h-[80vh] object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mb-8 min-h-[150px] mt-6">
                    {descriptionArray.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </>)
        }
      </div>
    </div>
  );
}