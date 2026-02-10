import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.scss";
import brandLogo from "../../assets/images/LogoDark.png";
// import AnimatedButton from "../ui/AnimatedButton";
import FlairButton from "../ui/FlairButton";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${menuOpen ? "menu-open" : ""}`}>
      <div className="container header-inner">

        {/* Logo */}
        <div className="logo">
          <NavLink to="/" onClick={closeMenu}>
            <img src={brandLogo} alt="Brand Logo" />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <NavLink to="/" end><span>Home</span><span>Home</span></NavLink>
          <NavLink to="/services"><span>Services</span><span>Services</span></NavLink>
          <NavLink to="/stylists"><span>Stylists</span><span>Stylists</span></NavLink>
          <NavLink to="/gallery"><span>Gallery</span><span>Gallery</span></NavLink>
          <NavLink to="/admin"><span>Admin</span><span>Admin</span></NavLink>
        </nav>

        {/* CTA (Desktop) */}
        <div className="header-cta desktop-nav">
          <NavLink to="/booking">
            {/* <AnimatedButton>Book Appointment</AnimatedButton> */}
            <FlairButton label="Book Appointment" />
          </NavLink>
        </div>
        

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <nav className="mobile-nav">
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
        <NavLink to="/stylists" onClick={closeMenu}>Stylists</NavLink>
        <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
        <NavLink to="/admin" onClick={closeMenu}>Admin</NavLink>

        <NavLink
          to="/booking"
          className="btn primary mobile-cta"
          onClick={closeMenu}
        >
          Book Appointment
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
