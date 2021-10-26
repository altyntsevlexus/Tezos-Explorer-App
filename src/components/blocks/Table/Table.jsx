import propTypes, { shape } from 'prop-types';

import Th from '../Th';

import styled from './_Table.module.scss';

const Table = ({ cols, rows, currentSort, sortFunction }) => (
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
          {cols.map((col) => (
            <td key={row.level + row[col.key]}>{row[col.key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

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
