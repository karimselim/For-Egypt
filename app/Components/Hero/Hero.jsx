import React from "react";
import Button from "@/app/UI/Button";
import { FaArrowLeftLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <main className="w-full bg-hero min-h-screen bg-[rgba(8,0,58,0.7)] bg-blend-overlay bg-cover bg-center text-white flex items-center justify-center">
      <div className="text-center max-w-[800px]">
        <h1 className="text-[60px] font-semibold max-mid:text-[40px] max-sm:text-[30px] max-sm:max-w-[400px] max-sm:mx-auto">
          أسرة طلاب من أجل مصر
        </h1>
        <p className="max-w-[700px] mx-auto my-[10px] leading-[1.4] max-sm:text-[14px] max-sm:my-[15px] max-sm:mb-[30px]">
          طلاب من أجل مصر - معًا مهمتنا بالقوة والشرف
        </p>
        <Button className="text-black bg-white text-lg">
          <FaArrowLeftLong className="pr-3 text-2xl" /> اكتشف المزيد
        </Button>
      </div>
    </main>
  );
};

export default Hero;
