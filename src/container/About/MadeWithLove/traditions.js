import React from "react";
import Image from "./Rectangle3.png";
import styles from "./style.module.scss";
import imageSteam from "./steam.png";

export default function Traditions() {
  return (
    <div className={styles.tradition_container}>
      <div className="w-[456px] h-[270px]">
        <p className="text-[29px] text-[#101828] font-[800]">
          Our momos are the perfect
          <span className="text-[#D95103]">
            blend of tradition and innovation
          </span>
        </p>
        <p className="font-[400] text-[#6B788E]">
          Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
          adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
          Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra
          gravida consectetur sed facilisis ut morbi.
        </p>
      </div>
      <div className="relative">
        <img src={Image} alt="/" />
        <div className="absolute bottom-[-76px] left-[-156px]">
          <img src={imageSteam} alt="/" />
        </div>
      </div>
    </div>
  );
}
