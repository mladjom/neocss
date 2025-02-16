// components/Toast.js
export default function Toast({ message, isVisible, onClose }) {
    return isVisible ? (
      <div className={`toast ${!isVisible ? 'toast--exit' : ''}`}>
        {message}
        <button onClick={onClose}>×</button>
      </div>
    ) : null;
  }