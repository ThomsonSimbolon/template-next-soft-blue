"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  XMarkIcon,
  HomeIcon,
  ChartBarIcon,
  UsersIcon,
  FolderIcon,
  DocumentTextIcon,
  CogIcon,
  CreditCardIcon,
  ShoppingCartIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import SidebarItem from "./SidebarItem";
import type { NavItem, MobileSidebarProps } from "@/types";

/**
 * Navigation Items Configuration (same as desktop)
 */
const navigationItems: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/",
    icon: <HomeIcon className="w-5 h-5" />,
  },
  {
    id: "analytics",
    label: "Analytics",
    href: "/analytics",
    icon: <ChartBarIcon className="w-5 h-5" />,
    badge: "New",
  },
  {
    id: "customers",
    label: "Customers",
    href: "/customers",
    icon: <UsersIcon className="w-5 h-5" />,
  },
  {
    id: "orders",
    label: "Orders",
    href: "/orders",
    icon: <ShoppingCartIcon className="w-5 h-5" />,
    badge: 12,
  },
  {
    id: "transactions",
    label: "Transactions",
    href: "/transactions",
    icon: <CreditCardIcon className="w-5 h-5" />,
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
    icon: <FolderIcon className="w-5 h-5" />,
  },
  {
    id: "reports",
    label: "Reports",
    href: "/reports",
    icon: <DocumentTextIcon className="w-5 h-5" />,
  },
  {
    id: "notifications",
    label: "Notifications",
    href: "/notifications",
    icon: <BellIcon className="w-5 h-5" />,
    badge: 5,
  },
];

const bottomNavItems: NavItem[] = [
  {
    id: "settings",
    label: "Settings",
    href: "/settings",
    icon: <CogIcon className="w-5 h-5" />,
  },
];

/**
 * MobileSidebar Component
 *
 * Off-canvas drawer navigation for mobile devices.
 * Includes backdrop overlay and auto-close on navigation.
 */
export default function MobileSidebar({
  isOpen,
  onClose,
  currentPath,
}: MobileSidebarProps) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 dark:bg-black/70 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className="
          fixed left-0 top-0 bottom-0
          w-72
          bg-white dark:bg-dark-bg-card
          shadow-modal
          animate-slide-in
          flex flex-col
        "
      >
        {/* Header */}
        <div
          className="
            flex items-center justify-between
            h-16 px-4
            border-b border-border-soft dark:border-dark-border
          "
        >
          <Link href="/" className="flex items-center gap-3" onClick={onClose}>
            <div
              className="
                w-9 h-9
                bg-gradient-to-br from-primary to-secondary
                rounded-lg
                flex items-center justify-center
                text-white font-bold text-lg
              "
            >
              A
            </div>
            <span className="font-bold text-lg text-text-main dark:text-dark-text-main">
              AdminPanel
            </span>
          </Link>

          <button
            onClick={onClose}
            className="
              w-10 h-10
              flex items-center justify-center
              rounded-lg
              text-text-muted dark:text-dark-text-muted
              hover:bg-bg-soft dark:hover:bg-dark-border hover:text-text-body dark:hover:text-dark-text-body
              transition-colors duration-200
            "
            aria-label="Close menu"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-3 overflow-y-auto">
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <SidebarItem
                key={item.id}
                item={item}
                isActive={currentPath === item.href}
                isCollapsed={false}
                onClick={onClose}
              />
            ))}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="py-4 px-3 border-t border-border-soft dark:border-dark-border pb-safe">
          <div className="space-y-1">
            {bottomNavItems.map((item) => (
              <SidebarItem
                key={item.id}
                item={item}
                isActive={currentPath === item.href}
                isCollapsed={false}
                onClick={onClose}
              />
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
