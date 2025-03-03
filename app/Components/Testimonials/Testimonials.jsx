// eslint-disable-next-line
import React from "react";
import testimonialsData from "@/app/data/testmonials";
import ImageSlider from "../ImageSlider/ImageSlider";

const Testimonials = () => {
  return <ImageSlider imgs={testimonialsData} />;
};

export default Testimonials;
