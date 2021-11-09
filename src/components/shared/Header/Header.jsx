import styles from './_Header.module.scss';
import Logo from '../Logo';
import Button from '../Button';
import Navigation from '../Navigation';

const Header = () => (
  <header className={styles.header}>
    <div className={`wrapper ${styles.header__wrapper}`}>
      <Logo />
      <div className={styles.header__navigation}>
        <Navigation />
        <Button />
      </div>
    </div>
  </header>
);

export default Header;
