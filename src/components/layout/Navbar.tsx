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
import type { NavbarProps, DropdownItem } from "@/types";

/**
 * Navbar Component
 *
 * Top navigation bar with search, notifications, and user menu.
 * Fixed position with proper spacing based on sidebar state.
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
        bg-white/80 backdrop-blur-md
        border-b border-border-soft
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
              text-text-muted
              hover:bg-bg-soft hover:text-text-body
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
                  w-5 h-5 text-text-muted
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
                  bg-bg-soft
                  border border-transparent
                  rounded-lg
                  text-sm text-text-body
                  placeholder:text-text-muted
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
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
              text-text-muted
              hover:bg-bg-soft hover:text-text-body
              transition-colors duration-200
            "
            aria-label="Search"
          >
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>

          {/* Notifications */}
          <button
            className="
              relative
              w-10 h-10
              flex items-center justify-center
              rounded-lg
              text-text-muted
              hover:bg-bg-soft hover:text-text-body
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
                  hover:bg-bg-soft
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
                <span className="hidden md:block text-sm font-medium text-text-main">
                  John Doe
                </span>
                <ChevronDownIcon className="hidden md:block w-4 h-4 text-text-muted" />
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
