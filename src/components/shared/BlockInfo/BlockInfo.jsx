import PropTypes from 'prop-types';

import Baker from '../Baker';

import styled from './BlockInfo.module.scss';

const BlockInfo = ({ headers, block }) => {
  return (
    <div className={styled.block}>
      {headers.map((header) => {
        return header.key === 'baker' ? (
          <div className={styled.block__item} key={header.key}>
            <p className={styled.block__header}>{header.name}:</p>
            <div className={styled.block__value}>
              <Baker value={block[header.key]} />
            </div>
          </div>
        ) : (
          <div className={styled.block__item} key={header.key}>
            <p className={styled.block__header}>{header.name}:</p>
            <p className={styled.block__value}>{block[header.key]}</p>
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
