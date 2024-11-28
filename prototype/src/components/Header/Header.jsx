import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/assets/images/logo.webp";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Cotton T-shirt",
      quantity: 1,
      price: 44.0,
      image: "instagram-03.jpg",
    },
    {
      id: 2,
      name: "Jeans",
      quantity: 2,
      price: 25.0,
      image: "instagram-03.jpg",
    },
  ]);
  const cartRef = useRef(null);
  const location = useLocation();

  // Close the cart dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Logo */}
              <Link to="/" className="logo">
                <img src={logo} alt="Company Logo" className="logo-img" />
              </Link>

              {/* Menu */}
              <ul className={`nav ${isMenuOpen ? "active" : ""}`}>
                {menuItems.map((item, index) => (
                  <li key={index} className="scroll-to-section">
                    <Link
                      to={item.path}
                      className={isActive(item.path) ? "active" : ""}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Cart Icon */}
              <div className="cart-icon" ref={cartRef}>
                <button onClick={handleCartToggle} className="cart-btn">
                  <span className="cart-icon-img">🛒</span>
                  {cartItems.length > 0 && (
                    <span className="cart-count">{cartItems.length}</span>
                  )}
                </button>

                {/* Cart Dropdown */}
                {isCartOpen && (
                  <div className="cart-dropdown">
                    {cartItems.length === 0 ? (
                      <p>No items in cart</p>
                    ) : (
                      <ul className="cart-items-list">
                        {cartItems.map((item) => (
                          <li key={item.id} className="cart-item">
                            <div className="cart-item-content">
                              <div className="title-img">
                                <img
                                  src={`/assets/images/${item.image}`}
                                  alt={item.name}
                                  className="cart-item-image"
                                />
                                <div className="cart-item-details">
                                  <strong className="cart-item-title">
                                    {item.name}
                                  </strong>
                                </div>
                              </div>
                              <div className="cart-item-price">
                                €{item.price * item.quantity}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                    <Link to="/cart" className="go-to-cart-btn">
                      Go to Cart
                    </Link>
                  </div>
                )}
              </div>

              {/* Menu Trigger */}
              <button
                className={`menu-trigger ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={isMenuOpen}
              >
                <span>Menu</span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
