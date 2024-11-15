import React from "react";
import CardSlider from "./CardSlider";

const MenAreaStarts = () => {
  const products = [
    {
      image: "assets/images/men-01.jpg",
      title: "Classic Spring",
      price: "$120.00",
    },
    {
      image: "assets/images/men-02.jpg",
      title: "Air Force 1 X",
      price: "$90.00",
    },
    {
      image: "assets/images/men-03.jpg",
      title: "Love Nana '20",
      price: "$150.00",
    },
    {
      image: "assets/images/men-01.jpg",
      title: "Classic Spring",
      price: "$120.00",
    },
  ];

  const renderStars = (count = 5) => {
    return Array.from({ length: count }, (_, i) => (
      <li key={i}>
        <i className="fa fa-star"></i>
      </li>
    ));
  };

  return (
    <section className="section" id="men">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>Men's Latest</h2>
              <span>
                Details to details is what makes Hexashop different from other
                themes.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <CardSlider />
      </div>
    </section>
  );
};

export default MenAreaStarts;
