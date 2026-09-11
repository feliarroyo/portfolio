"use client";
import Image from "next/image";
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

interface DarkModeToggleProps {
  className?: string;
}

export default function DarkModeToggle({ className }: DarkModeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={`${className}`}>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="cursor-pointer">
        <Image
          src={theme === 'dark' ? "/images/icons/darkmode_on.png" : "/images/icons/darkmode_off.png"} alt="Sun"
          width={32}
          height={32}
          unoptimized style=
          {{ imageRendering: 'pixelated' }}
        />
      </button>
    </div>
  );
}