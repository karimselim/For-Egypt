// eslint-disable-next-line
import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero ">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experience nedded to excel in the dynamic field
          of education
        </p>
        <button className="btn">
          Explore more <Image src={dark_arrow} alt=""></Image>
        </button>
      </div>
    </div>
  );
};

export default Hero;
