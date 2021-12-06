/* eslint-disable react/prop-types */
import { Formik, Form as FormikForm } from 'formik';
import PropTypes from 'prop-types';
import styles from './Form.module.scss';

const Forma = ({ children, initialValues, validationSchema, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validateOnChange
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <FormikForm className={styles.form}>{children}</FormikForm>
    </Formik>
  );
};

export default Forma;

Forma.propTypes = {
  children: PropTypes.node.isRequired,
};
