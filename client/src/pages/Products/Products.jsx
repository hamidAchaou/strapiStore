import React, { useState } from "react";
import ProductsCards from "./ProductsCards";
import FilterButton from "./FilterButton";

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
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Our Latest Products</h2>
              <span>Check out all of our products.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="filter-buttons text-center">
        <FilterButton
          label="All"
          categoryValue="all"
          setCategory={setCategory}
        />
        <FilterButton
          label="Men"
          categoryValue="men"
          setCategory={setCategory}
        />
        <FilterButton
          label="Women"
          categoryValue="women"
          setCategory={setCategory}
        />
        <FilterButton
          label="Kids"
          categoryValue="kids"
          setCategory={setCategory}
        />
      </div>

      <div className="container">
        <ProductsCards filteredProducts={filteredProducts} />
      </div>
    </section>
  );
};

export default Products;
