import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './_AsideNav.module.scss';

import { ReactComponent as Home } from '../../../images/home.svg';
import { ReactComponent as Blocks } from '../../../images/block.svg';
import { ReactComponent as Bakers } from '../../../images/backers.svg';
import { ReactComponent as Chart } from '../../../images/charts.svg';
import { ReactComponent as Ecosystem } from '../../../images/ecosystem.svg';

const NAVIGATION_CONFIG = [
  { content: 'Home', path: '/home', withDropdown: false, Icon: Home },
  { content: 'Blocks', path: '/blocks', withDropdown: true, Icon: Blocks },
  { content: 'Bakers', path: '/backers', withDropdown: true, Icon: Bakers },
  { content: 'Chart', path: '/charts', withDropdown: false, Icon: Chart },
  {
    content: 'Ecosystem',
    path: '/Ecosystem',
    withDropdown: true,
    Icon: Ecosystem,
  },
];

const AsideNav = ({ className }) => (
  <nav className={`${styles['aside-nav']} ${className}`}>
    <ul className={styles['aside-nav__list']}>
      {NAVIGATION_CONFIG.map((item) => {
        const { content, path, withDropdown, Icon } = item;

        return (
          <li className={styles['aside-nav__item']} key={content}>
            <Icon className={styles['aside-nav__icon']} />
            <Link
              to={path}
              className={
                withDropdown
                  ? styles['aside-nav__anchor--with-dropdown']
                  : styles['aside-nav__anchor']
              }
            >
              {content}
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default AsideNav;

AsideNav.propTypes = {
  className: PropTypes.string,
};

AsideNav.defaultProps = {
  className: '',
};
