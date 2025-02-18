// components/Form/Input.js
export default function FormInput({ 
  label, 
  error, 
  success, 
  required, 
  ...props 
}) {
  return (
    <div className="form__group">
      {label && (
        <label className="form__label">
          {label}
          {required && <span className="form__required">*</span>}
        </label>
      )}
      
      <div className="form__input-wrapper">
        <input
          className={`form__input ${error ? 'form__input--error' : ''} 
                     ${success ? 'form__input--success' : ''}`}
          {...props}
        />
        
        {(error || success) && (
          <span className={`form__feedback ${error ? 'form__feedback--error' : 
                                           'form__feedback--success'}`}>
            {error ? '✕' : '✓'}
          </span>
        )}
      </div>

      {error && (
        <div className="form__error">
          <span className="form__error-icon">!</span>
          {error}
        </div>
      )}
    </div>
  );
}