"use client";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Tooltip from './Tooltip';

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
      <Tooltip position="bottom" text="Toggle Dark Mode">
        <button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className="block cursor-pointer relative w-[54px] h-[54px] focus:outline-none bg-transparent border-none"
          aria-label="Toggle Theme"
        />
      </Tooltip>
    </div>

  );
}