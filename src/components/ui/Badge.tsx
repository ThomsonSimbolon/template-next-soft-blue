import type { BadgeProps, Status, Size } from "@/types";

/**
 * Badge Component
 *
 * A small status indicator for labeling items.
 * Server component - no client-side JavaScript needed.
 */

const statusStyles: Record<Status, string> = {
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  error: "bg-error/10 text-error",
  info: "bg-primary/10 text-primary",
  default: "bg-bg-soft text-text-muted",
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
            ${status === "info" && "bg-primary"}
            ${status === "default" && "bg-text-muted"}
          `}
        />
      )}
      {children}
    </span>
  );
}
