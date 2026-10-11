"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ProjectItem } from "../content/project_registry";

interface UIContextType {
  isProjectsOpen: boolean;
  setProjectsOpen: (isOpen: boolean) => void;
  isAboutOpen: boolean;
  setAboutOpen: (isOpen: boolean) => void;
  isAboutTyping: boolean;
  setAboutTyping: (isTyping: boolean) => void;
  activeProject: ProjectItem | null;
  setActiveProject: (project: ProjectItem | null) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [isProjectsOpen, setProjectsOpenState] = useState(false);
  const [isAboutOpen, setAboutOpenState] = useState(false);
  const [isAboutTyping, setAboutTyping] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const setProjectsOpen = (isOpen: boolean) => {
    if (isOpen && isAboutOpen) return;
    setProjectsOpenState(isOpen);
  };

  const setAboutOpen = (isOpen: boolean) => {
    if (isOpen && isProjectsOpen) return;
    setAboutOpenState(isOpen);
  };

  return (
    <UIContext.Provider value={{ 
      isProjectsOpen, 
      setProjectsOpen, 
      isAboutOpen, 
      setAboutOpen, 
      isAboutTyping, 
      setAboutTyping, 
      activeProject, 
      setActiveProject 
    }}>
      {children}
    </UIContext.Provider>
  );
}

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) throw new Error("useUI must be used within a UIProvider");
  return context;
};