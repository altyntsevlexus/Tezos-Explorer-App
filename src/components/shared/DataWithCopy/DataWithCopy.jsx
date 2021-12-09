import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ReactComponent as Icon } from '../../../images/copy.svg';
import styles from './DataWithCopy.module.scss';

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
    value && (
      <div className={styles.copy}>
        <p>{value}</p>
        <button type="button" onClick={copyHash} className={styles.copy__icon}>
          <Icon />
        </button>
      </div>
    )
  );
};

export default DataWithCopy;

DataWithCopy.propTypes = {
  value: PropTypes.string,
};

DataWithCopy.defaultProps = {
  value: '',
};
