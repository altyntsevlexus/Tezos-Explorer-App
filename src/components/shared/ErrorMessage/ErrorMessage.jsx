import PropTypes from 'prop-types';

import styles from './_ErrorMessage.module.scss';

const ErrorMessage = ({ message }) => (
  <div className={styles['error-massage']}>{message}</div>
);

export default ErrorMessage;

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: 'Server is unavailable',
};
