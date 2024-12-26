// eslint-disable-next-line
import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import Image from "next/image";
import { FaBookReader } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";

const Programs = () => {
  return (
    <section className="programs mx-[7%] my-20">
      <div className="program">
        <Image src={program_1} alt=""></Image>
        <div className="caption">
          <FaBookReader className="text-6xl" />
          <p>كورسات و تدريبات</p>
        </div>
      </div>
      <div className="program">
        <Image src={program_2} alt=""></Image>
        <div className="caption">
          <CiDiscount1 className="text-6xl" />
          <p>خصومات حصرية</p>
        </div>
      </div>
      <div className="program">
        <Image src={program_3} alt=""></Image>
        <div className="caption">
          <CiCalendarDate className="text-6xl" />
          <p>فعاليات متنوعة</p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
