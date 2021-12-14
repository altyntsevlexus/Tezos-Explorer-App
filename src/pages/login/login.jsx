import { Link } from 'react-router-dom';
import Title from '../../components/shared/Title';
import Form from '../../components/form';
import formConfig from '../../utils/formConfig';
import validationSchema from '../../utils/validation';
import Submit from '../../components/form/Submit';
import Paragraph from '../../components/form/Paragraph';
import styles from './login.module.scss';
import FormGroup from '../../components/form/FormGroup';

const initialValues = {
  password: '',
  email: '',
  confirm: '',
};

const Test = () => {
  return (
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
        <FormGroup classForIcon={styles.login__icon} formConfig={formConfig} />
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
};

export default Test;
