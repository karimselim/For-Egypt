// eslint-disable-next-line
import React from "react";
import program_1 from "../../assets/training.jpeg";
import program_2 from "../../assets/sponser.jpeg";
import program_3 from "../../assets/events.jpeg";
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
      setIsMobile(isPhone || window.innerWidth <= 768); // Consider smaller screens as mobile
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
    <section className="programs mx-[7%] my-20 flex justify-between max-md:flex-col gap-12">
      <div className="relative">
        {isMobile && (
          <h3 className="text-xl mb-2 text-center">كورسات و تدريبات</h3>
        )}
        <div className="program flex-basis-[31%] relative">
          <Image
            src={program_1}
            alt=""
            className="w-full block rounded-[10px]"
          />
          <div className="caption rounded-[10px] absolute top-0 left-0 right-0 bottom-0 bg-[rgba(152,0,25,0.3)] flex items-center justify-center flex-col text-white cursor-pointer opacity-0 pt-[70%] transition-all duration-400 hover:opacity-100 hover:pt-0">
            <FaBookReader className="text-6xl mb-2" />
            <p>كورسات و تدريبات</p>
          </div>
        </div>
      </div>
      <div className="relative">
        {isMobile && <h3 className="text-xl mb-2 text-center">خصومات حصرية</h3>}
        <div className="program flex-basis-[31%] relative">
          <Image
            src={program_2}
            alt=""
            className="w-full block rounded-[10px]"
          />
          <div className="caption rounded-[10px] absolute top-0 left-0 right-0 bottom-0 bg-[rgba(152,0,25,0.3)] flex items-center justify-center flex-col text-white cursor-pointer opacity-0 pt-[70%] transition-all duration-400 hover:opacity-100 hover:pt-0">
            <CiDiscount1 className="text-6xl mb-2" />
            <p>خصومات حصرية</p>
          </div>
        </div>
      </div>
      <div className="relative">
        {isMobile && (
          <h3 className="text-xl mb-2 text-center">فعاليات متنوعة</h3>
        )}
        <div className="program flex-basis-[31%] relative">
          <Image
            src={program_3}
            alt=""
            className="w-full block rounded-[10px]"
          />
          <div className="caption rounded-[10px] absolute top-0 left-0 right-0 bottom-0 bg-[rgba(152,0,25,0.3)] flex items-center justify-center flex-col text-white cursor-pointer opacity-0 pt-[70%] transition-all duration-400 hover:opacity-100 hover:pt-0">
            <CiCalendarDate className="text-6xl mb-2" />
            <p>فعاليات متنوعة</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
