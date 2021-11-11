/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Links from '../Links';
import styles from './_Aside.module.scss';
import AsideNav from '../AsideNav';
import { useNavigationState } from '../../../contexts/navigationC';

const year = new Date().getFullYear();

const Aside = () => {
  const { isOpen, setIsOpen } = useNavigationState();

  return (
    <>
      {isOpen ? (
        <aside className={styles.aside} onClick={() => setIsOpen(!isOpen)} />
      ) : null}
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
