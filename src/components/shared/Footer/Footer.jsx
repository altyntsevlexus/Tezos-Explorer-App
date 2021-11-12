import styles from './_Footer.module.scss';
import Contacts from '../Contacts';
import Copy from '../Copy';
import Logo from '../Logo';

const Footer = () => (
  <footer className={styles.footer}>
    <div className="wrapper">
      <Contacts />
      <div className={styles.footer__copy}>
        <Copy />
        <div className={styles.footer__logo}>
          <Logo />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
