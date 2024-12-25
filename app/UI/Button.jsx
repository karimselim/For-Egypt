import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`py-[0.875rem] px-6 text-base rounded-3xl cursor-pointer border-0 outline-none inline-flex items-center justify-center ${
        className || null
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
