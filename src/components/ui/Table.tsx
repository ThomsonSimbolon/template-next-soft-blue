import type { TableProps, TableColumn } from "@/types";
import EmptyState from "./EmptyState";

/**
 * Table Component
 *
 * A flexible data table with support for custom cell renderers.
 * Includes loading and empty states.
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
        className={`overflow-hidden rounded-xl border border-border-soft ${className}`}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border-soft">
            <thead className="bg-bg-soft">
              <tr>
                {columns.map((column) => (
                  <th
                    key={String(column.key)}
                    className="px-6 py-3 text-left text-xs font-semibold text-text-muted uppercase tracking-wider"
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-border-soft">
              {[...Array(5)].map((_, index) => (
                <tr key={index}>
                  {columns.map((column) => (
                    <td
                      key={String(column.key)}
                      className="px-6 py-4 whitespace-nowrap"
                    >
                      <div className="h-4 bg-bg-soft rounded animate-pulse" />
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
        className={`overflow-hidden rounded-xl border border-border-soft bg-white ${className}`}
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
      className={`overflow-hidden rounded-xl border border-border-soft ${className}`}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-border-soft">
          <thead className="bg-bg-soft">
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className={`
                    px-6 py-3
                    text-xs font-semibold text-text-muted uppercase tracking-wider
                    ${alignmentClasses[column.align || "left"]}
                    ${column.width || ""}
                  `}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-border-soft">
            {data.map((row, rowIndex) => (
              <tr
                key={row.id ?? rowIndex}
                onClick={() => onRowClick?.(row, rowIndex)}
                className={`
                  transition-colors duration-150
                  ${onRowClick ? "cursor-pointer hover:bg-bg-soft/50" : ""}
                `}
              >
                {columns.map((column: TableColumn<T>) => {
                  const value = getNestedValue(row, String(column.key));

                  return (
                    <td
                      key={String(column.key)}
                      className={`
                        px-6 py-4 whitespace-nowrap text-sm text-text-body
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
