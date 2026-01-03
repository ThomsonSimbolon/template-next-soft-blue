import type { TableProps, TableColumn } from "@/types";
import EmptyState from "./EmptyState";

/**
 * Table Component
 *
 * A flexible data table with support for custom cell renderers.
 * Includes loading and empty states.
 * Supports light and dark modes.
 */

// Get nested object value by key path (e.g., "user.name")
function getNestedValue<T>(obj: T, path: string): unknown {
  return path.split(".").reduce((acc: unknown, part: string) => {
    if (acc && typeof acc === "object") {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
}

export default function Table<T extends { id?: string | number }>({
  columns,
  data,
  loading = false,
  emptyMessage = "No data available",
  onRowClick,
  className = "",
}: TableProps<T>) {
  // Loading skeleton
  if (loading) {
    return (
      <div
        className={`overflow-hidden rounded-xl border border-border-soft dark:border-dark-border ${className}`}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border-soft dark:divide-dark-border">
            <thead className="bg-bg-soft dark:bg-dark-border">
              <tr>
                {columns.map((column) => (
                  <th
                    key={String(column.key)}
                    className="px-6 py-3 text-left text-xs font-semibold text-text-muted dark:text-dark-text-muted uppercase tracking-wider"
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-dark-bg-card divide-y divide-border-soft dark:divide-dark-border">
              {[...Array(5)].map((_, index) => (
                <tr key={index}>
                  {columns.map((column) => (
                    <td
                      key={String(column.key)}
                      className="px-6 py-4 whitespace-nowrap"
                    >
                      <div className="h-4 bg-bg-soft dark:bg-dark-border rounded animate-pulse" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // Empty state
  if (!data || data.length === 0) {
    return (
      <div
        className={`overflow-hidden rounded-xl border border-border-soft dark:border-dark-border bg-white dark:bg-dark-bg-card ${className}`}
      >
        <EmptyState title={emptyMessage} />
      </div>
    );
  }

  const alignmentClasses: Record<string, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div
      className={`overflow-hidden rounded-xl border border-border-soft dark:border-dark-border ${className}`}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-border-soft dark:divide-dark-border">
          <thead className="bg-bg-soft dark:bg-dark-border">
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className={`
                    px-6 py-3
                    text-xs font-semibold text-text-muted dark:text-dark-text-muted uppercase tracking-wider
                    ${alignmentClasses[column.align || "left"]}
                    ${column.width || ""}
                  `}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-dark-bg-card divide-y divide-border-soft dark:divide-dark-border">
            {data.map((row, rowIndex) => (
              <tr
                key={row.id ?? rowIndex}
                onClick={() => onRowClick?.(row, rowIndex)}
                className={`
                  transition-colors duration-150
                  ${
                    onRowClick
                      ? "cursor-pointer hover:bg-bg-soft/50 dark:hover:bg-dark-border/50"
                      : ""
                  }
                `}
              >
                {columns.map((column: TableColumn<T>) => {
                  const value = getNestedValue(row, String(column.key));

                  return (
                    <td
                      key={String(column.key)}
                      className={`
                        px-6 py-4 whitespace-nowrap text-sm text-text-body dark:text-dark-text-body
                        ${alignmentClasses[column.align || "left"]}
                      `}
                    >
                      {column.render
                        ? column.render(value, row, rowIndex)
                        : String(value ?? "")}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
