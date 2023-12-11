import React from "react";
import Boy from "./boy";
import Loveus from "./loveus";

export default function BoyLove() {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingLeft: "156px",
        paddingRight: "156px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Boy />
      <Loveus />
    </div>
  );
}
