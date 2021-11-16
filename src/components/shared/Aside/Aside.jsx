/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Links from '../Links';
import styles from './_Aside.module.scss';
import Navigation from '../Navigation';
import Copy from '../Copy';

const Aside = ({ isOpen, handleIsOpen }) => {
  return (
    <aside
      onClick={handleIsOpen}
      className={
        isOpen ? `${styles['aside--opened']} ${styles.aside}` : styles.aside
      }
    >
      <div
        className={
          isOpen
            ? `${styles['aside__wrapper--opened']} ${styles.aside__wrapper}`
            : styles.aside__wrapper
        }
      >
        <Navigation isAside />
        <Links />
        <div className={styles.aside__copy}>
          <Copy />
        </div>
      </div>
    </aside>
  );
};

export default Aside;
