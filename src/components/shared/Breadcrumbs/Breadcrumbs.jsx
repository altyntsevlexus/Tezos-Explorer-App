import useCurrentLocation from '../../../hooks/useCurrentLocation';

import styled from './_Breadcrumbs.module.scss';
import BreadcrumbsItem from '../BreadcrumsItem';

const Breadcrumbs = () => {
  const { breadcrumbs } = useCurrentLocation();
  const arr = breadcrumbs.split(' > ');

  return arr.map((link, index) => {
    if (index === arr.length - 1) {
      return (
        <span className={styled.breadcrumbs} key="lastItem">
          {link}
        </span>
      );
    }

    return (
      <BreadcrumbsItem
        href={link}
        className={styled.breadcrumbs}
        value={link}
        key={link}
      />
    );
  });
};

export default Breadcrumbs;
