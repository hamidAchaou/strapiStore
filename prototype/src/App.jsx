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
import ProductsSection from "./pages/Products/Products";
import ShowProducts from "./pages/Products/ShowProducts";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductsSection />} />
        <Route path="/singel_products" element={<ShowProducts />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;