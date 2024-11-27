import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/templatemo-hexashop.css";
import "./assets/css/lightbox.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header, Footer, Loading, Error } from "./components/index";
import { Home, About, Contact, Products, ShowProducts } from "./pages/index";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/single_products" element={<ShowProducts />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
