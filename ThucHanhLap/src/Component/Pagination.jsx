import React, { useEffect, useRef } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
      const paginationRef = useRef(null);

      // Hàm xử lý sự kiện keydown
      const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft" && currentPage > 1) {
                  onPageChange(currentPage - 1);
            } else if (event.key === "ArrowRight" && currentPage < totalPages) {
                  onPageChange(currentPage + 1);
            }
      };

      // Gán sự kiện khi focus vào pagination
      useEffect(() => {
            const paginationElement = paginationRef.current;

            if (paginationElement) {
                  paginationElement.addEventListener("keydown", handleKeyDown);

                  // Cleanup khi unmount
                  return () => paginationElement.removeEventListener("keydown", handleKeyDown);
            }
      }, [currentPage, totalPages]);

      if (totalPages <= 1) return null; // Nếu chỉ có 1 trang thì không cần hiển thị

      return (
            <nav aria-label="Page navigation" tabIndex={0} ref={paginationRef} className="outline-none">
                  <ul className="pagination">
                        {/* Nút Previous */}
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                              <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>&laquo;</button>
                        </li>

                        {/* Trang đầu tiên luôn hiển thị */}
                        <li className={`page-item ${currentPage === 1 ? "active" : ""}`}>
                              <button className="page-link" onClick={() => onPageChange(1)}>1</button>
                        </li>

                        {/* Hiển thị "..." nếu currentPage > 3 */}
                        {totalPages > 4 && currentPage > 3 && (
                              <li className="page-item disabled"><span className="page-link">...</span></li>
                        )}

                        {/* Hiển thị các trang xung quanh currentPage */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                              .filter(page =>
                                    (page !== 1 && page !== totalPages && page >= currentPage - 1 && page <= currentPage + 1) ||
                                    (currentPage === 2 && page === 2) ||
                                    (currentPage === totalPages - 1 && page === totalPages - 1)
                              )
                              .map(page => (
                                    <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
                                          <button className="page-link" onClick={() => onPageChange(page)}>{page}</button>
                                    </li>
                              ))
                        }

                        {/* Hiển thị "..." nếu currentPage < totalPages - 3 */}
                        {totalPages > 4 && currentPage < totalPages - 2 && (
                              <li className="page-item disabled"><span className="page-link">...</span></li>
                        )}

                        {/* Trang cuối cùng luôn hiển thị nếu totalPages > 1 */}
                        {totalPages > 1 && (
                              <li className={`page-item ${currentPage === totalPages ? "active" : ""}`}>
                                    <button className="page-link" onClick={() => onPageChange(totalPages)}>{totalPages}</button>
                              </li>
                        )}

                        {/* Nút Next */}
                        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                              <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>&raquo;</button>
                        </li>
                  </ul>
            </nav>
      );
};

export default React.memo(Pagination);
