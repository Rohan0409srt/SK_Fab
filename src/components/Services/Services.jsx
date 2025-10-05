// src/components/Services.jsx
import { Link } from "react-router-dom";
import "./Services.css";

import gateImg from "../../assets/image/iron_gate.jpg";
import railingImg from "../../assets/image/staircase_railing.jpg";
import wallImg from "../../assets/image/boundary_walls.jpg";
import roofingImg from "../../assets/image/roofing_shades.jpg";
import cricketImg from "../../assets/image/box_cricket_ground.jpg";
import footballImg from "../../assets/image/box_football_ground.jpeg";
import artificialImg from "../../assets/image/artificial_football_ground.jpg";
import grillImg from "../../assets/image/grill_and_window.jpg";

// ✅ Service data
export const servicesData = [
  {
    id: "iron-gates",
    title: "Iron Gates",
    img: gateImg,
    desc: "Durable, stylish, and secure gates tailored for homes and industries."
  },
  {
    id: "staircase-railings",
    title: "Staircase Railings",
    img: railingImg,
    desc: "Elegant railings designed with safety and aesthetics in mind."
  },
  {
    id: "boundary-walls",
    title: "Boundary Walls",
    img: wallImg,
    desc: "Strong and modern wall solutions to safeguard your premises."
  },
  {
    id: "roofing-shades",
    title: "Roofing Shades",
    img: roofingImg,
    desc: "High-quality shade structures for industrial and residential needs."
  },
  {
    id: "box-cricket-grounds",
    title: "Box Cricket Grounds",
    img: cricketImg,
    desc: "Custom-built box cricket setups with safe enclosures."
  },
  {
    id: "box-football-grounds",
    title: "Box Football Grounds",
    img: footballImg,
    desc: "Well-designed football boxes for safe and engaging play."
  },
  {
    id: "artificial-football-grounds",
    title: "Artificial Football Grounds",
    img: artificialImg,
    desc: "Premium turf installations for professional and recreational use."
  },
  {
    id: "grills-windows",
    title: "Grills & Windows",
    img: grillImg,
    desc: "Stylish, protective grills and window designs for homes and offices."
  }
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2>
          Our <span>Services</span>
        </h2>
        <div className="services-grid">
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
      </div>
    </section>
  );
}
