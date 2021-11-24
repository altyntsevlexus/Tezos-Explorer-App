import PropTypes from 'prop-types';
import { useBlocksState } from '../../contexts/blocksContext';
import Loader from '../shared/Loader';

import Th from './Th';

import styles from './_Table.module.scss';

const Table = ({ cols, rows, currentSort, sortFunction }) => {
  const { isLoading } = useBlocksState();

  const sortedRows = () => {
    return rows.map((row) => (
      <tr key={row.level}>
        {cols.map((col) => (
          <td key={`${row.level} ${row[col.key]}`}>
            {col.render ? col.render(row) : row[col.key]}
          </td>
        ))}
      </tr>
    ));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.overflow}>
      <table className={styles.table}>
        <thead>
          <tr>
            {cols.map((col) => (
              <Th
                key={col.key}
                headerName={col.name}
                sortBy={col.key}
                sortFunction={sortFunction}
                currentSort={currentSort}
              />
            ))}
          </tr>
        </thead>
        <tbody>{sortedRows()}</tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  cols: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  currentSort: PropTypes.shape(),
  sortFunction: PropTypes.func,
};

Table.defaultProps = {
  currentSort: {},
  sortFunction: () => null,
};

export default Table;
