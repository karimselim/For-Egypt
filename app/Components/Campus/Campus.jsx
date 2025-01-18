// eslint-disable-next-line
import React from "react";
import gallery_1 from "../../assets/c1.jpg";
import gallery_2 from "../../assets/c2.jpg";
import gallery_3 from "../../assets/c4.jpg";
import gallery_4 from "../../assets/c5.jpg";
import white_arrow from "../../assets/white-arrow.png";
import Image from "next/image";
import Button from "@/app/UI/Button";
import Link from "next/link";

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
      <Button>
        <Link
          href="https://www.facebook.com/studentsforegyptPSU?mibextid=ZbWKwL"
          target="_blank"
          className="py-3 px-6 block"
        >
          See more here
        </Link>
      </Button>
    </div>
  );
};

export default Campus;
