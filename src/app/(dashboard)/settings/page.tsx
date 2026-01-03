"use client";

import {
  Cog6ToothIcon,
  UserIcon,
  BellIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Card, Button } from "@/components/ui";

/**
 * Settings Page
 *
 * Application settings with multiple sections.
 */
export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-text-main dark:text-dark-text-main">
          Settings
        </h1>
        <p className="mt-1 text-text-muted dark:text-dark-text-muted">
          Manage your account and preferences
        </p>
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Navigation */}
        <Card padding="sm">
          <nav className="space-y-1">
            {[
              {
                icon: <UserIcon className="w-5 h-5" />,
                label: "Profile",
                active: true,
              },
              {
                icon: <BellIcon className="w-5 h-5" />,
                label: "Notifications",
              },
              {
                icon: <ShieldCheckIcon className="w-5 h-5" />,
                label: "Security",
              },
              {
                icon: <Cog6ToothIcon className="w-5 h-5" />,
                label: "Preferences",
              },
            ].map((item, index) => (
              <button
                key={index}
                className={`
                  w-full flex items-center gap-3
                  px-4 py-3 rounded-lg
                  text-sm font-medium
                  transition-colors duration-150
                  ${
                    item.active
                      ? "bg-primary text-white"
                      : "text-text-body dark:text-dark-text-body hover:bg-bg-soft dark:hover:bg-dark-border"
                  }
                `}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </Card>

        {/* Settings Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Section */}
          <Card
            title="Profile Information"
            subtitle="Update your personal details"
          >
            <form className="space-y-4">
              <div className="flex items-center gap-4">
                <div
                  className="
                    w-20 h-20
                    rounded-full
                    bg-gradient-to-br from-primary to-accent
                    flex items-center justify-center
                    text-white text-2xl font-semibold
                  "
                >
                  JD
                </div>
                <div>
                  <Button variant="outline" size="sm">
                    Change Photo
                  </Button>
                  <p className="mt-1 text-xs text-text-muted dark:text-dark-text-muted">
                    JPG, GIF or PNG. Max size of 2MB.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-main dark:text-dark-text-main mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="
                      w-full px-4 py-2.5
                      bg-bg-soft dark:bg-dark-border
                      border border-border-soft dark:border-dark-border
                      rounded-lg
                      text-sm text-text-body dark:text-dark-text-body
                      focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                    "
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-main dark:text-dark-text-main mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="
                      w-full px-4 py-2.5
                      bg-bg-soft dark:bg-dark-border
                      border border-border-soft dark:border-dark-border
                      rounded-lg
                      text-sm text-text-body dark:text-dark-text-body
                      focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                    "
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-main dark:text-dark-text-main mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="
                    w-full px-4 py-2.5
                    bg-bg-soft dark:bg-dark-border
                    border border-border-soft dark:border-dark-border
                    rounded-lg
                    text-sm text-text-body dark:text-dark-text-body
                    focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                  "
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-main dark:text-dark-text-main mb-1">
                  Bio
                </label>
                <textarea
                  rows={3}
                  defaultValue="Senior Software Engineer with 10+ years of experience."
                  className="
                    w-full px-4 py-2.5
                    bg-bg-soft dark:bg-dark-border
                    border border-border-soft dark:border-dark-border
                    rounded-lg
                    text-sm text-text-body dark:text-dark-text-body
                    resize-none
                    focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                  "
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-border-soft dark:border-dark-border">
                <Button variant="ghost">Cancel</Button>
                <Button variant="primary">Save Changes</Button>
              </div>
            </form>
          </Card>

          {/* Notification Settings */}
          <Card
            title="Notification Preferences"
            subtitle="Choose what notifications you receive"
          >
            <div className="space-y-4">
              {[
                {
                  label: "Email notifications",
                  description: "Receive email updates",
                  enabled: true,
                },
                {
                  label: "Push notifications",
                  description: "Browser push notifications",
                  enabled: true,
                },
                {
                  label: "Weekly digest",
                  description: "Weekly summary emails",
                  enabled: false,
                },
                {
                  label: "Marketing emails",
                  description: "Product updates and offers",
                  enabled: false,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-border-soft dark:border-dark-border last:border-0"
                >
                  <div>
                    <p className="font-medium text-text-main dark:text-dark-text-main">
                      {item.label}
                    </p>
                    <p className="text-sm text-text-muted dark:text-dark-text-muted">
                      {item.description}
                    </p>
                  </div>
                  <button
                    className={`
                      relative w-11 h-6 rounded-full
                      transition-colors duration-200
                      ${
                        item.enabled
                          ? "bg-primary"
                          : "bg-border-soft dark:bg-dark-border"
                      }
                    `}
                  >
                    <span
                      className={`
                        absolute top-1 w-4 h-4 rounded-full bg-white
                        transition-transform duration-200 shadow-sm
                        ${item.enabled ? "left-6" : "left-1"}
                      `}
                    />
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
