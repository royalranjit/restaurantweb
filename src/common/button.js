import React from "react";
import "./button.css";

export default function CustomeButton({
  title,
  iconPosition,
  icon,
  style,
  onClick,
}) {
  return (
    <div>
      <button className="explore" style={style} onClick={onClick}>
        {iconPosition === "LEFT" && icon}
        {title}
        {iconPosition === "RIGHT" && icon}
      </button>
    </div>
  );
}
