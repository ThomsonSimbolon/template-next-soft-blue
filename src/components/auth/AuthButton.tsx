"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * AuthButton Component
 *
 * Primary action button for authentication forms.
 * Supports loading state and full-width mode.
 * Supports light and dark modes.
 */

interface AuthButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: ReactNode;
  loading?: boolean;
  variant?: "primary" | "secondary" | "link";
  fullWidth?: boolean;
}

export default function AuthButton({
  children,
  loading = false,
  variant = "primary",
  fullWidth = true,
  disabled,
  type = "submit",
  ...props
}: AuthButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-medium rounded-lg
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    dark:focus:ring-offset-dark-bg-card
    disabled:opacity-50 disabled:cursor-not-allowed
    min-h-[44px]
  `;

  const variantStyles = {
    primary: `
      bg-primary text-white
      hover:bg-primary-hover dark:hover:bg-dark-primary-hover
      focus:ring-primary
      active:bg-primary-hover
    `,
    secondary: `
      bg-bg-soft dark:bg-dark-border text-text-body dark:text-dark-text-body
      hover:bg-border-soft dark:hover:bg-dark-text-muted/30
      focus:ring-primary
    `,
    link: `
      bg-transparent text-primary dark:text-dark-primary-hover
      hover:text-primary-hover dark:hover:text-primary hover:underline
      focus:ring-primary
      min-h-0 p-0
    `,
  };

  const widthStyle = fullWidth && variant !== "link" ? "w-full" : "";
  const sizeStyle = variant === "link" ? "" : "px-6 py-2.5 text-sm";

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${widthStyle}
        ${sizeStyle}
      `.trim()}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
