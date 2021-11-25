import Title from '../../components/shared/Title';
import Form from '../../components/shared/Form';
import styles from './_Login.module.scss';

const Login = () => (
  <section className={styles.login}>
    <Title
      value="Login"
      subtitle="Welcome back! Log In with your Email"
      wrapped
      centered
    />
    <Form value="login" />
  </section>
);

export default Login;
