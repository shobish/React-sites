import React from "react";
import "./Featured.css";

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItems">
        <img src="image/india.jpg" alt="imag" className="featuredImage" />
        <div className="featuredTitle">
          <h1>India</h1>
          <p>100+ Hotels </p>
        </div>
      </div>
      <div className="featuredItems">
        <img src="image/america.jpg" alt="imag" className="featuredImage" />
        <div className="featuredTitle">
          <h1>America</h1>
          <p>256+ properties </p>
        </div>
      </div>
      <div className="featuredItems">
        <img src="image/german.jpg" alt="imag" className="featuredImage" />
        <div className="featuredTitle">
          <h1>Germany</h1>
          <p>500+ Properties </p>
        </div>
      </div>
    </div>
  );
}

export default Featured;
