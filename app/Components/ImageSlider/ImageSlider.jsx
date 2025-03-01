"use client";

import React, { useRef } from "react";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import Image from "next/image";
import "./Testimonials.css";
import "./ImageSlider.css";
import { usePathname } from "next/navigation";

const ImageSlider = ({ imgs, totalTx, partialtx, ulWidth, onImageClick }) => {
  const pathname = usePathname();
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -totalTx) {
      tx -= partialtx;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += partialtx;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const handleImageClick = (testimonial) => {
    if (onImageClick) {
      const imageKey =
        typeof testimonial.image === "string"
          ? testimonial.image
          : testimonial.image.src;

      onImageClick(testimonial.id, imageKey); // Pass both the ID and image key
    }
  };

  const groupedTestimonials = [];
  let numForGroups = pathname === "/" ? 2 : 4;
  for (let i = 0; i < imgs.length; i += numForGroups) {
    groupedTestimonials.push(imgs.slice(i, i + numForGroups));
  }

  return (
    <section
      className={`mx-[5%] max-lg:mx-[3.5%] py-20 ${
        pathname === "/" ? "testimonials" : "imageSlider"
      }`}
    >
      <Image
        src={next_icon}
        alt=""
        className="next-btn"
        onClick={slideForward}
      />
      <Image
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider} className={`${ulWidth}`}>
          {groupedTestimonials.map((pair, index) => (
            <div className="pair" key={index}>
              {pair.map((testimonial) => (
                <li key={testimonial.id}>
                  <div className="slide">
                    <div className="user-info">
                      <Image
                        src={testimonial.image}
                        alt=""
                        onClick={() => handleImageClick(testimonial)}
                      />
                      <div className="text-center">
                        <h3 className="mb-2">{testimonial.name}</h3>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>
                    {testimonial.quote && (
                      <p className="mt-[7px] text-center">
                        {testimonial.quote}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ImageSlider;
