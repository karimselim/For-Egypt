"use client";

import React, { useState } from "react";
import img from "../assets/3.jpg";
import Image from "next/image";
import ImageSlider from "../Components/ImageSlider/ImageSlider";
import eventsData from "../data/events";

const Events = () => {
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [selectedImageKey, setSelectedImageKey] = useState(null);
  const [obj, setObj] = useState(eventsData[1]);

  const handleImageClick = (imageId, imageKey) => {
    setSelectedImageId(imageId);
    setSelectedImageKey(imageKey);

    setObj(eventsData.find((e) => e.id === imageId));
  };

  return (
    <>
      <main className="h-fit pt-[88px] max-md:pt-[80px] max-lg:pt-[100px]">
        <div className="px-[7%] flex max-md:flex-col gap-32 bg-main rounded-b-xl shadow-md pb-6">
          <div className="flex w-full gap-6 max-md:flex-col-reverse">
            <div className="pt-12 w-1/2 text-white text-right h-fit max-md:w-full">
              <h1 className="text-2xl">
                {(obj && obj.name) || "this is just for testing"}
              </h1>
              <p>
                يسر جامعة بورسعيد دعوتكم لحضور أسبوع العلوم، وهو حدث علمي متميز
                يجمع بين الابتكار، البحث، وامستقبل – لا تفوتوا الفرصة!
              </p>
            </div>
            <div className="w-1/2 h-4/5 pt-2 max-md:w-full">
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
        liWidth="max-md:!w-[48%]"
        onImageClick={handleImageClick}
      />
    </>
  );
};

export default Events;
