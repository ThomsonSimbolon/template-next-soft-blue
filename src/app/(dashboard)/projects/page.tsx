"use client";

import {
  FolderIcon,
  PlusIcon,
  EllipsisHorizontalIcon,
  CalendarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Card, Badge, Button, Dropdown } from "@/components/ui";
import type { DropdownItem } from "@/types";

/**
 * Projects Page
 *
 * Project management with grid cards.
 */

interface Project {
  id: string;
  name: string;
  description: string;
  status: "active" | "completed" | "on-hold" | "planning";
  progress: number;
  team: number;
  dueDate: string;
  color: string;
}

const projects: Project[] = [
  {
    id: "1",
    name: "Website Redesign",
    description: "Complete overhaul of company website",
    status: "active",
    progress: 75,
    team: 5,
    dueDate: "2024-01-15",
    color: "from-primary to-secondary",
  },
  {
    id: "2",
    name: "Mobile App",
    description: "iOS and Android application development",
    status: "active",
    progress: 45,
    team: 8,
    dueDate: "2024-02-28",
    color: "from-secondary to-accent",
  },
  {
    id: "3",
    name: "API Integration",
    description: "Third-party service integrations",
    status: "completed",
    progress: 100,
    team: 3,
    dueDate: "2024-01-01",
    color: "from-success to-primary",
  },
  {
    id: "4",
    name: "Dashboard Analytics",
    description: "New analytics dashboard features",
    status: "planning",
    progress: 10,
    team: 4,
    dueDate: "2024-03-15",
    color: "from-accent to-error",
  },
  {
    id: "5",
    name: "Security Audit",
    description: "Full security assessment",
    status: "on-hold",
    progress: 30,
    team: 2,
    dueDate: "2024-02-01",
    color: "from-warning to-error",
  },
  {
    id: "6",
    name: "Performance Optimization",
    description: "Speed improvements across all services",
    status: "active",
    progress: 60,
    team: 3,
    dueDate: "2024-01-30",
    color: "from-primary to-accent",
  },
];

const statusConfig = {
  active: { label: "Active", status: "success" as const },
  completed: { label: "Completed", status: "info" as const },
  "on-hold": { label: "On Hold", status: "warning" as const },
  planning: { label: "Planning", status: "default" as const },
};

export default function ProjectsPage() {
  const actionItems: DropdownItem[] = [
    { id: "edit", label: "Edit Project" },
    { id: "archive", label: "Archive" },
    { id: "divider", label: "", divider: true },
    { id: "delete", label: "Delete", danger: true },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-main">Projects</h1>
          <p className="mt-1 text-text-muted">Manage and track your projects</p>
        </div>
        <Button variant="primary" leftIcon={<PlusIcon className="w-5 h-5" />}>
          New Project
        </Button>
      </div>

      {/* Project Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "Total Projects",
            value: projects.length,
            color: "text-primary",
          },
          {
            label: "Active",
            value: projects.filter((p) => p.status === "active").length,
            color: "text-success",
          },
          {
            label: "On Hold",
            value: projects.filter((p) => p.status === "on-hold").length,
            color: "text-warning",
          },
          {
            label: "Completed",
            value: projects.filter((p) => p.status === "completed").length,
            color: "text-secondary",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-border-soft p-4 text-center"
          >
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-sm text-text-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} padding="sm">
            <div className="p-4">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                >
                  <FolderIcon className="w-6 h-6 text-white" />
                </div>
                <Dropdown
                  trigger={
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-bg-soft transition-colors">
                      <EllipsisHorizontalIcon className="w-5 h-5 text-text-muted" />
                    </button>
                  }
                  items={actionItems}
                  align="right"
                />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-text-main mb-1">
                {project.name}
              </h3>
              <p className="text-sm text-text-muted mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Status Badge */}
              <Badge status={statusConfig[project.status].status}>
                {statusConfig[project.status].label}
              </Badge>

              {/* Progress */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-text-muted">Progress</span>
                  <span className="font-medium text-text-main">
                    {project.progress}%
                  </span>
                </div>
                <div className="w-full h-2 bg-bg-soft rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${project.color}`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border-soft">
                <div className="flex items-center gap-1 text-sm text-text-muted">
                  <UserGroupIcon className="w-4 h-4" />
                  <span>{project.team}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-text-muted">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{project.dueDate}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
