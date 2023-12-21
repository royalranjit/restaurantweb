import React from "react";
import styles from "./style.module.scss";
import image from "./Rectangle 8.png";

export default function Happy() {
  return (
    <div
      className={styles.happy_container}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "156px",
        paddingRight: "156px",
      }}
    >
      <div className="Happy_text">
        <h1>
          200+ <span style={{ color: "#D95103" }}> Happy Customers </span>
        </h1>
        <p className="text-container">What our customers say about us</p>
        <p className="description">
          “Only the best momo you can find in the market. Different Varieties of
          momo to choose from. Will be visiting again soon”
        </p>
        <p className="heading">Livia Dias</p>
      </div>
      <div className="image_happy">
        <img src={image} alt="/" />
      </div>
    </div>
  );
}
