import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Title from '../Title';
import styles from './_BlockTitle.module.scss';
import { useBlockState } from '../../../contexts/blockContext';
import useCurrentLocation from '../../../hooks/useCurrentLocation';

const BlockTitle = ({ className }) => {
  const {
    block: { level },
    total,
  } = useBlockState();

  const { title } = useCurrentLocation();

  return (
    <div className={`${styles['block-title']} ${className}`}>
      {total === level ? (
        <span className={styles['block-title__item']}>{'<'}</span>
      ) : (
        <Link
          className={styles['block-title__item']}
          aria-label="Next block id"
          to={`/blocks/${level + 1}`}
        >
          {'<'}
        </Link>
      )}
      <div className={styles['block-title__wrapper']}>
        <Title
          value={`Block: ${title}`}
          className={styles['block-title__heading']}
        />
        <h3 className={styles['block-title__sub-title']}>Block information</h3>
      </div>
      <Link
        className={styles['block-title__item']}
        role="button"
        aria-label="Previous block id"
        to={`/blocks/${level - 1}`}
      >
        {'>'}
      </Link>
    </div>
  );
};

export default BlockTitle;

BlockTitle.propTypes = {
  className: PropTypes.string,
};

BlockTitle.defaultProps = {
  className: '',
};
