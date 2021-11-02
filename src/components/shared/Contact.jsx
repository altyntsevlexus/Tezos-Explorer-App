import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Contact = ({ href, value, className }) => (
  <Link to={href} className={className}>
    {value}
  </Link>
);

export default Contact;

Contact.propTypes = {
  href: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Contact.defaultProps = {
  className: '',
};
