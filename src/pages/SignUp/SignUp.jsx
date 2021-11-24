import Title from '../../components/shared/Title';
import Form from '../../components/shared/Form';
import styles from './_SignUp.module.scss';

const SignUp = () => (
  <section className={styles.login}>
    <Title value="Sign up" className={styles.login__title} />
    <p className={styles['login__sub-title']}>Get Started by Signing Up Now</p>
    <Form value="signup" />
  </section>
);

export default SignUp;
