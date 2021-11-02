import styles from './_Header.module.scss';
import Logo from '../Logo';
import Button from '../Button';
import Navigation from '../Navigation';

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <div className={styles.header__wrapper}>
      <Navigation />
      <Button />
    </div>
  </header>
);

export default Header;
