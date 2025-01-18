import React from "react";
import classes from "./whiteBtn.module.css";

const WhiteBtn = ({ children, className }) => {
  return (
    <button className={`${classes.whiteBtn} ${className}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </button>
  );
};

export default WhiteBtn;
