import React from "react";
import styles from "./style.module.scss";
import Image from "./Rectangle 11.png";

export default function Love() {
  return (
    <div className={styles.Love_container}>
      <div className="text_discription">
        <p>Our momos are made with love</p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
          adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
          Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra
          gravida consectetur sed facilisis ut morbi.
        </p>
      </div>
      <div className="image_container">
        <img src={Image} alt="/" />
      </div>
    </div>
  );
}
