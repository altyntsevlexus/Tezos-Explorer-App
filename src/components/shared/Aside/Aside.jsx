/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import Links from '../Links';
import styles from './Aside.module.scss';
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

Aside.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleIsOpen: PropTypes.func.isRequired,
};

export default Aside;
