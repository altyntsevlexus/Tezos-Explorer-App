import styles from './_Copy.module.scss';
import Logo from '../Logo/Logo';

const { copy, copy__text } = styles;

const Copy = () => (
  <div className={copy}>
    <address className={copy__text}>@ Copyright. Company name. 2021</address>
    <Logo className={styles.copy__logo} />
  </div>
);

export default Copy;
