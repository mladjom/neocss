// components/Modal.js
export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    
    return (
      <div className="modal__backdrop" onClick={onClose}>
        <div 
          className="modal__content"
          onClick={e => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    );
  }