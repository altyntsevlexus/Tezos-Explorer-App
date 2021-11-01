import propTypes from 'prop-types';

import styled from './_Pagination.module.scss';

const Pagination = ({ onPageChanged, currentPage }) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChanged(currentPage - 1);
    }
  };

  const handleNextPage = (i) => {
    onPageChanged(currentPage + i);
  };

  return (
    <div className={styled.pagination}>
      <button
        type="button"
        className={styled.pagination__arrow}
        onClick={() => handlePreviousPage(1)}
      >
        {'<'}
      </button>
      <button type="button" className={styled.pagination__item}>
        {currentPage} of 27
      </button>
      <button
        type="button"
        className={styled.pagination__arrow}
        onClick={() => handleNextPage(1)}
      >
        {'>'}
      </button>
    </div>
  );
};

Pagination.propTypes = {
  onPageChanged: propTypes.func.isRequired,
  currentPage: propTypes.number.isRequired,
};

export default Pagination;
