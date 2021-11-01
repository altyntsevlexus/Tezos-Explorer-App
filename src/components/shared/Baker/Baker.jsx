import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import icon from '../../../images/baker.png';

import styled from './_Baker.module.scss';

const Baker = ({ value }) => {
  return (
    <div className={styled.baker}>
      <img src={icon} alt="baker" className={styled.baker__icon} />
      <Link to="/blocks" className={styled.baker__value}>
        {value}
      </Link>
    </div>
  );
};

Baker.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Baker;
