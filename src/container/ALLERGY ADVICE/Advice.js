import React from "react";
import styles from "./style.module.scss";
import image from "../OurService/assists/Group 9.png";
import { Image } from "antd";
import CustomCard from "../../common/card";

export function Advice() {
  return (
    <div className={styles.Advice_container}>
      <div className="description_container">
        <p className="text-[#0C6967] text-[56px] font-[400] italic">
          Allergy Advices
        </p>
        <p className="text-[#6B788E] text-[24px] font-[300] tracking-[0.12em] mt-[40px] ">
          AT OUR RESTAURANT
        </p>
        <p className="text-[#101828] text-[31px] font-[700] mt-[24px]">
          We use only the freshest and highest quality ingredients in all our
          dishes,
          <p className="text-[#D95103]">
            and offer transparency in our ingredient labeling.
          </p>
        </p>
      </div>
      <div className="mt-[56px]">
        <Image src={image} alt="/" preview={false} />
      </div>
    </div>
  );
}

export default function CardList() {
  return (
    <div>
      <CustomCard />
    </div>
  );
}
