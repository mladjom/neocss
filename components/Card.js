// components/Card.js
export default function Card({ header, footer, children }) {
    return (
      <div className="card">
        {header && <div className="card__header">{header}</div>}
        <div className="card__body">{children}</div>
        {footer && <div className="card__footer">{footer}</div>}
      </div>
    )
  }