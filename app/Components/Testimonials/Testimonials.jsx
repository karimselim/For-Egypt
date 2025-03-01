// eslint-disable-next-line
import React from "react";
import testimonialsData from "@/app/data/testmonials";
import ImageSlider from "../ImageSlider/ImageSlider";

const Testimonials = () => {
  return (
    <ImageSlider
      imgs={testimonialsData}
      totalTx={80}
      partialtx={11.1}
      ulWidth="w-[900%]"
    />
  );
};

export default Testimonials;
