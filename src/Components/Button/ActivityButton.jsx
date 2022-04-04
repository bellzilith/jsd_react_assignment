import React from "react";
import "./Button.css";

const ActivityButton = ({ children, onClick, onChange }) => {
  return (
    <button className="custom-btn" onClick={onClick} onChange={onChange}>
      {children}
    </button>
  );
};

export default ActivityButton;
