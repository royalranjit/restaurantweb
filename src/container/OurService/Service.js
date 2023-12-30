import React from "react";
import styles from "./style.module.scss";
import OkImage from "./assists/Group 9.png";
import { Image } from "antd";

export default function Service() {
  return (
    <div className={styles.Service_container}>
      <div className="text_container">
        <p className="text-[#0C6967] text-[56px] font-[400] italic">
          Our Services
        </p>
        <p className="text-[#6B788E] text-[24px] font-[300] tracking-[0.12em] mt-[40px] ">
          KNOWING OUR CUSTOMERS NEEDS
        </p>
        <p className="text-[31px] font-[700] text-[#101828] mt-[24px]">
          <p className="text-[#D95103]">We're more than just momos.</p>
          We're a full-service dining experience.
        </p>
      </div>
      <div className="mt-[56px]">
        <Image src={OkImage} alt="/" width={494} height={499} preview={false} />
      </div>
    </div>
  );
}
