import Title from '../../components/shared/Title';
import Forms from '../../components/shared/Forms';
import styles from './_Login.module.scss';

const Login = () => (
  <section className={styles.login}>
    <Title
      value="Login"
      subtitle="Welcome back! Log In with your Email"
      wrapped
      centered
    />
    <Forms value="login" />
  </section>
);

export default Login;
