import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import copy from '../../images/copy.png';

const DataWithCopy = ({ value }) => {
  const copyHash = () => {
    navigator.clipboard.writeText(value);

    toast.success('Copied!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <div>{value}</div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <img
        src={copy}
        alt="Copy hash"
        onClick={copyHash}
        className="custom-button"
      />
    </div>
  );
};

export default DataWithCopy;

DataWithCopy.propTypes = {
  value: PropTypes.string,
};

DataWithCopy.defaultProps = {
  value: '',
};
