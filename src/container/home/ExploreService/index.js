import React from "react";
import styles from "./style.module.scss";
import {
  Categring,
  PrivateParty,
  QualityFood,
} from "../../../common/ServiceLogo";
import CustomeButton from "../../../common/button";


export default function ExploreService() {
  const exploreData = [
    {
      id: "1",
      value: "Quality Food",
      icon: <QualityFood />,
      description:
        "Only the best food with top quality products and ingredients",
    },
    {
      id: "2",
      value: "Private Party",
      icon: <PrivateParty />,
      description:
        "Get the best food for all your private parties and gatherings",
    },
    {
      id: "3",
      value: "Categring",
      icon: <Categring />,
      description: "Get the best food for any occasions and gatherings",
    },
  ];
  return (
    <div className={styles.explore_container} style={{ minHeight: "500px" }}>
      <div className="Explore_service">
        {exploreData.map((item, id) => {
          return (
            <div key={item.id} className="list_item">
              {item.icon}
              <p className="value">{item.value}</p>
              <p className="description">{item.description}</p>
            </div>
          );
        })}
      </div>
      <div className="service_btn">
        <CustomeButton
          title={"Explore Our Services"}
          iconPosition={"RIGHT"}
          style={{ marginTop: "20px" }}
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7937 12.3537L20.1472 12.0001L19.7937 11.6466L14.2537 6.10656C14.1589 6.01183 14.1589 5.84841 14.2537 5.75367C14.3484 5.65893 14.5118 5.65893 14.6066 5.75367L20.6766 11.8237C20.7713 11.9184 20.7713 12.0818 20.6766 12.1766L14.6066 18.2466C14.5553 18.2979 14.4947 18.3201 14.4301 18.3201C14.3656 18.3201 14.305 18.2979 14.2537 18.2466C14.1589 18.1518 14.1589 17.9884 14.2537 17.8937L19.7937 12.3537Z"
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
    </div>
  );
}
