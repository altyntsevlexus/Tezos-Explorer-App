import styles from './_Contacts.module.scss';
import Contact from '../Contact';

const { contacts } = styles;

const Contacts = () => (
  <div className={contacts}>
    <Contact />
  </div>
);

export default Contacts;
