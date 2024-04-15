import React from "react";
import Banner from "../MyComponents/Banner";
import GetStarted from "../MyComponents/GetStarted";
import Portfolio from "../MyComponents/Portfolio";
// import Customer from "../MyComponents/Customer";
import Startaproject from "../MyComponents/Startaproject";
import AboutSection from "../MyComponents/AboutSection";
import Testimonial from "./Testimonial";
import Clients from "../MyComponents/Clients";


const Home = () => {
  return (
    <>
      {/* Banner from MyComponents */}
      <Banner />
      {/* GetStarted section from MyComponents */}
      <GetStarted />
      {/* HowItWorks section from MyComponents */}
      {/* <HowItWorks /> */}
      <Portfolio />

      {/* <Customer /> */}
      <Clients />
      <AboutSection />
      <Testimonial />
      <Startaproject />

    </>
  );
};

export default Home;
