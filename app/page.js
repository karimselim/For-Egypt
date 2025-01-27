"use client";

import React, { useState } from "react";
// import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import JoinUs from "./Components/JoinUs/JoinUs";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

export default function Home() {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      {/* <Navbar /> */}
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
        <JoinUs />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}
