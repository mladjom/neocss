// components/Button.js
export default function Button({ 
    variant = 'primary',
    size = 'base',
    children,
    ...props 
  }) {
    return (
      <button 
        className={`btn btn--${variant} ${size !== 'base' ? `btn--${size}` : ''}`}
        {...props}
      >
        {children}
      </button>
    )
  }