import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import styles from './Header.module.scss';
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

  const [width, setWidth] = useState(window.innerWidth);

  // for testing
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  // for testing end

  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.header__wrapper}`}>
        <Logo />
        <div className={styles.header__navigation}>
          {width >= 834 ? (
            <Navigation />
          ) : (
            <button
              type="button"
              className={
                isOpen
                  ? `${styles.header__burger} ${styles['header__burger--clicked']}`
                  : styles.header__burger
              }
              onClick={handleIsOpen}
              aria-label="Open"
            />
          )}
          <Button />
        </div>
      </div>
      {width <= 834 && <Aside isOpen={isOpen} handleIsOpen={handleIsOpen} />}
    </header>
  );
};

export default Header;
