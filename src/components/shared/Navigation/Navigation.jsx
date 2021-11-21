import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './_Navigation.module.scss';
import { useThemeState } from '../../../contexts/themeContext';

import { ReactComponent as Home } from '../../../images/home.svg';
import { ReactComponent as Blocks } from '../../../images/block.svg';
import { ReactComponent as Bakers } from '../../../images/backers.svg';
import { ReactComponent as Chart } from '../../../images/charts.svg';
import { ReactComponent as Ecosystem } from '../../../images/ecosystem.svg';

const NAVIGATION_CONFIG = [
  { content: 'Home', path: '/home', withDropdown: false },
  { content: 'Blocks', path: '/blocks', withDropdown: false },
  { content: 'Bakers', path: '/backers', withDropdown: true },
  { content: 'Chart', path: '/charts', withDropdown: false },
];

const ASIDE_CONFIG = [
  { content: 'Home', path: '/home', withDropdown: false, Icon: Home },
  { content: 'Blocks', path: '/blocks', withDropdown: true, Icon: Blocks },
  { content: 'Bakers', path: '/backers', withDropdown: true, Icon: Bakers },
  { content: 'Chart', path: '/charts', withDropdown: false, Icon: Chart },
  {
    content: 'Ecosystem',
    path: '/ecosystem',
    withDropdown: true,
    Icon: Ecosystem,
  },
];

const Navigation = ({ isAside, handleIsOpen, isOpen }) => {
  const { theme, setTheme } = useThemeState();
  const themeNow = `${theme[0].toUpperCase()}${theme.slice(1)}`;

  const [isLightTheme, setIsLightTheme] = useState(true);
  const handleIsLightTheme = () => setIsLightTheme(!isLightTheme);

  useEffect(() => {
    const newTheme = isLightTheme ? 'light' : 'dark';

    setTheme(newTheme);
  }, [isLightTheme]);

  if (isAside) {
    return (
      <nav className={`${styles['aside-nav']}`}>
        <ul className={styles['aside-nav__list']}>
          {ASIDE_CONFIG.map((item) => {
            const { content, path, withDropdown, Icon } = item;

            return (
              <li className={styles['aside-nav__item']} key={content}>
                <Icon className={styles['aside-nav__icon']} />
                <Link
                  to={path}
                  className={withDropdown ? 'arrow arrow--d--down' : null}
                >
                  {content}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return (
    <>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__list}>
          {NAVIGATION_CONFIG.map((navItem) => {
            const { content, path, withDropdown } = navItem;

            return (
              <li
                className={withDropdown ? 'arrow arrow--d--down' : null}
                key={content}
              >
                <Link to={path}>{content}</Link>
              </li>
            );
          })}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <li onClick={handleIsLightTheme}>{themeNow}</li>
        </ul>
      </nav>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className={
          isOpen
            ? `${styles.navigation__burger} ${styles['navigation__burger--clicked']}`
            : styles.navigation__burger
        }
        onClick={handleIsOpen}
      />
    </>
  );
};

export default Navigation;

Navigation.propTypes = {
  isAside: PropTypes.bool,
  isOpen: PropTypes.bool,
  handleIsOpen: PropTypes.func,
};

Navigation.defaultProps = {
  isAside: false,
  isOpen: false,
  handleIsOpen: () => null,
};
