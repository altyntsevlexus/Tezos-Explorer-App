import styles from './_Footer.module.scss';
import Contacts from '../Contacts';
import Copy from '../Copy';

const Footer = () => (
  <footer className={styles.footer}>
    <Contacts />
    <Copy />
  </footer>
);

export default Footer;
