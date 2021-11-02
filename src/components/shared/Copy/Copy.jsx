import styles from './_Copy.module.scss';
import Logo from '../Logo/Logo';

const { copy } = styles;

const Copy = () => (
  <div className={copy}>
    <span>@ Copyright. Company name. 2021</span>
    <Logo />
  </div>
);

export default Copy;
