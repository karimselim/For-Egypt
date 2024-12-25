// eslint-disable-next-line
import React from "react";
import "./Title.css";

const Title = ({ subTitle, title }) => {
  return (
    <div className="title">
      <p className="text-3xl">{subTitle}</p>
      <h2 className="text-4xl">{title}</h2>
    </div>
  );
};

export default Title;
