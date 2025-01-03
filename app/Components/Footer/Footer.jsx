// eslint-disable-next-line
import React from "react";

const Footer = () => {
  return (
    <footer className="footer px-[7%] py-4 flex items-center justify-between border-t border-t-[#797979] max-md:block max-md:text-center">
      <p>© جميع الحقوق مستحقة لأسرة طلاب من أجل مصر </p>
      <ul className="mt-[10px]">
        <li className="inline-block ml-5 max-md:m-[10px] cursor-pointer">
          شروط الاستخدام
        </li>
        <li className="inline-block ml-5 max-md:m-[10px] cursor-pointer">
          سياسة الخصوصية
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
