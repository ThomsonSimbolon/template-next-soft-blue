import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Admin Dashboard | Modern Admin Template",
  description:
    "A professional, enterprise-ready admin dashboard template built with Next.js, TypeScript, and TailwindCSS",
  keywords: ["admin", "dashboard", "nextjs", "typescript", "tailwindcss"],
  authors: [{ name: "Admin Dashboard Team" }],
};

/**
 * Theme initialization script
 *
 * This inline script runs before React hydration to prevent
 * flash of wrong theme. It reads from localStorage and applies
 * the dark class to <html> if needed.
 */
const themeInitScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased bg-bg-main dark:bg-dark-bg-main text-text-body dark:text-dark-text-body transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
