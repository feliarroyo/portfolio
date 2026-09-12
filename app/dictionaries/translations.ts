// dictionaries/translations.ts

// 1. Define the shape so TypeScript enforces all languages have the same keys
export type Dictionary = {
  nav: {
    toggleTheme: string;
    language: string;
    github: string;
    linkedin: string;
    title: string;
    aboutMe: string;
    projects: string;
    ideaBox: string;
  };
};

// 2. Lock the translations object to require "en" and "es", and force them to match the Dictionary type
export const translations: Record<"en" | "es", Dictionary> = {
  en: {
    nav: {
      toggleTheme: "Toggle Dark Mode",
      language: "Change Language",
      github: "Go To GitHub Profile",
      linkedin: "Go To LinkedIn Profile",
      title: "Felipe Arroyo",
      aboutMe: "About Me",
      projects: "Projects",
      ideaBox: "Future Ideas",
    },
  },
  es: {
    nav: {
      toggleTheme: "Alternar modo oscuro",
      language: "Cambiar idioma",
      github: "Ir a perfil de GitHub",
      linkedin: "Ir a perfil de LinkedIn",
      title: "Felipe Arroyo",
      aboutMe: "Sobre mí",
      projects: "Proyectos",
      ideaBox: "Ideas futuras",
    },
  },
};

export type Language = keyof typeof translations;