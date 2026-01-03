import { ReactNode } from "react";

/**
 * AuthLayout Component
 *
 * A 3-layer background layout for authentication pages.
 * Supports both light and dark modes.
 *
 * LIGHT MODE:
 * Layer 1: Base background (#F8FAFF)
 * Layer 2: Soft gradient glow (blue-100/40 → indigo-100/30)
 * Layer 3: Decorative SVG wave (5-10% opacity)
 *
 * DARK MODE:
 * Layer 1: Base background (#0B1220)
 * Layer 2: Dark gradient glow (blue-900/30 → indigo-900/20)
 * Layer 3: Decorative SVG wave (6-8% opacity)
 *
 * This layout centers content and is fully responsive.
 */

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Layer 1: Base Background */}
      <div className="absolute inset-0 bg-bg-main dark:bg-dark-bg-main transition-colors duration-200" />

      {/* Layer 2: Gradient Glow */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br from-blue-100/40 via-transparent to-indigo-100/30
          dark:from-blue-900/30 dark:via-transparent dark:to-indigo-900/20
          transition-colors duration-200
        "
      />

      {/* Layer 3: Decorative SVG - Top Right */}
      <svg
        className="absolute -top-20 -right-20 w-96 h-96 text-primary/5 dark:text-primary/8"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="200" fill="currentColor" />
      </svg>

      {/* Layer 3: Decorative SVG - Bottom Left Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-64 text-secondary/5 dark:text-secondary/6"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      {/* Layer 3: Decorative SVG - Top Left Circles */}
      <svg
        className="absolute -top-10 -left-10 w-72 h-72 text-accent/5 dark:text-accent/6"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="80" fill="currentColor" />
        <circle cx="180" cy="180" r="60" fill="currentColor" />
        <circle cx="60" cy="200" r="40" fill="currentColor" />
      </svg>

      {/* Grid Pattern - Dark Mode Only */}
      <div
        className="
          hidden dark:block
          absolute inset-0
          opacity-[0.02]
          bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]
        "
      />

      {/* Content Container */}
      <div
        className="
          relative z-10
          min-h-screen
          flex flex-col items-center justify-center
          px-4 py-8
        "
      >
        {children}
      </div>
    </div>
  );
}
