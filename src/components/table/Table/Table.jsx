import PropTypes from 'prop-types';
import { useBlocksState } from '../../../context/blocksContext';

import Th from '../Th';
import ErrorMessage from '../../shared/ErrorMessage';

import styled from './Table.module.scss';

const Table = ({ cols, rows, currentSort, sortFunction }) => {
  const { isLoading, isError } = useBlocksState();

  const sortedRows = () => {
    return rows.map((row) => (
      <tr key={row.level}>
        {cols.map((col) => (
          <td key={row.level + row[col.key]}>
            {col.render ? col.render(row) : row[col.key]}
          </td>
        ))}
      </tr>
    ));
  };

  if (isLoading) {
    return <div className={styled.table__loader}>Loading...</div>;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <div className={styled.overflow}>
      <table className={styled.table}>
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
  sortFunction: () => null,
  currentSort: {},
};

export default Table;
