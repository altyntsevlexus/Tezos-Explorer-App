import Title from '../../components/shared/Title';
import Form from '../../components/shared/Form';
import styles from './_Login.module.scss';

const Login = () => (
  <section className={styles.login}>
    <Title value="Login" className={styles.login__title} />
    <p className={styles['login__sub-title']}>
      Welcome back! Log In with your Email
    </p>
    <Form value="login" />
  </section>
);

export default Login;
