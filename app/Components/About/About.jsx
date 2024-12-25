// eslint-disable-next-line
import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
import Image from "next/image";

const About = ({ setPlayState }) => {
  return (
    <section className="about mx-[7%] my-24">
      <aside className="about-left">
        <Image src={about_img} alt="" className="about-img" />
        <Image
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </aside>
      <aside className="about-right">
        <h2>من نحن؟</h2>
        <h2>أسرة طلاب من أجل مصر</h2>
        <p>
          أسرة طلاب من أجل مصر هي كيان طلابي يهدف إلى تعزيز القيم الوطنية وتنمية
          روح الانتماء لدى الشباب الجامعي. تسعى الأسرة إلى بناء جيل واعٍ قادر
          على مواجهة تحديات المستقبل، من خلال تنظيم فعاليات وأنشطة متنوعة تُشجع
          على الابتكار والعمل الجماعي. تعمل الأسرة على توفير بيئة إيجابية للطلاب
          تمكنهم من تطوير مهاراتهم الشخصية والأكاديمية، وتغرس فيهم مبادئ القيادة
          وخدمة المجتمع.
        </p>
        <p>
          تركز أسرة طلاب من أجل مصر على تعزيز التعاون بين الطلاب من مختلف
          التخصصات، مع توفير منصات للحوار وتبادل الأفكار. من خلال مبادراتها
          المتنوعة، تسعى الأسرة إلى دعم الطلاب في تحقيق طموحاتهم الأكاديمية
          والمهنية، والمساهمة في تطوير المجتمع ككل. كما تحرص الأسرة على نشر
          الوعي الثقافي والاجتماعي بين الطلاب، مما يجعلها نموذجًا للأنشطة
          الطلابية المتميزة داخل الجامعات المصرية.
        </p>
      </aside>
    </section>
  );
};

export default About;
