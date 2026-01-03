import { ReactNode } from "react";

/**
 * AuthCard Component
 *
 * A card container for authentication forms.
 * Provides consistent styling with white/dark background,
 * subtle shadow/border, and rounded corners.
 * Supports light and dark modes.
 */

interface AuthCardProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export default function AuthCard({ children, title, subtitle }: AuthCardProps) {
  return (
    <div
      className="
        w-full max-w-md
        bg-white dark:bg-dark-bg-card
        rounded-xl
        border border-border-soft dark:border-dark-border
        shadow-sm dark:shadow-none
        p-6 sm:p-8
        transition-colors duration-200
      "
    >
      {/* Header */}
      <div className="text-center mb-8">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div
            className="
              w-12 h-12
              bg-gradient-to-br from-primary to-secondary
              rounded-xl
              flex items-center justify-center
              text-white font-bold text-xl
              shadow-sm
            "
          >
            A
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-text-main dark:text-dark-text-main">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-2 text-sm text-text-muted dark:text-dark-text-muted">
            {subtitle}
          </p>
        )}
      </div>

      {/* Content */}
      {children}
    </div>
  );
}
