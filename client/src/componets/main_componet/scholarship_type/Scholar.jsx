import React from "react";
import "./scholar.css";
import scholar from "../illustrations/illustration-2.svg";
import Nav from '../Nav/Nav';
import Footer from '../Home/footer/footer';

const Scholar = () => {
  return (
    <div>
      <Nav />
      <div className="scholarship">
        <p>Coming Soon!</p>
        <img className="illustration" src={scholar} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Scholar;
