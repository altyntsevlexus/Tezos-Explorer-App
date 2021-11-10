import PropTypes from 'prop-types';
import copy from '../../images/copy.png';

const DataWithCopy = ({ value }) => {
  const copyHash = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div>
      <div>{value}</div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <img src={copy} alt="Copy hash" onClick={copyHash} />
    </div>
  );
};

export default DataWithCopy;

DataWithCopy.propTypes = {
  value: PropTypes.string.isRequired,
};
