import Image from "next/image";
import Tooltip from "./Tooltip";

interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({ className }: LanguageToggleProps) {
  return (
    <Tooltip text="Language Toggle" position="right">
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
    </Tooltip>
  );
}