import React from "react";
// Correctly import all images
import leftBannerImage from "../../assets/images/left-banner-image.jpg";
import womenImage from "../../assets/images/baner-right-image-01.jpg";
import menImage from "../../assets/images/baner-right-image-02.jpg";
import kidsImage from "../../assets/images/baner-right-image-03.jpg";
import accessoriesImage from "../../assets/images/baner-right-image-04.jpg";

const MainBanner = () => {
  return (
    <>
      <div className="main-banner" id="top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-content">
                <div className="thumb">
                  <div className="inner-content">
                    <h4>We Are Hexashop</h4>
                    <span>Awesome, clean &amp; creative HTML5 Template</span>
                    <div className="main-border-button">
                      <a href="#">Purchase Now!</a>
                    </div>
                  </div>
                  {/* Use the imported left banner image */}
                  <img src={leftBannerImage} alt="Hexashop Banner" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-content">
                <div className="row">
                  {/* Women Section */}
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Women</h4>
                          <span>Best Clothes For Women</span>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Women</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                            <div className="main-border-button">
                              <a href="#">Discover More</a>
                            </div>
                          </div>
                        </div>
                        {/* Use the imported women image */}
                        <img src={womenImage} alt="Women Fashion" />
                      </div>
                    </div>
                  </div>
                  {/* Men Section */}
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Men</h4>
                          <span>Best Clothes For Men</span>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Men</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                            <div className="main-border-button">
                              <a href="#">Discover More</a>
                            </div>
                          </div>
                        </div>
                        {/* Use the imported men image */}
                        <img src={menImage} alt="Men Fashion" />
                      </div>
                    </div>
                  </div>
                  {/* Kids Section */}
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Kids</h4>
                          <span>Best Clothes For Kids</span>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Kids</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                            <div className="main-border-button">
                              <a href="#">Discover More</a>
                            </div>
                          </div>
                        </div>
                        {/* Use the imported kids image */}
                        <img src={kidsImage} alt="Kids Fashion" />
                      </div>
                    </div>
                  </div>
                  {/* Accessories Section */}
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Accessories</h4>
                          <span>Best Trend Accessories</span>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Accessories</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                            <div className="main-border-button">
                              <a href="#">Discover More</a>
                            </div>
                          </div>
                        </div>
                        {/* Use the imported accessories image */}
                        <img src={accessoriesImage} alt="Accessories" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
