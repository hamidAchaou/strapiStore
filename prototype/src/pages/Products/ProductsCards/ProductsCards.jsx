import React from "react";
import PropTypes from "prop-types";
import { FaEye, FaStar, FaShoppingCart } from "react-icons/fa";

const ProductsCards = ({ products }) => (
  <div className="row">
    {products.map(({ imgSrc, title, price, rating }, index) => (
      <div key={index} className="col-lg-4">
        <div className="item">
          <div className="thumb">
            <div className="hover-content">
              <ul>
                <li>
                  <a href="single-product.html">
                    <FaEye />
                  </a>
                </li>
                <li>
                  <a href="single-product.html">
                    <FaStar />
                  </a>
                </li>
                <li>
                  <a href="single-product.html">
                    <FaShoppingCart />
                  </a>
                </li>
              </ul>
            </div>
            <img src={imgSrc} alt={title} />
          </div>
          <div className="down-content">
            <h4>{title}</h4>
            <span>{price}</span>
            <ul className="stars">
              {Array.from({ length: rating }, (_, i) => (
                <li key={i}>
                  <FaStar />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}
  </div>
);

ProductsCards.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default React.memo(ProductsCards);
