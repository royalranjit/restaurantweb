import styles from "./style.module.scss";
import React from "react";
import image from "./Group 8.png";

export default function Authentic() {
  return (
    <div className={styles.authentic_container}>
      <div className="authentic_momo">
        <div>
          <p className="title_container">About Us</p>
          <div className="text_container">
            <p className="heading">WE PRIDE OURSELF ON</p>
            <p className="description">
              <span style={{ color: "#D95103" }}>
                Our authentic momo recipes
              </span>
              passed down through generations
            </p>
          </div>
        </div>

        <div className="image_container">
          <img src={image} alt="/" />
        </div>
      </div>
    </div>
  );
}
