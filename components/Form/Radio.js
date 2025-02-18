import React from 'react';
import PropTypes from 'prop-types';

export function FormRadio({ label, error, success, required, ...props }) {
  return (
    <div className="form__group">
      <label className="form__label">
        <input 
          type="radio" 
          className={`form__radio ${error ? 'form__radio--error' : ''} ${success ? 'form__radio--success' : ''}`} 
          {...props} 
        />
        {label && <span>{label} {required && <span className="form__required">*</span>}</span>}
      </label>
      {error && (
        <div className="form__error">
          <span className="form__error-icon">!</span>
          {error}
        </div>
      )}
    </div>
  );
}

FormRadio.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  success: PropTypes.bool,
  required: PropTypes.bool,
};

export default FormRadio;
  