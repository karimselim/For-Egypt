// eslint-disable-next-line
import React from "react";
import "./Title.css";

const Title = ({ subTitle, title }) => {
  return (
    <div className="title">
      <p className="text-2xl">{subTitle}</p>
      <h2 className="text-5xl">{title}</h2>
    </div>
  );
};

export default Title;
