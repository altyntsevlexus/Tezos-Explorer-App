import styles from './_Copy.module.scss';
import Logo from '../Logo/Logo';

const Copy = () => {
  return (
    <div className={styles.copy}>
      <Copy className={styles.copy__text} />
      <Logo className={styles.copy__logo} />
    </div>
  );
};

export default Copy;
