// eslint-disable-next-line
import React from "react";
// import "./Title.css";

const Title = ({ subTitle, title }) => {
  return (
    <div className="title text-center text-main font-semibold uppercase mt-[70px] mb-[30px]">
      <p className="text-3xl">{subTitle}</p>
      <h2 className="text-4xl text-[#000f38] mt-1">{title}</h2>
    </div>
  );
};

export default Title;
