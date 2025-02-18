import React from 'react';
import PropTypes from 'prop-types';

export function FormTextarea({ label, error, success, required, ...props }) {
  return (
    <div className="form__group">
      {label && (
        <label className="form__label">
          {label}
          {required && <span className="form__required">*</span>}
        </label>
      )}

      <textarea
        className={`form__textarea ${error ? 'form__textarea--error' : ''} ${success ? 'form__textarea--success' : ''}`}
        {...props}
      />

      {error && (
        <div className="form__error">
          <span className="form__error-icon">!</span>
          {error}
        </div>
      )}
    </div>
  );
}

FormTextarea.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  success: PropTypes.bool,
  required: PropTypes.bool,
};

export default FormTextarea;