import React from "react";
import Image from "./Rectangle2.png";
import styles from "./style.module.scss";
import fryImage from "./Fry Momo.png"

export default function HandCraft() {
  return (
    <div className={styles.HandCraft_container}>
      <div className="">
        <img src={Image} alt="/" />
        <div className="absolute bottom-[-58px] left-[34%]">
          <img src={fryImage} alt="/" />
        </div>
      </div>
      <div className="Handcraft_text_container">
        <p className="text-[29px] text-[#101828] font-[800]">
          Taste the difference with{" "}
          <span className="text-[#D95103]"> our handcrafted momos </span>
        </p>
        <p className="font-[400] text-[#6B788E]">
          Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
          adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
          Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra
          gravida consectetur sed facilisis ut morbi.
        </p>
      </div>
    </div>
  );
}
