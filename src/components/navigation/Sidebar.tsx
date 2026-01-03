"use client";

import Link from "next/link";
import {
  HomeIcon,
  ChartBarIcon,
  UsersIcon,
  FolderIcon,
  DocumentTextIcon,
  CogIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CreditCardIcon,
  ShoppingCartIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import SidebarItem from "./SidebarItem";
import type { NavItem, SidebarProps } from "@/types";

/**
 * Navigation Items Configuration
 *
 * Main menu items for the sidebar navigation.
 * Using Heroicons for UI consistency.
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
 * Sidebar Component
 *
 * Main navigation sidebar with collapsible functionality.
 * Fixed position on desktop with smooth transitions.
 */
export default function Sidebar({
  isCollapsed,
  onToggleCollapse,
  currentPath,
}: SidebarProps) {
  return (
    <aside
      className={`
        hidden lg:flex flex-col
        fixed left-0 top-0 bottom-0
        bg-white
        border-r border-border-soft
        z-40
        transition-all duration-300 ease-in-out
        ${isCollapsed ? "w-[72px]" : "w-64"}
      `}
    >
      {/* Logo Area */}
      <div
        className={`
          flex items-center h-16
          border-b border-border-soft
          ${isCollapsed ? "justify-center px-3" : "px-6"}
        `}
      >
        <Link href="/" className="flex items-center gap-3 min-w-0">
          {/* Logo Icon */}
          <div
            className="
              w-9 h-9 flex-shrink-0
              bg-gradient-to-br from-primary to-secondary
              rounded-lg
              flex items-center justify-center
              text-white font-bold text-lg
            "
          >
            A
          </div>
          {/* Logo Text */}
          {!isCollapsed && (
            <span className="font-bold text-lg text-text-main truncate">
              AdminPanel
            </span>
          )}
        </Link>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 py-4 px-3 overflow-y-auto scrollbar-hide">
        <div className="space-y-1">
          {navigationItems.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              isActive={currentPath === item.href}
              isCollapsed={isCollapsed}
            />
          ))}
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="py-4 px-3 border-t border-border-soft">
        <div className="space-y-1">
          {bottomNavItems.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              isActive={currentPath === item.href}
              isCollapsed={isCollapsed}
            />
          ))}
        </div>

        {/* Collapse Toggle Button */}
        <button
          onClick={onToggleCollapse}
          className={`
            w-full mt-2
            flex items-center
            min-h-[44px]
            rounded-lg
            text-text-muted
            hover:bg-bg-soft hover:text-text-body
            transition-colors duration-200
            ${isCollapsed ? "justify-center px-3" : "px-4 gap-3"}
          `}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <ChevronRightIcon className="w-5 h-5" />
          ) : (
            <>
              <ChevronLeftIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
