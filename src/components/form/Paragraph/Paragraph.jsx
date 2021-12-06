import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Paragraph.module.scss';

const Paragraph = ({ text, linkText, linkTo }) => (
  <p className={styles.paragraph}>
    <span className={styles.paragraph__text}>{text}</span>
    <Link to={`/${linkTo}`} className={styles.paragraph__link}>
      {linkText}
    </Link>
  </p>
);

export default Paragraph;

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  linkTo: PropTypes.string,
};

Paragraph.defaultProps = {
  linkText: '',
  linkTo: '',
};
