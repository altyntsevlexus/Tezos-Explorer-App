import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './_Forms.module.scss';
import validation from '../../../utils/validation';
import Input from './Input';

// eslint-disable-next-line consistent-return
const Forms = ({ value }) => {
  if (value === 'login') {
    return (
      <Formik
        initialValues={{
          password: '',
          lastName: '',
          email: '',
          confirm: '',
        }}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        <Form className={styles.form}>
          <Input
            label="Enter your Email"
            name="email"
            id="email"
            type="email"
          />
          <Input
            label="Password"
            name="password"
            id="password"
            type="password"
          />
          <Input label="Confirm" name="confirm" id="confirm" type="confirm" />
          <Link to="/restore-password" className={styles.form__restore}>
            Forgot password?
          </Link>
          <button type="submit" className={styles.form__button}>
            Log In
          </button>
          <p className={styles.form__paragraph}>
            <span className={styles.form__text}>
              Don’t have a Tezos Explorer Account?
            </span>
            <Link to="/sign-up" className={styles.form__link}>
              Sing up Now?
            </Link>
          </p>
        </Form>
      </Formik>
    );
  }

  if (value === 'signup') {
    return (
      <Formik
        initialValues={{
          password: '',
          lastName: '',
          email: '',
          confirm: '',
          checkbox: false,
        }}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        <Form className={styles.form}>
          <Input
            label="Enter your Email"
            name="email"
            id="email"
            type="email"
          />
          <Input
            label="Password"
            name="password"
            id="password"
            type="password"
          />
          <Input label="Confirm" name="confirm" id="confirm" type="confirm" />
          <Input label="asd" name="checkbox" id="checkbox" type="checkbox" />
          <button type="submit" className={styles.form__button}>
            Create an account
          </button>
          <p className={styles.form__paragraph}>
            <span className={styles.form__text}>Already have an Account? </span>
            <Link to="/login" className={styles.form__link}>
              Log In
            </Link>
          </p>
        </Form>
      </Formik>
    );
  }
};

export default Forms;

Forms.propTypes = {
  value: PropTypes.string.isRequired,
};
