import React from "react";
import styles from "./style.module.scss";
import image from "./Image (1).png";

export default function Process() {
  return (
    <div className={styles.Process_container}>
      <div className="image_container">
        <img src={image} alt="/" />
      </div>
    </div>
  );
}
