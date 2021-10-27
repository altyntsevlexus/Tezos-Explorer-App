import useCurrentLocation from '../../../hooks/useCurrentLocation';

import styled from './_Breadcrumbs.module.scss';

const Breadcrumbs = () => {
  const { breadcrumbs } = useCurrentLocation();

  return <p className={styled.breadcrumbs}>{breadcrumbs}</p>;
};

export default Breadcrumbs;
