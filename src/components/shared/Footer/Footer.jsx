import styles from './_Footer.module.scss';
import Contacts from '../Contacts';
import Copy from '../Copy';

const Footer = () => (
  <footer className={styles.footer}>
    <div className="wrapper">
      <Contacts />
      <Copy />
    </div>
  </footer>
);

export default Footer;
