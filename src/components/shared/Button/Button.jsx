import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './_Button.module.scss';

const Button = ({ buttonValue }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() =>
    window.addEventListener('resize', () =>
      setViewportWidth(window.innerWidth),
    ),
  );

  if (viewportWidth < 830) {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a className={styles.button__link} href="/login" aria-label="Login" />
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
