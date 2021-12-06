/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import showPass from '../../../images/show_pass.svg';
import hidePass from '../../../images/hide_password.svg';
import styles from './Eye.module.scss';

const Eye = ({ isShown, handleSetIsShown }) => {
  return (
    <img
      src={isShown ? hidePass : showPass}
      alt="Show pass"
      aria-label="Show pass"
      className={styles.eye}
      onClick={handleSetIsShown}
    />
  );
};

export default Eye;

Eye.propTypes = {
  isShown: PropTypes.bool.isRequired,
  handleSetIsShown: PropTypes.func.isRequired,
};
