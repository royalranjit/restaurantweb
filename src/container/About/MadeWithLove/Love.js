import React from "react";
import styles from "./style.module.scss";
import Image from "./Rectangle1.png";
import MomoImg from "./buff Steam momo.png";

export default function Love() {
  return (
    <div className={styles.Love_container}>
      <div className="text_discription">
        <p className="madeWith">
          Our momos are <span className="text-[#D95103]"> made with love</span>
        </p>
        <p className="text-[#6B788E] text[20px] ">
          Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
          adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
          Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra
          gravida consectetur sed facilisis ut morbi.
        </p>
      </div>
      <div className="relative">
        <img src={Image} alt="/" />
        <div className="absolute bottom-0 left-[-160px]">
          <img src={MomoImg} alt="/" />
        </div>
      </div>
    </div>
  );
}
