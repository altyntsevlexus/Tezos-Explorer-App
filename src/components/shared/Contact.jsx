import PropTypes from 'prop-types';

const Contact = ({ href, value, className }) => (
  <a href={href} className={className}>
    {value}
  </a>
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
