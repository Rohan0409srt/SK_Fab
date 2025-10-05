import { useState, useEffect } from "react";
import "../hero/hero.css";
import hero1 from "../../assets/image/h1.jpg";
import hero2 from "../../assets/image/h2.jpg";
import hero3 from "../../assets/image/h3.jpg";

const images = [hero1, hero2, hero3];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false); // ✅ state for form modal

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-slider">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>

      {/* Overlay Content */}
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            Welcome to <span>SK Fabrication & Welding Works</span>
          </h1>
          <p>Engineering Excellence, Built for You</p>

          {/* ✅ Button opens modal */}
          <button className="hero-btn" onClick={() => setShowForm(true)}>
            Get in Touch
          </button>
        </div>
      </div>

      {/* ✅ Contact Form Modal */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setShowForm(false)}>
              ✖
            </button>
            <h2>Contact Us</h2>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
