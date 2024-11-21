import React, { useEffect, useState } from "react";
import CategoryAreStarts from "../CategoryAreStarts/CategoryAreStarts";
import useFetch from "../../hooks/useFetch";
import { Loading, Error } from "../../components/";

const SectionProducts = () => {
  const [categories, setCategories] = useState([]);
  const { data, loading, error } = useFetch("/categories");

  useEffect(() => {
    if (data) {
      console.log(data);

      // Process the fetched data to match the structure needed for CategoryAreStarts
      const processedCategories = data.map((category) => ({
        title: category.name, // Category title (men, women, kids)
        details: category.description, // Category description
        products: category.products.map((product) => ({
          image: product.image || "assets/images/default.jpg", // Set a default image if not available
          title: product.title,
          price: `$${product.price.toFixed(2)}`, // Format the price to two decimal places
          link: `single-product/${product.id}`, // Assuming the product has an ID to form the link
        })),
      }));

      setCategories(processedCategories); // Update the categories state with the fetched data
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={`Error loading categories: ${error}`} />;
  }

  return (
    <>
      {categories.map((category, index) => (
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

export default SectionProducts;
