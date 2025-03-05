"use client";
import React, { useEffect, useRef, useState } from "react";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import Image from "next/image";
import "./Testimonials.css";
import "./ImageSlider.css";
import { usePathname } from "next/navigation";

const ImageSlider = ({ imgs, liWidth, onImageClick }) => {
  const pathname = usePathname();
  const slider = useRef();
  const [tx, setTx] = useState(0);
  const [numForGroups, setNumForGroups] = useState(1);
  const [transformBy, setTransformBy] = useState(0);
  const [totalTx, setTotalTx] = useState(0);
  const [ulWidth, setUlWidth] = useState({ width: "100%" });

  useEffect(() => {
    const updateNumForGroups = () => {
      const isPhone = window.matchMedia("(max-width: 479px)").matches;
      const isTablet = window.matchMedia(
        "(min-width: 480px) and (max-width: 767px)"
      ).matches;
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;

      if (isPhone && pathname !== "/") {
        setNumForGroups(1);
      } else if (isTablet) {
        setNumForGroups(2);
      } else {
        const newNumForGroups = pathname === "/" ? 2 : 4;
        setNumForGroups(newNumForGroups);
      }

      const numGroups = Math.ceil(imgs.length / numForGroups);
      const newTransformBy = 100 / numGroups;
      const newTotalTx = (numGroups - 1) * newTransformBy;

      setTotalTx(newTotalTx);
      setTransformBy(newTransformBy);
      setUlWidth({ width: `${numGroups * 100}%` });
    };

    updateNumForGroups();
    window.addEventListener("resize", updateNumForGroups);
    return () => window.removeEventListener("resize", updateNumForGroups);
  }, [imgs.length, pathname, numForGroups]);

  const slideForward = () => {
    setTx((prevTx) => {
      const newTx = Math.max(prevTx - transformBy, -totalTx);
      slider.current.style.transform = `translateX(${newTx}%)`;
      return newTx;
    });
  };

  const slideBackward = () => {
    setTx((prevTx) => {
      const newTx = Math.min(prevTx + transformBy, 0);
      slider.current.style.transform = `translateX(${newTx}%)`;
      return newTx;
    });
  };

  const handleImageClick = (testimonial) => {
    if (onImageClick) {
      const imageKey =
        typeof testimonial.image === "string"
          ? testimonial.image
          : testimonial.image.src;
      onImageClick(testimonial.id, imageKey);
    }
  };

  const groupedTestimonials = [];
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
        <ul
          ref={slider}
          style={ulWidth}
          className="flex list-none m-0 p-0 transition-transform duration-500"
        >
          {groupedTestimonials.map((pair, index) => (
            <div className="pair flex w-full" key={index}>
              {pair.map((testimonial) => (
                <li
                  key={testimonial.id}
                  style={{ width: `${100 / numForGroups}%` }}
                  className={liWidth || null}
                >
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
