import PropTypes from 'prop-types';
import style from './_Contact.module.scss';

const { contact } = style;

const Contact = ({ href, value, className }) => (
  <a href={href} className={` ${contact} ${className} `}>
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
