import "../css/Contact.css"

export default function Contact() {
  return (
    <main className="contact-page">
      <h1>Contact <span>Us</span></h1>
      <p className="subtitle">
        Have questions or want to work with us? Drop us a message!
      </p>

      <div className="contact-container">
        {/* Left: Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Right: Info + Map */}
        <div className="contact-info">
          <div className="info-card">
            <h3>📍 Address</h3>
            <p>Pimple Nilakh, Pune, Maharashtra</p>
          </div>
          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>
          <div className="info-card">
            <h3>✉️ Email</h3>
            <p>info@skfab.com</p>
          </div>

          {/* Map */}
          <div className="map-container">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.45788005006!2d73.7824!3d18.5686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf87b0f9b9af%3A0x123456789!2sPimple%20Nilakh%2C%20Pune!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
