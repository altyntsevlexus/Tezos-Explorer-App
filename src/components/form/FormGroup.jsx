import PropTypes, { shape } from 'prop-types';
import { useState } from 'react';
import hide from '../../images/hide_password.svg';
import show from '../../images/show_pass.svg';
import Input from './Input';
import InputIcon from './InputIcon';
import FieldGroup from './FieldGroup';
/* eslint-disable no-nested-ternary */

const FormGroup = ({ formConfig, classForIcon }) => {
  return formConfig.map((input) => {
    const { id, type, label, placeholder, name, hidable } = input;
    const [isShown, setIsShown] = useState(type !== 'password');
    const src = isShown ? hide : show;
    const alt = isShown ? 'Hide value' : 'Show value';
    const handleIsPasswordShown = () => setIsShown(!isShown);
    const inputType =
      type === 'password'
        ? isShown
          ? 'text'
          : 'password'
        : hidable
        ? isShown
          ? type
          : 'password'
        : type;

    return (
      <FieldGroup label={label} name={name} key={label}>
        <Input
          name={name}
          type={inputType}
          placeholder={placeholder}
          id={id}
          icon={
            hidable && (
              <InputIcon
                src={src}
                clickHandler={handleIsPasswordShown}
                alt={alt}
                className={classForIcon}
              />
            )
          }
        />
      </FieldGroup>
    );
  });
};

export default FormGroup;

FormGroup.propTypes = {
  formConfig: PropTypes.arrayOf(shape()).isRequired,
  classForIcon: PropTypes.string.isRequired,
};
