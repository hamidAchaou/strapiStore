import React, { useEffect } from "react";

const Products = ({ products }) => {
  useEffect(() => {
    // Initialize FlexSlider
    $(".flexslider").flexslider({
      animation: "slide",
      controlNav: true,
      directionNav: true,
    });
  }, [products]);

  return (
    <section className="section" id="men">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>Men's Latest</h2>
              <span>
                Details to details is what makes Hexashop different from the
                other themes.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="flexslider">
              <ul className="slides">
                {products &&
                  products.map((product) => (
                    <li key={product.id} className="item">
                      <div className="thumb">
                        <div className="hover-content">
                          <ul>
                            <li>
                              <a href="single-product.html">
                                <i className="fa fa-eye"></i>
                              </a>
                            </li>
                            <li>
                              <a href="single-product.html">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="single-product.html">
                                <i className="fa fa-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <img src={product.image} alt={product.title} />
                      </div>
                      <div className="down-content">
                        <h4>{product.title}</h4>
                        <span>${product.price}</span>
                        <ul className="stars">
                          {[...Array(5)].map((_, i) => (
                            <li key={i}>
                              <i className="fa fa-star"></i>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
