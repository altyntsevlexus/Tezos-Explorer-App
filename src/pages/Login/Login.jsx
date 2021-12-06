import { Link } from 'react-router-dom';
import Title from '../../components/shared/Title';
import Form from '../../components/form';
import validationSchema from '../../utils/validation';
import Input from '../../components/form/Input';
import Submit from '../../components/form/Submit';
import Paragraph from '../../components/form/Paragraph';
import styles from './login.module.scss';

const formConfig = [
  {
    label: 'Email Address',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email address...',
  },

  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter your password...',
  },
  {
    label: 'Confirm password',
    name: 'confirm',
    type: 'password',
    placeholder: 'Confirm password...',
  },
];

const initialValues = {
  password: '',
  email: '',
  confirm: '',
};

const Login = () => (
  <section className={styles.login}>
    <Title
      value="Login"
      subtitle="Welcome back! Log In with your Email"
      wrapped
      centered
    />
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {formConfig.map((input) => (
        <Input
          label={input.label}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
          key={input.placeholder}
        />
      ))}
      <Link to="/restore-password" className={styles.login__restore}>
        Forgot password?
      </Link>
      <Submit value="Log In" />
      <Paragraph
        text="Don’t have a Tezos Explorer Account?"
        linkText="Sing up Now?"
        linkTo="sign-up"
      />
    </Form>
  </section>
);

export default Login;
