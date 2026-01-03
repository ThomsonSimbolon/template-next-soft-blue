"use client";

import {
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";
import { Card, StatCard } from "@/components/ui";

/**
 * Analytics Page
 *
 * Displays analytics data with charts and statistics.
 */
export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-text-main dark:text-dark-text-main">
          Analytics
        </h1>
        <p className="mt-1 text-text-muted dark:text-dark-text-muted">
          Track your performance and insights
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <StatCard
          title="Page Views"
          value="124,892"
          change={{ value: 15.3, type: "increase" }}
          icon={<ChartBarIcon className="w-6 h-6" />}
          iconBackground="bg-primary/10"
        />
        <StatCard
          title="Unique Visitors"
          value="48,234"
          change={{ value: 8.7, type: "increase" }}
          icon={<ArrowTrendingUpIcon className="w-6 h-6" />}
          iconBackground="bg-success/10"
        />
        <StatCard
          title="Bounce Rate"
          value="32.5%"
          change={{ value: 2.1, type: "decrease" }}
          icon={<ArrowTrendingDownIcon className="w-6 h-6" />}
          iconBackground="bg-error/10"
        />
        <StatCard
          title="Avg. Session"
          value="4m 23s"
          change={{ value: 12.5, type: "increase" }}
          icon={<ChartBarIcon className="w-6 h-6" />}
          iconBackground="bg-accent/10"
        />
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Traffic Overview" subtitle="Daily visitors over time">
          <div className="h-64 bg-bg-soft dark:bg-dark-border rounded-lg flex items-center justify-center">
            <div className="text-center">
              <ChartBarIcon className="w-12 h-12 text-text-muted dark:text-dark-text-muted mx-auto mb-2" />
              <p className="text-text-muted dark:text-dark-text-muted">
                Chart placeholder
              </p>
              <p className="text-sm text-text-muted dark:text-dark-text-muted">
                Integrate your preferred chart library
              </p>
            </div>
          </div>
        </Card>

        <Card
          title="User Demographics"
          subtitle="Visitor distribution by region"
        >
          <div className="h-64 bg-bg-soft dark:bg-dark-border rounded-lg flex items-center justify-center">
            <div className="text-center">
              <ChartBarIcon className="w-12 h-12 text-text-muted dark:text-dark-text-muted mx-auto mb-2" />
              <p className="text-text-muted dark:text-dark-text-muted">
                Chart placeholder
              </p>
              <p className="text-sm text-text-muted dark:text-dark-text-muted">
                Integrate your preferred chart library
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Metrics Table */}
      <Card title="Top Pages" subtitle="Most visited pages this month">
        <div className="space-y-4">
          {[
            { page: "/dashboard", views: "12,450", change: "+15%" },
            { page: "/analytics", views: "8,230", change: "+8%" },
            { page: "/customers", views: "6,120", change: "+12%" },
            { page: "/orders", views: "5,890", change: "-3%" },
            { page: "/settings", views: "3,240", change: "+5%" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-bg-soft dark:bg-dark-border rounded-lg"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </span>
                <span className="font-medium text-text-main dark:text-dark-text-main">
                  {item.page}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-text-body dark:text-dark-text-body">
                  {item.views} views
                </span>
                <span
                  className={`text-sm font-medium ${
                    item.change.startsWith("+") ? "text-success" : "text-error"
                  }`}
                >
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
