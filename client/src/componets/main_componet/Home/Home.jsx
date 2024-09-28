import React from "react";
import Homeslide from "./hs/hs";
import Nav from "../Nav/Nav";
import Goal from "./goal/Goal";
import N_u from "./featured/N_u";
import Footer from "./footer/footer";
import HowItWorks from "./works/HowItWorks";
import About from "./about/About";
import FAQSection from "./faq/faq";
import Testimonial from "./reviews/reviews";
import Sponsors from "./sponsors/sponsors";
import "./Home.css";

const Home = () => {
  return (
    <div className="relative hero">
      <Nav />
      <Homeslide />
      <Goal />
      <HowItWorks />
      <About />
      <N_u />
      <Testimonial />
      <FAQSection />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Home;
