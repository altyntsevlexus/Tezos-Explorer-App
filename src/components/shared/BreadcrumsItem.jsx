import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BreadcrumbsItem = ({ href, value }) => (
  <>
    <Link to={`/${href.toLowerCase()}`}>{value}</Link>
    <span>{' > '}</span>
  </>
);

export default BreadcrumbsItem;

BreadcrumbsItem.propTypes = {
  href: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
