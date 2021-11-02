import { useEffect, useState } from 'react';
import styles from './_Navigation.module.scss';
import { useThemeState } from '../../../context/themeContext';

const NAVIGATION_CONFIG = [
  { id: 0, content: 'Home', path: '/home', withDropdown: false },
  { id: 1, content: 'Blocks', path: '/blocks', withDropdown: false },
  { id: 2, content: 'Bakers', path: '/backers', withDropdown: true },
  { id: 3, content: 'Chart', path: '/charts', withDropdown: false },
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
            const { id, content, path, withDropdown } = navItem;

            return (
              <li
                className={
                  withDropdown
                    ? styles['navigation__item--with-dropdown']
                    : styles.navigation__item
                }
                key={id}
              >
                <a href={path}>{content}</a>
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
