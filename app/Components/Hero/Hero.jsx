// eslint-disable-next-line
import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-text">
        <h1>أسرة طلاب من أجل مصر</h1>
        <p>طلاب من أجل مصر - معًا مهمتنا بالقوة والشرف</p>
        <button className="btn">
          Explore more <Image src={dark_arrow} alt=""></Image>
        </button>
      </div>
    </main>
  );
};

export default Hero;
