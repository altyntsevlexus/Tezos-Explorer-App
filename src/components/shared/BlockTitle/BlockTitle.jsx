import PropTypes from 'prop-types';
import Title from '../Title';
import styles from './BlockTitle.module.scss';

const BlockTitle = ({ content, className }) => (
  <div className={`${styles['block-title']} ${className}`}>
    <div className={styles['block-title__items']}>{'<'}</div>
    <div className={styles['block-title__wrapper']}>
      <Title
        value={`Block: ${content}`}
        className={styles['block-title__title']}
      />
      <h3 className={styles['block-title__sub-title']}>Block information</h3>
    </div>
    <div className={styles['block-title__items']}>{'>'}</div>
  </div>
);

export default BlockTitle;

BlockTitle.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

BlockTitle.defaultProps = {
  className: '',
};
