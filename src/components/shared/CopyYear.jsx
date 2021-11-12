import PropTypes from 'prop-types';

const Copy = ({ className }) => {
  const year = new Date().getFullYear();

  return <p className={className}>@ Copyright. Company name. {year}</p>;
};

export default Copy;

Copy.propTypes = {
  className: PropTypes.string,
};

Copy.defaultProps = {
  className: '',
};
