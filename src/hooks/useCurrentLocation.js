import { useLocation } from 'react-router';

const useCurrentLocation = () => {
  const { pathname } = useLocation();

  let breadcrumbs;

  if (pathname === '/home') {
    breadcrumbs = ['home'];
  } else {
    breadcrumbs = pathname.split('/');
    breadcrumbs[0] = 'home';
    breadcrumbs = breadcrumbs.map((i) => {
      if (Number(i)) {
        return Number(i).toLocaleString();
      }
      return i;
    });
  }

  console.log(breadcrumbs);

  const title = breadcrumbs[breadcrumbs.length - 1];

  return { breadcrumbs, title };
};

export default useCurrentLocation;
