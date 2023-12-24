import { QRCode } from "antd";
import React from "react";
import styles from "./style.module.scss";

export default function MenuTitle() {
  return (
    <div className="h-[743px] w-[1440px] px-[156px] ">
      <p className="text-[#0C6967] text-[56px] font-[400] flex items-center justify-center italic mt-[40px]">
        Our Menu
      </p>
      <p className="text-[#D95103] text-[31px] font-[700]  flex items-center justify-center mt-[40px]">
        Our menu is more than just momos,
      </p>
      <p className="text-[#101828] text-[31px] font-[700]  flex items-center justify-center">
        with a variety of dishes to cater to all tastes and preferences.
      </p>
      <div className={styles.scanQR_Container}>
        <p className="text-[31px] text-[#0C6967] font-[700]">
          Scan the QR code
        </p>
        <p className="text-[#252D43] text-[20px] font-[400]">
          You can also check the allergy advices using your phone as well
        </p>
        <div className="mt-[48px]">
          <QRCode value={"https://www.facebook.com/ranjitchaudhary.5209"} />
          <p className="flex items-center justify-center mt-[16px] text-[#D95103] text-[31px] font-[700]">
            SCAN <span className="text-[#101828]"> ME! </span>
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_166_2790)">
                <g clip-path="url(#clip1_166_2790)">
                  <path
                    d="M18.766 29.3C18.766 28.75 18.5702 28.2792 18.1785 27.8875C17.7868 27.4958 17.316 27.3 16.766 27.3C16.216 27.3 15.7452 27.4958 15.3535 27.8875C14.9618 28.2792 14.766 28.75 14.766 29.3C14.766 29.85 14.9618 30.3208 15.3535 30.7125C15.7452 31.1042 16.216 31.3 16.766 31.3C17.316 31.3 17.7868 31.1042 18.1785 30.7125C18.5702 30.3208 18.766 29.85 18.766 29.3ZM23.966 25.3V7.7C23.966 7.48333 23.8868 7.29583 23.7285 7.1375C23.5702 6.97917 23.3827 6.9 23.166 6.9H10.366C10.1493 6.9 9.96185 6.97917 9.80352 7.1375C9.64518 7.29583 9.56602 7.48333 9.56602 7.7V25.3C9.56602 25.5167 9.64518 25.7042 9.80352 25.8625C9.96185 26.0208 10.1493 26.1 10.366 26.1H23.166C23.3827 26.1 23.5702 26.0208 23.7285 25.8625C23.8868 25.7042 23.966 25.5167 23.966 25.3ZM19.166 4.1C19.166 3.83333 19.0327 3.7 18.766 3.7H14.766C14.4993 3.7 14.366 3.83333 14.366 4.1C14.366 4.36667 14.4993 4.5 14.766 4.5H18.766C19.0327 4.5 19.166 4.36667 19.166 4.1ZM26.366 3.7V29.3C26.366 30.1667 26.0493 30.9167 25.416 31.55C24.7827 32.1833 24.0327 32.5 23.166 32.5H10.366C9.49935 32.5 8.74935 32.1833 8.11602 31.55C7.48268 30.9167 7.16602 30.1667 7.16602 29.3V3.7C7.16602 2.83333 7.48268 2.08333 8.11602 1.45C8.74935 0.816667 9.49935 0.5 10.366 0.5H23.166C24.0327 0.5 24.7827 0.816667 25.416 1.45C26.0493 2.08333 26.366 2.83333 26.366 3.7Z"
                    fill="#101828"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_166_2790">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
                <clipPath id="clip1_166_2790">
                  <rect
                    width="19.2"
                    height="32"
                    fill="white"
                    transform="translate(7.16602 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}
