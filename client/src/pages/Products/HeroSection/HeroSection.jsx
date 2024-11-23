import React from "react";
import { FaSearch } from "react-icons/fa"; // Import search icon
import "./HeroSection.css";

const HeroSection = () => {
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Discover Our Exclusive Products</h1>
        <p className="hero-subtitle">
          High-quality items curated for your lifestyle. Find the perfect product today!
        </p>
        
        <div className="hero-search-container">
          <input
            type="text"
            className="hero-search-input"
            placeholder="Search for products..."
          />
          <button
            className="hero-search-button"
            onClick={handleScrollToBottom}
          >
            <FaSearch />
          </button>
        </div>

        <button className="hero-button">Shop Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
