import PropTypes from 'prop-types';
import styled from './BlockInfo.module.scss';

const BlockInfo = ({ headers, block }) => {
  return (
    <div className={styled['block-info']}>
      {headers.map((header) => {
        return (
          <div className={styled['block-info__item']} key={header.key}>
            <p className={styled['block-info__header']}>{header.name}:</p>
            <div className={styled['block-info__value']}>
              {header.render ? header.render(block) : block[header.key]}
            </div>
          </div>
        );
      })}
    </div>
  );
};

BlockInfo.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  block: PropTypes.shape().isRequired,
};

export default BlockInfo;
