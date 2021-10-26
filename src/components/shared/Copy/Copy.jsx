import styles from './_Copy.module.scss';
import Logo from '../Logo';

const { copy, copy__text } = styles;

const Copy = () => (
  <div className={copy}>
    <span className={copy__text}>@ Copyright. Company name. 2021</span>
    <Logo />
  </div>
);

export default Copy;
