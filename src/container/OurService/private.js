import React from "react";
import styles from "./style.module.scss";
import { Categring, PrivateParty } from "../../common/ServiceLogo";
import { Image, QRCode } from "antd";
import image6 from "./assists/Image (6).png";

export default function Private() {
  return (
    <div>
      <div className={styles.Party_container}>
        <div className="description_container">
          <PrivateParty />
          <p className="text-[#101828] text-[31px] font-[700] mt-[24px]">
            Private Party
          </p>
          <p className="text-[#6B788E] text-[16px] font-[400] mt-[24px]">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
            adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
          </p>
          <div className="scanCard_container">
            <div className="ml-[24px]">
              <p className="text-[#0C6967] text-[25px] font-[700]">
                Scan the QR code
              </p>
              <p className="text-[#6B788E] text-[14px] font-[400]">
                You can also check about the service
              </p>
            </div>
            <div>
              <QRCode value={"https://www.facebook.com/ranjitchaudhary.5209"} />
            </div>
          </div>
        </div>

        <div className="image_container">
          <Image src={image6} alt="/" preview={false} />
        </div>
      </div>
      <div className={styles.Party_container}>
        <div className="image_container">
          <Image src={image6} alt="/" preview={false} />
        </div>
        <div className="description_container">
          <Categring />
          <p className="text-[#101828] text-[31px] font-[700] mt-[24px]">
            Categring
          </p>
          <p className="text-[#6B788E] text-[16px] font-[400] mt-[24px]">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
            adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
          </p>
          <div className="scanCard_container">
            <div className="ml-[24px]">
              <p className="text-[#0C6967] text-[25px] font-[700]">
                Scan the QR code
              </p>
              <p className="text-[#6B788E] text-[14px] font-[400]">
                You can also check about the service
              </p>
            </div>
            <div>
              <QRCode value={"https://www.facebook.com/ranjitchaudhary.5209"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
