import Image from "next/image";

interface SocialMediaIconsProps {
  className?: string;
}

export default function SocialMediaIcons({ className }: SocialMediaIconsProps) {
  return (
    <div className={`flex flex-row gap-4 ${className}`}>
      <a href="mailto:feliarroyo@hotmail.com" target="_blank" rel="noopener noreferrer">
        <Image src="/images/icons/sm_mail.png" alt="Twitter" width={48} height={48} />
      </a>
      <a href="https://github.com/feliarroyo" target="_blank" rel="noopener noreferrer">
        <Image src="/images/icons/sm_github.png" alt="GitHub" width={48} height={48} />
      </a>
      <a href="https://www.linkedin.com/in/feli-arroyo/" target="_blank" rel="noopener noreferrer">
        <Image src="/images/icons/sm_linkedin.png" alt="LinkedIn" width={48} height={48} />
      </a>
    </div>
  );
}