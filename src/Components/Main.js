import React from "react";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Home from "./Home";
import Contact from "./Contact";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
export default function Main() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="portfolio-react/home" element={<Home />} />
      <Route path="portfolio-react/about" element={<About />} />
      <Route path="portfolio-react/contact" element={<Contact />} />
      <Route path="portfolio-react/hireme" element={<Contact />} />
      {/* <Route path="services" element={<Services />} /> */}
      <Route path="portfolio-react/portfolio" element={<Portfolio />} />
    </Routes>
  );
}
