import { Link } from 'react-router-dom';
import styles from './Links.module.scss';

const LINKS_CONFIG = [
  { content: 'Settings', path: '#' },
  { content: 'Blog', path: '#' },
  { content: 'Privacy', path: '#' },
  { content: 'Help', path: '#' },
];

const Links = () => (
  <ul className={styles.links}>
    {LINKS_CONFIG.map((item) => {
      const { content, path } = item;

      return (
        <li className={styles.links__item} key={content}>
          <Link to={path} key={path} className={styles.links__anchor}>
            {content}
          </Link>
        </li>
      );
    })}
  </ul>
);

export default Links;
