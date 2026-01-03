import { InboxIcon } from "@heroicons/react/24/outline";
import type { EmptyStateProps } from "@/types";

/**
 * EmptyState Component
 *
 * Displays a friendly empty state message when no data is available.
 * Server component - no client-side JavaScript needed.
 */
export default function EmptyState({
  icon,
  title,
  description,
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`
        flex flex-col items-center justify-center
        py-12 px-6
        text-center
        ${className}
      `.trim()}
    >
      {/* Icon */}
      <div
        className="
          w-16 h-16
          flex items-center justify-center
          rounded-full
          bg-bg-soft
          text-text-muted
          mb-4
        "
      >
        {icon || <InboxIcon className="w-8 h-8" />}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-text-main">{title}</h3>

      {/* Description */}
      {description && (
        <p className="mt-2 text-sm text-text-muted max-w-sm">{description}</p>
      )}

      {/* Action */}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
