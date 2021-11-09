import PropTypes from 'prop-types';
import styled from './_BlockInfo.module.scss';

const BlockInfo = ({ headers, block }) => {
  const copyHash = () => {
    navigator.clipboard.writeText(block.hash);
  };

  return (
    <div className={styled['block-info']}>
      {headers.map((header) => {
        return (
          <div className={styled['block-info__item']} key={header.key}>
            <p className={styled['block-info__header']}>{header.name}:</p>
            <div className={styled['block-info__value']}>
              {header.render ? header.render(block) : block[header.key]}
            </div>
            {header.name === 'Hash' ? (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
              <span className={styled['block-info__copy']} onClick={copyHash} />
            ) : null}
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
