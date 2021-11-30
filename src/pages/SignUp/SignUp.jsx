import Title from '../../components/shared/Title';
import Forms from '../../components/shared/Forms';
import styles from './_SignUp.module.scss';

const SignUp = () => (
  <section className={styles.login}>
    <Title
      value="Sign up"
      subtitle="Get Started by Signing Up Now"
      wrapped
      centered
    />
    <Forms value="signup" />
  </section>
);

export default SignUp;
