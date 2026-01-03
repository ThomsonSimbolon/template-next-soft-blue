"use client";

import { useState, useRef, useEffect } from "react";
import type { DropdownProps } from "@/types";

/**
 * Dropdown Component
 *
 * A customizable dropdown menu with keyboard navigation support.
 * Handles click-outside to close automatically.
 * Supports light and dark modes.
 */
export default function Dropdown({
  trigger,
  items,
  align = "right",
  className = "",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`}>
      {/* Trigger */}
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`
            absolute z-50 mt-2
            min-w-[200px]
            bg-white dark:bg-dark-bg-card rounded-lg
            border border-border-soft dark:border-dark-border
            shadow-dropdown dark:shadow-none
            py-1
            animate-fade-in
            ${align === "right" ? "right-0" : "left-0"}
          `}
          role="menu"
        >
          {items.map((item) => {
            if (item.divider) {
              return (
                <div
                  key={item.id}
                  className="my-1 border-t border-border-soft dark:border-dark-border"
                />
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => {
                  item.onClick?.();
                  setIsOpen(false);
                }}
                className={`
                  w-full px-4 py-2.5
                  flex items-center gap-3
                  text-sm text-left
                  min-h-[44px]
                  transition-colors duration-150
                  ${
                    item.danger
                      ? "text-error hover:bg-error/5 dark:hover:bg-error/10"
                      : "text-text-body dark:text-dark-text-body hover:bg-bg-soft dark:hover:bg-dark-border"
                  }
                `}
                role="menuitem"
              >
                {item.icon && (
                  <span className="w-5 h-5 flex-shrink-0">{item.icon}</span>
                )}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
