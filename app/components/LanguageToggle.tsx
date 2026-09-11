import Image from "next/image";

interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({ className }: LanguageToggleProps) {
  return (
    <a href="/language" target="_blank" rel="noopener noreferrer">
      <Image
        src="/images/icons/lang_toggle.png"
        alt="Language Toggle"
        width={54}
        height={54}
        unoptimized
        style={{ imageRendering: 'pixelated' }}
      />
    </a>
  );
}