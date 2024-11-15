import React from "react";
import CardSlider from "../CardSlider/CardSlider";

const products = [
  {
    image: "assets/images/men-01.jpg",
    title: "Classic Spring",
    price: "$120.00",
    link: "single-product.html",
  },
  {
    image: "assets/images/men-02.jpg",
    title: "Air Force 1 X",
    price: "$90.00",
    link: "single-product.html",
  },
  {
    image: "assets/images/men-03.jpg",
    title: "Love Nana ‘20",
    price: "$150.00",
    link: "single-product.html",
  },
];

const CategoryAreStarts = ({ title, details }) => {
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
