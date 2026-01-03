import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ============================================
        // LIGHT MODE COLORS
        // ============================================

        // Backgrounds
        "bg-main": "#F8FAFF",
        "bg-soft": "#EEF2FF",

        // Brand
        primary: {
          DEFAULT: "#3B82F6",
          hover: "#2563EB",
        },
        secondary: "#6366F1",
        accent: "#8B5CF6",

        // Text
        "text-main": "#0F172A",
        "text-body": "#475569",
        "text-muted": "#64748B",

        // Border & Divider
        "border-soft": "#E2E8F0",

        // Status
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",

        // ============================================
        // DARK MODE COLORS
        // ============================================

        // Dark Backgrounds
        "dark-bg-main": "#0B1220",
        "dark-bg-surface": "#111827",
        "dark-bg-card": "#0F172A",

        // Dark Brand (same hue, adjusted luminance)
        "dark-primary": "#3B82F6",
        "dark-primary-hover": "#60A5FA",
        "dark-secondary": "#6366F1",
        "dark-accent": "#8B5CF6",

        // Dark Text
        "dark-text-main": "#F8FAFC",
        "dark-text-body": "#CBD5E1",
        "dark-text-muted": "#94A3B8",

        // Dark Border
        "dark-border": "#1E293B",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
        dropdown:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        modal:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        "fade-in": "fadeIn 0.2s ease-out",
        "slide-in": "slideIn 0.3s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
