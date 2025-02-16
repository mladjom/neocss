// components/Header.js
import Logo from "@/components/Logo";
import Navigation from  "@/components/Navigation";

export default function Header() {
    return (
      <header className="header">
        <div className="header__container">
          <Logo />
          <nav className="header__nav">
            <Navigation />
          </nav>
        </div>
      </header>
    )
  }