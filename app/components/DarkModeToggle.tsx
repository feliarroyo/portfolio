import Image from "next/image";
import { useState } from "react";
import { useTheme } from 'next-themes'

interface DarkModeToggleProps {
  className?: string;
}

export default function DarkModeToggle({ className }: DarkModeToggleProps) {
  const { theme, setTheme } = useTheme()
  return (
    <div className={`${className}`}>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <Image src={theme === 'dark' ? "/images/icons/darkmode_on.png" : "/images/icons/darkmode_off.png"} alt="Sun" width={24} height={24} />
      </button>
    </div>
  );
}