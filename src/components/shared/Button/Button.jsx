import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './_Button.module.scss';

const Button = ({ buttonValue }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (width < 834) {
    return (
      <Link className={styles.button__link} to="/login" aria-label="Login" />
    );
  }

  return (
    <button type="button" className={styles.button}>
      {buttonValue}
    </button>
  );
};

export default Button;

Button.propTypes = {
  buttonValue: PropTypes.string,
};

Button.defaultProps = {
  buttonValue: 'Login',
};
