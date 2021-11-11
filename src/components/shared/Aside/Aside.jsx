import Links from '../Links';
import styles from './_Aside.module.scss';
import AsideNav from '../AsideNav';
import { useNavigationState } from '../../../contexts/navigationC';

const year = new Date().getFullYear();

const Aside = () => {
  const { isOpen, setIsOpen } = useNavigationState();

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <aside
        className={
          isOpen ? `${styles['aside--opened']} ${styles.aside}` : styles.aside
        }
        onClick={() => setIsOpen(!isOpen)}
      />
      <div
        className={
          isOpen
            ? `${styles['aside__wrapper--opened']} ${styles.aside__wrapper}`
            : styles.aside__wrapper
        }
      >
        <AsideNav />
        <Links />
        <p className={styles.aside__copy}>@ Copyright. Company name. {year}</p>
      </div>
    </>
  );
};

export default Aside;
