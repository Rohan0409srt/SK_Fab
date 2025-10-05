// src/pages/ServiceDetail.jsx
import { useParams } from "react-router-dom";
import servicesData from "../data/ServiceData";
import "../css/ServiceDetail.css";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <h2 className="not-found">Service not found ❌</h2>;
  }

  return (
    <section className="service-detail">
      <div className="service-header">
        <h1>{service.title}</h1>
        <p>{service.shortDesc}</p>
      </div>

      {/* Image Gallery */}
      <div className="gallery">
        {service.images.map((img, index) => (
          <img key={index} src={img} alt={`${service.title} ${index + 1}`} />
        ))}
      </div>

      {/* Details */}
      <div className="service-info">
        <h2>About this service</h2>
        <p>{service.details}</p>

        <h3>Key Features</h3>
        <ul>
          {service.features.map((feature, index) => (
            <li key={index}>✅ {feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
