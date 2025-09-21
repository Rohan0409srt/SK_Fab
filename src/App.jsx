import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./pages/About";
import Service from "./pages/Services";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <div className="pt-16">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <About />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      <Footer />
    </HashRouter>
  );
}

export default App;
