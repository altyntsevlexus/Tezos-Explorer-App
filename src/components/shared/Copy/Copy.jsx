import styles from './_Copy.module.scss';
import Logo from '../Logo/Logo';

const Copy = () => (
  <div className={styles.copy}>
    <address className={styles.copy__text}>
      @ Copyright. Company name. 2021
    </address>
    <Logo className={styles.copy__logo} />
  </div>
);

export default Copy;
