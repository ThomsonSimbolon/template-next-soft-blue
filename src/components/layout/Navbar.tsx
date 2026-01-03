"use client";

import { useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  BellIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Dropdown } from "@/components/ui";
import { ThemeToggle } from "@/components/theme";
import type { NavbarProps, DropdownItem } from "@/types";

/**
 * Navbar Component
 *
 * Top navigation bar with search, notifications, theme toggle, and user menu.
 * Fixed position with proper spacing based on sidebar state.
 * Supports light and dark modes.
 */
export default function Navbar({ onMenuClick }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // User dropdown menu items
  const userMenuItems: DropdownItem[] = [
    {
      id: "profile",
      label: "My Profile",
      icon: <UserCircleIcon className="w-5 h-5" />,
      onClick: () => console.log("Profile clicked"),
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Cog6ToothIcon className="w-5 h-5" />,
      onClick: () => console.log("Settings clicked"),
    },
    {
      id: "divider",
      label: "",
      divider: true,
    },
    {
      id: "logout",
      label: "Sign Out",
      icon: <ArrowRightOnRectangleIcon className="w-5 h-5" />,
      onClick: () => console.log("Logout clicked"),
      danger: true,
    },
  ];

  return (
    <header
      className="
        sticky top-0 z-30
        bg-white/80 dark:bg-dark-bg-surface/80 backdrop-blur-md
        border-b border-border-soft dark:border-dark-border
      "
    >
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="
              lg:hidden
              w-10 h-10
              flex items-center justify-center
              rounded-lg
              text-text-muted dark:text-dark-text-muted
              hover:bg-bg-soft dark:hover:bg-dark-border hover:text-text-body dark:hover:text-dark-text-body
              transition-colors duration-200
            "
            aria-label="Open menu"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>

          {/* Search Bar */}
          <div className="hidden sm:flex items-center">
            <div className="relative">
              <MagnifyingGlassIcon
                className="
                  absolute left-3 top-1/2 -translate-y-1/2
                  w-5 h-5 text-text-muted dark:text-dark-text-muted
                "
              />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
                  w-64 lg:w-80
                  pl-10 pr-4 py-2
                  bg-bg-soft dark:bg-dark-border
                  border border-transparent
                  rounded-lg
                  text-sm text-text-body dark:text-dark-text-body
                  placeholder:text-text-muted dark:placeholder:text-dark-text-muted
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                  dark:focus:border-dark-primary-hover dark:focus:ring-dark-primary-hover
                  transition-colors duration-200
                "
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Mobile Search Button */}
          <button
            className="
              sm:hidden
              w-10 h-10
              flex items-center justify-center
              rounded-lg
              text-text-muted dark:text-dark-text-muted
              hover:bg-bg-soft dark:hover:bg-dark-border hover:text-text-body dark:hover:text-dark-text-body
              transition-colors duration-200
            "
            aria-label="Search"
          >
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Notifications */}
          <button
            className="
              relative
              w-10 h-10
              flex items-center justify-center
              rounded-lg
              text-text-muted dark:text-dark-text-muted
              hover:bg-bg-soft dark:hover:bg-dark-border hover:text-text-body dark:hover:text-dark-text-body
              transition-colors duration-200
            "
            aria-label="Notifications"
          >
            <BellIcon className="w-5 h-5" />
            {/* Notification Indicator */}
            <span
              className="
                absolute top-2 right-2
                w-2 h-2
                bg-error
                rounded-full
              "
            />
          </button>

          {/* User Menu */}
          <Dropdown
            trigger={
              <button
                className="
                  flex items-center gap-2
                  h-10 pl-1 pr-2
                  rounded-lg
                  hover:bg-bg-soft dark:hover:bg-dark-border
                  transition-colors duration-200
                "
              >
                {/* Avatar */}
                <div
                  className="
                    w-8 h-8
                    rounded-full
                    bg-gradient-to-br from-primary to-accent
                    flex items-center justify-center
                    text-white text-sm font-semibold
                  "
                >
                  JD
                </div>
                {/* Name - hidden on mobile */}
                <span className="hidden md:block text-sm font-medium text-text-main dark:text-dark-text-main">
                  John Doe
                </span>
                <ChevronDownIcon className="hidden md:block w-4 h-4 text-text-muted dark:text-dark-text-muted" />
              </button>
            }
            items={userMenuItems}
            align="right"
          />
        </div>
      </div>
    </header>
  );
}
