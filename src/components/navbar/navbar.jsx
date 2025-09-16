// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/image/logo3.jpg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <h1 className="navbar-logo">
          <img src={logo} alt="" />
        </h1>

        {/* Hamburger menu (mobile) */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT US</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>SERVICES</Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)}>PORTFOLIO</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link>
        </div>
      </div>
    </nav>
  );
}
