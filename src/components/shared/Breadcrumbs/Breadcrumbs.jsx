import useCurrentLocation from '../../../hooks/useCurrentLocation';

import BreadcrumbsItem from '../BreadcrumsItem';

import styles from './_Breadcrumbs.module.scss';

const Breadcrumbs = () => {
  const { breadcrumbs } = useCurrentLocation();

  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs.map((link, index) => {
        if (index === breadcrumbs.length - 1) {
          return <span key="lastItem">{link}</span>;
        }

        return <BreadcrumbsItem href={link} value={link} key={link} />;
      })}
    </div>
  );
};

export default Breadcrumbs;
