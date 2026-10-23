"use client";
import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import Tooltip from './Tooltip';
import { useLanguage } from '../context/LanguageContext';
import { playSound } from '../utils/sound';

interface DarkModeToggleProps {
  className?: string;
}

export default function DarkModeToggle({ className }: DarkModeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();

  const mounted = useSyncExternalStore(
    () => () => { }, // empty subscribe
    () => true,     // client snapshot
    () => false     // server snapshot
  );
  
  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === 'dark';

  const handleToggle = () => {
    const nextTheme = isDark ? 'light' : 'dark';
    setTheme(nextTheme);

    if (nextTheme === 'dark') {
      playSound('nightSwitch');
    } else {
      playSound('daySwitch');
    }
  };

  return (
    <div className={`${className}`}>
      <Tooltip position="bottom" text={t.nav.toggleTheme} forceTooltipOnMobile={true}>
        <button
          id="theme-toggle-btn"
          onClick={handleToggle}
          className="block cursor-pointer relative w-13.5 h-13.5 focus:outline-none bg-transparent border-none pointer-events-auto"
          aria-label={t.nav.toggleTheme}
        />
      </Tooltip>
    </div>

  );
}