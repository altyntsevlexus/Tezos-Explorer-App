import styles from './_Copy.module.scss';
import Logo from '../Logo/Logo';
import CopyYear from '../CopyYear';

const Copy = () => {
  return (
    <div className={styles.copy}>
      <CopyYear className={styles.copy__text} />
      <Logo className={styles.copy__logo} />
    </div>
  );
};

export default Copy;
