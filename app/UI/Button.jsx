import React from "react";
import classes from "./button.module.css";

const Button = ({ children, className }) => {
  return (
    <button className={`${classes.button} ${className}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </button>
  );
  //  <button className={`${classes.btn} ${className}`}>{children}</button>;
};

export default Button;
