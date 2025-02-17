import Button from "@/app/UI/Button";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-scroll";
import Head from "next/head";

const Hero = () => {
  return (
    <>
      <Head>
        <link rel="preload" href="/std.jpg" as="image" />
      </Head>
      <main
        className="hero w-full min-h-screen bg-[#0009] bg-blend-overlay bg-cover bg-center max-md:bg-[calc(50%+85px)] text-white flex items-center justify-center"
        style={{ backgroundImage: 'url("/std.jpg")' }}
      >
        <div className="text-center max-w-[800px]">
          <h1 className="text-[55px] font-semibold max-mid:text-[40px] max-sm:text-[30px] max-sm:max-w-[400px] max-sm:mx-auto">
            أسرة طلاب من أجل مصر
          </h1>

          <p className="flex items-center justify-center gap-1 max-w-[700px] mx-auto my-[10px] leading-[1.4] max-sm:text-[14px] max-sm:my-[15px] max-sm:mb-[30px]">
            جامعة بورسعيد - معًا مهمتنا بالقوة والشرف
          </p>
          <Button className="">
            <Link
              className="w-full py-[0.875rem] px-6 flex items-center"
              to="contact"
              smooth={true}
              offset={-260}
              duration={500}
            >
              <FaArrowLeftLong className="pr-3 text-2xl" /> إنضم إلينا
            </Link>
          </Button>
        </div>
      </main>
    </>
  );
};

export default Hero;
