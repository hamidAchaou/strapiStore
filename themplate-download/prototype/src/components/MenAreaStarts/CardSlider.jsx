import React from "react";
// Import Swiper components
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CardSlider.css"; // Custom styles for Swiper
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CardSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={10}
      speed={800}
      grabCursor={true}
      pagination={{ clickable: true }}
      navigation
      slideToClickedSlide={true}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {[
        {
          img: "assets/images/men-01.jpg",
          title: "Classic Spring",
          price: "$120.00",
        },
        {
          img: "assets/images/men-02.jpg",
          title: "Air Force 1 X",
          price: "$90.00",
        },
        {
          img: "assets/images/omar.jpg",
          title: "Love Nana ‘20",
          price: "$150.00",
        },
        {
          img: "assets/images/men-01.jpg",
          title: "Classic Spring",
          price: "$120.00",
        },
      ].map((item, index) => (
        <SwiperSlide key={index}>
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
              <img
                src={item.img}
                alt={item.title}
                className="slider-image" // CSS class for image styling
              />
            </div>
            <div className="down-content">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
              <ul className="stars">
                {[...Array(5)].map((_, starIndex) => (
                  <li key={starIndex}>
                    <i className="fa fa-star"></i>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* Pagination container */}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default CardSlider;
