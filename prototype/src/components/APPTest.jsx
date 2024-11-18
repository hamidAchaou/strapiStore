import React from "react";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./assets/css/templatemo-hexashop.css";
import "./assets/css/bootstrap.min.css";
import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainBanner from "./components/MainBanner/MainBanner";
import MenAreaStarts from "./components/MenAreaStarts/MenAreaStarts";

// Attach jQuery to window
window.jQuery = window.$ = $;

// Import owl-carousel after jQuery is attached to window
import "owl.carousel";

function App() {
  return (
    <>
      <Header />
      <MainBanner />
      <MenAreaStarts />
      <Footer />
    </>
  );
}

export default App;
