import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/image/logo3.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleNavClick = () => setOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <img src={logo} alt="SK_Fab" className="navbar-logo-img" />
            <span className="brand">SK_Fab</span>
          </div>

          <button
            className={`hamburger ${open ? "active" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`navbar-links ${open ? "open" : ""}`}>
            <NavLink to="/" end className={({ isActive }) => isActive ? "navlink active" : "navlink"} onClick={handleNavClick}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "navlink active" : "navlink"} onClick={handleNavClick}>
              About
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? "navlink active" : "navlink"} onClick={handleNavClick}>
              Services
            </NavLink>

            {/* 🖼️ New Gallery Link */}
            <NavLink to="/gallery" className={({ isActive }) => isActive ? "navlink active" : "navlink"} onClick={handleNavClick}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "navlink active" : "navlink"} onClick={handleNavClick}>
              Contact
            </NavLink>

            {/* 💬 Quotation Button */}
            <button className="quote-btn" onClick={() => setShowModal(true)}>
              Get a Quotation
            </button>
          </div>
        </div>
      </nav>

      {/* 🧾 Quotation Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Request a Quotation</h2>
            <form className="quotation-form">
              <label>
                Name:
                <input type="text" placeholder="Your Name" required />
              </label>
              <label>
                Email:
                <input type="email" placeholder="Your Email" required />
              </label>
              <label>
                Phone:
                <input type="tel" placeholder="Your Phone" required />
              </label>
              <label>
                Service:
                <select required>
                  <option value="">Select a Service</option>
                  <option value="Iron Gates">Iron Gates</option>
                  <option value="Staircase Railings">Staircase Railings</option>
                  <option value="Boundary Walls">Boundary Walls</option>
                  <option value="Roofing Shades">Roofing Shades</option>
                  <option value="Box Cricket Grounds">Box Cricket Grounds</option>
                  <option value="Box Football Grounds">Box Football Grounds</option>
                  <option value="Artificial Football Grounds">Artificial Football Grounds</option>
                  <option value="Grills & Windows">Grills & Windows</option>
                </select>
              </label>
              <label>
                Message:
                <textarea placeholder="Your Message"></textarea>
              </label>
              <div className="modal-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setShowModal(false)}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
