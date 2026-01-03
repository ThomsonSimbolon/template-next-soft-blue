# Admin Dashboard Template

<div align="center">

![Admin Dashboard Preview](public/screenshots/dashboard-dark.png)

**A professional, enterprise-ready admin dashboard template built with Next.js 14, TypeScript, and Tailwind CSS.**

[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[Live Demo](#) • [Documentation](#-documentation) • [Getting Started](#-getting-started)

</div>

---

## ✨ Features

### Core Features

- 🎨 **Modern Design System** - Consistent Soft Blue color palette with custom design tokens
- 🌙 **Dark Mode** - First-class dark mode support with smooth transitions
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🧩 **20+ Reusable Components** - Button, Card, Table, Modal, Badge, Dropdown, and more
- 🎯 **TypeScript** - Full type safety across the entire codebase
- 🚀 **Next.js 14 App Router** - Latest routing patterns with Server & Client Components

### Dashboard Pages

- 📊 **Dashboard** - Main overview with stats, transactions, portfolio
- 📈 **Analytics** - Charts placeholders and metrics
- 👥 **Customers** - Customer management with search and filters
- 🛒 **Orders** - Order tracking with status badges
- 💳 **Transactions** - Crypto transaction history (BTC, ETH, XRP, LTC)
- 📁 **Projects** - Project management with progress tracking
- 📄 **Reports** - Report generation and downloads
- 🔔 **Notifications** - Notification center with filters
- ⚙️ **Settings** - User profile and preferences

### Authentication Pages

- 🔐 **Login** - Clean login page with 3-layer background effect
- 📝 **Register** - Registration with password requirements
- 🔑 **Forgot Password** - Password recovery flow

### UI/UX Features

- 💅 **Tailwind CSS** - Utility-first styling with custom design tokens
- 📦 **Icon System** - Heroicons for UI, React Icons for brands/crypto
- 🎭 **Smooth Animations** - Subtle transitions and hover effects
- 📜 **Custom Scrollbar** - Themed scrollbar that shows on hover
- ♿ **Accessibility** - Focus rings and keyboard navigation support

---

## 🎨 Design System

### Light Mode Color Palette

| Token           | Value     | Usage                |
| --------------- | --------- | -------------------- |
| `bg-main`       | `#F8FAFF` | Main background      |
| `bg-soft`       | `#EEF2FF` | Secondary background |
| `primary`       | `#3B82F6` | Primary actions      |
| `primary-hover` | `#2563EB` | Primary hover state  |
| `secondary`     | `#6366F1` | Secondary actions    |
| `accent`        | `#8B5CF6` | Accent elements      |
| `text-main`     | `#0F172A` | Primary text         |
| `text-body`     | `#475569` | Body text            |
| `text-muted`    | `#64748B` | Muted/secondary text |
| `border-soft`   | `#E2E8F0` | Borders and dividers |
| `success`       | `#22C55E` | Success states       |
| `warning`       | `#F59E0B` | Warning states       |
| `error`         | `#EF4444` | Error states         |

### Dark Mode Color Palette

| Token             | Value     | Usage                |
| ----------------- | --------- | -------------------- |
| `dark-bg-main`    | `#0B1220` | Main background      |
| `dark-bg-surface` | `#111827` | Surface background   |
| `dark-bg-card`    | `#0F172A` | Card background      |
| `dark-text-main`  | `#F8FAFC` | Primary text         |
| `dark-text-body`  | `#CBD5E1` | Body text            |
| `dark-text-muted` | `#94A3B8` | Muted/secondary text |
| `dark-border`     | `#1E293B` | Borders and dividers |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/                    # Auth route group
│   │   ├── login/page.tsx         # Login page
│   │   ├── register/page.tsx      # Register page
│   │   ├── forgot-password/page.tsx # Forgot password page
│   │   └── layout.tsx             # Auth layout (centered)
│   ├── (dashboard)/               # Dashboard route group
│   │   ├── analytics/page.tsx     # Analytics page
│   │   ├── customers/page.tsx     # Customers page
│   │   ├── notifications/page.tsx # Notifications page
│   │   ├── orders/page.tsx        # Orders page
│   │   ├── projects/page.tsx      # Projects page
│   │   ├── reports/page.tsx       # Reports page
│   │   ├── settings/page.tsx      # Settings page
│   │   ├── transactions/page.tsx  # Transactions page
│   │   ├── layout.tsx             # Dashboard layout with sidebar
│   │   └── page.tsx               # Main dashboard page
│   ├── globals.css                # Global styles & scrollbar
│   └── layout.tsx                 # Root layout with theme script
├── components/
│   ├── auth/
│   │   ├── AuthCard.tsx           # Auth form container
│   │   ├── AuthInput.tsx          # Styled form inputs
│   │   └── SocialButton.tsx       # Social login buttons
│   ├── layout/
│   │   ├── AppLayout.tsx          # Main app wrapper
│   │   └── Navbar.tsx             # Top navigation bar
│   ├── navigation/
│   │   ├── Sidebar.tsx            # Desktop sidebar
│   │   ├── SidebarItem.tsx        # Sidebar navigation item
│   │   └── MobileSidebar.tsx      # Mobile drawer
│   ├── theme/
│   │   └── ThemeToggle.tsx        # Dark/light mode toggle
│   └── ui/
│       ├── Badge.tsx              # Status badges
│       ├── Button.tsx             # Action buttons
│       ├── Card.tsx               # Content cards
│       ├── Dropdown.tsx           # Dropdown menus
│       ├── EmptyState.tsx         # Empty state display
│       ├── Modal.tsx              # Modal dialogs
│       ├── StatCard.tsx           # Statistics cards
│       ├── Table.tsx              # Data tables
│       └── index.ts               # Barrel exports
├── hooks/
│   └── useTheme.ts                # Theme hook (dark mode)
├── lib/
│   └── utils.ts                   # Utility functions (cn)
└── types/
    └── index.ts                   # TypeScript definitions
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**

```bash
git clone <repository-url>
cd template-soft-blue
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

---

## 📦 Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

---

## 🧩 Components

### Button

```tsx
import { Button } from "@/components/ui";

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// With icon
<Button variant="primary" leftIcon={<PlusIcon className="w-5 h-5" />}>
  Add Item
</Button>

// Loading state
<Button variant="primary" loading>
  Processing...
</Button>

// Full width
<Button variant="primary" fullWidth>
  Submit
</Button>
```

### Card

```tsx
import { Card } from "@/components/ui";

// Basic card
<Card>
  Content goes here
</Card>

// With header
<Card
  title="Card Title"
  subtitle="Optional subtitle"
  headerAction={<Button size="sm">Action</Button>}
>
  Card content
</Card>

// Custom padding
<Card padding="sm">Compact card</Card>
<Card padding="lg">Spacious card</Card>
```

### StatCard

```tsx
import { StatCard } from "@/components/ui";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

<StatCard
  title="Total Revenue"
  value="$45,231.89"
  change={{ value: 12.5, type: "increase" }}
  icon={<CurrencyDollarIcon className="w-6 h-6" />}
  iconBackground="bg-primary/10"
/>;
```

### Table

```tsx
import { Table, Badge } from "@/components/ui";

const columns = [
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
  {
    key: "status",
    header: "Status",
    render: (value) => (
      <Badge status={value === "active" ? "success" : "warning"}>{value}</Badge>
    ),
  },
  {
    key: "amount",
    header: "Amount",
    align: "right",
    render: (value) => `$${value.toFixed(2)}`,
  },
];

<Table columns={columns} data={users} />;
```

### Badge

```tsx
import { Badge } from "@/components/ui";

// Status variants
<Badge status="success">Completed</Badge>
<Badge status="warning">Pending</Badge>
<Badge status="error">Failed</Badge>
<Badge status="info">Processing</Badge>
<Badge status="default">Draft</Badge>

// With dot indicator
<Badge status="success" dot>Active</Badge>
```

### Modal

```tsx
import { Modal, Button } from "@/components/ui";

const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  description="Optional description text"
  size="md" // sm, md, lg, xl
  footer={
    <div className="flex gap-3">
      <Button variant="ghost" onClick={() => setIsOpen(false)}>
        Cancel
      </Button>
      <Button variant="primary">Confirm</Button>
    </div>
  }
>
  Modal content goes here
</Modal>;
```

### Dropdown

```tsx
import { Dropdown } from "@/components/ui";
import {
  EllipsisHorizontalIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const items = [
  { id: "edit", label: "Edit", icon: <PencilIcon className="w-4 h-4" /> },
  { id: "divider", label: "", divider: true },
  {
    id: "delete",
    label: "Delete",
    icon: <TrashIcon className="w-4 h-4" />,
    danger: true,
  },
];

<Dropdown
  trigger={
    <button className="p-2 hover:bg-bg-soft rounded-lg">
      <EllipsisHorizontalIcon className="w-5 h-5" />
    </button>
  }
  items={items}
  align="right"
  onSelect={(item) => console.log(item.id)}
/>;
```

### ThemeToggle

```tsx
import { ThemeToggle } from "@/components/theme/ThemeToggle";

// In your navbar
<ThemeToggle />;
```

### Auth Components

```tsx
import { AuthCard, AuthInput, SocialButton } from "@/components/auth";

<AuthCard title="Welcome back" subtitle="Sign in to your account">
  <form>
    <AuthInput
      label="Email"
      type="email"
      placeholder="you@example.com"
      required
    />
    <AuthInput
      label="Password"
      type="password"
      placeholder="••••••••"
      required
    />
    <Button variant="primary" fullWidth>
      Sign In
    </Button>
  </form>

  <div className="mt-6">
    <SocialButton provider="google">Continue with Google</SocialButton>
    <SocialButton provider="github">Continue with GitHub</SocialButton>
  </div>
</AuthCard>;
```

---

## 🎯 Icon Usage

### UI Icons (Heroicons)

```tsx
import {
  HomeIcon,
  ChartBarIcon,
  UsersIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

// Outline style for navigation
<HomeIcon className="w-5 h-5" />;

// Solid style for filled states
import { HomeIcon } from "@heroicons/react/24/solid";
```

### Brand & Crypto Icons (React Icons)

```tsx
import { FaBitcoin, FaEthereum, FaGoogle, FaGithub } from "react-icons/fa";
import { SiRipple, SiLitecoin } from "react-icons/si";

// Crypto icons with colors
<FaBitcoin className="w-5 h-5 text-warning" />
<FaEthereum className="w-5 h-5 text-secondary" />
```

---

## 🌙 Dark Mode

The template includes first-class dark mode support with:

- **Automatic detection** - Respects system preference
- **Manual toggle** - User can override via ThemeToggle
- **Persistence** - Choice saved to localStorage
- **No flash** - Inline script prevents white flash on load

### Using Dark Mode Classes

```tsx
// Text colors
className = "text-text-main dark:text-dark-text-main";
className = "text-text-body dark:text-dark-text-body";
className = "text-text-muted dark:text-dark-text-muted";

// Backgrounds
className = "bg-white dark:bg-dark-bg-card";
className = "bg-bg-soft dark:bg-dark-border";
className = "bg-bg-main dark:bg-dark-bg-main";

// Borders
className = "border-border-soft dark:border-dark-border";
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Size       | Usage         |
| ---------- | ---------- | ------------- |
| Default    | `< 640px`  | Mobile        |
| `sm`       | `≥ 640px`  | Large mobile  |
| `md`       | `≥ 768px`  | Tablet        |
| `lg`       | `≥ 1024px` | Desktop       |
| `xl`       | `≥ 1280px` | Large desktop |
| `2xl`      | `≥ 1536px` | Extra large   |

---

## 🛠 Customization

### Extending Colors

Edit `tailwind.config.ts` to customize colors:

```ts
// tailwind.config.ts
colors: {
  primary: "#YOUR_COLOR",
  secondary: "#YOUR_COLOR",
  // ... other colors
}
```

### Adding New Pages

1. Create a new file in `src/app/(dashboard)/your-page/page.tsx`
2. Add navigation item in `Sidebar.tsx`
3. The page will automatically use the dashboard layout

---

## 📄 License

MIT License - feel free to use this template for your projects.

---

<div align="center">

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

[⬆ Back to Top](#admin-dashboard-template)

</div>
