import React, { useState } from "react";
import CustomeButton from "../../common/button";

export const MomosItems = () => {
  const momosData = [
    { id: 1, value: "Buff" },
    { id: 2, value: "Checken" },
    { id: 3, value: "Veg" },
  ];

  const buffItem = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVoWQfmrNWdtwyvEJgCAlzZDJbj3FfrEoKww&usqp=CAU",
    },
    {
      image:
        "https://136814726.cdn6.editmysite.com/uploads/1/3/6/8/136814726/s752855657334309972_p153_i1_w600.jpeg",
    },
  ];
  const chickenItem = [
    {
      image:
        "https://136814726.cdn6.editmysite.com/uploads/1/3/6/8/136814726/s752855657334309972_p153_i1_w600.jpeg",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVoWQfmrNWdtwyvEJgCAlzZDJbj3FfrEoKww&usqp=CAU",
    },
  ];

  const [item, setItem] = useState("");
  const handleMomos = (value) => {
    setItem(value);
  };
  return (
    <div>
      <div className="Momos_data">
        {momosData.map((item) => {
          return (
            <CustomeButton
              style={{
                background: "none",
                color: "#101828",
                width: "120px",
                border: "1px solid #EBEDF0",
                fontWeight: "600",
                textAlign: "center",
              }}
              onClick={() => handleMomos(item?.value)}
              title={item?.value}
              key={item?.id}
            />
          );
        })}
      </div>
      <div className="image-item">
        {item === "Buff" &&
          buffItem?.map((item, id) => {
            return (
              <div key={id}>
                <img width={200} height={200} src={item?.image} alt="/" />
              </div>
            );
          })}
        {item === "Checken" &&
          chickenItem?.map((item, id) => {
            return (
              <div key={id}>
                <img width={200} height={200} src={item?.image} alt="/" />
              </div>
            );
          })}
      </div>
    </div>
  );
};
