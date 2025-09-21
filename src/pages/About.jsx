// import "../css/About.css"

// export default function About(){
//     return(
//         <main style={{padding:'6rem 1rem 2rem', minHeight:'70vh'}}>
//             <h1>About Us</h1>
//             <p style={{maxWidth:800, color:'#444'}} > SK Fabrication & Weldings — short company text. Replace with your About component/layout.</p>
//         </main>
//     );
// }
import "../css/About.css";
import aboutImg from "../assets/image/hero3.jpg"; // your image


export default function About() {
  return (
    <main className="about-page">
      <img src={aboutImg} alt="Fabrication work" />
      <div className="about-text">
        <h1>
          ABOUT <span style={{ color: "blue" }}>US</span>
        </h1>
        <p>
          SK Fabrication & Weldings is the trusted name in the manufacturing
          market as a quality metal fabrication service provider in Indore.
          Since its inception in 2017, we have raised the level of Iron and
          Steel Fabrication. We fabricate with selected iron and steel which is
          best in class for any kind of fabrication work.
        </p>
        <p>
          We pass our work through various quality tests and checks. The quality
          checks are strict to guidelines and quality standards set by us based
          on material strength, fabrication process, galvanization process and
          more factors. Being the most trusted fabrication shop in Pune,
          Fabrication World has redefined the processes of Iron Fabrication and
          Metal Fabrication.
        </p>
      </div>
    </main>
  );
}
