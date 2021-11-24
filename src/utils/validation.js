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

  if (!values.checkbox) {
    errors.checkbox = 'Required';
  }

  return errors;
};

export default validate;
