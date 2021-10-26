import styles from './_Contacts.module.scss';
import Contact from '../Contact';

const { contacts } = styles;

const LINKS_CONFIG = [
  { id: 0, value: 'Link', href: '#' },
  { id: 1, value: 'Link', href: '#' },
  { id: 2, value: 'Link', href: '#' },
  { id: 3, value: 'Link', href: '#' },
  { id: 4, value: 'Link', href: '#' },
  { id: 5, value: 'Link', href: '#' },
  { id: 6, value: 'Link', href: '#' },
  { id: 7, value: 'Link', href: '#' },
  { id: 8, value: 'Link', href: '#' },
];

const Contacts = () => (
  <div className={contacts}>
    <div className={styles.contacts__item}>
      {LINKS_CONFIG.slice(0, 3).map((item) => {
        const { id, value, href } = item;

        return <Contact href={href} value={value} key={id} />;
      })}
    </div>{' '}
    <div className={styles.contacts__item}>
      {LINKS_CONFIG.slice(3, 6).map((item) => {
        const { id, value, href } = item;

        return <Contact href={href} value={value} key={id} />;
      })}
    </div>
    <div className={styles.contacts__item}>
      {LINKS_CONFIG.slice(6, 9).map((item) => {
        const { id, value, href } = item;

        return <Contact href={href} value={value} key={id} />;
      })}
    </div>
  </div>
);

export default Contacts;
