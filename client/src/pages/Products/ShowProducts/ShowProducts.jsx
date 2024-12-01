import React, { useState } from "react";
import { FaShoppingCart, FaHeart, FaStar, FaCheck } from "react-icons/fa";
import "./ShowProducts.css";

// Import local images
import thumbnail1 from "../../../assets/images/men-02.jpg";
import thumbnail2 from "../../../assets/images/men-03.jpg";
import thumbnail3 from "../../../assets/images/women-02.jpg";
import thumbnail4 from "../../../assets/images/kid-01.jpg";

const ShowProducts = () => {
  const [mainImage, setMainImage] = useState(thumbnail1); // Default to one of the thumbnails
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const product = {
    title: "Classic Black T-Shirt",
    price: 19.99,
    image: mainImage,
  };

  const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

  // Handle quantity changes
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  // Calculate the total price based on the quantity selected
  const totalPrice = product.price * quantity;

  // Handle add to cart action
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
          <h2 className="product-title">{product.title}</h2>

          <div className="product-rating">
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={star <= 4 ? "star-filled" : "star-empty"}
                />
              ))}
            </div>
            <span className="rating-text">(4.5) | 120 Reviews</span>
          </div>

          <p className="product-code">Product Code: TS-00123</p>
          <p className="product-price">${product.price}</p>

          <p className="product-description">
            Upgrade your wardrobe with this classic black T-shirt. Made from
            100% cotton, it's comfortable, durable, and perfect for casual wear.
            Available in multiple color options to suit your style.
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

          {/* Display the total price dynamically */}
          <p className="total-price">
            Total: ${totalPrice.toFixed(2)}
          </p>

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
