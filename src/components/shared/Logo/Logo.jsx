import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

const Logo = ({ className }) => (
  <Link to="/blocks" className={`${styles.logo} ${className}`}>
    TezEx
  </Link>
);

export default Logo;

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};
