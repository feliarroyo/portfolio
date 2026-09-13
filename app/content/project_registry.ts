export interface LocalizedString {
    en: string;
    es?: string;
}

export interface ProjectLink {
    label: LocalizedString;
    url: string;
}

export interface TechItem {
    id: string;
    name: LocalizedString;
}

export interface ProjectItem {
    slug: string;
    title: LocalizedString;
    blurb: LocalizedString;
    description: LocalizedString;
    techStack: string[];
    links: ProjectLink[];
    iconUrl: string;
    logoUrl: string;
    mediaUrls: string[];
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
    {
        slug: "charades",
        title: {
            en: "Charades",
            es: "Charadas"
        },
        blurb: {
            en: "Open-source, ad-free version of the party game for Android and Windows",
            es: "Versión de código abierto y sin anuncios del juego de fiesta para Android y Windows"
        },
        description: {
            en: "Charades is a party game developed in Unity for Android devices (with support for PC versions as well).\n- Play the classic game about guessing a word or thing with help of one or more friends in over 100 different categories: from classics such as Animals to more specific categories, such as characters from a video game.\n- Multiple control schemes for mobile devices: Answer using either the gyroscope or your phone's touchscreen (or both)\n- Three game modes: Play a quick round in a single category, a selection of rounds in a row, or even mashup many categories in a single chaotic round.\n- Built-in 1v1 team mode. Compete head-to-head to see which team gets more points.\n- Custom category support, with a built-in creator within the app. You can load and share categories easily!",
            es: "Versión de código abierto y sin anuncios del juego de fiesta para Android y Windows"
        },
        techStack: ["unity", "csharp"],
        links: [
            {
                label: {
                    en: "GitHub Repo",
                    es: "Repositorio de GitHub"
                },
                url: "https://github.com/feliarroyo/Charades"
            },
            {
                label: {
                    en: "Download Latest Version",
                    es: "Descargar la última versión"
                },
                url: "https://github.com/feliarroyo/Charades/releases/latest"
            }
        ],
        iconUrl: "/images/projects/charades/icon.png",
        logoUrl: "/images/projects/charades/logo.png",
        mediaUrls: []
    },
    {
        slug: "qualitytrack",
        title: {
            en: "QualityTrack"
        },
        blurb: {
            en: "Web application for tracking quality control in a manufacturing process",
            es: "Aplicación web para el seguimiento del control de calidad en un proceso de fabricación"
        },
        description: {
            en: "Web application for tracking quality control in a manufacturing process",
            es: "Aplicación web para el seguimiento del control de calidad en un proceso de fabricación"
        },
        techStack: ["java", "springboot", "postgresql"],
        links: [
            {
                label: {
                    en: "GitHub Repo",
                    es: "Repositorio de GitHub"
                },
                url: "https://github.com/No-Country-simulation/S08-26-equipo04"
            },
        ],
        iconUrl: "/images/projects/qualitytrack/icon.png",
        logoUrl: "/images/projects/qualitytrack/logo.png",
        mediaUrls: []
    },
    {
        slug: "mhgame",
        title: {
            en: "MHGame"
        },
        blurb: {
            en: "Application showcasing a serious game for facilitating cognitive evaluation",
            es: "Aplicación que muestra un juego serio para facilitar la evaluación cognitiva"
        },
        description: {
            en: "Project composed of multiple components, including the main game, an admin app, and a mobile app for users to play the game. The main game is built using Unity and C#, while the admin app is a web application built with Vue.js and Firebase. The mobile app is also built using Unity and C#.",
            es: "Proyecto compuesto por múltiples componentes, incluyendo el juego principal, una aplicación de administración y una aplicación móvil para que los usuarios jueguen. El juego principal está construido usando Unity y C#, mientras que la aplicación de administración es una aplicación web construida con Vue.js y Firebase. La aplicación móvil también está construida usando Unity y C#."
        },
        techStack: ["unity", "csharp", "firebase", "vuejs", "vercel"],
        links: [
            {
                label: {
                    en: "GitHub Repo (Mobile App)",
                    es: "Repositorio de GitHub (app móvil)"
                },
                url: "https://github.com/feliarroyo/evaluacion-cognitiva"
            },
            {
                label: {
                    en: "GitHub Repo (Web App)",
                    es: "Repositorio de GitHub (app web)"
                },
                url: "https://github.com/feliarroyo/evaluacion-cognitiva-web"
            },
        ],
        iconUrl: "/images/projects/mhgame/icon.png",
        logoUrl: "/images/projects/mhgame/logo.png",
        mediaUrls: []
    },
    {
        slug: "eaygenerator",
        title: {
            en: "EAY Generator"
        },
        blurb: {
            en: "Prompt editor for the Fibbage: Enough About You series",
            es: "Editor de prompts para la serie Fibbage: Enough About You"
        },
        description: {
            en: "Prompt editor for the Fibbage: Enough About You series",
            es: "Editor de prompts para la serie Fibbage: Enough About You"
        },
        techStack: ["python", "pyside6"],
        links: [
            {
                label: {
                    en: "GitHub Repo",
                    es: "Repositorio de GitHub"
                },
                url: "https://github.com/feliarroyo/eay-generator"
            },
            {
                label: {
                    en: "Download Latest Version",
                    es: "Descargar la última versión"
                },
                url: "https://github.com/feliarroyo/eay-generator/releases/latest"
            }
        ],
        iconUrl: "/images/projects/eaygenerator/icon.png",
        logoUrl: "/images/projects/eaygenerator/logo.webp",
        mediaUrls: []
    },
    {
        slug: "jackboxesp",
        title: {
            en: "Jackbox en español Website",
            es: "Sitio web de Jackbox en español"
        },
        blurb: {
            en: "Website for the Jackbox en español translation project",
            es: "Sitio web para el proyecto de traducción de Jackbox en español"
        },
        description: {
            en: "Website for the Jackbox en español translation project",
            es: "Sitio web para el proyecto de traducción de Jackbox en español"
        },
        techStack: ["nextjs", "tailwindcss", "vercel"],
        links: [
            {
                label: {
                    en: "GitHub Repo",
                    es: "Repositorio de GitHub"
                },
                url: "https://github.com/feliarroyo/traducciones-jackboxlol-site"
            },
            {
                label: {
                    en: "Visit Website",
                    es: "Visitar sitio web"
                },
                url: "https://traducciones-jackboxlol-site.vercel.app/"
            }
        ],
        iconUrl: "/images/projects/jackboxesp/icon.png",
        logoUrl: "/images/projects/jackboxesp/logo.png",
        mediaUrls: []
    },
    {
        slug: "asmtoexe",
        title: {
            en: "Assembler to Executable Compiler",
            es: "Compilador de ensamblador a ejecutable"
        },
        blurb: {
            en: "Assembly compiler developed as part of Compiler Design in UNICEN",
            es: "Compilador de ensamblador desarrollado como parte del Diseño de Compiladores en UNICEN"
        },
        description: {
            en: "Assembly compiler developed as part of Compiler Design in UNICEN",
            es: "Compilador de ensamblador desarrollado como parte del Diseño de Compiladores en UNICEN"
        },
        techStack: ["java", "yacc", "masm32"],
        links: [
            {
                label: {
                    en: "GitHub Repo",
                    es: "Repositorio de GitHub"
                },
                url: "https://github.com/feliarroyo/Compilador-2022"
            },
        ],
        iconUrl: "/images/projects/asmtoexe/icon.png",
        logoUrl: "/images/projects/asmtoexe/logo.webp",
        mediaUrls: []
    },
    {
        slug: "pokerplanning",
        title: {
            en: "Workers: SAFETalk - Poker Planning"
        },
        blurb: {
            en: "Poker Planning subsection of the AgileTalk project",
            es: "Subsección de Planificación de Poker del proyecto AgileTalk"
        },
        description: {
            en: "Poker Planning subsection of the AgileTalk project",
            es: "Subsección de Planificación de Poker del proyecto AgileTalk"
        },
        techStack: ["unity", "csharp", "rasa"],
        links: [
            {
                label: {
                    en: "Visit Website",
                    es: "Visitar sitio web"
                },
                url: "https://agustinschilling.github.io/workers/"
            }
        ],
        iconUrl: "/images/projects/pokerplanning/icon.png",
        logoUrl: "/images/projects/pokerplanning/logo.png",
        mediaUrls: []
    },
    {
        slug: "imdbdecisiontree",
        title: {
            en: "IMDB Personal Rec Tree",
            es: "Árbol de Recomendación Personal de IMDB"
        },
        blurb: {
            en: "Decision Tree based on personal TV/movie recommendations",
            es: "Árbol de decisión basado en recomendaciones personales de TV/películas"
        },
        description: {
            en: "Decision Tree based on personal TV/movie recommendations",
            es: "Árbol de decisión basado en recomendaciones personales de TV/películas"
        },
        techStack: ["python", "pandas", "scikitlearn"],
        links: [
            {
                label: {
                    en: "GitHub Repo",
                    es: "Repositorio de GitHub"
                },
                url: "https://github.com/feliarroyo/arbol-decision-imdb"
            }
        ],
        iconUrl: "/images/projects/imdbdecisiontree/icon.png",
        logoUrl: "/images/projects/imdbdecisiontree/logo.png",
        mediaUrls: []
    }
]