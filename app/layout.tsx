import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import { LanguageProvider } from "./context/LanguageContext";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { UIProvider } from "./context/UIContext";
import ProjectsOverlay from "./components/ProjectsOverlay";
import DarkModeToggle from "./components/DarkModeToggle";
import ThemeBackground from "./components/ThemeBackground";

const pixelify = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felipe Arroyo | Portfolio",
  description: "Portfolio website of Felipe Arroyo, System Engineer, showcasing different skills and projects in the IT field.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html suppressHydrationWarning
      lang="en"
      className={`${pixelify.variable} ${pixelify.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LanguageProvider>
          <UIProvider>

            <ProjectsOverlay />
            {children}

          </UIProvider>

        </LanguageProvider>
      </ThemeProvider>

    </body>
    </html >
  );
}
