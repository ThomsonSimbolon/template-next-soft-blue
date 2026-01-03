"use client";

import {
  CreditCardIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiRipple, SiLitecoin } from "react-icons/si";
import { Card, Table, Badge, Button, StatCard } from "@/components/ui";
import type { TableColumn, Transaction } from "@/types";

/**
 * Transactions Page
 *
 * Transaction history with filtering.
 */

const transactions: Transaction[] = [
  {
    id: "TXN-001",
    type: "deposit",
    amount: 5000,
    currency: "BTC",
    status: "completed",
    date: "2024-12-28",
    description: "Bitcoin deposit",
  },
  {
    id: "TXN-002",
    type: "withdrawal",
    amount: 1500,
    currency: "ETH",
    status: "pending",
    date: "2024-12-27",
    description: "Ethereum withdrawal",
  },
  {
    id: "TXN-003",
    type: "transfer",
    amount: 2500,
    currency: "XRP",
    status: "completed",
    date: "2024-12-27",
    description: "Internal transfer",
  },
  {
    id: "TXN-004",
    type: "deposit",
    amount: 800,
    currency: "LTC",
    status: "failed",
    date: "2024-12-26",
    description: "Litecoin deposit",
  },
  {
    id: "TXN-005",
    type: "withdrawal",
    amount: 3200,
    currency: "BTC",
    status: "completed",
    date: "2024-12-25",
    description: "Bitcoin withdrawal",
  },
  {
    id: "TXN-006",
    type: "deposit",
    amount: 1200,
    currency: "ETH",
    status: "completed",
    date: "2024-12-24",
    description: "Ethereum deposit",
  },
  {
    id: "TXN-007",
    type: "transfer",
    amount: 500,
    currency: "XRP",
    status: "pending",
    date: "2024-12-23",
    description: "External transfer",
  },
  {
    id: "TXN-008",
    type: "withdrawal",
    amount: 950,
    currency: "LTC",
    status: "completed",
    date: "2024-12-22",
    description: "Litecoin withdrawal",
  },
];

const currencyIcons: Record<string, React.ReactNode> = {
  BTC: <FaBitcoin className="w-5 h-5 text-warning" />,
  ETH: <FaEthereum className="w-5 h-5 text-secondary" />,
  XRP: <SiRipple className="w-5 h-5 text-text-muted" />,
  LTC: <SiLitecoin className="w-5 h-5 text-accent" />,
};

const typeIcons: Record<string, React.ReactNode> = {
  deposit: <ArrowDownIcon className="w-4 h-4 text-success" />,
  withdrawal: <ArrowUpIcon className="w-4 h-4 text-error" />,
  transfer: <ArrowsRightLeftIcon className="w-4 h-4 text-primary" />,
};

export default function TransactionsPage() {
  const columns: TableColumn<Transaction>[] = [
    {
      key: "id",
      header: "Transaction ID",
      render: (value) => (
        <span className="font-mono text-sm text-text-muted">
          {String(value)}
        </span>
      ),
    },
    {
      key: "currency",
      header: "Asset",
      render: (value, row) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-bg-soft rounded-lg flex items-center justify-center">
            {currencyIcons[String(value)]}
          </div>
          <div>
            <p className="font-medium text-text-main">{String(value)}</p>
            <p className="text-xs text-text-muted">{row.description}</p>
          </div>
        </div>
      ),
    },
    {
      key: "type",
      header: "Type",
      render: (value) => (
        <div className="flex items-center gap-2">
          {typeIcons[String(value)]}
          <span className="text-sm text-text-body capitalize">
            {String(value)}
          </span>
        </div>
      ),
    },
    {
      key: "amount",
      header: "Amount",
      align: "right",
      render: (value, row) => (
        <span
          className={`font-semibold ${
            row.type === "deposit"
              ? "text-success"
              : row.type === "withdrawal"
              ? "text-error"
              : "text-text-main"
          }`}
        >
          {row.type === "deposit" ? "+" : row.type === "withdrawal" ? "-" : ""}$
          {Number(value).toLocaleString()}
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
          <Badge status={statusMap[value as keyof typeof statusMap]} dot>
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
          <h1 className="text-2xl font-bold text-text-main">Transactions</h1>
          <p className="mt-1 text-text-muted">
            View and manage all transactions
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Export</Button>
          <Button variant="primary">New Transaction</Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Volume"
          value="$125,430"
          change={{ value: 15.2, type: "increase" }}
          icon={<CreditCardIcon className="w-6 h-6" />}
          iconBackground="bg-primary/10"
        />
        <StatCard
          title="Deposits"
          value="$78,200"
          change={{ value: 8.5, type: "increase" }}
          icon={<ArrowDownIcon className="w-6 h-6" />}
          iconBackground="bg-success/10"
        />
        <StatCard
          title="Withdrawals"
          value="$35,600"
          change={{ value: 3.2, type: "decrease" }}
          icon={<ArrowUpIcon className="w-6 h-6" />}
          iconBackground="bg-error/10"
        />
        <StatCard
          title="Transfers"
          value="$11,630"
          change={{ value: 12.8, type: "increase" }}
          icon={<ArrowsRightLeftIcon className="w-6 h-6" />}
          iconBackground="bg-accent/10"
        />
      </div>

      {/* Transactions Table */}
      <Card title="Transaction History" padding="sm">
        <Table columns={columns} data={transactions} />
      </Card>
    </div>
  );
}
