/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';
import InputIcon from '../InputIcon';
import showPass from '../../../images/show_pass.svg';
import hidePass from '../../../images/hide_password.svg';

const Input = ({ hidable, ...props }) => {
  const [field, meta] = useField(props);
  const [isShown, setIsShown] = useState(props.type !== 'password');
  const handleSetIsShown = () => setIsShown(!isShown);
  const inputType =
    props.type === 'password'
      ? isShown
        ? 'text'
        : 'password'
      : hidable
      ? isShown
        ? props.type
        : 'password'
      : props.type;

  return (
    <div className={styles.input}>
      <input
        className={
          meta.touched && meta.error
            ? `${styles.input__field} ${styles[`input__field--error`]}`
            : styles.input__field
        }
        {...props}
        {...field}
        type={inputType}
        autoComplete="on"
      />
      {hidable && (
        <InputIcon
          alt={isShown ? 'Hide' : 'Show'}
          className={styles.input__icon}
          clickHandler={handleSetIsShown}
          src={isShown ? hidePass : showPass}
        />
      )}
    </div>
  );
};

export default Input;

Input.propTypes = {
  hidable: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  hidable: false,
};
