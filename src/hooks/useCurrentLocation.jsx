import { useLocation } from 'react-router';

const useCurrentLocation = () => {
  const { pathname } = useLocation();

  let splitted = pathname.split('/');

  splitted[0] = 'Home';

  splitted = splitted.map((i) => {
    if (Number(i)) {
      return Number(i).toLocaleString();
    }
    return i.charAt(0).toUpperCase() + i.slice(1);
  });

  console.log(splitted);

  const breadcrumbs = splitted.join(' > ');
  const title = splitted[splitted.length - 1];

  return { breadcrumbs, title };
};

export default useCurrentLocation;
