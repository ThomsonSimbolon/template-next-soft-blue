import { AppLayout } from "@/components/layout";

/**
 * Dashboard Layout
 *
 * Layout wrapper for all dashboard pages.
 * Includes sidebar and navbar navigation.
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
}
