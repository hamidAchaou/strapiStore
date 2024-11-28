import React, { useState } from "react";
import ProductsCards from "./ProductsCards";
import FilterButtons from "./FilterButtons/FilterButtons";

const Products = () => {
  const [category, setCategory] = useState("all");

  const products = [
    {
      imgSrc: "assets/images/men-01.jpg",
      title: "Classic Spring",
      price: "$120.00",
      rating: 5,
      category: "men",
    },
    {
      imgSrc: "assets/images/men-02.jpg",
      title: "Air Force 1 X",
      price: "$90.00",
      rating: 5,
      category: "men",
    },
    {
      imgSrc: "assets/images/men-03.jpg",
      title: "Love Nana ‘20",
      price: "$150.00",
      rating: 5,
      category: "men",
    },
    {
      imgSrc: "assets/images/women-01.jpg",
      title: "New Green Jacket",
      price: "$75.00",
      rating: 5,
      category: "women",
    },
    {
      imgSrc: "assets/images/women-02.jpg",
      title: "Classic Dress",
      price: "$45.00",
      rating: 5,
      category: "women",
    },
    {
      imgSrc: "assets/images/women-03.jpg",
      title: "Spring Collection",
      price: "$130.00",
      rating: 5,
      category: "women",
    },
    {
      imgSrc: "assets/images/kid-01.jpg",
      title: "School Collection",
      price: "$80.00",
      rating: 5,
      category: "kids",
    },
    {
      imgSrc: "assets/images/kid-02.jpg",
      title: "Summer Cap",
      price: "$12.00",
      rating: 5,
      category: "kids",
    },
    {
      imgSrc: "assets/images/kid-03.jpg",
      title: "Classic Kid",
      price: "$30.00",
      rating: 5,
      category: "kids",
    },
  ];

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <section className="section" id="products">
      <div className="container">
        <div className="header-products mb-4">
          <div className="section-heading text-center">
            <h2>Our Latest Products</h2>
            <span>Explore the best products for you!</span>
          </div>

          {/* Filter Buttons in a Single Row */}
          <FilterButtons category={category} setCategory={setCategory} />
        </div>

        {/* Products Grid */}
        <div className="row">
          <ProductsCards filteredProducts={filteredProducts} />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Products);
