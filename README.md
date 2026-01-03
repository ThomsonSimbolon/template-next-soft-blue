# Admin Dashboard Template

A professional, enterprise-ready admin dashboard template built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

- 🎨 **Modern Design System** - Consistent color palette and typography
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🧩 **Reusable Components** - Button, Card, Table, Modal, Badge, Dropdown, and more
- 🎯 **TypeScript** - Full type safety across the codebase
- 🚀 **Next.js App Router** - Latest routing patterns and server components
- 💅 **Tailwind CSS** - Utility-first styling with custom design tokens
- 📦 **Icon System** - Heroicons for UI, React Icons for brands/crypto

## 🎨 Design System

### Color Palette

| Token           | Value   | Usage                |
| --------------- | ------- | -------------------- |
| `bg-main`       | #F8FAFF | Main background      |
| `bg-soft`       | #EEF2FF | Secondary background |
| `primary`       | #3B82F6 | Primary actions      |
| `primary-hover` | #2563EB | Primary hover state  |
| `secondary`     | #6366F1 | Secondary actions    |
| `accent`        | #8B5CF6 | Accent elements      |
| `text-main`     | #0F172A | Primary text         |
| `text-body`     | #475569 | Body text            |
| `text-muted`    | #64748B | Muted text           |
| `border-soft`   | #E2E8F0 | Borders              |
| `success`       | #22C55E | Success states       |
| `warning`       | #F59E0B | Warning states       |
| `error`         | #EF4444 | Error states         |

## 📁 Project Structure

```
src/
├── app/
│   ├── (dashboard)/
│   │   ├── layout.tsx      # Dashboard layout with sidebar
│   │   └── page.tsx        # Main dashboard page
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout
├── components/
│   ├── layout/
│   │   ├── AppLayout.tsx   # Main app wrapper
│   │   └── Navbar.tsx      # Top navigation bar
│   ├── navigation/
│   │   ├── Sidebar.tsx     # Desktop sidebar
│   │   ├── SidebarItem.tsx # Sidebar navigation item
│   │   └── MobileSidebar.tsx # Mobile drawer
│   └── ui/
│       ├── Badge.tsx       # Status badges
│       ├── Button.tsx      # Action buttons
│       ├── Card.tsx        # Content cards
│       ├── Dropdown.tsx    # Dropdown menus
│       ├── EmptyState.tsx  # Empty state display
│       ├── Modal.tsx       # Modal dialogs
│       ├── StatCard.tsx    # Statistics cards
│       └── Table.tsx       # Data tables
├── lib/
│   └── utils.ts            # Utility functions
└── types/
    └── index.ts            # TypeScript definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## 🧩 Components

### Button

```tsx
import { Button } from "@/components/ui";

// Primary button
<Button variant="primary">Click me</Button>

// With icon
<Button variant="primary" leftIcon={<PlusIcon />}>
  Add Item
</Button>

// Loading state
<Button variant="primary" loading>
  Processing...
</Button>
```

### Card

```tsx
import { Card } from "@/components/ui";

<Card
  title="Card Title"
  subtitle="Optional subtitle"
  headerAction={<Button size="sm">Action</Button>}
>
  Card content goes here
</Card>;
```

### Table

```tsx
import { Table } from "@/components/ui";

const columns = [
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
  {
    key: "status",
    header: "Status",
    render: (value) => <Badge status={value}>{value}</Badge>,
  },
];

<Table columns={columns} data={users} />;
```

### Modal

```tsx
import { Modal, Button } from "@/components/ui";

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  footer={<Button variant="primary">Confirm</Button>}
>
  Modal content
</Modal>;
```

## 🎯 Icon Usage

### UI Icons (Heroicons)

```tsx
import { HomeIcon, PlusIcon } from "@heroicons/react/24/outline";

// In sidebar, buttons, etc.
<HomeIcon className="w-5 h-5" />;
```

### Brand Icons (React Icons)

```tsx
import { FaBitcoin, FaEthereum } from "react-icons/fa";

// For crypto, brands, third-party services
<FaBitcoin className="w-5 h-5 text-warning" />;
```

## 📱 Responsive Breakpoints

| Breakpoint | Size     | Usage         |
| ---------- | -------- | ------------- |
| Default    | < 640px  | Mobile        |
| `sm`       | ≥ 640px  | Large mobile  |
| `md`       | ≥ 768px  | Tablet        |
| `lg`       | ≥ 1024px | Desktop       |
| `xl`       | ≥ 1280px | Large desktop |
| `2xl`      | ≥ 1536px | Extra large   |

## 📄 License

MIT License - feel free to use this template for your projects.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
