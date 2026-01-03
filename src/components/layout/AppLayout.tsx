"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Sidebar, MobileSidebar } from "@/components/navigation";
import Navbar from "./Navbar";

/**
 * AppLayout Component
 *
 * Main layout wrapper for the dashboard application.
 * Handles sidebar state, responsive behavior, and content area.
 */

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch prevention
  useEffect(() => {
    setMounted(true);

    // Restore sidebar state from localStorage
    const savedState = localStorage.getItem("sidebarCollapsed");
    if (savedState !== null) {
      setIsSidebarCollapsed(JSON.parse(savedState));
    }
  }, []);

  // Save sidebar state to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(
        "sidebarCollapsed",
        JSON.stringify(isSidebarCollapsed)
      );
    }
  }, [isSidebarCollapsed, mounted]);

  // Close mobile sidebar on route change
  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [pathname]);

  // Toggle handlers
  const handleToggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  const handleOpenMobileSidebar = () => {
    setIsMobileSidebarOpen(true);
  };

  const handleCloseMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-bg-main">
        <div className="lg:ml-64 min-h-screen">
          <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-border-soft h-16" />
          <main className="p-6">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-bg-soft rounded w-1/4" />
              <div className="h-4 bg-bg-soft rounded w-1/2" />
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-main">
      {/* Desktop Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={handleToggleSidebar}
        currentPath={pathname}
      />

      {/* Mobile Sidebar Drawer */}
      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onClose={handleCloseMobileSidebar}
        currentPath={pathname}
      />

      {/* Main Content Area */}
      <div
        className={`
          min-h-screen
          transition-all duration-300 ease-in-out
          ${isSidebarCollapsed ? "lg:ml-[72px]" : "lg:ml-64"}
        `}
      >
        {/* Navbar */}
        <Navbar
          onMenuClick={handleOpenMobileSidebar}
          onToggleSidebar={handleToggleSidebar}
          isSidebarCollapsed={isSidebarCollapsed}
        />

        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
