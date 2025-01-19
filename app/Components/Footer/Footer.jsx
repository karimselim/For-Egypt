// eslint-disable-next-line
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer px-[7%] py-4 flex items-center justify-between border-t border-t-[#797979] max-md:block max-md:text-center">
      <p>© جميع الحقوق مستحقة لأسرة طلاب من أجل مصر </p>
      <ul className="mt-[10px]">
        <li className="inline-block ml-5 max-md:m-[10px] cursor-pointer">
          <Link href="/privacy-policy">شروط الاستخدام</Link>
        </li>
        <li className="inline-block ml-5 max-md:m-[10px] cursor-pointer">
          {/* <Link>سياسة الخصوصية</Link> */}
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
