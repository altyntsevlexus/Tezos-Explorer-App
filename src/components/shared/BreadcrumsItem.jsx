import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BreadcrumbsItem = ({ className, href, value }) => (
  <>
    <Link className={className} to={`/${href.toLowerCase()}`}>
      {value}
    </Link>
    <span className={className}>{' > '}</span>
  </>
);

export default BreadcrumbsItem;

BreadcrumbsItem.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
