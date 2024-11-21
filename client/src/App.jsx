import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/templatemo-hexashop.css";
import "./assets/css/lightbox.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Global styles
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ProductsSection from "./pages/Products/Products";
import ShowProducts from "./pages/Products/ShowProducts";
import useFetch from "./hooks/useFetch";
import Error from "./components/Error/Error";

const App = () => {
  const [products, setProducts] = useState([]);
  const { data, loading, error } = useFetch("/products");

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={`Error loading products: ${error}`} />;
  }

  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductsSection />} />
          <Route path="/single_products" element={<ShowProducts />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
