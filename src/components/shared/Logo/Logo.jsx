import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

const Logo = () => (
  <Link to="/blocks" className={styles.logo}>
    TezEx
  </Link>
);

export default Logo;
