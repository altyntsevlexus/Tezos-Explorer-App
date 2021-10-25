import propTypes from 'prop-types';

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
  headerName: propTypes.string.isRequired,
  sortBy: propTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  currentSort: propTypes.object,
  sortFunction: propTypes.func,
};

Th.defaultProps = {
  sortBy: '',
  sortFunction: () => null,
  currentSort: {},
};

export default Th;
