import styles from './_Copy.module.scss';
import Logo from '../Logo/Logo';

const Copy = () => (
  <div className={styles.copy}>
    <p className={styles.copy__text}>@ Copyright. Company name. 2021</p>
    <Logo className={styles.copy__logo} />
  </div>
);

export default Copy;
