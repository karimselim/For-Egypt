// eslint-disable-next-line
import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
import Image from "next/image";

const Programs = () => {
  return (
    <section className="programs mx-[7%] my-20">
      <div className="program">
        <Image src={program_1} alt=""></Image>
        <div className="caption">
          <Image src={program_icon_1} alt="" />
          <p>كورسات و تدريبات</p>
        </div>
      </div>
      <div className="program">
        <Image src={program_2} alt=""></Image>
        <div className="caption">
          <Image src={program_icon_2} alt="" />
          <p>خصومات حصرية</p>
        </div>
      </div>
      <div className="program">
        <Image src={program_3} alt=""></Image>
        <div className="caption">
          <Image src={program_icon_3} alt="" />
          <p>فعاليات متنوعة</p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
