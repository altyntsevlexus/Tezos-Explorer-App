import { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import styled from './_Pagination.module.scss';

const Pagination = ({ onPageChanged, currentPage }) => {
  const [pages, setPages] = useState([]);

  const handlePages = (page) => {
    if (page <= 2) {
      return [1, 2, 3, 4];
    }
    return [page - 1, page, page + 1, page + 2];
  };

  useEffect(() => {
    setPages(handlePages(currentPage));
  }, [currentPage]);

  const handleClick = (e) => {
    onPageChanged(+e.target.value);
  };

  const handlePreviousPage = (i) => {
    if (currentPage > i) {
      onPageChanged(currentPage - i);
    } else if (currentPage === i) {
      onPageChanged(1);
    }
  };

  const handleNextPage = (i) => {
    onPageChanged(currentPage + i);
  };

  return (
    <div className={styled.pagination}>
      <button
        type="button"
        className={styled.pagination__item}
        onClick={() => handlePreviousPage(2)}
      >
        {'<<'}
      </button>
      <button
        type="button"
        className={styled.pagination__item}
        onClick={() => handlePreviousPage(1)}
      >
        {'<'}
      </button>
      {pages.map((pageNum) => (
        <button
          type="button"
          key={pageNum}
          value={pageNum}
          onClick={handleClick}
          className={` ${styled.pagination__item} ${
            pageNum === currentPage
              ? styled['pagination__item--t--active']
              : null
          }`}
        >
          {pageNum}
        </button>
      ))}
      <button
        type="button"
        className={styled.pagination__item}
        onClick={() => handleNextPage(1)}
      >
        {'>'}
      </button>
      <button
        type="button"
        className={styled.pagination__item}
        onClick={() => handleNextPage(2)}
      >
        {'>>'}
      </button>
    </div>
  );
};

Pagination.propTypes = {
  onPageChanged: propTypes.func.isRequired,
  currentPage: propTypes.number.isRequired,
};

export default Pagination;
