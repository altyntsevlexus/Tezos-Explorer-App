import { useLocation } from 'react-router';

const useCurrentLocation = () => {
  const { pathname } = useLocation();

  let breadcrumbs = pathname.split('/');

  breadcrumbs[0] = 'Home';

  breadcrumbs = breadcrumbs.map((i) => {
    if (Number(i)) {
      return Number(i).toLocaleString();
    }
    return i.charAt(0).toUpperCase() + i.slice(1);
  });

  const title = breadcrumbs[breadcrumbs.length - 1];

  return { breadcrumbs, title };
};

export default useCurrentLocation;
