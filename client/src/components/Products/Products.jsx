import React from "react";
import CategoryAreStarts from "../CategoryAreStarts/CategoryAreStarts";

const productCategories = [
  {
    title: "Men's Latest",
    details:
      "Details to details is what makes Hexashop different from other themes.",
    products: [
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
    ],
  },
  {
    title: "Women's Latest",
    details:
      "Details to details is what makes Hexashop different from other themes.",
    products: [
      {
        image: "assets/images/women-01.jpg",
        title: "Classic Pink",
        price: "$110.00",
        link: "single-product.html",
      },
      {
        image: "assets/images/women-02.jpg",
        title: "Spring Dress",
        price: "$140.00",
        link: "single-product.html",
      },
    ],
  },
  {
    title: "Kid's Latest",
    details:
      "Details to details is what makes Hexashop different from other themes.",
    products: [
      {
        image: "assets/images/kid-01.jpg",
        title: "Cute Outfit",
        price: "$80.00",
        link: "single-product.html",
      },
      {
        image: "assets/images/kid-02.jpg",
        title: "Playful Suit",
        price: "$95.00",
        link: "single-product.html",
      },
    ],
  },
];

const Products = () => {
  return (
    <>
      {productCategories.map((category, index) => (
        <CategoryAreStarts
          key={index}
          title={category.title}
          details={category.details}
          products={category.products}
        />
      ))}
    </>
  );
};

export default Products;
