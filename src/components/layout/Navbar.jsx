import { useState } from "react";
import { NavLink } from "react-router-dom";
import site from "../../data/site";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={closeMenu}>
          <img
            className="navbar__icon"
            src={site.branding.icon}
            alt=""
            aria-hidden="true"
          />

          <div className="navbar__divider" />

          <div className="navbar__brand-text">
            <span className="navbar__name">{site.author.name}</span>

            <span className="navbar__stories">Stories</span>
          </div>
        </NavLink>

        <nav
          className={`navbar__links ${isMenuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/books" onClick={closeMenu}>
            Archive
          </NavLink>
          <NavLink to="/events" onClick={closeMenu}>
            Events
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        <div className="navbar__actions">
          <ThemeToggle />

          <button
            className="navbar__toggle"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            ☰
          </button>
        </div>

      </div>
    </header>
  );
}
