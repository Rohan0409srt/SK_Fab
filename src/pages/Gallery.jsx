import { useState } from "react";
import "../css/Gallery.css";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Auto-import all images from assets/Image/gallery/
  const importAll = (r) => Object.values(r).map((mod) => mod.default || mod);
  const images = importAll(
    import.meta.glob("../assets/Image/gallery/*.{jpg,jpeg,png,webp}", { eager: true })
  );

  const handleNext = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2>
          Our <span>Gallery</span>
        </h2>
        <p>Take a look at our recent fabrication works and installations.</p>

        {/* 🖼️ Gallery Grid */}
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`Fabrication Work ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        {/* 🔍 Lightbox */}
        {selectedImage && (
          <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedImage(null)}>×</button>
              <button className="prev-btn" onClick={handlePrev}>‹</button>
              <img src={selectedImage} alt="Large view" className="lightbox-img" />
              <button className="next-btn" onClick={handleNext}>›</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
