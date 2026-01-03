"use client";

import Link from "next/link";
import type { SidebarItemProps } from "@/types";

/**
 * SidebarItem Component
 *
 * A single navigation item in the sidebar.
 * Supports active state and collapsed mode.
 */
export default function SidebarItem({
  item,
  isActive,
  isCollapsed,
  onClick,
}: SidebarItemProps) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`
        group relative flex items-center
        min-h-[44px]
        rounded-lg
        transition-all duration-200
        ${isCollapsed ? "justify-center px-3" : "px-4 gap-3"}
        ${
          isActive
            ? "bg-primary text-white shadow-sm"
            : "text-text-body hover:bg-bg-soft hover:text-text-main"
        }
      `}
      title={isCollapsed ? item.label : undefined}
    >
      {/* Icon */}
      <span
        className={`
          flex-shrink-0 w-5 h-5
          ${
            isActive ? "text-white" : "text-text-muted group-hover:text-primary"
          }
        `}
      >
        {item.icon}
      </span>

      {/* Label */}
      {!isCollapsed && (
        <span className="flex-1 text-sm font-medium truncate">
          {item.label}
        </span>
      )}

      {/* Badge */}
      {!isCollapsed && item.badge && (
        <span
          className={`
            flex-shrink-0 min-w-[20px] h-5
            flex items-center justify-center
            rounded-full px-1.5
            text-xs font-semibold
            ${
              isActive ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
            }
          `}
        >
          {item.badge}
        </span>
      )}

      {/* Tooltip for collapsed mode */}
      {isCollapsed && (
        <span
          className="
            absolute left-full ml-3
            px-3 py-2
            bg-text-main text-white text-sm
            rounded-lg
            whitespace-nowrap
            opacity-0 invisible
            group-hover:opacity-100 group-hover:visible
            transition-all duration-200
            z-50
            shadow-dropdown
          "
        >
          {item.label}
          {item.badge && (
            <span className="ml-2 px-1.5 py-0.5 bg-primary rounded text-xs">
              {item.badge}
            </span>
          )}
        </span>
      )}
    </Link>
  );
}
