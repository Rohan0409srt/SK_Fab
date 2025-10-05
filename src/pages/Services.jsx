import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  { id: "iron-gates", title: "Iron Gates", img: gateImg, desc: "Durable, stylish, and secure gates tailored for homes and industries." },
  { id: "staircase-railings", title: "Staircase Railings", img: railingImg, desc: "Elegant railings designed with safety and aesthetics in mind." },
  { id: "boundary-walls", title: "Boundary Walls", img: wallImg, desc: "Strong and modern wall solutions to safeguard your premises." },
  { id: "roofing-shades", title: "Roofing Shades", img: roofingImg, desc: "High-quality shade structures for industrial and residential needs." },
  { id: "box-cricket-grounds", title: "Box Cricket Grounds", img: cricketImg, desc: "Custom-built box cricket setups with safe enclosures." },
  { id: "box-football-grounds", title: "Box Football Grounds", img: footballImg, desc: "Well-designed football boxes for safe and engaging play." },
  { id: "artificial-football-grounds", title: "Artificial Football Grounds", img: artificialImg, desc: "Premium turf installations for professional and recreational use." },
  { id: "grills-windows", title: "Grills & Windows", img: grillImg, desc: "Stylish, protective grills and window designs for homes and offices." },
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
    setCurrentIndex(0); // Reset index when cardsPerView changes
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        (prev + 1) % (servicesData.length - cardsPerView + 1)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  return (
    <section className="services" id="services">
      <h2>Our <span>Services</span></h2>
      <div className="services-slider">
        <div
          className="services-track"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
        >
          {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <Link to={`/services/${service.id}`} className="read-more">
                Read More →
              </Link>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button className="arrow prev" onClick={() =>
          setCurrentIndex((prev) =>
            prev === 0 ? servicesData.length - cardsPerView : prev - 1
          )
        }>&#10094;</button>
        <button className="arrow next" onClick={() =>
          setCurrentIndex((prev) =>
            (prev + 1) % (servicesData.length - cardsPerView + 1)
          )
        }>&#10095;</button>
      </div>
    </section>
  );
}
