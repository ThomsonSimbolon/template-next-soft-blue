"use client";

import {
  DocumentTextIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { Card, Button, Badge } from "@/components/ui";

/**
 * Reports Page
 *
 * Report generation and download.
 */

interface Report {
  id: string;
  name: string;
  type: "financial" | "analytics" | "sales" | "users";
  date: string;
  size: string;
  status: "ready" | "generating" | "scheduled";
}

const reports: Report[] = [
  {
    id: "1",
    name: "Monthly Revenue Report",
    type: "financial",
    date: "2024-12-01",
    size: "2.4 MB",
    status: "ready",
  },
  {
    id: "2",
    name: "User Engagement Analytics",
    type: "analytics",
    date: "2024-12-15",
    size: "1.8 MB",
    status: "ready",
  },
  {
    id: "3",
    name: "Quarterly Sales Summary",
    type: "sales",
    date: "2024-12-20",
    size: "3.2 MB",
    status: "ready",
  },
  {
    id: "4",
    name: "New User Acquisition",
    type: "users",
    date: "2024-12-25",
    size: "1.1 MB",
    status: "generating",
  },
  {
    id: "5",
    name: "Annual Financial Overview",
    type: "financial",
    date: "2025-01-01",
    size: "—",
    status: "scheduled",
  },
];

const typeConfig = {
  financial: {
    icon: <DocumentTextIcon className="w-5 h-5" />,
    color: "bg-success/10 text-success",
  },
  analytics: {
    icon: <ChartBarIcon className="w-5 h-5" />,
    color: "bg-primary/10 text-primary",
  },
  sales: {
    icon: <DocumentTextIcon className="w-5 h-5" />,
    color: "bg-secondary/10 text-secondary",
  },
  users: {
    icon: <DocumentTextIcon className="w-5 h-5" />,
    color: "bg-accent/10 text-accent",
  },
};

const statusConfig = {
  ready: { label: "Ready", status: "success" as const },
  generating: { label: "Generating", status: "warning" as const },
  scheduled: { label: "Scheduled", status: "info" as const },
};

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-main dark:text-dark-text-main">
            Reports
          </h1>
          <p className="mt-1 text-text-muted dark:text-dark-text-muted">
            Generate and download reports
          </p>
        </div>
        <Button variant="primary">Generate Report</Button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "Financial Report",
            icon: <DocumentTextIcon className="w-6 h-6" />,
            color: "bg-success/10 text-success",
          },
          {
            label: "Analytics Report",
            icon: <ChartBarIcon className="w-6 h-6" />,
            color: "bg-primary/10 text-primary",
          },
          {
            label: "Sales Report",
            icon: <DocumentTextIcon className="w-6 h-6" />,
            color: "bg-secondary/10 text-secondary",
          },
          {
            label: "User Report",
            icon: <DocumentTextIcon className="w-6 h-6" />,
            color: "bg-accent/10 text-accent",
          },
        ].map((action, index) => (
          <button
            key={index}
            className="
              flex items-center gap-4 p-4
              bg-white dark:bg-dark-bg-card rounded-xl border border-border-soft dark:border-dark-border
              hover:border-primary hover:shadow-card
              transition-all duration-200
              text-left
            "
          >
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center ${action.color}`}
            >
              {action.icon}
            </div>
            <span className="font-medium text-text-main dark:text-dark-text-main">
              {action.label}
            </span>
          </button>
        ))}
      </div>

      {/* Reports List */}
      <Card title="Generated Reports" subtitle="View and download your reports">
        <div className="space-y-3">
          {reports.map((report) => (
            <div
              key={report.id}
              className="
                flex flex-col sm:flex-row sm:items-center justify-between
                p-4 bg-bg-soft dark:bg-dark-border rounded-lg
                gap-4
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    typeConfig[report.type].color
                  }`}
                >
                  {typeConfig[report.type].icon}
                </div>
                <div>
                  <h3 className="font-medium text-text-main dark:text-dark-text-main">
                    {report.name}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="flex items-center gap-1 text-xs text-text-muted dark:text-dark-text-muted">
                      <CalendarIcon className="w-3 h-3" />
                      {report.date}
                    </span>
                    <span className="text-xs text-text-muted dark:text-dark-text-muted">
                      {report.size}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <Badge status={statusConfig[report.status].status}>
                  {statusConfig[report.status].label}
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  leftIcon={<ArrowDownTrayIcon className="w-4 h-4" />}
                  disabled={report.status !== "ready"}
                >
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
