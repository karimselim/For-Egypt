"use client";

import React, { useState } from "react";
import img from "../assets/3.jpg";
import Image from "next/image";
import ImageSlider from "../Components/ImageSlider/ImageSlider";
import eventsData from "../data/events";

const Events = () => {
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [selectedImageKey, setSelectedImageKey] = useState(null);

  const handleImageClick = (imageId, imageKey) => {
    setSelectedImageId(imageId);
    setSelectedImageKey(imageKey);
    console.log("Clicked Image ID:", imageId, "Image Key:", imageKey);
  };

  return (
    <>
      <main className="h-fit pt-[88px] max-md:pt-[80px] max-lg:pt-[100px]">
        <div className="px-[7%] flex max-md:flex-col gap-32 bg-main rounded-b-xl shadow-md pb-6">
          <div className="flex w-full gap-6 min-hh-fit">
            <div className="pt-12 w-1/2 text-white min-hh-fit text-right h-fit">
              <h1 className="text-2xl">الاسبوع العلمي لجامعة بورسعيد</h1>
              <p>
                يسر جامعة بورسعيد دعوتكم لحضور أسبوع العلوم، وهو حدث علمي متميز
                يجمع بين الابتكار، البحث، والتكنولوجيا في بيئة أكاديمية محفزة.
                يهدف هذا الأسبوع إلى تعزيز الوعي العلمي، تبادل المعرفة،: 🔬
                محاضرات وندوات علمية يقدمها نخبة من ان يكون مفتاح المستقبل! 📅
                التاريخ: 16 فبراير 📍 المكان: جامعة بورسعيد العلم يقودنا إلى
                المستقبل – لا تفوتوا الفرصة!
              </p>
            </div>
            <div className="w-1/2 h-4/5 pt-2">
              <Image
                src={selectedImageKey || img}
                alt=""
                className="object-cover rounded-xl max-h-[230px]"
                width={1050}
                height={500}
              />
              <div className="text-white flex items-center justify-between pt-1">
                <p>port said</p>
                <p>MTIS, Medicen</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ImageSlider
        imgs={eventsData}
        totalTx={80}
        partialtx={11.1}
        ulWidth="w-[900%]"
        onImageClick={handleImageClick} // Pass function to child
      />
    </>
  );
};

export default Events;
