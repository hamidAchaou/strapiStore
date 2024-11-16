import React from "react";
import MainBanner from "../../components/MainBanner/MainBanner";
import SectionProducts from "../../components/SectionProducts/SectionProducts";
import SubscribeAreaStarts from "../../components/SubscribeAreaStarts/SubscribeAreaStarts";
import ExploreAreaStarts from "../../components/ExploreAreaStarts/ExploreAreaStarts";
import SocialAreaStarts from "../../components/SocialAreaStarts/SocialAreaStarts";

const Home = () => {
  return (
    <>
      <MainBanner />
      <SectionProducts />
      <ExploreAreaStarts />
      <SocialAreaStarts />
      <SubscribeAreaStarts />
    </>
  );
};

export default Home;
