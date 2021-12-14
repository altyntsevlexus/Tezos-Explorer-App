import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import styles from './Input.module.scss';

const Input = ({ type, name, id, placeholder, icon }) => {
  const { errors, touched, handleChange, handleBlur } = useFormikContext();
  return (
    <div className={styles.input}>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        autoComplete="on"
        className={
          touched[`${id}`] && errors[`${id}`]
            ? `${styles.input__field} ${styles['input__field--error']}`
            : styles.input__field
        }
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {icon}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

Input.defaultProps = {
  icon: null,
};

export default Input;
