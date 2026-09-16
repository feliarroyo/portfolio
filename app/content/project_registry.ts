export interface ProjectTheme {
    headerBgClass: string;
    contentBgClass: string; // unused for now
}

export interface LocalizedString {
    en: string;
    es?: string;
}

export interface LocalizedStringArray {
    en: string[];
    es?: string[];
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
    description: LocalizedStringArray;
    techStack: string[];
    links: ProjectLink[];
    iconUrl: string;
    logoUrl: string;
    mediaUrls: string[];
    theme: ProjectTheme;
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
            en: [
                "Charades is a party game developed in Unity for Android devices, with support for PC versions as well.",
                "Play the classic game about guessing a word or thing with help of one or more friends in over 100 different categories. It has a native category creator within the app, so you can create your own categories and share them easily.",
                "The game supports multiple control schemes for mobile devices: answer using either the gyroscope or your phone's touchscreen (or both). On PC, play using arrow keys or the mouse.",
                "It also contains multiple game modes: either play a quick round in a single category, a selection of rounds in a row, or even mashup many categories in a single chaotic round. All modes support 1v1 team mode as well, competing over who earns more points.",
            ],
            es: [
                "Charadas es un juego para fiestas desarrollado en Unity para dispositivos Android, con versiones alternativas para PC también.",
                "Juega el clásico juego de adivinar una palabra o cosa con la ayuda de uno o más amigos, con más de 100 categorías diferentes. Incluye un creador de categorías nativo dentro de la aplicación, por lo que puedes crear tus propias categorías y compartirlas fácilmente.",
                "El juego admite múltiples esquemas de control para dispositivos móviles: responde usando el giroscopio o la pantalla táctil de tu teléfono (o ambos). En PC, juega usando las teclas de dirección o el mouse.",
                "También contiene múltiples modos de juego: puedes jugar una ronda rápida en una sola categoría, una selección de rondas seguidas, o incluso combinar muchas categorías en una sola ronda caótica. Todos los modos admiten la modalidad 1v1 por equipos, compitiendo por quién obtiene más puntos.",
            ]
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
        mediaUrls: [],
        theme: {
            headerBgClass: "bg-blue-300 dark:bg-blue-900",
            contentBgClass: "bg-blue-50 dark:bg-blue-950"
        }
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
            en: [
                "QualityTrack is a web application that serves as a centralized platform for managing, tracking, and documenting work orders in the machining and manufacturing industry within a manufacturing process. This was developed as part of a NoCountry work simulation, where I served as a back-end developer alongside a team.",
                "Alongside the entire team, we defined the requirements and functionalities of the application, designed the system architecture, and implemented back-end functionalities using Spring Boot and PostgreSQL. This system was then deployed using Render for the backend and Neon for the database."
            ],
            es: [
                "QualityTrack es una aplicación web que consiste en una plataforma centralizada para la gestión, trazabilidad y documentación de órdenes de trabajo en la industria del mecanizado y manufactura en un proceso de fabricación. Este fue desarrollado en el marco de una simulación laboral de NoCountry, donde desempeñé el rol de desarrollador back-end junto a un equipo de trabajo.",
                "En conjunto a todo el equipo, se definieron los requerimientos y funcionalidades de la aplicación, se diseñó la arquitectura del sistema y se implementaron las funcionalidades de back-end utilizando Spring Boot y PostgreSQL. Este sistema luego fue deployeado usando Render para el backend y Neon para la base de datos."
            ]
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
        mediaUrls: [],
        theme: {
            headerBgClass: "bg-emerald-200 dark:bg-emerald-900",
            contentBgClass: "bg-emerald-50 dark:bg-emerald-950"
        }
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
            en: [
                "MHGame is a project composed of multiple components, including the main game, an admin app, and a mobile app for users to play the game. The main game is built using Unity and C#, while the admin app is a web application built with Vue.js and Firebase.",
                "Developed as part of the Final Project alongside Melisa Messa, under the direction of Virginia Yannibelli, the application underwent a usability evaluation yielding positive results; and was successfully defended before a jury at UNICEN."
            ],
            es: [
                "MHGame es un proyecto compuesto por múltiples componentes, incluyendo el juego principal, una aplicación de administración y una aplicación móvil para que los usuarios jueguen. El juego principal está construido usando Unity y C#, mientras que la aplicación de administración es una aplicación web construida con Vue.js y Firebase.",
                "Desarrollada como parte del Proyecto Final junto a Melisa Messa, bajo la dirección de Virginia Yannibelli, la aplicación fue sometida a una evaluación de usabilidad obteniendo resultados positivos; y fue defendida exitosamente ante un jurado en la UNICEN."
            ]
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
        mediaUrls: [],
        theme: {
            headerBgClass: "bg-purple-200 dark:bg-purple-900",
            contentBgClass: "bg-blue-50 dark:bg-blue-950"
        }
    },
    {
        slug: "eaygenerator",
        title: {
            en: "EAY Generator"
        },
        blurb: {
            en: "Prompt editor for the Fibbage: Enough About You series",
            es: "Editor de enunciados para la serie Fibbage: Enough About You"
        },
        description: {
            en: [
                "EAY Generator is a prompt editor for the Fibbage: Enough About You game series, developed by Jackbox Games.",
                "The application allows users to create and edit prompts in a simple way, compatible with all games that use this format. The generated prompts are game-agnostic, and includes support for custom audio."
            ],
            es: [
                "EAY Generator es un editor de enunciados para la serie de juegos Fibbage: Enough About You, perteneciente a Jackbox Games.",
                "La aplicación permite crear y editar enunciados de manera sencilla, compatibles para todos los juegos que utilizan este formato. Los enunciados creados son agnósticos al juego, y cuenta con soporte para audio personalizado."
            ]
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
        mediaUrls: [],
        theme: {
            headerBgClass: "bg-yellow-200 dark:bg-yellow-900",
            contentBgClass: "bg-blue-50 dark:bg-blue-950"
        }
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
            en: [
                "Website for the Jackbox en español translation project. Designed to showcase the progress of the translation in an intuitive and modern way, as a replacement for the original project site made in Google Sites.",
                "The site uses simple animations and a responsive design, alongside filters for downloads and toggles for the credits section.",
            ],
            es: [
                "El sitio web para el proyecto de traducción de Jackbox en español. Diseñado para mostrar el progreso de la traducción de manera intuitiva y moderna, como reemplazo al sitio original del proyecto elaborado en Google Sites.",
                "Incluye animaciones sencillas y un diseño responsivo, junto a filtros para las descargas y toggles en los listados de juegos.",
            ]
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
        mediaUrls: [],
        theme: {
            headerBgClass: "bg-cyan-200 dark:bg-cyan-900",
            contentBgClass: "bg-blue-50 dark:bg-blue-950"
        }
    },
    {
        slug: "asmtoexe",
        title: {
            en: "Assembler to Executable Compiler",
            es: "Compilador de ensamblador a ejecutable"
        },
        blurb: {
            en: "Assembly compiler developed as part of the Compiler Design course in UNICEN",
            es: "Compilador de ensamblador, desarrollado como parte de la materia Diseño de Compiladores en UNICEN"
        },
        description: {
            en: [
                "Assembly compiler developed as part of the Compiler Design course in UNICEN alongside Lucas Mazzoni.",
                "Implements all stages involved in compiling an assembly language program to an executable, including lexical analysis, syntactic analysis, semantic analysis, intermediate code generation, and code optimization."
            ],
            es: [
                "Compilador de ensamblador desarrollado como parte de la materia Diseño de Compiladores en UNICEN junto a Lucas Mazzoni.",
                "Implementa todas las etapas que involucran a la compilación de un programa en lenguaje ensamblador a un ejecutable, incluyendo análisis léxico, análisis sintáctico, análisis semántico, generación de código intermedio y optimización de código."
            ]
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
        mediaUrls: [],
        theme: {
            headerBgClass: "bg-gray-200 dark:bg-gray-600",
            contentBgClass: "bg-blue-50 dark:bg-blue-950"
        }
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
            en: [
                "As part of the AgileTalk project, and alongside the \"Workers\" team, implemented the Poker Planning subsection of the SAFETalk section, following the guidelines of SAFe (Scaled Agile Framework).",
                "The work developed as part of this assignment included the implementation of an user-friendly interface for the practice within the already implemented structure, video call integration, and interaction with RASA chatbots for absent members."
            ],
            es: [
                "Como parte del proyecto AgileTalk, y junto al equipo \"Workers\", se implementó la subsección de Poker Planning parte de la sección SAFETalk, siguiendo las pautas de SAFe (Scaled Agile Framework).",
                "El trabajo desarrollado como parte de este proceso incluyó la implementación de una interfaz amigable para la práctica dentro de la estructura ya implementada, integración de videollamadas y la interacción con chatbots RASA para miembros ausentes."
            ]
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
        mediaUrls: [],
        theme: {
            headerBgClass: "bg-violet-200 dark:bg-violet-900",
            contentBgClass: "bg-blue-50 dark:bg-blue-950"
        }
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
            en: [
                "Project developed for the 2023 course of the elective Autonomy and Artificial Intelligence, taught by Analía Amandi at UNICEN. Using a personal dataset of series and movies rated on the IMDb site, a decision tree was generated that predicts whether an audiovisual content will be to my liking or not.",
                "The development was carried out in the Anaconda Cloud cloud development environment, using the Pandas and Scikit-learn libraries in the Python language.",
                "The obtained decision tree was validated by comparison with a previously completed exercise in the course, where each participant defined their personal profile. The results obtained were consistent with that profile."
            ],
            es: [
                "Proyecto realizado para la cursada 2023 de la optativa Autonomía e Inteligencia Artificial, dictada por Analía Amandi en UNICEN. Utilizando un dataset personal de series y películas calificadas en el sitio IMDb, se generó un árbol de decisión que predice si un contenido audiovisual será o no de mi agrado.",
                "El desarrollo del trabajo fue realizado en el entorno de desarrollo en la nube de Anaconda Cloud, utilizando las librerías de Pandas y Scikit-learn en el lenguaje Python.",
                "El árbol de decisión obtenido fue validado con la comparación con un ejercicio anteriormente realizado en la cursada, donde cada uno definió su perfil personal. Los resultados obtenidos fueron coherentes con dicho perfil realizado.",
            ]
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
        mediaUrls: [
            "https://youtu.be/Q9m84_aDgRY?si=NVk-sZXUIqfQlD0J"
        ],
        theme: {
            headerBgClass: "bg-orange-200 dark:bg-orange-900",
            contentBgClass: "bg-blue-50 dark:bg-blue-950"
        }
    }
]