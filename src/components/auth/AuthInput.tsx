"use client";

import { useState, forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

/**
 * AuthInput Component
 *
 * A styled input component for authentication forms.
 * Supports password visibility toggle and icon prefixes.
 * Supports light and dark modes.
 */

interface AuthInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  label: string;
  icon?: ReactNode;
  error?: string;
}

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, icon, error, type = "text", id, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-1.5">
        {/* Label */}
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-text-main dark:text-dark-text-main"
        >
          {label}
        </label>

        {/* Input Container */}
        <div className="relative">
          {/* Prefix Icon */}
          {icon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-dark-text-muted">
              {icon}
            </span>
          )}

          {/* Input */}
          <input
            ref={ref}
            id={inputId}
            type={inputType}
            className={`
              w-full min-h-[44px]
              ${icon ? "pl-10" : "pl-4"}
              ${isPassword ? "pr-10" : "pr-4"}
              py-2.5
              bg-white dark:bg-dark-bg-surface
              border rounded-lg
              text-sm text-text-main dark:text-dark-text-main
              placeholder:text-text-muted dark:placeholder:text-dark-text-muted
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/30 focus:border-primary dark:focus:border-dark-primary-hover
              ${
                error
                  ? "border-error focus:ring-error/20 focus:border-error"
                  : "border-border-soft dark:border-dark-border hover:border-text-muted/50 dark:hover:border-dark-text-muted/50"
              }
            `}
            {...props}
          />

          {/* Password Toggle */}
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                absolute right-3 top-1/2 -translate-y-1/2
                w-5 h-5
                text-text-muted dark:text-dark-text-muted
                hover:text-text-body dark:hover:text-dark-text-body
                transition-colors duration-150
                focus:outline-none
              "
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeSlashIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          )}
        </div>

        {/* Error Message */}
        {error && <p className="text-sm text-error">{error}</p>}
      </div>
    );
  }
);

AuthInput.displayName = "AuthInput";

export default AuthInput;
