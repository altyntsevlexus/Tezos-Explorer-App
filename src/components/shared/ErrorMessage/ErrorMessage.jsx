import PropTypes from 'prop-types';

import styles from './_ErrorMessage.module.scss';
import refresh from '../../../images/refresh.png';

const ErrorMessage = ({ message, retry }) => (
  <div className={styles['error-message']}>
    {message}
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
    <img
      src={refresh}
      alt="Try again"
      className="custom-button"
      onClick={retry}
    />
  </div>
);

export default ErrorMessage;

ErrorMessage.propTypes = {
  message: PropTypes.string,
  retry: PropTypes.func.isRequired,
};

ErrorMessage.defaultProps = {
  message: 'Server is unavailable',
};
