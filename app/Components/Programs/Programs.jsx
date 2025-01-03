// eslint-disable-next-line
import React from "react";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import Image from "next/image";
import { FaBookReader } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";

// Custom Hook to detect if the user is on a mobile device
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      const userAgent =
        typeof navigator === "undefined" ? "" : navigator.userAgent;
      const isPhone =
        /iPhone|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      setIsMobile(isPhone || window.innerWidth <= 992);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile;
};

const Programs = () => {
  const isMobile = useIsMobile(); // Check if the device is mobile

  return (
    <section
      className={`programs mx-[7%] my-20 flex ${
        isMobile ? "flex-col gap-6" : "justify-between gap-12"
      }`}
    >
      <div
        className={`program flex-basis-[31%] relative ${
          isMobile ? "w-full" : ""
        }`}
      >
        <Image src={program_1} alt="" className="w-full block rounded-[10px]" />
        <div
          className={`caption rounded-[10px] absolute top-0 left-0 right-0 bottom-0 ${
            isMobile
              ? "bg-[rgba(152,0,25,0.6)] flex items-center justify-center text-white pt-0 opacity-100"
              : "bg-[rgba(152,0,25,0.3)] flex items-center justify-center flex-col text-white cursor-pointer opacity-0 pt-[70%] transition-all duration-400 hover:opacity-100 hover:pt-0"
          }`}
        >
          <FaBookReader className="text-6xl mb-2" />
          <p>كورسات و تدريبات</p>
        </div>
      </div>
      <div
        className={`program flex-basis-[31%] relative ${
          isMobile ? "w-full" : ""
        }`}
      >
        <Image src={program_2} alt="" className="w-full block rounded-[10px]" />
        <div
          className={`caption rounded-[10px] absolute top-0 left-0 right-0 bottom-0 ${
            isMobile
              ? "bg-[rgba(152,0,25,0.6)] flex items-center justify-center text-white pt-0 opacity-100"
              : "bg-[rgba(152,0,25,0.3)] flex items-center justify-center flex-col text-white cursor-pointer opacity-0 pt-[70%] transition-all duration-400 hover:opacity-100 hover:pt-0"
          }`}
        >
          <CiDiscount1 className="text-6xl mb-2" />
          <p>خصومات حصرية</p>
        </div>
      </div>
      <div
        className={`program flex-basis-[31%] relative ${
          isMobile ? "w-full" : ""
        }`}
      >
        <Image src={program_3} alt="" className="w-full block rounded-[10px]" />
        <div
          className={`caption rounded-[10px] absolute top-0 left-0 right-0 bottom-0 ${
            isMobile
              ? "bg-[rgba(152,0,25,0.6)] flex items-center justify-center text-white pt-0 opacity-100"
              : "bg-[rgba(152,0,25,0.3)] flex items-center justify-center flex-col text-white cursor-pointer opacity-0 pt-[70%] transition-all duration-400 hover:opacity-100 hover:pt-0"
          }`}
        >
          <CiCalendarDate className="text-6xl mb-2" />
          <p>فعاليات متنوعة</p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
