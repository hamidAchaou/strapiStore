import React, { useEffect, useState, useMemo, useCallback } from "react";
import HeroSection from "./HeroSection/HeroSection";
import ProductsCards from "./ProductsCards";
import FilterButtons from "./FilterButtons/FilterButtons";
import { Error, Loading } from "../../components";
import ReactPaginate from "react-paginate";
import useFetch from "../../hooks/useFetch";
import "./Products.css";

const Products = () => {
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 6;

  // Fetch data using the custom hook
  const { data: products, loading, error } = useFetch("/products");

  // Reset page to 0 whenever the category changes
  useEffect(() => {
    setCurrentPage(0);
  }, [category]);

  // Filter products by category
  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return category === "all"
      ? products
      : products.filter((product) =>
          product.categories.some((cat) => cat.name.toLowerCase() === category.toLowerCase())
        );
  }, [category, products]);

  // Paginate the filtered products
  const paginatedProducts = useMemo(() => {
    const offset = currentPage * productsPerPage;
    return filteredProducts.slice(offset, offset + productsPerPage);
  }, [filteredProducts, currentPage, productsPerPage]);

  // Handle page change
  const handlePageChange = useCallback(({ selected }) => {
    setCurrentPage(selected);
  }, []);

  // Update the document title based on the selected category
  useEffect(() => {
    document.title = `Products - ${category === "all" ? "All Categories" : category}`;
  }, [category]);

  // Handle loading and error states
  if (loading) return <Loading />;
  if (error) return <Error message={`Error loading products: ${error.message}`} />;

  return (
    <>
      <section className="section" id="products">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h1>Our Latest Products</h1>
                <p>Browse through a wide range of our products.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <FilterButtons category={category} setCategory={setCategory} />

        {/* Product Cards */}
        <div className="container">
          {paginatedProducts.length > 0 ? (
            <ProductsCards products={paginatedProducts} />
          ) : (
            <p>No products found for the selected category.</p>
          )}
        </div>

        {/* Pagination */}
        {filteredProducts.length > productsPerPage && (
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
        )}
      </section>
    </>
  );
};

export default React.memo(Products);
