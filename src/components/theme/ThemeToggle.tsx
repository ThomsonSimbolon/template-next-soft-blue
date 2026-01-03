"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/hooks/useTheme";

/**
 * ThemeToggle Component
 *
 * A toggle button for switching between light and dark themes.
 * Uses Heroicons Sun/Moon icons with smooth transitions.
 *
 * Features:
 * - SSR-safe (only renders after hydration)
 * - Accessible with proper aria labels
 * - Smooth icon transitions
 * - Consistent with design system
 */

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div
        className={`
          w-10 h-10
          flex items-center justify-center
          rounded-lg
          bg-bg-soft dark:bg-dark-border
          ${className}
        `}
      >
        <div className="w-5 h-5 bg-bg-soft dark:bg-dark-border rounded animate-pulse" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        w-10 h-10
        flex items-center justify-center
        rounded-lg
        text-text-muted dark:text-dark-text-muted
        hover:bg-bg-soft dark:hover:bg-dark-border
        hover:text-text-body dark:hover:text-dark-text-body
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        dark:focus:ring-offset-dark-bg-surface
        ${className}
      `}
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <MoonIcon className="w-5 h-5 transition-transform duration-200 hover:rotate-12" />
      ) : (
        <SunIcon className="w-5 h-5 transition-transform duration-200 hover:rotate-45" />
      )}
    </button>
  );
}
