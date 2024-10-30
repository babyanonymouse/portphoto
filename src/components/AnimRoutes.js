import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

// uselocation, route, routes
import { useLocation, Route, Routes } from "react-router-dom";

const AnimRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AnimRoutes;
