import Title from '../../components/shared/Title';
import Form from '../../components/shared/Form';
import styles from './_SignUp.module.scss';

const SignUp = () => (
  <section className={styles.login}>
    <Title
      value="Sign up"
      subtitle="Get Started by Signing Up Now"
      wrapped
      centered
    />
    <Form value="signup" />
  </section>
);

export default SignUp;
