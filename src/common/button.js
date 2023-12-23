import React from "react";
import "./button.css";
import { Button } from "antd";

export default function CustomeButton({
  title,
  iconPosition,
  icon,
  style,
  onClick,
  htmlType,
}) {
  return (
    <div>
      <Button
        htmlType={htmlType}
        className="explore"
        style={style}
        onClick={onClick}
      >
        {iconPosition === "LEFT" && icon}
        {title}
        {iconPosition === "RIGHT" && icon}
      </Button>
    </div>
  );
}
