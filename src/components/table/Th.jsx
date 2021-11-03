import PropTypes from 'prop-types';

const Th = ({ headerName, sortBy, currentSort, sortFunction }) => {
  const sortArrow = () => {
    if (sortBy === currentSort.key) {
      return currentSort.direction
        ? String.fromCharCode(8593)
        : String.fromCharCode(8595);
    }
    return null;
  };

  return (
    <th>
      <button type="button" value={sortBy} onClick={sortFunction}>
        {headerName} {sortArrow()}
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
