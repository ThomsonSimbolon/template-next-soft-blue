"use client";

import { useState } from "react";
import {
  CurrencyDollarIcon,
  UsersIcon,
  ShoppingCartIcon,
  ArrowTrendingUpIcon,
  PlusIcon,
  EllipsisHorizontalIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiRipple } from "react-icons/si";
import {
  StatCard,
  Card,
  Table,
  Badge,
  Button,
  Modal,
  Dropdown,
} from "@/components/ui";
import type { TableColumn, User, Transaction, DropdownItem } from "@/types";

/**
 * Dashboard Page
 *
 * Main dashboard with statistics, charts placeholder, and data tables.
 * Demonstrates all UI components in action.
 */

// Sample user data
const users: User[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Admin",
    status: "active",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob@example.com",
    role: "Editor",
    status: "active",
    createdAt: "2024-02-20",
  },
  {
    id: "3",
    name: "Carol White",
    email: "carol@example.com",
    role: "Viewer",
    status: "pending",
    createdAt: "2024-03-10",
  },
  {
    id: "4",
    name: "David Brown",
    email: "david@example.com",
    role: "Editor",
    status: "inactive",
    createdAt: "2024-01-25",
  },
  {
    id: "5",
    name: "Eva Martinez",
    email: "eva@example.com",
    role: "Admin",
    status: "active",
    createdAt: "2024-04-01",
  },
];

// Sample transaction data
const transactions: Transaction[] = [
  {
    id: "TXN001",
    type: "deposit",
    amount: 2500.0,
    currency: "BTC",
    status: "completed",
    date: "2024-12-28",
    description: "Bitcoin deposit",
  },
  {
    id: "TXN002",
    type: "withdrawal",
    amount: 1200.0,
    currency: "ETH",
    status: "pending",
    date: "2024-12-27",
    description: "Ethereum withdrawal",
  },
  {
    id: "TXN003",
    type: "transfer",
    amount: 850.0,
    currency: "XRP",
    status: "completed",
    date: "2024-12-26",
    description: "Ripple transfer",
  },
  {
    id: "TXN004",
    type: "deposit",
    amount: 3200.0,
    currency: "BTC",
    status: "failed",
    date: "2024-12-25",
    description: "Bitcoin deposit",
  },
  {
    id: "TXN005",
    type: "withdrawal",
    amount: 500.0,
    currency: "ETH",
    status: "completed",
    date: "2024-12-24",
    description: "Ethereum withdrawal",
  },
];

