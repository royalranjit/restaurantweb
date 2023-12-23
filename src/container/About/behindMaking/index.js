import React from "react";
import styles from "./style.module.scss";
import CustomeButton from "../../../common/button";

export default function Process() {
  return (
    <div className={styles.Process_container}>
      <div className="main_conatiner">
        <p className="heading">Process behind the making</p>
        <p className="description">
          See how we make momos that you like from only the best ingredients
        </p>
        <CustomeButton
          title={"Watch the Video"}
          iconPosition={"LEFT"}
          icon={
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.3565 10.9667L16.3563 10.9666C15.2297 10.3184 13.8918 10.3167 12.775 10.9681C11.6615 11.6177 10.9936 12.7821 10.9936 14.0667V18.5334C10.9936 19.8325 11.6625 20.983 12.775 21.6319C13.3338 21.9578 13.9411 22.1134 14.5603 22.1134C15.1645 22.1134 15.7848 21.9587 16.3441 21.6328C16.3446 21.6325 16.3451 21.6322 16.3456 21.6319L20.2096 19.4067C21.3392 18.7569 22.007 17.5909 22.007 16.2934C22.007 14.9942 21.338 13.8437 20.2256 13.1948L20.2231 13.1934L16.3565 10.9667ZM3.12695 16C3.12695 8.91616 8.87643 3.16669 15.9603 3.16669C23.0571 3.16669 28.7936 8.91584 28.7936 16C28.7936 23.0839 23.0441 28.8334 15.9603 28.8334C8.87643 28.8334 3.12695 23.0839 3.12695 16Z"
                fill="white"
                stroke="white"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
}
