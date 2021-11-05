import PropTypes from 'prop-types';

import styled from './PerPage.module.scss';

const PerPage = ({ limit, handleChangeLimit }) => (
  <div className={styled['per-page']}>
    <span>Rows per page:</span>
    <select
      name="limit"
      onChange={handleChangeLimit}
      value={limit}
      className={styled['per-page__select']}
    >
      <option value="15">15</option>
      <option value="30">30</option>
      <option value="50">50</option>
      <option value="70">70</option>
      <option value="100">100</option>
    </select>
  </div>
);

PerPage.propTypes = {
  limit: PropTypes.string.isRequired,
  handleChangeLimit: PropTypes.func.isRequired,
};

export default PerPage;
