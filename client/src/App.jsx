import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary components
import "./assets/css/templatemo-hexashop.css";
import "./assets/css/lightbox.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <Router>
      {/* Wrap your entire app with Router */}
      <Header />
      <Routes>
        {/* Define your Routes here */}
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/about" element={<About />} /> {/* About page route */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;