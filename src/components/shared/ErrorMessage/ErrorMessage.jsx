import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import { ReactComponent as Refresh } from '../../../images/refresh.svg';
import styles from './_ErrorMessage.module.scss';
import { errorMessage, errorStatus } from '../../../utils/errorsHandler';

const ErrorMessage = ({ retry }) => {
  if (errorStatus === 404) {
    return <Redirect to="/404" />;
  }

  return (
    <div className={styles['error-message']}>
      <p>{`${errorStatus}: ${errorMessage}`}</p>
      <Refresh onClick={retry} className={styles['error-message__icon']} />
    </div>
  );
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  retry: PropTypes.func,
};

ErrorMessage.defaultProps = {
  retry: () => null,
};
