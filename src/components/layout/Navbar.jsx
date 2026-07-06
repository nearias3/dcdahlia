// src/components/layout/Navbar.jsx

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <NavLink to="/">D.C. Dahlia</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
