import { ReactNode } from "react";

/**
 * AuthCard Component
 *
 * A card container for authentication forms.
 * Provides consistent styling with white background,
 * subtle shadow, and rounded corners.
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
        bg-white
        rounded-xl
        border border-border-soft
        shadow-sm
        p-6 sm:p-8
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
        <h1 className="text-2xl font-bold text-text-main">{title}</h1>

        {/* Subtitle */}
        {subtitle && <p className="mt-2 text-sm text-text-muted">{subtitle}</p>}
      </div>

      {/* Content */}
      {children}
    </div>
  );
}
