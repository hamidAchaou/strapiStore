import React from "react";
// import "owl.carousel/dist/assets/owl.carousel.min.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import "./assets/css/templatemo-hexashop.css";
import "./assets/css/bootstrap.min.css";
import "./App.css";

import MenAreaStarts from "./components/MenAreaStarts/MenAreaStarts";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainBanner from "./components/MainBanner/MainBanner";
import CategoryAreStarts from "./components/CategoryAreStarts/CategoryAreStarts";
import Products from "./components/Products/Products";

const App = () => {
  return (
    <>
      <Header />
      <MainBanner />
      {/* <MenAreaStarts /> */}
      <Products />
      <Footer />
    </>
  );
};

export default App;
