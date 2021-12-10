/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';

const InputIcon = ({ src, clickHandler, alt, className }) => {
  return (
    <img src={src} onClick={clickHandler} alt={alt} className={className} />
  );
};

export default InputIcon;

InputIcon.propTypes = {
  src: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
