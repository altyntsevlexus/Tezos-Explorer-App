import { Link } from 'react-router-dom';
import Title from '../../components/shared/Title';
import Form from '../../components/form';
import validationSchema from '../../utils/validation';
import TextInput from '../../components/form/TextInput';
import Submit from '../../components/form/Submit';
import Paragraph from '../../components/form/Paragraph';
import Checkbox from '../../components/form/Checkbox';
import styles from './signUp.module.scss';
import formConfig from '../../utils/formConfig';

const initialValues = {
  password: '',
  email: '',
  confirm: '',
  checkbox: false,
};

const SignUp = () => (
  <section className={styles['sign-up']}>
    <Title
      value="Sign up"
      subtitle="Get Started by Signing Up Now"
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
        <TextInput
          label={input.label}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
          key={input.placeholder}
        />
      ))}
      <Checkbox name="checkbox">
        <label htmlFor="checkbox" className={styles['sign-up__policy']}>
          By creating an account, you agree to Tezos Explorer{' '}
          <Link to="/term_of_services" className={styles['sign-up__link']}>
            Terms of Service
          </Link>
          {' & '}
          <Link to="/privacy_policy" className={styles['sign-up__link']}>
            Privacy Policy
          </Link>
          .
        </label>
      </Checkbox>
      <Submit value="Create an account" />
      <Paragraph
        text="Already have an Account?"
        linkText="Log In"
        linkTo="login"
      />
    </Form>
  </section>
);

export default SignUp;
