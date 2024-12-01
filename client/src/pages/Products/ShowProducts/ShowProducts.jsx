import React, { useState } from "react";
import { FaShoppingCart, FaHeart, FaStar, FaCheck } from "react-icons/fa";
import "./ShowProducts.css";

const ShowProducts = () => {
  const [mainImage, setMainImage] = useState(
    "https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png"
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState("Green");
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const thumbnails = [
    "https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png",
    "https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png",
    "https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png",
    "https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png",
  ];

  const variants = [
    { name: "Green", color: "#8BC34A" },
    { name: "Red", color: "#F44336" },
    { name: "Golden", color: "#FFC107" },
  ];

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  return (
    <div className="product-container">
      {/* Image Section */}
      <div className="image-section">
        <div className="main-image-wrapper">
          <img className="main-image" src={mainImage} alt="Main Product" />
          <button className="wishlist-btn">
            <FaHeart className="wishlist-icon" />
          </button>
        </div>

        <div className="thumbnail-images">
          {thumbnails.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className={mainImage === img ? "selected" : ""}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="details-section">
        <div>
          <h2 className="product-title">Delicious Green Apple</h2>

          <div className="product-rating">
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={star <= 4 ? "star-filled" : "star-empty"}
                />
              ))}
            </div>
            <span className="rating-text">(4.0) | 250 Reviews</span>
          </div>

          <p className="product-code">Product Code: 45999</p>
          <p className="product-price">$7.93</p>

          <div className="product-variants">
            <p>Color Variant:</p>
            <div className="variant-selector">
              {variants.map((variant) => (
                <button
                  key={variant.name}
                  className={`variant-btn ${
                    selectedVariant === variant.name ? "selected" : ""
                  }`}
                  style={{ backgroundColor: variant.color }}
                  onClick={() => setSelectedVariant(variant.name)}
                />
              ))}
            </div>
          </div>

          <p className="product-description">
            Enjoy the refreshing taste of our delicious green apples, perfect
            for a healthy snack or adding flavor to your recipes. Sourced from
            organic farms and carefully selected for premium quality.
          </p>
        </div>

        {/* Counter and Add to Cart */}
        <div className="counter-section">
          {/* Counter */}
          <div className="counter">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>

          {/* Add to Cart */}
          <button
            className={`add-to-cart ${isAddedToCart ? "added" : ""}`}
            onClick={handleAddToCart}
          >
            {isAddedToCart ? (
              <>
                <FaCheck /> Added to Cart
              </>
            ) : (
              <>
                <FaShoppingCart /> Add {quantity} to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowProducts;
