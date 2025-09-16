import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-16">
        <Hero />
      </div>
      <div className="pt-16">
        <Services />
      </div>
      <div className="pt-16">
        <About />
      </div>
      <div className="pt-16">
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
