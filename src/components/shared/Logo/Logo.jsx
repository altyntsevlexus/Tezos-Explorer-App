import { Link } from 'react-router-dom';
import styles from './_Logo.module.scss';

const { logo } = styles;

const Logo = () => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <Link to="/blocks" className={logo}>
    Logo
  </Link>
);

export default Logo;
