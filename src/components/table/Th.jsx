import PropTypes from 'prop-types';

const Th = ({ headerName, sortBy, currentSort, sortFunction }) => {
  const sortArrow = () => {
    if (sortBy === currentSort.key) {
      return currentSort.direction
        ? 'arrow arrow--d--up'
        : 'arrow arrow--d--down';
    }
    return null;
  };

  return (
    <th>
      <button
        type="button"
        value={sortBy}
        onClick={sortFunction}
        className={sortArrow()}
      >
        {headerName}
      </button>
    </th>
  );
};

Th.propTypes = {
  headerName: PropTypes.string.isRequired,
  sortBy: PropTypes.string,
  currentSort: PropTypes.shape(),
  sortFunction: PropTypes.func,
};

Th.defaultProps = {
  sortBy: '',
  sortFunction: () => null,
  currentSort: {},
};

export default Th;
