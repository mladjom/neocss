// components/AnimatedList.js
export default function AnimatedList({ items }) {
    return (
      <ul className="nav__list">
        {items.map((item, index) => (
          <li key={index} className="nav__item">
            {item}
          </li>
        ))}
      </ul>
    );
  }