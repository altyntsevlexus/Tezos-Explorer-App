import PropTypes from 'prop-types';
import styles from './Submit.module.scss';

const Submit = ({ value }) => (
  <button type="submit" className={styles.submit}>
    {value}
  </button>
);

export default Submit;

Submit.propTypes = {
  value: PropTypes.string.isRequired,
};
