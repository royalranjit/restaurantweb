import React, { useEffect } from "react";
import "./hero.css";
import SideImage from "./imgcontainer";
import CustomeButton from "../../../common/button";
import { Paint } from "../../../assets/paint";

export const Hero = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  }, []);
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
      className="hero-container"
    >
      <div className="hero-text">
        <p className="restaurent">RESTAURANT</p>
        <div className="paint_one">
          <p className="the">The</p>
          <div className="paint_container">
            <Paint />
          </div>

          <p className="the_one"> #One</p>
        </div>
        <p className="momo-restaurent">
          Momo <span style={{ color: "#D95103" }}> Restaurant </span>{" "}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            height: "30px",
            width: "489px",
          }}
        >
          <p className="more-than">
            More than{" "}
            <span
              style={{
                fontWeight: "700px",
                fontSize: "25px",
                color: "#D95103",
              }}
            >
              20+Varities{" "}
            </span>{" "}
            of momos avaliable for you
          </p>
        </div>
        <CustomeButton
          title={"Explore Food Menu"}
          iconPosition={"RIGHT"}
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7937 12.3536L20.1472 12L19.7937 11.6464L14.2537 6.10645C14.1589 6.01171 14.1589 5.84829 14.2537 5.75355C14.3484 5.65881 14.5118 5.65881 14.6066 5.75355L20.6766 11.8236C20.7713 11.9183 20.7713 12.0817 20.6766 12.1764L14.6066 18.2464C14.5553 18.2977 14.4947 18.32 14.4301 18.32C14.3656 18.32 14.305 18.2977 14.2537 18.2464C14.1589 18.1517 14.1589 17.9883 14.2537 17.8936L19.7937 12.3536Z"
                fill="white"
                stroke="white"
              />
              <path
                d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"
                fill="white"
              />
            </svg>
          }
        />
      </div>
      <SideImage />
    </div>
  );
};
