import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/About/About";
import Service from "./pages/Services";
import Services from "./components/Services/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"; // ✅ import ScrollToTop

function App() {
  return (
    <HashRouter>
      <Navbar />
      <ScrollToTop /> {/* ✅ Add this */}
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
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
