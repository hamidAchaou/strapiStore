import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  // Simulate fetching products (replace with your API fetch logic)
  const fetchProducts = async () => {
    const fetchedProducts = [...Array(50)].map((_, index) => ({
      id: index + 1,
      title: `Product Title ${index + 1}`,
      price: (Math.random() * 100 + 20).toFixed(2),
      image: `assets/images/product-${(index % 12) + 1}.jpg`, // Mock images
    }));
    setProducts(fetchedProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Pagination logic
  const productsPerPage = 12;
  const offset = pageNumber * productsPerPage;
  const currentPageProducts = products.slice(offset, offset + productsPerPage);
  const pageCount = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (selectedPage) => {
    setPageNumber(selectedPage.selected);
  };

  return (
    <>
      {/* ***** Main Banner Area Start ***** */}
      <div className="page-heading" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <h2>Check Our Products</h2>
                <span>
                  Awesome &amp; Creative HTML CSS layout by TemplateMo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Main Banner Area End ***** */}

      {/* ***** Products Area Starts ***** */}
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

        <div className="container">
          <div className="row">
            {currentPageProducts.map((product) => (
              <div key={product.id} className="col-lg-4">
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src={product.image} alt="product" />
                  </div>
                  <div className="down-content">
                    <h4>{product.title}</h4>
                    <span>${product.price}</span>
                    <ul className="stars">
                      {[...Array(5)].map((_, i) => (
                        <li key={i}>
                          <i className="fa fa-star"></i>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="col-lg-12">
              <div className="pagination">
                <ReactPaginate
                  previousLabel={"<"}
                  nextLabel={">"}
                  breakLabel={"..."}
                  pageCount={pageCount}
                  onPageChange={handlePageChange}
                  containerClassName={"pagination-container"}
                  activeClassName={"active"}
                  pageClassName={"page-item"}
                  pageLinkClassName={"page-link"}
                  previousClassName={"previous-item"}
                  nextClassName={"next-item"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Products Area Ends ***** */}
    </>
  );
};

export default Products;
