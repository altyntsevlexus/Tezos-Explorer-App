import propTypes from 'prop-types';

const Breadcrumbs = ({ value }) => {
  return <p>{value}</p>;
};

Breadcrumbs.propTypes = {
  value: propTypes.string.isRequired,
};

export default Breadcrumbs;
