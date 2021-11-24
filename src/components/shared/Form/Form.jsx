import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './_Form.module.scss';
import showPass from '../../../images/show_pass.svg';
import hidePass from '../../../images/hide_password.svg';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!values.email.includes('@')) {
    errors.email = 'Email address must contain the @ character';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Password minimum length 8 characters ';
  } else if (!/[0-9]/.test(values.password)) {
    errors.password = 'Password require at list 1 number 0-9';
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = 'Password must contain at least 1 lowercase letter';
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = 'Password must contain at least 1 uppercase letter';
  } else if (!/[!@#$%^&*]/.test(values.password)) {
    errors.password = 'Password must contain at least 1 special character';
  }

  if (!values.confirm) {
    errors.confirm = 'Required';
  } else if (values.password !== values.confirm) {
    errors.confirm = 'Passwords do not match';
  }

  return errors;
};

// eslint-disable-next-line consistent-return
const Form = ({ value }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirm: '',
    },
    validate,
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
    },
  });

  if (value === 'login') {
    const [isShown, setIsShown] = useState(false);
    const [isShownConfirm, setIsShownConfirm] = useState(false);

    return (
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.form__item}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="email" className={styles.form__label}>
            Email Address
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email address..."
            autoComplete="true"
            className={styles.form__input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className={styles.form__error}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className={styles.form__item}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="password" className={styles.form__label}>
            Passwords
          </label>
          <input
            type={isShown ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder="Enter your password..."
            autoComplete="true"
            className={styles.form__input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <img
            src={isShown ? hidePass : showPass}
            alt="Show pass"
            aria-label="Show pass"
            className={styles.form__img}
            onClick={() => setIsShown(!isShown)}
          />
          {formik.errors.password ? (
            <div className={styles.form__error}>{formik.errors.password}</div>
          ) : null}
        </div>
        <div className={styles.form__item}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="confirm" className={styles.form__label}>
            Confirm password
          </label>
          <input
            type={isShownConfirm ? 'text' : 'password'}
            name="confirm"
            id="confirm"
            placeholder="Confirm password"
            autoComplete="true"
            className={styles.form__input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirm}
          />
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <img
            src={isShownConfirm ? hidePass : showPass}
            alt="Show pass"
            aria-label="Show pass"
            className={styles.form__img}
            onClick={() => setIsShownConfirm(!isShownConfirm)}
          />
          {formik.errors.confirm ? (
            <div className={styles.form__error}>{formik.errors.confirm}</div>
          ) : null}
        </div>
        <Link to="/restore-password" className={styles.form__restore}>
          Forgot password?
        </Link>
        <button type="submit" className={styles.form__button}>
          Log in
        </button>
        <p className={styles.form__paragraph}>
          <span className={styles.form__text}>
            Don’t have a Tezos Explorer Account?
          </span>
          <Link to="/sign-up" className={styles.form__link}>
            Sing up Now?
          </Link>
        </p>
      </form>
    );
  }

  if (value === 'signup') {
    const [isShown, setIsShown] = useState(false);
    const [isShownConfirm, setIsShownConfirm] = useState(false);

    return (
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.form__item}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="email" className={styles.form__label}>
            Email Address
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email address..."
            autoComplete="true"
            className={styles.form__input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className={styles.form__error}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className={styles.form__item}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="password" className={styles.form__label}>
            Passwords
          </label>
          <input
            type={isShown ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder="Enter your password..."
            autoComplete="true"
            className={styles.form__input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <img
            src={isShown ? hidePass : showPass}
            alt="Show pass"
            aria-label="Show pass"
            className={styles.form__img}
            onClick={() => setIsShown(!isShown)}
          />
          {formik.errors.password ? (
            <div className={styles.form__error}>{formik.errors.password}</div>
          ) : (
            <div className={styles.form__advice}>
              Password should contain both letter and number, with minimum
              length of 8 characters
            </div>
          )}
        </div>
        <div className={styles.form__item}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="confirm" className={styles.form__label}>
            Confirm password
          </label>
          <input
            type={isShownConfirm ? 'text' : 'password'}
            name="confirm"
            id="confirm"
            placeholder="Confirm password"
            autoComplete="true"
            className={styles.form__input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirm}
          />
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <img
            src={isShownConfirm ? hidePass : showPass}
            alt="Show pass"
            aria-label="Show pass"
            className={styles.form__img}
            onClick={() => setIsShownConfirm(!isShownConfirm)}
          />
          {formik.errors.confirm ? (
            <div className={styles.form__error}>{formik.errors.confirm}</div>
          ) : null}
        </div>
        <div
          className={`${styles.form__item} ${styles[`form__item--with-check`]}`}
        >
          <input
            type="checkbox"
            id="checkbox"
            className={styles.form__checkbox}
          />
          <label htmlFor="checkbox" className={styles.form__policy}>
            By creating an account, you agree to Tezos Explorer{' '}
            <Link to="/term_of_services" className={styles.form__link}>
              Terms of Service
            </Link>{' '}
            &{' '}
            <Link to="/privacy_policy" className={styles.form__link}>
              Privacy Policy
            </Link>
            .
          </label>
        </div>
        <button type="submit" className={styles.form__button}>
          Create an account
        </button>
        <p className={styles.form__paragraph}>
          <span className={styles.form__text}>Already have an Account? </span>
          <Link to="/login" className={styles.form__link}>
            Log In
          </Link>
        </p>
      </form>
    );
  }
};

export default Form;

Form.propTypes = {
  value: PropTypes.string.isRequired,
};
