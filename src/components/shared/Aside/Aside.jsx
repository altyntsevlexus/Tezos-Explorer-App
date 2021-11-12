/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Links from '../Links';
import styles from './_Aside.module.scss';
import { useNavigationState } from '../../../contexts/navigationC';
import Navigation from '../Navigation';
import Copy from '../Copy';

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
        <Navigation isAside />
        <Links />
        <Copy className={styles.aside__copy} />
      </div>
    </>
  );
};

export default Aside;
