import useCurrentLocation from '../../hooks/useCurrentLocation';

import BreadcrumbsItem from './BreadcrumsItem';

const Breadcrumbs = () => {
  const { breadcrumbs } = useCurrentLocation();

  return (
    <div>
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
