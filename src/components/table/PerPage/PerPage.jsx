import propTypes from 'prop-types';

import styled from './_PerPage.module.scss';

const PerPage = ({ limit, handleChangeLimit }) => (
  <div className={styled.perPage}>
    <span className={styled.perPage__text}>Per page:</span>
    <select name="limit" onChange={handleChangeLimit} value={limit}>
      <option value="15">15</option>
      <option value="30">30</option>
      <option value="50">50</option>
      <option value="70">70</option>
      <option value="100">100</option>
    </select>
  </div>
);

PerPage.propTypes = {
  limit: propTypes.string.isRequired,
  handleChangeLimit: propTypes.func.isRequired,
};

export default PerPage;
