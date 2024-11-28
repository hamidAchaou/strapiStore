// ShoppingCart.jsx
import React, { useState } from "react";
import CartItem from "./CartItem";
import Summary from "./Summary";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Cotton T-shirt",
      category: "Shirt",
      img: "https://i.imgur.com/1GrakTl.jpg",
      price: 44.0,
      quantity: 1,
    },
    {
      id: 2,
      name: "Cotton T-shirt",
      category: "Shirt",
      img: "https://i.imgur.com/ba3tvGm.jpg",
      price: 44.0,
      quantity: 1,
    },
    {
      id: 3,
      name: "Cotton T-shirt",
      category: "Shirt",
      img: "https://i.imgur.com/pHQ3xT3.jpg",
      price: 44.0,
      quantity: 1,
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="cart">
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  {cartItems.length} items
                </div>
              </div>
            </div>

            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={handleRemove}
                onChangeQuantity={handleQuantityChange}
              />
            ))}

            <div className="back-to-shop">
              <a href="/products">
                ←<span className="text-muted">Back to shop</span>
              </a>
            </div>
          </div>

          {/* Summary Section */}
          <Summary cartItems={cartItems} totalPrice={totalPrice} />
        </div>
      </div>
    </main>
  );
};

export default ShoppingCart;
