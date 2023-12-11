import React from "react";
import "./hero.css";
import image from "./Frame 16.png";

export default function imgcontainer() {
  return (
    <div className="image_container">
      <div className="circle"></div>
      <div className="image_section">
        <img src={image} alt="/" />
      </div>
    </div>
  );
}
