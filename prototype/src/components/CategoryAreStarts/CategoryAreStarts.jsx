import React from "react";
import CardSlider from "../CardSlider/CardSlider";

const CategoryAreStarts = ({ title, details, products }) => {
  return (
    <section className="section" id="men">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>{title}</h2>
              <span>{details}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <CardSlider products={products} />
      </div>
    </section>
  );
};

export default CategoryAreStarts;
