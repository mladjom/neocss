import React from 'react';
import PropTypes from 'prop-types';

const FormCheckbox = ({ label, error, success, required, ...props }) => (
    <div className="form__group">
        <label className="form__label">
            <input 
                type="checkbox" 
                className={`form__checkbox 
                    ${error ? 'form__checkbox--error' : ''} 
                    ${success ? 'form__checkbox--success' : ''}`
                } 
                {...props} 
            />
            {label && (
                <span>
                    {label} {required && <span className="form__required">*</span>}
                </span>
            )}
        </label>
        {error && (
            <div className="form__error">
                <span className="form__error-icon">!</span> {error}
            </div>
        )}
    </div>
);

FormCheckbox.propTypes = {
    label: PropTypes.string,
    error: PropTypes.string,
    success: PropTypes.bool,
    required: PropTypes.bool,
};

export default FormCheckbox;