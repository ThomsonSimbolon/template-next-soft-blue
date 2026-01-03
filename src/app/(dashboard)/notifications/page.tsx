"use client";

import { useState } from "react";
import {
  BellIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Card, Button, Badge, EmptyState } from "@/components/ui";
import type { Notification } from "@/types";

/**
 * Notifications Page
 *
 * Notification management with filtering.
 */

const notifications: Notification[] = [
  {
    id: "1",
    title: "New user registered",
    message: "Alice Johnson just created an account.",
    type: "info",
    read: false,
    createdAt: "2024-12-28T10:30:00",
  },
  {
    id: "2",
    title: "Payment received",
    message: "You received a payment of $1,500 from Bob Smith.",
    type: "success",
    read: false,
    createdAt: "2024-12-28T09:15:00",
  },
  {
    id: "3",
    title: "Server warning",
    message: "High CPU usage detected on server-01.",
    type: "warning",
    read: false,
    createdAt: "2024-12-27T18:45:00",
  },
  {
    id: "4",
    title: "Failed login attempt",
    message: "Multiple failed login attempts from IP 192.168.1.100.",
    type: "error",
    read: true,
    createdAt: "2024-12-27T14:20:00",
  },
  {
    id: "5",
    title: "New feature available",
    message: "Check out the new analytics dashboard!",
    type: "info",
    read: true,
    createdAt: "2024-12-26T11:00:00",
  },
  {
    id: "6",
    title: "Subscription renewed",
    message: "Your premium subscription has been renewed.",
    type: "success",
    read: true,
    createdAt: "2024-12-25T08:30:00",
  },
];

const typeConfig = {
  info: {
    icon: <InformationCircleIcon className="w-5 h-5" />,
    color: "bg-primary/10 text-primary",
    status: "info" as const,
  },
  success: {
    icon: <CheckCircleIcon className="w-5 h-5" />,
    color: "bg-success/10 text-success",
    status: "success" as const,
  },
  warning: {
    icon: <ExclamationTriangleIcon className="w-5 h-5" />,
    color: "bg-warning/10 text-warning",
    status: "warning" as const,
  },
  error: {
    icon: <XCircleIcon className="w-5 h-5" />,
    color: "bg-error/10 text-error",
    status: "error" as const,
  },
};

export default function NotificationsPage() {
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const filteredNotifications =
    filter === "all" ? notifications : notifications.filter((n) => !n.read);

  const unreadCount = notifications.filter((n) => !n.read).length;

  function formatTime(dateStr: string) {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (hours < 1) return "Just now";
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-main dark:text-dark-text-main">
            Notifications
          </h1>
          <p className="mt-1 text-text-muted dark:text-dark-text-muted">
            Stay updated with your latest alerts
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="ghost">Mark all as read</Button>
          <Button
            variant="outline"
            leftIcon={<TrashIcon className="w-4 h-4" />}
          >
            Clear all
          </Button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`
            px-4 py-2 rounded-lg text-sm font-medium
            transition-colors duration-150
            ${
              filter === "all"
                ? "bg-primary text-white"
                : "bg-bg-soft dark:bg-dark-border text-text-body dark:text-dark-text-body hover:bg-bg-soft/80 dark:hover:bg-dark-border/80"
            }
          `}
        >
          All ({notifications.length})
        </button>
        <button
          onClick={() => setFilter("unread")}
          className={`
            px-4 py-2 rounded-lg text-sm font-medium
            transition-colors duration-150
            ${
              filter === "unread"
                ? "bg-primary text-white"
                : "bg-bg-soft dark:bg-dark-border text-text-body dark:text-dark-text-body hover:bg-bg-soft/80 dark:hover:bg-dark-border/80"
            }
          `}
        >
          Unread ({unreadCount})
        </button>
      </div>

      {/* Notifications List */}
      <Card padding="sm">
        {filteredNotifications.length === 0 ? (
          <EmptyState
            icon={<BellIcon className="w-8 h-8" />}
            title="No notifications"
            description="You're all caught up! Check back later for updates."
          />
        ) : (
          <div className="divide-y divide-border-soft dark:divide-dark-border">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`
                  flex items-start gap-4 p-4
                  ${!notification.read ? "bg-primary/5" : ""}
                `}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    typeConfig[notification.type].color
                  }`}
                >
                  {typeConfig[notification.type].icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-medium text-text-main dark:text-dark-text-main flex items-center gap-2">
                        {notification.title}
                        {!notification.read && (
                          <span className="w-2 h-2 rounded-full bg-primary" />
                        )}
                      </h3>
                      <p className="text-sm text-text-muted dark:text-dark-text-muted mt-1">
                        {notification.message}
                      </p>
                    </div>
                    <Badge
                      status={typeConfig[notification.type].status}
                      size="sm"
                    >
                      {notification.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-text-muted dark:text-dark-text-muted mt-2">
                    {formatTime(notification.createdAt)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
