/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';

const InputIcon = ({ src, clickHandler, alt, className, ariaLabel }) => {
  return (
    <img
      src={src}
      alt={alt}
      aria-label={ariaLabel}
      className={className}
      onClick={clickHandler}
    />
  );
};

export default InputIcon;

InputIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
