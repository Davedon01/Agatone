import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Aboutus from "./Pages/Aboutus";
import ContactUs from "./Pages/Contactus";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";
import Shop from "./Pages/Shop";
import Footer from "./Component/Footer";
import ScrollToTop from "./Component/ScrollToTop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Support from "./Component/Support";

function App(): React.ReactElement {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Support />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
