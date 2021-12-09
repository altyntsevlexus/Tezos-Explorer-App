import styles from './Contacts.module.scss';
import Contact from '../Contact';

const LINKS_CONFIG = [
  { value: 'Home', href: '/home' },
  { value: 'Blocks ', href: '/blocks' },
  { value: 'Backers', href: '#' },
  { value: 'Home2', href: '/home' },
  { value: 'Charts', href: '#' },
  { value: 'Assets', href: '#' },
  { value: 'Ecosystem', href: '#' },
  { value: 'Home3', href: '/home' },
  { value: 'Home4', href: '/home' },
];

const Contacts = () => (
  <div className={styles.contacts}>
    <div className={styles.contacts__wrapper}>
      {LINKS_CONFIG.slice(0, 3).map((item) => {
        const { value, href } = item;

        return (
          <Contact
            href={href}
            value={value}
            className={styles.contacts__item}
            key={value}
          />
        );
      })}
    </div>
    <div className={styles.contacts__wrapper}>
      {LINKS_CONFIG.slice(3, 6).map((item) => {
        const { value, href } = item;

        return (
          <Contact
            href={href}
            value={value}
            className={styles.contacts__item}
            key={value}
          />
        );
      })}
    </div>
    <div className={styles.contacts__wrapper}>
      {LINKS_CONFIG.slice(6, 9).map((item) => {
        const { value, href } = item;

        return (
          <Contact
            href={href}
            value={value}
            className={styles.contacts__item}
            key={value}
          />
        );
      })}
    </div>
  </div>
);

export default Contacts;
