import propTypes from 'prop-types';

import styled from './BlockInfo.module.scss';

const BlockInfo = ({ headers, block }) => {
  return (
    <div className={styled.block}>
      {headers.map((header) => {
        return (
          <div className={styled.block__item} key={header.key}>
            <p className={styled.block__header}>{header.name}:</p>
            <p>{block[header.key]}</p>
          </div>
        );
      })}
    </div>
  );
};

BlockInfo.propTypes = {
  headers: propTypes.arrayOf(propTypes.shape()).isRequired,
  block: propTypes.shape().isRequired,
};

export default BlockInfo;
