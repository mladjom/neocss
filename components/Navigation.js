// components/Navigation.js
import Link from 'next/link'; // For Next.js routing

const Navigation = () => {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="nav">
      <ul className="nav__list">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="nav__link"> 
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;