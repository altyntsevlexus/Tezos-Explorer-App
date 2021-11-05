import PropTypes from 'prop-types';

import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({ message }) => (
  <div className={styles['error-message']}>{message}</div>
);

export default ErrorMessage;

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: 'Server is unavailable',
};
