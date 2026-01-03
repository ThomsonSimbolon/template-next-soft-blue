import type { CardProps, Size } from "@/types";

/**
 * Card Component
 *
 * A flexible card container with optional header and footer sections.
 * Server component - no client-side JavaScript needed.
 */

const paddingStyles: Record<Size, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  title,
  subtitle,
  headerAction,
  footer,
  padding = "md",
  className = "",
}: CardProps) {
  const hasHeader = title || subtitle || headerAction;

  return (
    <div
      className={`
        bg-white rounded-xl
        border border-border-soft
        shadow-card
        ${className}
      `.trim()}
    >
      {/* Card Header */}
      {hasHeader && (
        <div
          className={`
            flex items-start justify-between gap-4
            px-6 py-4
            border-b border-border-soft
          `}
        >
          <div className="min-w-0 flex-1">
            {title && (
              <h3 className="text-lg font-semibold text-text-main truncate">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="mt-1 text-sm text-text-muted truncate">
                {subtitle}
              </p>
            )}
          </div>
          {headerAction && <div className="flex-shrink-0">{headerAction}</div>}
        </div>
      )}

      {/* Card Body */}
      <div className={paddingStyles[padding]}>{children}</div>

      {/* Card Footer */}
      {footer && (
        <div
          className={`
            px-6 py-4
            border-t border-border-soft
            bg-bg-soft/50 rounded-b-xl
          `}
        >
          {footer}
        </div>
      )}
    </div>
  );
}
