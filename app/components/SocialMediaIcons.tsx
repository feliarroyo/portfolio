"use client";

import Image from "next/image";
import Tooltip from "./Tooltip";
import { useLanguage } from "../context/LanguageContext";

interface SocialMediaIconsProps {
  className?: string;
}

export default function SocialMediaIcons({ className }: SocialMediaIconsProps) {
  const { t } = useLanguage();

  const socialLinks = [
    {
      href: "mailto:feliarroyo@hotmail.com",
      text: "feliarroyo@hotmail.com",
      position: "bottom" as const,
      src: "/images/icons/sm_mail.png",
      alt: "Email",
    },
    {
      href: "https://github.com/feliarroyo",
      text: t.nav.github,
      position: "bottom" as const,
      src: "/images/icons/sm_github.png",
      alt: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/feli-arroyo/",
      text: t.nav.linkedin,
      position: "bottom-right" as const,
      src: "/images/icons/sm_linkedin.png",
      alt: "LinkedIn",
    },
  ];

  return (
    <div className={`flex flex-row gap-4 ${className}`}>
      {socialLinks.map((link) => (
        <Tooltip key={link.href} text={link.text} position={link.position}>
          {/* Added 'group' and simplified hover states */}
          <div className="group transition-transform duration-200 ease-out hover:scale-110 active:scale-95">
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <Image 
                src={link.src} 
                alt={link.alt} 
                width={48} 
                height={48} 
                unoptimized 
                style={{ imageRendering: 'pixelated' }}
              />
            </a>
          </div>
        </Tooltip>
      ))}
    </div>
  );
}