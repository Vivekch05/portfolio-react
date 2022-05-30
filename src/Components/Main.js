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
      <Route exact path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="hireme" element={<Contact />} />
      {/* <Route path="services" element={<Services />} /> */}
      <Route path="portfolio" element={<Portfolio />} />
    </Routes>
  );
}
