// eslint-disable-next-line
import React from "react";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
import Image from "next/image";

const About = ({ setPlayState }) => {
  return (
    <section className="about mx-[7%] my-24 flex justify-between max-md:flex-col gap-12">
      <aside className="about-left flex-basis-[40%] relative max-md:flex-basis-full max-md:order-2">
        <Image
          src={about_img}
          alt=""
          className="about-img w-full rounded-[10px]"
        />
        <Image
          src={play_icon}
          alt=""
          className="play-icon w-[60px] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] cursor-pointer"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </aside>
      <aside className="about-right flex-basis-[56%] max-md:flex-basis-full">
        <h2 className="text-[35px] text-[#000f38] my-2 text-right">من نحن؟</h2>
        <h3 className="font-semibold mb-4 text-[#da2d2d] text-xl text-right">
          أسرة طلاب من أجل مصر
        </h3>
        <p className="text-[#676767] mb-4 text-right">
          أسرة طلاب من أجل مصر هي كيان طلابي يهدف إلى تعزيز القيم الوطنية وتنمية
          روح الانتماء لدى الشباب الجامعي. تسعى الأسرة إلى بناء جيل واعٍ قادر
          على مواجهة تحديات المستقبل، من خلال تنظيم فعاليات وأنشطة متنوعة تُشجع
          على الابتكار والعمل الجماعي. تعمل الأسرة على توفير بيئة إيجابية للطلاب
          تمكنهم من تطوير مهاراتهم الشخصية والأكاديمية، وتغرس فيهم مبادئ القيادة
          وخدمة المجتمع.
        </p>
        <p className="text-[#676767] mb-4 text-right">
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
