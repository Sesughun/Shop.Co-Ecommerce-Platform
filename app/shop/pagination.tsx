import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import _ from "lodash";
interface Pages {
  productNumber: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}
const Pagination = ({
  productNumber,
  pageSize,
  onPageChange,
  currentPage,
}: Pages) => {
  const pagesCount = Math.ceil(productNumber / pageSize);

  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <div>
      <nav>
        <ul className="pagination">
          {pages.map((page: number) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page.item"
              }
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
