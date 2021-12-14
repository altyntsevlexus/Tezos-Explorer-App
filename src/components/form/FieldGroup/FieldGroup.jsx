/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import styles from './FieldGroup.module.scss';

const FieldGroup = ({ label, children, name }) => {
  const { errors, touched } = useFormikContext();

  return (
    <div className={styles.group}>
      <label htmlFor={name} className={styles.group__label}>
        {label}
      </label>
      {children}

      {touched[`${name}`] && errors[`${name}`] && (
        <div className={styles.group__error}>{errors[`${name}`]}</div>
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
