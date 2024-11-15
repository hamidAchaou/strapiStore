import React from "react";
import "./assets/css/templatemo-hexashop.css";
import "./assets/css/lightbox.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainBanner from "./components/MainBanner/MainBanner";
import Products from "./components/Products/Products";
import SubscribeAreaStarts from "./components/SubscribeAreaStarts/SubscribeAreaStarts";
import ExploreAreaStarts from "./components/ExploreAreaStarts/ExploreAreaStarts";
import SocialAreaStarts from "./components/SocialAreaStarts/SocialAreaStarts";

const App = () => {
  return (
    <>
      <Header />
      <MainBanner />
      {/* <MenAreaStarts /> */}
      <Products />
      <ExploreAreaStarts />
      <SocialAreaStarts />
      <SubscribeAreaStarts />
      <Footer />
    </>
  );
};

export default App;
