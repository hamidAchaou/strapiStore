import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/templatemo-hexashop.css";
import "./assets/css/lightbox.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header, Footer, Loading, Error } from "./components/index";
import { FaChevronCircleUp } from "react-icons/fa";
import { Home, About, Contact, Products, ShowProducts } from "./pages";
import useFetch from "./hooks/useFetch";
import "./App.css";

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

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

        {/* Scroll to Top Button */}
        <button className="go-to-top" onClick={scrollToTop}>
          <FaChevronCircleUp size={30} /> {/* Using a different React icon */}
        </button>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
