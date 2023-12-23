import { Space } from "antd";
import React from "react";

export default function ContactCard() {
  return (
    <div className="w-[461px] h-[100%] p-[32px] bg-[#0C6967] rounded-[16px]">
      <section>
        <Space>
          <svg
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6201 7.45C16.5701 2.83 12.5401 0.75 9.0001 0.75C9.0001 0.75 9.0001 0.75 8.9901 0.75C5.4601 0.75 1.4201 2.82 0.370095 7.44C-0.799905 12.6 2.3601 16.97 5.2201 19.72C6.2801 20.74 7.6401 21.25 9.0001 21.25C10.3601 21.25 11.7201 20.74 12.7701 19.72C15.6301 16.97 18.7901 12.61 17.6201 7.45ZM9.0001 12.46C7.2601 12.46 5.8501 11.05 5.8501 9.31C5.8501 7.57 7.2601 6.16 9.0001 6.16C10.7401 6.16 12.1501 7.57 12.1501 9.31C12.1501 11.05 10.7401 12.46 9.0001 12.46Z"
              fill="white"
            />
          </svg>
          <p className=" text-[white] text-[20px] font-[500]">Our Address</p>
        </Space>
        <p className="mt-[24px] text-[white] text-[20px] italic font-[400]">
          New Baneshwor, Kathmandu, Bagmati, Nepal
        </p>
      </section>
      <section></section>
    </div>
  );
}