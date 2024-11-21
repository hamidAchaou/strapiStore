import React from "react";
import { FaEye, FaStar, FaShoppingCart } from "react-icons/fa";

const ProductsCards = ({ filteredProducts }) => {
  return (
    <>
      <div className="row">
        {filteredProducts.map((product, index) => (
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
                <img src={product.imgSrc} alt={product.title} />
              </div>
              <div className="down-content">
                <h4>{product.title}</h4>
                <span>{product.price}</span>
                <ul className="stars">
                  {[1, 2, 3, 4, 5].map((_, i) => (
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
    </>
  );
};

export default ProductsCards;
