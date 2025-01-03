// eslint-disable-next-line
import React from "react";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";
import Image from "next/image";
import Button from "@/app/UI/Button";

const Campus = () => {
  return (
    <div className="campus mx-[7%] py-20 text-center">
      <div className="gallery flex items-center justify-between mb-10 max-md:flex-wrap">
        <Image
          className="w-[23%] rounded-[10px] max-md:w-[48%] mb-6"
          src={gallery_1}
          alt=""
        />
        <Image
          className="w-[23%] rounded-[10px] max-md:w-[48%] mb-6"
          src={gallery_2}
          alt=""
        />
        <Image
          className="w-[23%] rounded-[10px] max-md:w-[48%] mb-6"
          src={gallery_3}
          alt=""
        />
        <Image
          className="w-[23%] rounded-[10px] max-md:w-[48%] mb-6"
          src={gallery_4}
          alt=""
        />
      </div>
      <Button className="px-6 py-3 before:!bg-main !bg-main !text-white">
        See more here
        {/* <Image src={white_arrow} alt="" /> */}
      </Button>
    </div>
  );
};

export default Campus;
