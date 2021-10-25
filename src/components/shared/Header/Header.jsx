import styles from './_Header.module.scss';
import Logo from '../Logo';
import Button from '../Button';

const { header } = styles;

const Header = () => (
  <header className={header}>
    <Logo />
    <Button />
  </header>
);

export default Header;
