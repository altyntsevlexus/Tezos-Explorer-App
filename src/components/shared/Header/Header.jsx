import { useState } from 'react';

import styles from './_Header.module.scss';
import Logo from '../Logo';
import Button from '../Button';
import Navigation from '../Navigation';
import Aside from '../Aside/Aside';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const size = window.innerWidth;

  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.header__wrapper}`}>
        <Logo />
        <div className={styles.header__navigation}>
          <Navigation isOpen={isOpen} handleIsOpen={setIsOpen} />
          <Button />
        </div>
      </div>
      {size <= 834 && <Aside isOpen={isOpen} handleIsOpen={setIsOpen} />}
    </header>
  );
};

export default Header;
