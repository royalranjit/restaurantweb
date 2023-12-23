import React from "react";
import "./service.css";
import CustomeButton from "../../../common/button";

export default function Process() {
  return (
    <div className="image_process">
      <div className="service-text-container">
        <h1>Process behind the making</h1>
        <p
          style={{
            color: "#FFFFFF",
            fontWeight: "400px",
            textAlign: "center",
            fontSize: "25px",
          }}
        >
          See how only chefs cooks only the best momos
        </p>
      </div>
      <CustomeButton
        title={"Watch the Video"}
        iconPosition={"LEFT"}
        style={{ width: "231px" }}
        icon={
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.356 10.9668L16.3558 10.9667C15.2292 10.3185 13.8913 10.3168 12.7745 10.9682C11.661 11.6177 10.9931 12.7821 10.9931 14.0667V18.5334C10.9931 19.8326 11.6621 20.983 12.7745 21.632C13.3333 21.9579 13.9406 22.1134 14.5598 22.1134C15.164 22.1134 15.7843 21.9587 16.3436 21.6328C16.3441 21.6325 16.3446 21.6323 16.3451 21.632L20.2091 19.4068C21.3387 18.7569 22.0065 17.591 22.0065 16.2934C22.0065 14.9943 21.3375 13.8438 20.2251 13.1949L20.2226 13.1935L16.356 10.9668ZM3.12646 16.0001C3.12646 8.91622 8.87594 3.16675 15.9598 3.16675C23.0567 3.16675 28.7931 8.9159 28.7931 16.0001C28.7931 23.0839 23.0437 28.8334 15.9598 28.8334C8.87594 28.8334 3.12646 23.0839 3.12646 16.0001Z"
              fill="white"
              stroke="white"
            />
          </svg>
        }
      />
    </div>
  );
}
