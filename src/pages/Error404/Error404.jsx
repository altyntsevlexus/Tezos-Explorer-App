import { Link } from 'react-router-dom';
import styles from './error404.module.scss';

const Error404 = () => (
  <div className={styles.error}>
    <h1 className={`wrapper__title ${styles.error__code}`}>404</h1>
    <p className={styles.error__text}>
      Sorry, the page you’re looking for can’t be found
    </p>
    <Link to="/blocks" className={styles.error__button}>
      Home page
    </Link>
  </div>
);

export default Error404;
