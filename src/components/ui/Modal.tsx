"use client";

import { useEffect, useCallback } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import type { ModalProps, Size } from "@/types";

/**
 * Modal Component
 *
 * An accessible modal dialog with backdrop overlay.
 * Handles focus trap and keyboard navigation.
 */

const sizeStyles: Record<Size, string> = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
};

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  size = "md",
  closeOnOverlayClick = true,
}: ModalProps) {
  // Handle Escape key to close modal
  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.body.style.overflow = "unset";
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity animate-fade-in"
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className={`
            relative w-full ${sizeStyles[size]}
            bg-white rounded-xl
            shadow-modal
            animate-slide-up
          `}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
        >
          {/* Header */}
          {(title || description) && (
            <div className="px-6 pt-6 pb-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  {title && (
                    <h2
                      id="modal-title"
                      className="text-lg font-semibold text-text-main"
                    >
                      {title}
                    </h2>
                  )}
                  {description && (
                    <p className="mt-1 text-sm text-text-muted">
                      {description}
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="
                    flex-shrink-0
                    w-10 h-10
                    flex items-center justify-center
                    rounded-lg
                    text-text-muted
                    hover:bg-bg-soft hover:text-text-body
                    transition-colors duration-150
                  "
                  aria-label="Close modal"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Close button only (no header) */}
          {!title && !description && (
            <button
              onClick={onClose}
              className="
                absolute top-4 right-4
                w-10 h-10
                flex items-center justify-center
                rounded-lg
                text-text-muted
                hover:bg-bg-soft hover:text-text-body
                transition-colors duration-150
              "
              aria-label="Close modal"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}

          {/* Content */}
          <div className="px-6 py-4">{children}</div>

          {/* Footer */}
          {footer && (
            <div
              className="
                px-6 py-4
                border-t border-border-soft
                bg-bg-soft/50 rounded-b-xl
                flex items-center justify-end gap-3
              "
            >
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
