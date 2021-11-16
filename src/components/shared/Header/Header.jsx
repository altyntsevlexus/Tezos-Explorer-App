import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import styles from './_Header.module.scss';
import Logo from '../Logo';
import Button from '../Button';
import Navigation from '../Navigation';
import Aside from '../Aside';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(!isOpen);
    }
  };

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const size = window.innerWidth;

  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.header__wrapper}`}>
        <Logo />
        <div className={styles.header__navigation}>
          <Navigation isOpen={isOpen} handleIsOpen={handleIsOpen} />
          <Button />
        </div>
      </div>
      {size <= 834 && <Aside isOpen={isOpen} handleIsOpen={handleIsOpen} />}
    </header>
  );
};

export default Header;
