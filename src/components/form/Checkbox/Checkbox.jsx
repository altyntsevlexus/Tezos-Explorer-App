/* eslint-disable react/jsx-props-no-spreading */
import { useField } from 'formik';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.scss';

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles.input}>
      <div className={styles.input__check}>
        <input
          className={styles.input__checkbox}
          {...field}
          {...props}
          type="checkbox"
        />
        {children}
      </div>
      {meta.touched && meta.error && (
        <div className={styles.input__error}>{meta.error}</div>
      )}
    </div>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Checkbox.defaultProps = {
  children: () => null,
};
