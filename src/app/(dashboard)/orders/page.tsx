"use client";

import {
  ShoppingCartIcon,
  TruckIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { Card, Table, Badge, Button, StatCard } from "@/components/ui";
import type { TableColumn } from "@/types";

/**
 * Orders Page
 *
 * Order management with statistics and table.
 */

interface Order {
  id: string;
  customer: string;
  email: string;
  items: number;
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  date: string;
}

const orders: Order[] = [
  {
    id: "ORD-001",
    customer: "Alice Johnson",
    email: "alice@example.com",
    items: 3,
    total: 299.99,
    status: "delivered",
    date: "2024-12-28",
  },
  {
    id: "ORD-002",
    customer: "Bob Smith",
    email: "bob@example.com",
    items: 1,
    total: 89.99,
    status: "shipped",
    date: "2024-12-27",
  },
  {
    id: "ORD-003",
    customer: "Carol White",
    email: "carol@example.com",
    items: 5,
    total: 549.99,
    status: "processing",
    date: "2024-12-27",
  },
  {
    id: "ORD-004",
    customer: "David Brown",
    email: "david@example.com",
    items: 2,
    total: 199.99,
    status: "pending",
    date: "2024-12-26",
  },
  {
    id: "ORD-005",
    customer: "Eva Martinez",
    email: "eva@example.com",
    items: 4,
    total: 399.99,
    status: "cancelled",
    date: "2024-12-25",
  },
  {
    id: "ORD-006",
    customer: "Frank Wilson",
    email: "frank@example.com",
    items: 1,
    total: 79.99,
    status: "delivered",
    date: "2024-12-24",
  },
];

const statusConfig = {
  pending: {
    label: "Pending",
    status: "warning" as const,
    icon: <ClockIcon className="w-4 h-4" />,
  },
  processing: {
    label: "Processing",
    status: "info" as const,
    icon: <ShoppingCartIcon className="w-4 h-4" />,
  },
  shipped: {
    label: "Shipped",
    status: "info" as const,
    icon: <TruckIcon className="w-4 h-4" />,
  },
  delivered: {
    label: "Delivered",
    status: "success" as const,
    icon: <CheckCircleIcon className="w-4 h-4" />,
  },
  cancelled: {
    label: "Cancelled",
    status: "error" as const,
    icon: <XCircleIcon className="w-4 h-4" />,
  },
};

export default function OrdersPage() {
  const columns: TableColumn<Order>[] = [
    {
      key: "id",
      header: "Order ID",
      render: (value) => (
        <span className="font-mono text-sm font-medium text-primary">
          {String(value)}
        </span>
      ),
    },
    {
      key: "customer",
      header: "Customer",
      render: (_, row) => (
        <div>
          <p className="font-medium text-text-main">{row.customer}</p>
          <p className="text-sm text-text-muted">{row.email}</p>
        </div>
      ),
    },
    {
      key: "items",
      header: "Items",
      align: "center",
      render: (value) => (
        <span className="text-text-body">{String(value)}</span>
      ),
    },
    {
      key: "total",
      header: "Total",
      align: "right",
      render: (value) => (
        <span className="font-semibold text-text-main">
          ${Number(value).toFixed(2)}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (value) => {
        const config = statusConfig[value as keyof typeof statusConfig];
        return (
          <Badge status={config.status} dot>
            {config.label}
          </Badge>
        );
      },
    },
    {
      key: "date",
      header: "Date",
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
          <h1 className="text-2xl font-bold text-text-main">Orders</h1>
          <p className="mt-1 text-text-muted">
            Manage and track customer orders
          </p>
        </div>
        <Button variant="primary">Export Orders</Button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Orders"
          value="1,234"
          change={{ value: 12.5, type: "increase" }}
          icon={<ShoppingCartIcon className="w-6 h-6" />}
          iconBackground="bg-primary/10"
        />
        <StatCard
          title="Pending"
          value="45"
          icon={<ClockIcon className="w-6 h-6" />}
          iconBackground="bg-warning/10"
        />
        <StatCard
          title="Shipped"
          value="128"
          icon={<TruckIcon className="w-6 h-6" />}
          iconBackground="bg-secondary/10"
        />
        <StatCard
          title="Delivered"
          value="892"
          icon={<CheckCircleIcon className="w-6 h-6" />}
          iconBackground="bg-success/10"
        />
      </div>

      {/* Orders Table */}
      <Card title="Recent Orders" padding="sm">
        <Table columns={columns} data={orders} />
      </Card>
    </div>
  );
}
