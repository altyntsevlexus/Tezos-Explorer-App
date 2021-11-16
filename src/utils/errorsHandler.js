import { toast } from 'react-toastify';

const errorNotifications = {
  404: 'Page not found',
};

const errorStatuses = Object.keys(errorNotifications);

const handleError = (error) => {
  // eslint-disable-next-line no-console
  console.error(error);

  const { status } = error.response;

  const errorText = errorStatuses.includes(`${status}`)
    ? errorNotifications[`${status}`]
    : 'Unknown Error';

  return toast.error(errorText, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default handleError;
