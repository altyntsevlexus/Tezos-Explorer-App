import PropTypes from 'prop-types';
import styles from './_Title.module.scss';

const { title } = styles;

const Title = ({ value }) => <h1 className={title}>{value}</h1>;

export default Title;

Title.propTypes = {
  value: PropTypes.string,
};

Title.defaultProps = {
  value: 'Title',
};
