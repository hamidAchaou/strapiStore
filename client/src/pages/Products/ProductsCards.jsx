import React from "react";
import PropTypes from "prop-types";
import { FaEye, FaStar, FaShoppingCart } from "react-icons/fa";

const ProductsCards = ({ products }) => (
  <div className="row" id="products">
    {products.map(({ id, title, price, rating, images }) => (
      <div key={id} className="col-lg-4">
        <div className="item">
          <div className="thumb">
            <div className="hover-content">
              <ul>
                <li>
                  <a href={`single-product/${id}`}>
                    <FaEye />
                  </a>
                </li>
                <li>
                  <a href={`single-product/${id}`}>
                    <FaStar />
                  </a>
                </li>
                <li>
                  <a href={`single-product/${id}`}>
                    <FaShoppingCart />
                  </a>
                </li>
              </ul>
            </div>
            <img src={import.meta.env.VITE_APP_URL + images?.url} alt={title} />
          </div>
          <div className="down-content">
            <h4>{title}</h4>
            <span>${price}</span>
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
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      images: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
      categories: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default React.memo(ProductsCards);
