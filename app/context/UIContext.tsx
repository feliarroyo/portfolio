// context/UIContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface UIContextType {
  isProjectsOpen: boolean;
  setProjectsOpen: (isOpen: boolean) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [isProjectsOpen, setProjectsOpen] = useState(false);

  return (
    <UIContext.Provider value={{ isProjectsOpen, setProjectsOpen }}>
      {children}
    </UIContext.Provider>
  );
}

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) throw new Error("useUI must be used within a UIProvider");
  return context;
};