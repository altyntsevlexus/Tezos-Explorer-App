import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './_Navigation.module.scss';
import { useThemeState } from '../../../contexts/themeContext';
import { useNavigationState } from '../../../contexts/navigationC';

const NAVIGATION_CONFIG = [
  { content: 'Home', path: '/home', withDropdown: false },
  { content: 'Blocks', path: '/blocks', withDropdown: false },
  { content: 'Bakers', path: '/backers', withDropdown: true },
  { content: 'Chart', path: '/charts', withDropdown: false },
];

const Navigation = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const { theme, setTheme } = useThemeState();
  const { isOpen, setIsOpen } = useNavigationState();
  const themeNow = `${theme[0].toUpperCase()}${theme.slice(1)}`;

  useEffect(() => {
    const newTheme = isLightTheme ? 'light' : 'dark';

    setTheme(newTheme);
  }, [isLightTheme]);

  return (
    <>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__list}>
          {NAVIGATION_CONFIG.map((navItem) => {
            const { content, path, withDropdown } = navItem;

            return (
              <li
                className={withDropdown ? styles.navigation__dropdown : null}
                key={content}
              >
                <Link to={path}>{content}</Link>
              </li>
            );
          })}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <li onClick={() => setIsLightTheme(!isLightTheme)}>{themeNow}</li>
        </ul>
      </nav>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className={styles.navigation__burger}
        onClick={() => setIsOpen(!isOpen)}
      />
    </>
  );
};

export default Navigation;
