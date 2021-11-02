import styles from './_Contacts.module.scss';
import Contact from '../Contact';

const { contacts } = styles;

const LINKS_CONFIG = [
  { id: 0, value: 'Home', href: '/home' },
  { id: 1, value: 'Blocks ', href: '/blocks' },
  { id: 2, value: 'Backers', href: '#' },
  { id: 3, value: 'Home', href: '/home' },
  { id: 4, value: 'Charts', href: '#' },
  { id: 5, value: 'Assets', href: '#' },
  { id: 6, value: 'Ecosystem', href: '#' },
  { id: 7, value: 'Home', href: '/home' },
  { id: 8, value: 'Home', href: '/home' },
];

const Contacts = () => (
  <div className={contacts}>
    <div className={styles.contacts__wrapper}>
      {LINKS_CONFIG.slice(0, 3).map((item) => {
        const { id, value, href } = item;

        return (
          <Contact
            href={href}
            value={value}
            className={styles.contacts__item}
            key={id}
          />
        );
      })}
    </div>
    <div className={styles.contacts__wrapper}>
      {LINKS_CONFIG.slice(3, 6).map((item) => {
        const { id, value, href } = item;

        return (
          <Contact
            href={href}
            value={value}
            className={styles.contacts__item}
            key={id}
          />
        );
      })}
    </div>
    <div className={styles.contacts__wrapper}>
      {LINKS_CONFIG.slice(6, 9).map((item) => {
        const { id, value, href } = item;

        return (
          <Contact
            href={href}
            value={value}
            className={styles.contacts__item}
            key={id}
          />
        );
      })}
    </div>
  </div>
);

export default Contacts;
