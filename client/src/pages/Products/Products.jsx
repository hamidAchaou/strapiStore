import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection/HeroSection";
import ProductsCards from "./ProductsCards";
import FilterButtons from "./FilterButtons/FilterButtons";
import { Error, Loading } from "../../components";
import useFetch from "../../hooks/useFetch";
import ReactPaginate from "react-paginate";
import "./Products.css";

const Products = () => {
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Pagination state
  const productsPerPage = 6; // Display only 6 products per page

  // Fetching data using the custom hook
  const { data, loading, error } = useFetch("/products");

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  // Handling the loading and error states
  if (loading) return <Loading />;
  if (error)
    return <Error message={`Error loading products: ${error.message}`} />;

  // Filter products by category
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) =>
          product.categories.some((cat) => cat.name === category)
        );

  // Get the current products to display on the page
  const offset = currentPage * productsPerPage;
  const currentPageProducts = filteredProducts.slice(
    offset,
    offset + productsPerPage
  );

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };



  return (
    <>
      {/* Add HeroSection */}
      <HeroSection />

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

        {/* Add Filter Buttons */}
        <FilterButtons category={category} setCategory={setCategory} />

        {/* Display Product Cards */}
        <div className="container">
          <ProductsCards filteredProducts={currentPageProducts} />
        </div>

        {/* Pagination */}
        <div className="pagination-container">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={Math.ceil(filteredProducts.length / productsPerPage)}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            activeClassName={"active"}
            breakLabel={"..."}
          />
        </div>
      </section>

    </>
  );
};

export default React.memo(Products);
