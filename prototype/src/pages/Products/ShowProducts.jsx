import React, { useState } from "react";

const ShowProducts = () => {
  // State for managing quantity
  const [quantity, setQuantity] = useState(1);

  // Example product data
  const product = {
    name: "New Green Jacket",
    price: 75.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.",
    images: [
      "assets/images/single-product-01.jpg",
      "assets/images/single-product-02.jpg",
    ],
    rating: 5,
  };

  // Function to update quantity
  const updateQuantity = (value) => {
    setQuantity((prev) => Math.max(1, prev + value)); // Ensure quantity is at least 1
  };

  // Calculate total price based on quantity
  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <section className="section" id="product">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="left-images">
              {product.images.map((imgSrc, index) => (
                <img key={index} src={imgSrc} alt={product.name} />
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="right-content">
              <h4>{product.name}</h4>
              <span className="price">${product.price}</span>

              <ul className="stars">
                {[...Array(product.rating)].map((_, index) => (
                  <li key={index}>
                    <i className="fa fa-star"></i>
                  </li>
                ))}
              </ul>

              <span>{product.description}</span>

              <div className="quote">
                <i className="fa fa-quote-left"></i>
                <p>{product.quote}</p>
              </div>

              <div className="quantity-content">
                <div className="left-content">
                  <h6>No. of Orders</h6>
                </div>
                <div className="right-content">
                  <div className="quantity buttons_added">
                    <input
                      type="button"
                      value="-"
                      className="minus"
                      onClick={() => updateQuantity(-1)}
                    />
                    <input
                      type="number"
                      name="quantity"
                      value={quantity}
                      className="input-text qty text"
                      readOnly
                    />
                    <input
                      type="button"
                      value="+"
                      className="plus"
                      onClick={() => updateQuantity(1)}
                    />
                  </div>
                </div>
              </div>

              <div className="total">
                <h4>Total: ${totalPrice}</h4>
                <div className="main-border-button">
                  <a href="#">Add To Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowProducts;
