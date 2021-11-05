import styles from './Copy.module.scss';
import Logo from '../Logo/Logo';

const Copy = () => {
  const year = new Date().getFullYear();

  return (
    <div className={styles.copy}>
      <p className={styles.copy__text}>@ Copyright. Company name. {year}</p>
      <Logo className={styles.copy__logo} />
    </div>
  );
};

export default Copy;
