import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import useCurrentLocation from '../../../hooks/useCurrentLocation';

import styles from './_Breadcrumbs.module.scss';

const Breadcrumbs = () => {
  const { breadcrumbs } = useCurrentLocation();

  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs.map((link, index) => {
        if (index === breadcrumbs.length - 1) {
          return <span key="lastItem">{link}</span>;
        }

        return (
          <Fragment key={link}>
            <Link to={`/${link.toLowerCase()}`}>{link}</Link>
            <span>{' > '}</span>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
