import PropTypes from 'prop-types';

import styled from './Pagination.module.scss';

const Pagination = ({ onPageChanged, currentPage, totalPages }) => {
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
      <p>
        {currentPage} of {totalPages}
      </p>
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
  onPageChanged: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
