import React from "react";

const Pagination = ({
  totalComics,
  comicsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalComics / comicsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination-wrapper">
      {pages.map((page, i) => (
        <button
          className={page == currentPage ? "active" : "pagination-btn"}
          key={i}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
