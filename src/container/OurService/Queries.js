import React from "react";
import CustomeButton from "../../common/button";
import styles from "./style.module.scss";

export default function Section3() {
  return (
    <div className={styles.main_container}>
      <div className="description_container">
        <p className="text-[#101828] text-[31px] font-[700]">Got any Queries?</p>
        <p className="text-[#6B788E] text-[16px] font-[400]">
          If you have any queries, send us a message. Our Friendly team would
          love to hear from you
        </p>
        <CustomeButton title={"Get In Touch"} />
      </div>
    </div>
  );
}
