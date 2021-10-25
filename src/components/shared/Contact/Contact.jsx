import PropTypes from 'prop-types';
import style from './_Contact.module.scss';

const { contact } = style;

const Link = ({ href, value }) => (
  <a href={href} className={contact}>
    {value}
  </a>
);

export default Link;

Link.propTypes = {
  href: PropTypes.string,
  value: PropTypes.string,
};

Link.defaultProps = {
  href: '#',
  value: 'Link',
};
