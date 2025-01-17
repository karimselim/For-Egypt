"use client";

import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const Main = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="">
        <About setPlayState={setPlayState} />
        <Title subTitle="خدماتنا" title="ماذا نقدم؟" />
        <Programs />
        <Title subTitle="ذكرياتنا" title="مكتبة الصور" />
        <Campus />
        <Title subTitle="الرؤية والتوجيه" title="كلمات من القلب" />
        <Testimonials />
        <Title subTitle="انضم إلينا الآن" title="فرصتك لتصنع النجاح" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default Main;
