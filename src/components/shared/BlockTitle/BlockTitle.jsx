import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Title from '../Title';
import styles from './_BlockTitle.module.scss';
import { useBlockState } from '../../../contexts/blockContext';

const BlockTitle = ({ content, className }) => {
  const { handleBlock } = useBlockState();
  const blockId = content.split(',').join('');

  return (
    <div className={`${styles['block-title']} ${className}`}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus,jsx-a11y/anchor-is-valid */}
      <Link
        className={styles['block-title__items']}
        onClick={() => handleBlock(+blockId + 1)}
        aria-label="Next block id"
        to={`/blocks/${+blockId + 1}`}
      >
        {'<'}
      </Link>
      <div className={styles['block-title__wrapper']}>
        <Title
          value={`Block: ${content}`}
          className={styles['block-title__title']}
        />
        <h3 className={styles['block-title__sub-title']}>Block information</h3>
      </div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus,jsx-a11y/anchor-is-valid */}
      <Link
        className={styles['block-title__items']}
        onClick={() => handleBlock(+blockId - 1)}
        role="button"
        aria-label="Previous block id"
        to={`/blocks/${+blockId - 1}`}
      >
        {'>'}
      </Link>
    </div>
  );
};

export default BlockTitle;

BlockTitle.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

BlockTitle.defaultProps = {
  className: '',
};
