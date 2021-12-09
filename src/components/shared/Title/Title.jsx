import PropTypes from 'prop-types';
import styles from './Title.module.scss';

const Title = ({ value, subtitle, wrapped, centered }) => {
  const center = centered && styles['title--pos--center'];
  const wrapper = wrapped && 'wrapper__title';

  return (
    <div className={`${styles.title} ${wrapper} ${center}`}>
      <h1 className={styles.title__value}>{value}</h1>
      {subtitle && <h3 className={styles.title__subtitle}>{subtitle}</h3>}
    </div>
  );
};

export default Title;

Title.propTypes = {
  value: PropTypes.string,
  subtitle: PropTypes.string,
  wrapped: PropTypes.bool,
  centered: PropTypes.bool,
};

Title.defaultProps = {
  value: 'Title',
  subtitle: '',
  wrapped: false,
  centered: false,
};
