import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import type { StatCardProps } from "@/types";

/**
 * StatCard Component
 *
 * Displays a key metric with optional change indicator and icon.
 * Perfect for dashboard KPIs and statistics.
 * Supports light and dark modes.
 */
export default function StatCard({
  title,
  value,
  change,
  icon,
  iconBackground = "bg-primary/10 dark:bg-primary/20",
  className = "",
}: StatCardProps) {
  return (
    <div
      className={`
        bg-white dark:bg-dark-bg-card rounded-xl
        border border-border-soft dark:border-dark-border
        shadow-card dark:shadow-none
        p-6
        ${className}
      `.trim()}
    >
      <div className="flex items-start justify-between">
        {/* Content */}
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-text-muted dark:text-dark-text-muted truncate">
            {title}
          </p>
          <p className="mt-2 text-2xl font-bold text-text-main dark:text-dark-text-main">
            {value}
          </p>

          {/* Change Indicator */}
          {change && (
            <div className="mt-2 flex items-center gap-1">
              {change.type === "increase" ? (
                <ArrowUpIcon className="h-4 w-4 text-success" />
              ) : (
                <ArrowDownIcon className="h-4 w-4 text-error" />
              )}
              <span
                className={`text-sm font-medium ${
                  change.type === "increase" ? "text-success" : "text-error"
                }`}
              >
                {Math.abs(change.value)}%
              </span>
              <span className="text-sm text-text-muted dark:text-dark-text-muted">
                vs last period
              </span>
            </div>
          )}
        </div>

        {/* Icon */}
        {icon && (
          <div
            className={`
              flex-shrink-0
              w-12 h-12
              rounded-lg
              flex items-center justify-center
              ${iconBackground}
            `}
          >
            <div className="w-6 h-6 text-primary dark:text-dark-primary-hover">
              {icon}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
