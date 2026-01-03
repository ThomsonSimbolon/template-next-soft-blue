import type { BadgeProps, Status, Size } from "@/types";

/**
 * Badge Component
 *
 * A small status indicator for labeling items.
 * Server component - no client-side JavaScript needed.
 * Supports light and dark modes.
 */

const statusStyles: Record<Status, string> = {
  success: "bg-success/10 dark:bg-success/20 text-success",
  warning: "bg-warning/10 dark:bg-warning/20 text-warning",
  error: "bg-error/10 dark:bg-error/20 text-error",
  info: "bg-primary/10 dark:bg-primary/20 text-primary dark:text-dark-primary-hover",
  default:
    "bg-bg-soft dark:bg-dark-border text-text-muted dark:text-dark-text-muted",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-xs",
  lg: "px-3 py-1.5 text-sm",
};

export default function Badge({
  children,
  status = "default",
  size = "md",
  dot = false,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        font-medium rounded-full
        ${statusStyles[status]}
        ${sizeStyles[size]}
        ${className}
      `.trim()}
    >
      {dot && (
        <span
          className={`
            w-1.5 h-1.5 rounded-full
            ${status === "success" && "bg-success"}
            ${status === "warning" && "bg-warning"}
            ${status === "error" && "bg-error"}
            ${status === "info" && "bg-primary dark:bg-dark-primary-hover"}
            ${status === "default" && "bg-text-muted dark:bg-dark-text-muted"}
          `}
        />
      )}
      {children}
    </span>
  );
}
