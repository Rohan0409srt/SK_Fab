// src/components/Footer/Footer.jsx
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left: About */}
        <div className="footer-about">
          <h3>SK_Fab</h3>
          <p>
            Delivering excellence in iron & steel fabrication since 2017.  
            Trusted for quality, durability, and innovation.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Middle: Contact Us */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 Pimple Nilakh, Pune, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@skfab.com</p>
        </div>

        {/* Right: Map */}
        <div className="footer-map">
          <iframe
            title="SK_Fab Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1134762688996!2d73.78086237504807!3d18.57738198253018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfad5534aaf1%3A0xb6787e23f34d1f85!2sPimple%20Nilakh%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411027!5e0!3m2!1sen!2sin!4v1694534567890!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SK_Fab. All rights reserved.</p>
      </div>
    </footer>
  );
}
