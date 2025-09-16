// src/components/Hero.jsx
import { useState, useEffect } from "react";
import "../hero/hero.css";
import hero1 from "../../assets/image/hero1.webp";
import hero2 from "../../assets/image/hero2.webp";
import hero3 from "../../assets/image/hero3.jpg";


const images = [hero1, hero2, hero3];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
            Welcome to <span>SK_Fab</span>
          </h1>
          <p>Engineering Excellence, Built for You</p>
          <a href="/contact" className="hero-btn">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
