// eslint-disable-next-line
import React from "react";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
import Image from "next/image";

const About = ({ setPlayState }) => {
  return (
    <section className="about mx-[7%] my-24 flex justify-between max-md:flex-col gap-12">
      <aside className="about-left flex-basis-[40%] relative max-md:flex-basis-full max-md:order-2 h-fit">
        <Image
          src={about_img}
          alt=""
          className="about-img w-full rounded-[10px] lg:min-w-[400px]"
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
        <p className="text-[#676767] mb-4 text-right text-sm">
          أسرة "طلاب من أجل مصر" هي الكيان الطلابي الوحيد الرسمي على مستوى
          الجمهورية! الأسرة تمتد جذورها إلى عام 1905، حين بدأت كحركة طلابية
          لمواجهة الاحتلال البريطاني على يد الزعيم مصطفى كامل وكانت تدعى حينها
          بالمدارس العليا ، مرت الأعوام وواجهت الدوله تحديات وأزمات كثيره وكان
          للكيانات الطلابيه الدور الأبرز في العبور من تلك التحديات ، اليوم
          الأسرة تُجسّد رؤية متجددة تساهم في تطوير العملية التعليمية وتلبية
          احتياجات الطلاب داخل الجامعة و المجتمع .
        </p>
        <p className="text-[#676767] mb-4 text-right text-sm">
          بالإضافة إلى ذلك سعي الأسرة لتعزيز القيم الوطنية وروح الانتماء بين
          الطلاب، كما أنها تؤمن بأهمية تطوير مهارات الطلاب وصقل شخصياتهم، لذا
          تحرص على إقامة ورش عمل، ندوات، ودورات تدريبية تُعزز من قدراتهم في
          مختلف المجالات ، كما أنها تستهدف دعم الإبداع والابتكار بين الطلاب، مما
          يجعلها منصة فاعلة لعرض أفكارهم و مواهبهم ، والعمل على تحويلها إلى واقع
          ملموس يخدم الجامعة والمجتمع .
        </p>
        <p className="text-[#676767] mb-4 text-right text-sm">
          تظل أسرة "طلاب من أجل مصر" رمزًا للوحدة و الالتزام والتميز على مستوى
          الجامعات المصرية. كما أنها تسعى دائماً لتطوير أفرادها والكوادر الشابه
          بداخلها ليصبحوا نماذج فعاله ومؤثره ليحققوا ذاتهم و يخدمون أوطانهم .
          بالإضافة لسعيها الدائم لتعزيز مفهوم العمل الجماعي والتطوعي، إيمانًا
          منها بأن النجاح يتحقق بالتكاتف والتعاون لذا إتخذت الأسرة شعاراً.
          <br />
        </p>
        <span className="text-main block w-full text-right">
          .معاً مهمتنا بالقوة والشرف#
        </span>
      </aside>
    </section>
  );
};

export default About;
