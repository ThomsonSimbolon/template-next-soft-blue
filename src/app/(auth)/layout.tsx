import { AuthLayout } from "@/components/auth";

/**
 * Auth Route Group Layout
 *
 * This layout wraps all authentication pages (login, register, forgot-password).
 * It does NOT inherit the dashboard layout - auth pages have their own dedicated layout.
 */

export default function AuthRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
}
