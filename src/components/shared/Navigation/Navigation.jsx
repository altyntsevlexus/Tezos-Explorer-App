import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';
import { useThemeState } from '../../../context/themeContext';

const NAVIGATION_CONFIG = [
  { content: 'Home', path: '/home', withDropdown: false },
  { content: 'Blocks', path: '/blocks', withDropdown: false },
  { content: 'Bakers', path: '/backers', withDropdown: true },
  { content: 'Chart', path: '/charts', withDropdown: false },
];

const Navigation = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const { theme, setTheme } = useThemeState();
  const themeNow = `${theme[0].toUpperCase()}${theme.slice(1)}`;
  const visible = isOpen ? styles['navigation__list--is-open'] : '';

  useEffect(() => {
    const newTheme = isLightTheme ? 'light' : 'dark';

    setTheme(newTheme);
  }, [isLightTheme]);

  return (
    <>
      <nav className={styles.navigation}>
        <ul className={`${styles.navigation__list} ${visible}`}>
          {NAVIGATION_CONFIG.map((navItem) => {
            const { content, path, withDropdown } = navItem;

            return (
              <li
                className={
                  withDropdown
                    ? styles['navigation__item--with-dropdown']
                    : styles.navigation__item
                }
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
