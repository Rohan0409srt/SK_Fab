import { useState, useEffect } from "react";
import "../css/Services.css";

import gateImg from "../assets/image/iron-gate1.jpg";
import railingImg from "../assets/image/staircase_railing.jpg";
import wallImg from "../assets/image/boundary_walls.jpg";
import roofingImg from "../assets/image/roofing_shades.jpg";
import cricketImg from "../assets/image/box_cricket_ground.jpg";
import footballImg from "../assets/image/box_football_ground.jpeg";
import artificialImg from "../assets/image/artificial_football_ground.jpg";
import grillImg from "../assets/image/grill_and_window.jpg";

const servicesData = [
  { title: "Iron Gates", img: gateImg, desc: "Durable, stylish, and secure gates tailored for homes and industries." },
  { title: "Staircase Railings", img: railingImg, desc: "Elegant railings designed with safety and aesthetics in mind." },
  { title: "Boundary Walls", img: wallImg, desc: "Strong and modern wall solutions to safeguard your premises." },
  { title: "Roofing Shades", img: roofingImg, desc: "High-quality shade structures for industrial and residential needs." },
  { title: "Box Cricket Grounds", img: cricketImg, desc: "Custom-built box cricket setups with safe enclosures." },
  { title: "Box Football Grounds", img: footballImg, desc: "Well-designed football boxes for safe and engaging play." },
  { title: "Artificial Football Grounds", img: artificialImg, desc: "Premium turf installations for professional and recreational use." },
  { title: "Grills & Windows", img: grillImg, desc: "Stylish, protective grills and window designs for homes and offices." },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (servicesData.length - cardsPerView + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2>Our <span>Services</span></h2>
        <div className="services-slider">
          <div
            className="services-track"
            style={{ transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)` }}
          >
            {servicesData.map((service, idx) => (
              <div className="service-card" key={idx}>
                <img src={service.img} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="read-more"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
