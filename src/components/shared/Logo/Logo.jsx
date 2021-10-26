import styles from './_Logo.module.scss';

const { logo } = styles;

const Logo = () => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a href="#" className={logo}>
    Logo
  </a>
);

export default Logo;
