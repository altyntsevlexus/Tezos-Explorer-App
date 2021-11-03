import propTypes, { shape } from 'prop-types';
import { Link } from 'react-router-dom';
import { useBlocksState } from '../../../context/blocksContext';

import Th from '../Th';
import Baker from '../../shared/Baker';
import ErrorMessage from '../../shared/ErrorMessage';

import styled from './_Table.module.scss';

const Table = ({ cols, rows, currentSort, sortFunction }) => {
  const { isLoading, isError } = useBlocksState();

  const sortedRows = () => {
    return rows.map((row) => (
      <tr key={row.level}>
        {cols.map((col) => {
          if (col.key === 'level') {
            return (
              <td key={row.level + col.key}>
                <Link to={`/blocks/${row[col.key]}`}>{row[col.key]} </Link>
              </td>
            );
          }
          if (col.key === 'baker') {
            return (
              <td key={row.level + col.key}>
                <Baker value={row[col.key]} />
              </td>
            );
          }

          return <td key={row.level + row[col.key]}>{row[col.key]}</td>;
        })}
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
  cols: propTypes.arrayOf(shape()).isRequired,
  rows: propTypes.arrayOf(shape()).isRequired,
  currentSort: propTypes.shape(),
  sortFunction: propTypes.func,
};

Table.defaultProps = {
  sortFunction: () => null,
  currentSort: {},
};

export default Table;
