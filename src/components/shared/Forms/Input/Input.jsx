import { useField } from 'formik';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import showPass from '../../../../images/show_pass.svg';
import hidePass from '../../../../images/hide_password.svg';
import styles from './_Input.module.scss';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  if (props.type === 'checkbox') {
    return (
      <div className={styles.input__item}>
        <div className={styles.input__check}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <input
            className={
              meta.touched && meta.error
                ? `${styles.input__checkbox} ${styles[`input--error`]}`
                : styles.input__checkbox
            }
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...field}
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...props}
          />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label
            htmlFor={props.id || props.name}
            className={styles.input__policy}
          >
            By creating an account, you agree to Tezos Explorer{' '}
            <Link to="/term_of_services" className={styles.input__link}>
              Terms of Service
            </Link>
            {' & '}
            <Link to="/privacy_policy" className={styles.input__link}>
              Privacy Policy
            </Link>
            .
          </label>
        </div>
        {meta.touched && meta.error ? (
          <div className={styles.input__error}>{meta.error}</div>
        ) : null}
      </div>
    );
  }

  if (props.type === 'password' || props.type === 'confirm') {
    const [isShown, setIsShown] = useState(false);

    return (
      <div className={styles.input__item}>
        <label htmlFor={props.id || props.name} className={styles.input__label}>
          {label}
        </label>
        <input
          className={
            meta.touched && meta.error
              ? `${styles.input} ${styles[`input--error`]}`
              : styles.input
          }
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...field}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...props}
          type={isShown ? 'text' : 'password'}
          autoComplete="on"
        />
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <img
          src={isShown ? hidePass : showPass}
          alt="Show pass"
          aria-label="Show pass"
          className={styles.input__img}
          onClick={() => setIsShown(!isShown)}
        />
        {meta.touched && meta.error ? (
          <div className={styles.input__error}>{meta.error}</div>
        ) : null}
      </div>
    );
  }

  return (
    <div className={styles.input__item}>
      <label htmlFor={props.id || props.name} className={styles.input__label}>
        {label}
      </label>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <input
        className={
          meta.touched && meta.error
            ? `${styles.input} ${styles[`input--error`]}`
            : styles.input
        }
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...field}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...props}
        autoComplete="on"
      />
      {meta.touched && meta.error ? (
        <div className={styles.input__error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
