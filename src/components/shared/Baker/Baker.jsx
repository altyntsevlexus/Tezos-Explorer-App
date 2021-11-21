import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import icon from '../../../images/baker.png';

import styles from './_Baker.module.scss';

const Baker = ({ value }) => {
  return (
    <div className={styles.baker}>
      <img src={icon} alt="baker" className={styles.baker__icon} />
      <Link to="/blocks" className={styles.baker__value}>
        {value}
      </Link>
    </div>
  );
};

Baker.propTypes = {
  value: PropTypes.string,
};

Baker.defaultProps = {
  value: 'Baker',
};

export default Baker;
