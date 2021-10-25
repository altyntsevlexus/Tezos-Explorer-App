import PropTypes from 'prop-types';
import styles from './_Button.module.scss';

const { button } = styles;

const Button = ({ buttonValue }) => (
  <button type="button" className={button}>
    {buttonValue}
  </button>
);

export default Button;

Button.propTypes = {
  buttonValue: PropTypes.string,
};

Button.defaultProps = {
  buttonValue: 'Login',
};
