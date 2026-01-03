"use client";

import { useState } from "react";
import {
  MagnifyingGlassIcon,
  PlusIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";
import { Card, Table, Badge, Button } from "@/components/ui";
import type { TableColumn, User } from "@/types";

/**
 * Customers Page
 *
 * Customer management with search and filtering.
 */

// Sample customer data
const customers: User[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Premium",
    status: "active",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob@example.com",
    role: "Basic",
    status: "active",
    createdAt: "2024-02-20",
  },
  {
    id: "3",
    name: "Carol White",
    email: "carol@example.com",
    role: "Premium",
    status: "pending",
    createdAt: "2024-03-10",
  },
  {
    id: "4",
    name: "David Brown",
    email: "david@example.com",
    role: "Basic",
    status: "inactive",
    createdAt: "2024-01-25",
  },
  {
    id: "5",
    name: "Eva Martinez",
    email: "eva@example.com",
    role: "Enterprise",
    status: "active",
    createdAt: "2024-04-01",
  },
  {
    id: "6",
    name: "Frank Wilson",
    email: "frank@example.com",
    role: "Premium",
    status: "active",
    createdAt: "2024-05-12",
  },
  {
    id: "7",
    name: "Grace Lee",
    email: "grace@example.com",
    role: "Basic",
    status: "pending",
    createdAt: "2024-06-08",
  },
  {
    id: "8",
    name: "Henry Taylor",
    email: "henry@example.com",
    role: "Enterprise",
    status: "active",
    createdAt: "2024-07-22",
  },
];

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns: TableColumn<User>[] = [
    {
      key: "name",
      header: "Customer",
      render: (_, row) => (
        <div className="flex items-center gap-3">
          <div
            className="
              w-10 h-10
              rounded-full
              bg-gradient-to-br from-primary to-accent
              flex items-center justify-center
              text-white text-sm font-semibold
            "
          >
            {row.name.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-text-main">{row.name}</p>
            <p className="text-sm text-text-muted">{row.email}</p>
          </div>
        </div>
      ),
    },
    {
      key: "role",
      header: "Plan",
      render: (value) => {
        const planColors: Record<string, string> = {
          Basic: "default",
          Premium: "info",
          Enterprise: "success",
        };
        return (
          <Badge
            status={planColors[String(value)] as "default" | "info" | "success"}
          >
            {String(value)}
          </Badge>
        );
      },
    },
    {
      key: "status",
      header: "Status",
      render: (value) => {
        const statusMap = {
          active: "success",
          inactive: "error",
          pending: "warning",
        } as const;
        return (
          <Badge status={statusMap[value as keyof typeof statusMap]} dot>
            {String(value).charAt(0).toUpperCase() + String(value).slice(1)}
          </Badge>
        );
      },
    },
    {
      key: "createdAt",
      header: "Joined",
      render: (value) => (
        <span className="text-sm text-text-muted">{String(value)}</span>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-main">Customers</h1>
          <p className="mt-1 text-text-muted">Manage your customer accounts</p>
        </div>
        <Button variant="primary" leftIcon={<PlusIcon className="w-5 h-5" />}>
          Add Customer
        </Button>
      </div>

      {/* Filters */}
      <Card padding="sm">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              placeholder="Search customers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="
                w-full pl-10 pr-4 py-2.5
                bg-bg-soft
                border border-border-soft
                rounded-lg
                text-sm text-text-body
                placeholder:text-text-muted
                focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
              "
            />
          </div>

          {/* Filter Button */}
          <Button
            variant="outline"
            leftIcon={<FunnelIcon className="w-5 h-5" />}
          >
            Filters
          </Button>
        </div>
      </Card>

      {/* Customers Table */}
      <Card padding="sm">
        <Table columns={columns} data={filteredCustomers} />
      </Card>

      {/* Pagination Placeholder */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-text-muted">
          Showing {filteredCustomers.length} of {customers.length} customers
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
