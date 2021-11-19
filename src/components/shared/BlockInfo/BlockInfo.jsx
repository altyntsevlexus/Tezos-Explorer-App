import PropTypes from 'prop-types';
import styled from './_BlockInfo.module.scss';
import { useBlockState } from '../../../contexts/blockContext';

const BlockInfo = ({ headers, block }) => {
  const { isLoading } = useBlockState();

  return (
    <div className={styled['block-info']}>
      {isLoading ? (
        <div className={styled['block-info__loader']}>Loading...</div>
      ) : (
        headers.map((header) => {
          return (
            <div className={styled['block-info__item']} key={header.key}>
              <p className={styled['block-info__header']}>{header.name}:</p>
              <div className={styled['block-info__value']}>
                {header.render ? header.render(block) : block[header.key]}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

BlockInfo.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  block: PropTypes.shape().isRequired,
};

export default BlockInfo;
