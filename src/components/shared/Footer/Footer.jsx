import styles from './_Footer.module.scss';
import Contacts from '../Contacts';
import Copy from '../Copy';

const { footer } = styles;

const Footer = () => (
  <footer className={footer}>
    <Contacts />
    <Copy />
  </footer>
);

export default Footer;
