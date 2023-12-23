import React from "react";
import styles from "./style.module.scss";
import Image2 from "./Image (2).png";
import Image3 from "./Image (3).png";
import Image4 from "./Image (4).png";

export default function MeetTheTeam() {
  return (
    <div className={styles.Meet_container}>
      <div className="meet_text_container">
        <p className="font-[700] text-[49px] text-[#101828]">
          Meet The <span className="text-[#D95103]"> Team </span>
        </p>
        <p className="text-[25px] text-[#0C6967]">Our talented team members who delivers only the best results</p>
      </div>
      <div className="Meet_Image_container">
        <img src={Image2} alt="/" />
        <img src={Image3} alt="/" />
        <img src={Image4} alt="/" />
      </div>
    </div>
  );
}
