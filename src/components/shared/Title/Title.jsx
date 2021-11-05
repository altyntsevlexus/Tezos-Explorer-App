import PropTypes from 'prop-types';
import styles from './Title.module.scss';

const Title = ({ value, className }) => (
  <h1 className={`${styles.title} ${className}`}>{value}</h1>
);

export default Title;

Title.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
};

Title.defaultProps = {
  value: 'Title',
  className: '',
};
