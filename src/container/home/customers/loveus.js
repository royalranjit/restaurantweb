import React from "react";
import CustomeButton from "../../../common/button";

export default function Loveus() {
  return (
    <div style={{ width: "552px"}}>
      <h1 style={{color:'#101828'}}>Why Customers <span style={{color:'#D95103'}}> Love Us </span></h1>
      <p className="loveus_text">
        Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nibh
        fermentum vulputate tortor. Egestas facilisi luctus turpis arcu
        dignissim. Amet neque enim etiam purus id. Tortor sit orci blandit
        cursus turpis.
      </p>
      <CustomeButton title={'Explore Our Story'} iconPosition={"RIGHT"} icon={<svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.7937 12.8535L20.1472 12.5L19.7937 12.1464L14.2537 6.60644C14.1589 6.5117 14.1589 6.34829 14.2537 6.25355C14.3484 6.15881 14.5118 6.15881 14.6066 6.25355L20.6766 12.3235C20.7713 12.4183 20.7713 12.5817 20.6766 12.6764L14.6066 18.7464C14.5553 18.7977 14.4947 18.82 14.4301 18.82C14.3656 18.82 14.305 18.7977 14.2537 18.7464C14.1589 18.6517 14.1589 18.4883 14.2537 18.3935L19.7937 12.8535Z"
            fill="white"
            stroke="white"
          />
          <path
            d="M20.33 13.25H3.5C3.09 13.25 2.75 12.91 2.75 12.5C2.75 12.09 3.09 11.75 3.5 11.75H20.33C20.74 11.75 21.08 12.09 21.08 12.5C21.08 12.91 20.74 13.25 20.33 13.25Z"
            fill="white"
          />
        </svg>} />
    </div>
  );
}
