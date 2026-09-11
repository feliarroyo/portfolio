"use client";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface DarkModeToggleProps {
  className?: string;
}

export default function DarkModeToggle({ className }: DarkModeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <div className={`${className}`}>
      <button 
        onClick={() => setTheme(isDark ? 'light' : 'dark')} 
        className="cursor-pointer relative w-24 h-24 focus:outline-none bg-transparent border-none"
        aria-label="Toggle Theme"
      />
    </div>
  );
}