import "../About/About.css";
import mainImg from "../../assets/image/hero3.jpg";
import img2 from "../../assets/image/gallery/Img1.jpg"; // Add .jpg

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Left Side: Images */}
        <div className="about-image">
          <div className="main-image">
            <img src={mainImg} alt="Main About SK Fab" />
          </div>
          <div className="bottom-images">
            <img src={img2} alt="Secondary 1" />
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="about-content">
          <h2>
            ABOUT <span>US</span>
          </h2>
          <p>
            SK Fabrication & Weldings is a premier metal fabrication service provider
            based in Pune, renowned for delivering high-quality iron and steel solutions
            since 2017. Over the years, we have established ourselves as a trusted
            partner for residential, commercial, and industrial projects, consistently
            raising the standards of craftsmanship in the metal fabrication industry.
          </p>
          <p>
            We specialize in <strong>custom metal solutions</strong>, including iron gates,
            staircase railings, boundary walls, roofing shades, sports facilities,
            artificial turf installations, and grills & windows. Every project is meticulously
            planned and executed, ensuring durability, functionality, and aesthetics.
          </p>
          <p>
            <strong>Our Expertise:</strong> Precision fabrication with premium iron and steel,
            advanced welding and finishing techniques, and strict quality checks at every stage
            to ensure long-lasting performance.
          </p>
          <p>
            <strong>Why Choose Us:</strong> Trusted since 2017, tailored solutions, customer-focused
            approach, and timely delivery without compromising on quality.
          </p>
          <p>
            <strong>Our Commitment:</strong> Combining innovation, precision, and reliability to
            deliver top-notch metal fabrication services for homes, offices, and professional
            sports facilities.
          </p>
          <p>
            <strong>Vision:</strong> To be the leading metal fabrication service provider in Pune,
            recognized for quality, innovation, and customer satisfaction.
          </p>
          <p>
            <strong>Mission:</strong> To provide high-quality, durable, and aesthetically superior
            metal fabrication solutions that meet the unique needs of each client while adhering
            to international standards.
          </p>
        </div>

      </div>
    </section>
  );
}
