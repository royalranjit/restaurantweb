import React from "react";
import Love from "./Love";
import HandCraft from "./handCraft";
import Traditions from "./traditions";

export default function Master() {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingLeft: "156px",
        paddingRight: "156px",
      }}
    >
      <Love />
      <HandCraft />
      <Traditions />
    </div>
  );
}
