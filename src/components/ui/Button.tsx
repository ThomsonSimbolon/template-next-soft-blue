"use client";

import { forwardRef } from "react";
import type { ButtonProps } from "@/types";

/**
 * Button Component
 *
 * A versatile button component supporting multiple variants, sizes, and states.
 * Follows the design system color palette strictly.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      disabled = false,
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      type = "button",
      onClick,
      className = "",
    },
    ref
  ) => {
    // Base styles for all buttons
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-medium rounded-lg
      transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      min-h-[44px]
    `;

    // Variant-specific styles following the design system
    const variantStyles: Record<string, string> = {
      primary: `
        bg-primary text-white
        hover:bg-primary-hover
        focus:ring-primary
        active:bg-primary-hover
      `,
      secondary: `
        bg-secondary text-white
        hover:bg-accent
        focus:ring-secondary
        active:bg-accent
      `,
      danger: `
        bg-error text-white
        hover:bg-red-600
        focus:ring-error
        active:bg-red-700
      `,
      ghost: `
        bg-transparent text-text-body
        hover:bg-bg-soft
        focus:ring-primary
        active:bg-bg-soft
      `,
      outline: `
        bg-transparent text-primary
        border-2 border-primary
        hover:bg-primary hover:text-white
        focus:ring-primary
        active:bg-primary-hover active:text-white
      `,
    };

    // Size-specific styles
    const sizeStyles: Record<string, string> = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    };

    const widthStyle = fullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        onClick={onClick}
        className={`
          ${baseStyles}
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${widthStyle}
          ${className}
        `.trim()}
      >
        {loading ? (
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
        ) : (
          leftIcon
        )}
        {children}
        {!loading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
