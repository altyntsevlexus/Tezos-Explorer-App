import propTypes from 'prop-types';

import Th from '../Th.jsx';

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
            <td key={row[col.key]}>{row[col.key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  cols: propTypes.array.isRequired,
  rows: propTypes.array.isRequired,
  currentSort: propTypes.object,
  sortFunction: propTypes.func,
};

Table.defaultProps = {
  sortFunction: () => null,
  currentSort: {},
};

export default Table;
