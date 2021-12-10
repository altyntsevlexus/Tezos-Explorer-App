/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useField } from 'formik';
import PropTypes from 'prop-types';
import styles from './FieldGroup.module.scss';

const FieldGroup = ({ label, children, ...props }) => {
  const [, meta] = useField(props);

  return (
    <div className={styles.group}>
      <label htmlFor={props.name} className={styles.group__label}>
        {label}
      </label>
      {children}

      {meta.touched && meta.error && (
        <div className={styles.group__error}>{meta.error}</div>
      )}
    </div>
  );
};

export default FieldGroup;

FieldGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
};

FieldGroup.defaultProps = {
  label: '',
  name: '',
  children: () => null,
};
