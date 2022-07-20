import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar";
import Home from "../src/Components/Home/Home";
import About from "../src/Components/About/About";
import Blog from "../src/Components/Blog/Blog";
import Service from "../src/Components/Service/Service";
import Contact from "../src/Components/Contact/Contact";
import Feature from "../src/Components/Feature/Feature";
import Footer from "../src/Components/Footer/Footer";

function App(props) {
  return (
    <div>
      <div className="container">
        <Navbar />
        <div className="result">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Feature" element={<Feature />} />
            <Route path="Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
