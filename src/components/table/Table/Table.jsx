import propTypes, { shape } from 'prop-types';
import { Link } from 'react-router-dom';
import { useBlocksState } from '../../../context/blocksContext';

import Th from '../Th';

import styled from './_Table.module.scss';
import ErrorMessage from '../../shared/ErrorMessage';

const Table = ({ cols, rows, currentSort, sortFunction }) => {
  const { isLoading, isError } = useBlocksState();

  if (isLoading) {
    return <div className={styled.table__loader}>Loading...</div>;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
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
      <tbody>
        {rows.map((row) => (
          <tr key={row.level}>
            {cols.map((col) =>
              col.key === 'level' ? (
                <td key={row.level + col.key}>
                  <Link to={`blocks/${row[col.key]}`}>{row[col.key]} </Link>
                </td>
              ) : (
                <td key={row.level + row[col.key]}>{row[col.key]}</td>
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
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
