// src/data/servicedata.jsx

// ✅ Iron Gates
import gateImg1 from "../assets/image/irongate/irongate1.jpg";
import gateImg2 from "../assets/image/irongate/irongate2.jpg";
import gateImg3 from "../assets/image/irongate/irongate3.jpg";
import gateImg4 from "../assets/image/irongate/irongate4.jpg";


// ✅ Staircase Railings
import railingImg1 from "../assets/image/staircase/Staircase1.jpg";
import railingImg2 from "../assets/image/Staircase/staircase2.jpg";
import railingImg3 from "../assets/image/Staircase/staircase3.jpg";
import railingImg4 from "../assets/image/Staircase/staircase4.jpg";


// // ✅ Boundary Walls
// import wallImg1 from "../assets/image/Cricket/cricket2.jpg";
// import wallImg2 from "../assets/image/Cricket/cricket2.jpg";
// import wallImg3 from "../assets/image/Cricket/cricket2.jpg";
// import wallImg4 from "../assets/image/Cricket/cricket2.jpg";

import wallImg2 from "../assets/image/walls/wall2.jpg";
import wallImg3 from "../assets/image/walls/wall3.jpg";
import wallImg4 from "../assets/image/walls/wall4.jpg";
import wallImg1 from "../assets/image/walls/wall1.jpg";


// ✅ Roofing Shades
import roofImg1 from "../assets/image/Shades/shade1.jpg";
import roofImg2 from "../assets/image/Shades/shade2.jpg";
import roofImg3 from "../assets/image/Shades/shade3.jpg";
import roofImg4 from "../assets/image/Shades/shade4.jpg";


// ✅ Box Cricket Grounds
import cricketImg1 from "../assets/image/Cricket/cricket1.jpg";
import cricketImg2 from "../assets/image/Cricket/cricket2.jpg";
import cricketImg3 from "../assets/image/Cricket/cricket3.jpg";
import cricketImg4 from "../assets/image/Cricket/cricket4.jpg";

// ✅ Box Football Grounds
import footballImg1 from "../assets/image/Footballground/Football1.jpg";
import footballImg2 from "../assets/image/Footballground/football2.jpg";
import footballImg3 from "../assets/image/Footballground/football3.jpg";
import footballImg4 from "../assets/image/Footballground/football4.jpg";

// ✅ Artificial Football Grounds
// import artificialImg1 from "../assets/image/artificial/artificial1.jpg";
import artificialImg1 from "../assets/image/Artificial_Football/ARTIFICIAL1.jpg";
import artificialImg2 from "../assets/image/Artificial_Football/ARTIFICIAL2.jpg";
import artificialImg3 from "../assets/image/Artificial_Football/ARTIFICIAL3.jpg";
import artificialImg4 from "../assets/image/Artificial_Football/ARTIFICIAL4.jpg";



// ✅ Grills & Windows
import grillImg1 from "../assets/image/grill&Window/W1.jpg";
import grillImg2 from "../assets/image/grill&Window/W2.jpg";
import grillImg3 from "../assets/image/grill&Window/W3.jpg";
import grillImg4 from "../assets/image/grill&Window/W4.jpg";


// ✅ Services Data
const servicesData = [
  {
    id: "iron-gates",
    title: "Iron Gates",
    images: [gateImg1, gateImg2, gateImg3, gateImg4],
    shortDesc: "Durable, stylish, and secure gates tailored for homes and industries.",
    details: `Our iron gates combine strength, style, and security. 
    From modern sliding gates to traditional swing designs, we ensure long-lasting durability with top-grade iron.`,
    features: [
      "Rust-proof powder coating",
      "Custom sizes and patterns",
      "Automatic and manual options",
      "Weather-resistant materials"
    ]
  },
  {
    id: "staircase-railings",
    title: "Staircase Railings",
    images: [railingImg1, railingImg2, railingImg3, railingImg4],
    shortDesc: "Elegant railings designed with safety and aesthetics in mind.",
    details: `Our railings provide both safety and elegance. 
    Available in steel, glass, and iron, we craft railings that suit modern and traditional interiors.`,
    features: [
      "Smooth finishing with polish",
      "Multiple design options",
      "Durable welding joints",
      "Custom height and width"
    ]
  },
  {
    id: "boundary-walls",
    title: "Boundary Walls",
    images: [wallImg1, wallImg2, wallImg3, wallImg4],
    shortDesc: "Strong and modern wall solutions to safeguard your premises.",
    details: `We construct sturdy boundary walls that provide both protection and a premium appearance. 
    Choose from concrete, metal, or hybrid designs for long-lasting solutions.`,
    features: [
      "High-strength concrete",
      "Custom height & thickness",
      "Decorative finishing options",
      "Enhanced security"
    ]
  },
  {
    id: "roofing-shades",
    title: "Roofing Shades",
    images: [roofImg1, roofImg2, roofImg3, roofImg4],
    shortDesc: "High-quality shade structures for industrial and residential needs.",
    details: `We provide roofing shades ideal for factories, car parking, and residential spaces. 
    Designed for durability, heat protection, and low maintenance.`,
    features: [
      "UV-protected sheets",
      "Leak-proof structure",
      "Custom size installation",
      "Modern aesthetic look"
    ]
  },
  {
    id: "box-cricket-grounds",
    title: "Box Cricket Grounds",
    images: [cricketImg1, cricketImg2, cricketImg3, cricketImg4],
    shortDesc: "Custom-built box cricket setups with safe enclosures.",
    details: `We design and build high-quality box cricket grounds with synthetic turf, nets, and lighting. 
    Perfect for recreational clubs, sports complexes, and communities.`,
    features: [
      "Synthetic turf flooring",
      "Protective boundary nets",
      "Floodlight installations",
      "Custom dimensions"
    ]
  },
  {
    id: "box-football-grounds",
    title: "Box Football Grounds",
    images: [footballImg1, footballImg2, footballImg3, footballImg4],
    shortDesc: "Well-designed football boxes for safe and engaging play.",
    details: `We create modern football boxes with safety nets and durable flooring. 
    Ideal for 5-a-side and 7-a-side matches, ensuring an exciting playing experience.`,
    features: [
      "Premium artificial grass",
      "Strong fencing & nets",
      "Custom size playgrounds",
      "Lighting setup available"
    ]
  },
  {
    id: "artificial-football-grounds",
    title: "Artificial Football Grounds",
    images: [artificialImg1, artificialImg2, artificialImg3, artificialImg4],
    shortDesc: "Premium turf installations for professional and recreational use.",
    details: `Our artificial football grounds are designed for maximum durability and performance. 
    Installed with FIFA-approved synthetic turf for professional gameplay.`,
    features: [
      "Shock-absorbing turf",
      "Low maintenance",
      "Long-lasting color & texture",
      "Weather resistant"
    ]
  },
  {
    id: "grills-windows",
    title: "Grills & Windows",
    images: [grillImg1, grillImg2, grillImg3, grillImg4],
    shortDesc: "Stylish, protective grills and window designs for homes and offices.",
    details: `We manufacture grills and windows that offer both safety and elegance. 
    Designs range from simple bars to intricate patterns customized for your space.`,
    features: [
      "Anti-rust coating",
      "Custom design patterns",
      "Modern & traditional styles",
      "Enhanced security locks"
    ]
  }
];

export default servicesData;
