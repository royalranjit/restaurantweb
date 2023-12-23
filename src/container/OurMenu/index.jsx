import { QRCode } from "antd";
import React from "react";

export default function OurMenu() {
  return (
    <div>
      {" "}
      <QRCode value={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Wiki-sixtynine.png/640px-Wiki-sixtynine.png"} />
    </div>
  );
}
