// Form Select
export default function FormSelect({ label, error, success, required, options, ...props }) {
    return (
      <div className="form__group">
        {label && (
          <label className="form__label">
            {label}
            {required && <span className="form__required">*</span>}
          </label>
        )}
  
        <select
          className={`form__select ${error ? 'form__select--error' : ''} ${success ? 'form__select--success' : ''}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
  
        {error && (
          <div className="form__error">
            <span className="form__error-icon">!</span>
            {error}
          </div>
        )}
      </div>
    );
  }