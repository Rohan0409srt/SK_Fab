// src/components/About.jsx
import "../About/About.css";
import aboutImg from "../../assets/image/hero3.jpg"; // your image

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        
        {/* Left Side: Image */}
        <div className="about-image">
          <img src={aboutImg} alt="About SK Fab" />
        </div>

        {/* Right Side: Text */}
        <div className="about-content">
          <h2>
            ABOUT <span>US</span>
          </h2>
          <p>
            SK Fabrication & Weldings is the trusted name in the manufacturing
            market as a quality metal fabrication service provider in Indore.
            Since its inception in 2017, we have raised the level of Iron and
            Steel Fabrication. We fabricate with selected iron and steel which
            is best in class for any kind of fabrication work.
          </p>
          <p>
            We pass our work through various quality tests and checks. The
            quality checks are strict to guidelines and quality standards set by
            us based on material strength, fabrication process, galvanization
            process and more factors. Being the most trusted fabrication shop in
            Indore, Fabrication World has redefined the processes of Iron
            Fabrication and Metal Fabrication.
          </p>
        </div>
      </div>
    </section>
  );
}