// Currency icons mapping (using React Icons for crypto)
const currencyIcons: Record<string, React.ReactNode> = {
  BTC: <FaBitcoin className="w-4 h-4 text-warning" />,
  ETH: <FaEthereum className="w-4 h-4 text-secondary" />,
  XRP: <SiRipple className="w-4 h-4 text-text-muted" />,
};

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // User table columns
  const userColumns: TableColumn<User>[] = [
    {
      key: "name",
      header: "Name",
      render: (_, row) => (
        <div className="flex items-center gap-3">
          <div
            className="
              w-8 h-8
              rounded-full
              bg-gradient-to-br from-primary to-accent
              flex items-center justify-center
              text-white text-xs font-semibold
            "
          >
            {row.name.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-text-main">{row.name}</p>
            <p className="text-xs text-text-muted">{row.email}</p>
          </div>
        </div>
      ),
    },
    {
      key: "role",
      header: "Role",
      render: (value) => (
        <span className="text-sm text-text-body">{String(value)}</span>
      ),
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
          <Badge
            status={statusMap[value as keyof typeof statusMap] || "default"}
            dot
          >
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
    {
      key: "actions",
      header: "",
      align: "right",
      render: (_, row) => {
        const actionItems: DropdownItem[] = [
          {
            id: "view",
            label: "View Details",
            icon: <EyeIcon className="w-4 h-4" />,
            onClick: () => {
              setSelectedUser(row);
              setIsModalOpen(true);
            },
          },
          {
            id: "edit",
            label: "Edit User",
            icon: <PencilIcon className="w-4 h-4" />,
            onClick: () => console.log("Edit", row.id),
          },
          {
            id: "divider",
            label: "",
            divider: true,
          },
          {
            id: "delete",
            label: "Delete User",
            icon: <TrashIcon className="w-4 h-4" />,
            onClick: () => console.log("Delete", row.id),
            danger: true,
          },
        ];

        return (
          <Dropdown
            trigger={
              <button
                className="
                  w-8 h-8
                  flex items-center justify-center
                  rounded-lg
                  text-text-muted
                  hover:bg-bg-soft hover:text-text-body
                  transition-colors duration-150
                "
              >
                <EllipsisHorizontalIcon className="w-5 h-5" />
              </button>
            }
            items={actionItems}
            align="right"
          />
        );
      },
    },
  ];

  // Transaction table columns
  const transactionColumns: TableColumn<Transaction>[] = [
    {
      key: "id",
      header: "ID",
      render: (value) => (
        <span className="font-mono text-sm text-text-muted">
          {String(value)}
        </span>
      ),
    },
    {
      key: "description",
      header: "Description",
      render: (_, row) => (
        <div className="flex items-center gap-2">
          {currencyIcons[row.currency]}
          <span className="text-sm text-text-body">{row.description}</span>
        </div>
      ),
    },
    {
      key: "type",
      header: "Type",
      render: (value) => (
        <Badge
          status={
            value === "deposit"
              ? "success"
              : value === "withdrawal"
              ? "warning"
              : "info"
          }
        >
          {String(value).charAt(0).toUpperCase() + String(value).slice(1)}
        </Badge>
      ),
    },
    {
      key: "amount",
      header: "Amount",
      align: "right",
      render: (value, row) => (
        <span className="font-semibold text-text-main">
          ${Number(value).toLocaleString("en-US", { minimumFractionDigits: 2 })}
          <span className="ml-1 text-xs text-text-muted">{row.currency}</span>
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (value) => {
        const statusMap = {
          completed: "success",
          pending: "warning",
          failed: "error",
        } as const;
        return (
          <Badge
            status={statusMap[value as keyof typeof statusMap] || "default"}
            dot
          >
            {String(value).charAt(0).toUpperCase() + String(value).slice(1)}
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
          <h1 className="text-2xl font-bold text-text-main">Dashboard</h1>
          <p className="mt-1 text-text-muted">
            Welcome back! Here&apos;s what&apos;s happening today.
          </p>
        </div>
        <Button
          variant="primary"
          leftIcon={<PlusIcon className="w-5 h-5" />}
          onClick={() => setIsModalOpen(true)}
        >
          Add New
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <StatCard
          title="Total Revenue"
          value="$45,231.89"
          change={{ value: 12.5, type: "increase" }}
          icon={<CurrencyDollarIcon className="w-6 h-6" />}
          iconBackground="bg-primary/10"
        />
        <StatCard
          title="Active Users"
          value="2,340"
          change={{ value: 8.2, type: "increase" }}
          icon={<UsersIcon className="w-6 h-6" />}
          iconBackground="bg-secondary/10"
        />
        <StatCard
          title="Total Orders"
          value="1,234"
          change={{ value: 3.1, type: "decrease" }}
          icon={<ShoppingCartIcon className="w-6 h-6" />}
          iconBackground="bg-accent/10"
        />
        <StatCard
          title="Growth Rate"
          value="+23.5%"
          change={{ value: 5.4, type: "increase" }}
          icon={<ArrowTrendingUpIcon className="w-6 h-6" />}
          iconBackground="bg-success/10"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <div className="xl:col-span-2">
          <Card
            title="Recent Transactions"
            subtitle="Latest financial activities"
            headerAction={
              <Button variant="ghost" size="sm">
                View All
              </Button>
            }
            padding="sm"
          >
            <Table columns={transactionColumns} data={transactions} />
          </Card>
        </div>

        {/* Quick Stats Sidebar */}
        <div className="space-y-6">
          {/* Portfolio Overview Card */}
          <Card title="Portfolio Overview">
            <div className="space-y-4">
              {/* Bitcoin */}
              <div className="flex items-center justify-between p-3 bg-bg-soft rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                    <FaBitcoin className="w-5 h-5 text-warning" />
                  </div>
                  <div>
                    <p className="font-medium text-text-main">Bitcoin</p>
                    <p className="text-xs text-text-muted">BTC</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-text-main">$42,150.00</p>
                  <p className="text-xs text-success">+2.34%</p>
                </div>
              </div>

              {/* Ethereum */}
              <div className="flex items-center justify-between p-3 bg-bg-soft rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <FaEthereum className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-text-main">Ethereum</p>
                    <p className="text-xs text-text-muted">ETH</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-text-main">$2,280.50</p>
                  <p className="text-xs text-error">-1.15%</p>
                </div>
              </div>

              {/* Ripple */}
              <div className="flex items-center justify-between p-3 bg-bg-soft rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-text-muted/10 rounded-lg flex items-center justify-center">
                    <SiRipple className="w-5 h-5 text-text-muted" />
                  </div>
                  <div>
                    <p className="font-medium text-text-main">Ripple</p>
                    <p className="text-xs text-text-muted">XRP</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-text-main">$0.62</p>
                  <p className="text-xs text-success">+0.85%</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Activity Summary Card */}
          <Card title="Activity Summary">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-muted">Completed Tasks</span>
                <span className="font-semibold text-text-main">24/30</span>
              </div>
              <div className="w-full bg-bg-soft rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: "80%" }}
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-text-muted">Storage Used</span>
                <span className="font-semibold text-text-main">7.2/10 GB</span>
              </div>
              <div className="w-full bg-bg-soft rounded-full h-2">
                <div
                  className="bg-secondary h-2 rounded-full"
                  style={{ width: "72%" }}
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-text-muted">API Calls</span>
                <span className="font-semibold text-text-main">
                  8,432/10,000
                </span>
              </div>
              <div className="w-full bg-bg-soft rounded-full h-2">
                <div
                  className="bg-accent h-2 rounded-full"
                  style={{ width: "84%" }}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Users Table */}
      <Card
        title="Team Members"
        subtitle="Manage your team and their roles"
        headerAction={
          <Button
            variant="primary"
            size="sm"
            leftIcon={<PlusIcon className="w-4 h-4" />}
          >
            Add Member
          </Button>
        }
        padding="sm"
      >
        <Table columns={userColumns} data={users} />
      </Card>

      {/* User Details Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedUser(null);
        }}
        title={selectedUser ? "User Details" : "Add New Item"}
        description={
          selectedUser
            ? "View and manage user information"
            : "Create a new item in your dashboard"
        }
        size="md"
        footer={
          <div className="flex gap-3">
            <Button
              variant="ghost"
              onClick={() => {
                setIsModalOpen(false);
                setSelectedUser(null);
              }}
            >
              Cancel
            </Button>
            <Button variant="primary">
              {selectedUser ? "Save Changes" : "Create"}
            </Button>
          </div>
        }
      >
        {selectedUser ? (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div
                className="
                  w-16 h-16
                  rounded-full
                  bg-gradient-to-br from-primary to-accent
                  flex items-center justify-center
                  text-white text-xl font-semibold
                "
              >
                {selectedUser.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-main">
                  {selectedUser.name}
                </h3>
                <p className="text-text-muted">{selectedUser.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border-soft">
              <div>
                <p className="text-sm text-text-muted">Role</p>
                <p className="font-medium text-text-main">
                  {selectedUser.role}
                </p>
              </div>
              <div>
                <p className="text-sm text-text-muted">Status</p>
                <Badge
                  status={
                    selectedUser.status === "active"
                      ? "success"
                      : selectedUser.status === "pending"
                      ? "warning"
                      : "error"
                  }
                  dot
                >
                  {selectedUser.status.charAt(0).toUpperCase() +
                    selectedUser.status.slice(1)}
                </Badge>
              </div>
              <div>
                <p className="text-sm text-text-muted">Joined</p>
                <p className="font-medium text-text-main">
                  {selectedUser.createdAt}
                </p>
              </div>
              <div>
                <p className="text-sm text-text-muted">User ID</p>
                <p className="font-mono text-sm text-text-main">
                  {selectedUser.id}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-main mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="
                  w-full px-4 py-2
                  bg-bg-soft
                  border border-border-soft
                  rounded-lg
                  text-sm text-text-body
                  placeholder:text-text-muted
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                  transition-colors duration-200
                "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-main mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="
                  w-full px-4 py-2
                  bg-bg-soft
                  border border-border-soft
                  rounded-lg
                  text-sm text-text-body
                  placeholder:text-text-muted
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                  transition-colors duration-200
                "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-main mb-1">
                Role
              </label>
              <select
                className="
                  w-full px-4 py-2
                  bg-bg-soft
                  border border-border-soft
                  rounded-lg
                  text-sm text-text-body
                  focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                  transition-colors duration-200
                "
              >
                <option value="">Select role</option>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="viewer">Viewer</option>
              </select>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
