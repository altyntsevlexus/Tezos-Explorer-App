import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import styles from './_ErrorMessage.module.scss';
import refresh from '../../../images/refresh.png';
import { errorMessage, errorStatus } from '../../../utils/errorsHandler';

const ErrorMessage = ({ retry }) => {
  if (errorStatus === 404) {
    return <Redirect to="/404" />;
  }

  return (
    <div className={styles['error-message']}>
      {`${errorStatus}: ${errorMessage}`}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <img
        src={refresh}
        alt="Try again"
        className="custom-button"
        onClick={retry}
      />
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
