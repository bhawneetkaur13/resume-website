import React from 'react';
import PropTypes from 'prop-types';
import './formInput.css';

function FormInput({ label, id, type, required, ...rest }) {
  return (
    <section className='contact-input-section'>
      <label htmlFor={id} className='form-label'>
        {label}{required && <span className='required-asterisk'>*</span>}
      </label>
      <input id={id} type={type} {...rest} className='form-input' required={required} />
    </section>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'file']).isRequired,
  required: PropTypes.bool,
};

export default FormInput;
