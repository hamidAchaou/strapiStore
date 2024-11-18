import React from "react";
import { FaPaperPlane } from "react-icons/fa"; // Using modern icon for form submission
import MainBanner from "../About/MainBanner";
import ContactAreaStarts from "./ContactAreaStarts";
import SubscribeAreaStarts from "../../components/SubscribeAreaStarts/SubscribeAreaStarts";

const Contact = () => {
  return (
    <>
      <MainBanner />
      <ContactAreaStarts />
      <SubscribeAreaStarts />
    </>
  );
};

export default Contact;
