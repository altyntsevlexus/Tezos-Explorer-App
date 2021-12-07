/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import styles from './_TextInput.module.scss';
import InputIcon from '../InputIcon';
import showPass from '../../../images/show_pass.svg';
import hidePass from '../../../images/hide_password.svg';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [isShown, setIsShown] = useState(false);
  const handleSetIsShown = () => setIsShown(!isShown);
  const passwordType = isShown ? 'text' : 'password';

  return (
    <div className={styles.input}>
      <label htmlFor={props.name} className={styles.input__label}>
        {label}
      </label>
      <input
        className={
          meta.touched && meta.error
            ? `${styles.input__item} ${styles[`input__item--error`]}`
            : styles.input__item
        }
        {...props}
        {...field}
        type={props.type === 'password' ? passwordType : props.type}
        autoComplete="on"
      />
      {props.type === 'password' && (
        <InputIcon
          isShown={isShown}
          alt={isShown ? 'Hide Pass' : 'Show Pass'}
          ariaLabel={isShown ? 'Hide Pass' : 'Show Pass'}
          className={styles.input__icon}
          clickHandler={handleSetIsShown}
          src={isShown ? hidePass : showPass}
        />
      )}
      {meta.touched && meta.error && (
        <div className={styles.input__error}>{meta.error}</div>
      )}
    </div>
  );
};

export default TextInput;

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  label: '',
};
