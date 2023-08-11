import React from "react";
import { Link } from "react-router-dom";
import "./missing.css";
import Navbar from "../navbar/Navbar";
import astro from "../../assets/astroo.png";

import Footer from "../footer/Footer";

const Missing = () => {
  return (
    <>
      <Navbar />
      <div className="missing-container">
        <div className="error-image-container">
          <img src={astro} alt="Image Description" />
        </div>
        <div className="error-text-container">
          <h1 className="error-title">404</h1>
          <h3 className="error-sub-title">Page Not Found</h3>

          <button className="back-to-home-btn">
            <Link to="/">Go Home</Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Missing;
