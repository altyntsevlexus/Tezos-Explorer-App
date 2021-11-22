import { toast } from 'react-toastify';

const errorNotifications = {
  500: 'Internal error',
  404: 'Page not found',
  400: 'Bad request',
};

const handleError = (error) => {
  // eslint-disable-next-line no-console
  console.error(error);

  const { status } = error.response;

  const errorText =
    `${status}` in errorNotifications
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
