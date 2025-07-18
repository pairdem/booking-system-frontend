// Pagination.tsx
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Always show first page
    pages.push(1);

    // Calculate start and end of middle pages
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    // Adjust if we're near the start or end
    if (currentPage <= 3) {
      end = 3;
    }
    if (currentPage >= totalPages - 2) {
      start = totalPages - 2;
    }

    // Add ellipsis if needed after first page
    if (start > 2) {
      pages.push("...");
    }

    // Add middle pages
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Add ellipsis if needed before last page
    if (end < totalPages - 1) {
      pages.push("...");
    }

    // Always show last page
    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="my-8 flex items-center justify-center gap-2">
      <button
        type="button"
        className="rounded-md border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &lt; Previous
      </button>

      {getPageNumbers().map((page) =>
        typeof page === "number" ? (
          <button
            type="button"
            key={page}
            className={`rounded-md px-4 py-2 ${currentPage === page ? "bg-primaryBlue text-white" : "border hover:bg-gray-100"}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ) : (
          // Use a unique key for the ellipsis
          <span key={`ellipsis-${page}`} className="px-2">
            {page}
          </span>
        ),
      )}

      <button
        type="button"
        className="rounded-md border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next &gt;
      </button>
    </div>
  );
}

export default Pagination;
