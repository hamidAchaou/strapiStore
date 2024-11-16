// s/About.js
import React from "react";
import MainBanner from "./MainBanner";
import AboutSection from "./AboutSection";
import TeamSection from "./TeamSection";
import ServiceSection from "./ServiceSection";
import SubscribeSection from "./SubscribeSection";
import "./About.css";

const About = () => (
  <div>
    <MainBanner />
    <AboutSection />
    <TeamSection />
    <ServiceSection />
    <SubscribeSection />
  </div>
);

export default About;
