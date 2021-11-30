import * as Yup from 'yup';

const validation = Yup.object({
  email: Yup.string()
    .required('Required')
    .matches('@', 'Email address must contain the @ character')
    .email('Invalid email'),
  password: Yup.string()
    .required(
      'Password should contain both letter and number, with minimum length of 8 characters ',
    )
    .min(8, 'Password minimum length 8 characters')
    .matches(/[0-9]/, 'Password require at list 1 number 0-9')
    .matches(/[a-z]/, 'Password must contain at least 1 lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least 1 uppercase letter')
    .matches(
      /[!@#$%^&*]/,
      'Password must contain at least 1 special character',
    ),
  confirm: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
  checkbox: Yup.boolean().oneOf([true], 'Required'),
});

export default validation;
