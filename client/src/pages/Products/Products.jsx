import React from "react";
import ProductsSection from "./ProductsSection";
import axios from "axios";

const Products = () => {
  const fetchProducts = async () => {
    const res = await axios.get(
      import.meta.env.VITE_API_URL + "/products?populate=*",
      {
        headers: {
          Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
        },
      }
    );

    console.log(res.data.data);
  };

  // fetchProducts();
  return (
    <>
      <ProductsSection />
    </>
  );
};

export default Products;
