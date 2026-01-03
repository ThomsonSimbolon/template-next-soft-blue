import { ReactNode } from "react";

// ============================================
// COMMON TYPES
// ============================================

export type Size = "sm" | "md" | "lg";
export type Variant = "primary" | "secondary" | "danger" | "ghost" | "outline";
export type Status = "success" | "warning" | "error" | "info" | "default";

// ============================================
// NAVIGATION TYPES
// ============================================

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: ReactNode;
  badge?: string | number;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// ============================================
// COMPONENT PROPS TYPES
// ============================================

export interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

export interface CardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  headerAction?: ReactNode;
  footer?: ReactNode;
  padding?: Size;
  className?: string;
}

export interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: "increase" | "decrease";
  };
  icon?: ReactNode;
  iconBackground?: string;
  className?: string;
}

export interface BadgeProps {
  children: ReactNode;
  status?: Status;
  size?: Size;
  dot?: boolean;
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: Size;
  closeOnOverlayClick?: boolean;
}

export interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
  align?: "left" | "right";
  className?: string;
}

export interface DropdownItem {
  id: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  danger?: boolean;
  divider?: boolean;
}

export interface TableColumn<T> {
  key: keyof T | string;
  header: string;
  width?: string;
  align?: "left" | "center" | "right";
  render?: (value: unknown, row: T, index: number) => ReactNode;
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  loading?: boolean;
  emptyMessage?: string;
  onRowClick?: (row: T, index: number) => void;
  className?: string;
}

export interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

// ============================================
// LAYOUT TYPES
// ============================================

export interface SidebarItemProps {
  item: NavItem;
  isActive: boolean;
  isCollapsed: boolean;
  onClick?: () => void;
}

export interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  currentPath: string;
}

export interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export interface NavbarProps {
  onMenuClick: () => void;
  onToggleSidebar: () => void;
  isSidebarCollapsed: boolean;
}

// ============================================
// DATA TYPES (EXAMPLE DATA MODELS)
// ============================================

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  status: "active" | "inactive" | "pending";
  createdAt: string;
}

export interface Transaction {
  id: string;
  type: "deposit" | "withdrawal" | "transfer";
  amount: number;
  currency: string;
  status: "completed" | "pending" | "failed";
  date: string;
  description: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  createdAt: string;
}
