import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import * as yup from 'yup';
import styles from './_Form.module.scss';
import showPass from '../../../images/show_pass.svg';
import hidePass from '../../../images/hide_password.svg';
import validate from '../../../utils/validation';

// eslint-disable-next-line consistent-return
const Form = ({ value }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirm: '',
      checkbox: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate,
  });

  const [isShown, setIsShown] = useState(false);
  const [isShownConfirm, setIsShownConfirm] = useState(false);

  if (value === 'login') {
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
          {formik.errors.email && formik.touched.email ? (
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
          {formik.errors.confirm && formik.touched.confirm ? (
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
          {formik.errors.email && formik.touched.email ? (
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
          {formik.errors.password && formik.touched.password ? (
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
          {formik.errors.confirm && formik.touched.confirm ? (
            <div className={styles.form__error}>{formik.errors.confirm}</div>
          ) : null}
        </div>
        <div
          className={`${styles.form__item} ${styles[`form__item--with-check`]}`}
        >
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className={styles.form__checkbox}
            onChange={formik.handleChange}
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
          {formik.errors.checkbox && formik.touched.checkbox ? (
            <div
              className={`${styles.form__error} ${styles['form__error--checkbox']}`}
            >
              {formik.errors.checkbox}
            </div>
          ) : null}
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
