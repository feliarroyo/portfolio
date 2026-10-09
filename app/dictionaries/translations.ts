export type Dictionary = {
  nav: {
    toggleTheme: string;
    language: string;
    github: string;
    linkedin: string;
    title: string;
    subtitle: string;
    aboutMe: string;
    projects: string;
    cv: string;
    close: string;
    intro: string;
    techStack: string;
    education: string;
  },
  text: {
    aboutMeContent: string[];
    techStackContent: string[];
    educationContent: string[];
  }
};

export const translations: Record<"en" | "es", Dictionary> = {
  en: {
    nav: {
      toggleTheme: "Toggle Dark Mode",
      language: "Change Language",
      github: "Go To GitHub Profile",
      linkedin: "Go To LinkedIn Profile",
      title: "Felipe Arroyo",
      subtitle: "Systems Engineer | Backend Developer",
      aboutMe: "About Me",
      projects: "Projects",
      cv: "Download CV",
      close: "Cerrar",
      intro: "Introduction",
      techStack: "Tech Stack",
      education: "Education"
    },
    text: {
      aboutMeContent: ["Hello! I am Felipe Arroyo, a recently graduated Systems Engineer from UNICEN with a strong focus on backend and full-stack development.", "I am currently seeking opportunities to apply my technical knowledge in a dynamic environment and continue growing as a developer."],
      techStackContent: ["My core expertise lies in building robust and scalable applications using Java, Spring Boot, and PostgreSQL, while also designing intuitive web interfaces with Next.js, React, and Tailwind CSS.", "Other languages and frameworks I have experience with include Python, C#, and Unity."],
      educationContent: ["I have a degree in Systems Engineering from UNICEN, where I gained a solid foundation in software development, algorithms, and data structures.", "During my studies, I completed various projects that allowed me to apply my knowledge in real-world scenarios, enhancing my problem-solving skills and technical proficiency."]
    }
  },
  es: {
    nav: {
      toggleTheme: "Alternar modo oscuro",
      language: "Cambiar idioma",
      github: "Ir a perfil de GitHub",
      linkedin: "Ir a perfil de LinkedIn",
      title: "Felipe Arroyo",
      subtitle: "Ingeniero de Sistemas | Desarrollador Backend",
      aboutMe: "Sobre mí",
      projects: "Proyectos",
      cv: "Descargar CV",
      close: "Cerrar",
      intro: "Introducción",
      techStack: "Stack tecnológico",
      education: "Educación"
    },
    text: {
      aboutMeContent: ["¡Hola! Soy Felipe Arroyo, un Ingeniero de Sistemas recientemente graduado de la UNICEN enfocado en el desarrollo backend y full-stack.", "Actualmente estoy en busca de oportunidades para demostrar mis conocimientos técnicos en un entorno dinámico, para así continuar creciendo como desarrollador."],
      techStackContent: ["Mi experiencia se radica principalmente en el desarrollo de aplicaciones robustas y escalables utilizando Java, Spring Boot y PostgreSQL, así como en el diseño de interfaces web intuitivas con Next.js, React y Tailwind CSS.", "Otros lenguajes y frameworks con los que tengo experiencia incluyen Python, C# y Unity."],
      educationContent: ["Tengo un título en Ingeniería de Sistemas de la UNICEN, donde adquirí una base sólida en desarrollo de software, algoritmos y estructuras de datos.", "Durante mis estudios, completé diversos proyectos que me permitieron aplicar mi conocimiento en escenarios del mundo real, mejorando mis habilidades de resolución de problemas y proficiencia técnica."]
    }
  },
};

export type Language = keyof typeof translations;