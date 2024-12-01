import React, { useState, useMemo, useCallback } from "react";
import ReactPaginate from "react-paginate";
import ProductsCards from "./ProductsCards/ProductsCards";
import "./Products.css";

const Products = () => {
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

  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 6;

  // Paginate the products
  const paginatedProducts = useMemo(() => {
    const offset = currentPage * productsPerPage;
    return products.slice(offset, offset + productsPerPage);
  }, [products, currentPage, productsPerPage]);

  // Handle page change
  const handlePageChange = useCallback(({ selected }) => {
    setCurrentPage(selected);
  }, []);

  return (
    <section className="section" id="products">
      <div className="container">
        <h1 className="section-title">Our Latest Products</h1>
        <p className="section-description">
          Browse through a wide range of our products.
        </p>

        {/* Product Cards */}
        {paginatedProducts.length > 0 ? (
          <ProductsCards products={paginatedProducts} />
        ) : (
          <p>No products available.</p>
        )}

        {/* Pagination */}
        <div className="pagination-container">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={Math.ceil(products.length / productsPerPage)}
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
      </div>
    </section>
  );
};

export default React.memo(Products);
