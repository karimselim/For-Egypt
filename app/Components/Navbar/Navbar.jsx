// eslint-disable-next-line
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import Button from "@/app/UI/Button";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import forEgypt from "../../assets/forEgyptlogo.png";
import uni from "../../assets/uniLogo.png";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const sideBarRef = useRef(null);
  const menuIconRef = useRef(null);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      (sideBarRef.current && !sideBarRef.current.contains(event.target)) ||
      (menuIconRef.current && menuIconRef.current.contains(event.target))
    ) {
      setMobileMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`px-[7%] duration-300 w-full text-white fixed top-0 left-0 flex items-center justify-between z-10 max-md:py-4 ${
        sticky ? "bg-main py-4" : "py-2"
      }`}
    >
      <CiMenuFries
        className="text-3xl hidden max-md:block z-10 rotate-180 cursor-pointer"
        onClick={toggleMenu}
      />
      <ul
        className={`z-30 max-md:fixed max-md:flex-col-reverse max-md:justify-end max-md:top-0 max-md:bottom-0 max-md:text-right max-md:bg-main max-md:w-[65%] max-md:pt-[70px] max-md:duration-300 ${
          mobileMenu ? " max-md:left-0 max-md:flex" : "-left-[65%]"
        }`}
        ref={sideBarRef}
      >
        <IoMdClose
          className="md:hidden absolute top-[1.85rem] right-10 text-3xl cursor-pointer"
          ref={menuIconRef}
        />
        <li
          className={`text-lg max-lg:text-base max-md:text-lg hover:text-black transition-colors max-lg:my-[10px] max-lg:mx-2 max-md:block max-md:my-6 max-md:mx-10 duration-300 inline-block mx-5 my-1 ${
            sticky ? null : "hover:text-main max-md:hover:text-black"
          }`}
        >
          <Button className="bg-white text-black max-xl:px-4 max-md:hidden">
            <Link
              className="w-full block"
              to="contact"
              smooth={true}
              offset={-260}
              duration={500}
            >
              انضم الينا الآن
            </Link>
          </Button>
        </li>
        <li
          className={`text-lg max-lg:text-base max-md:text-lg hover:text-black transition-colors max-lg:my-[10px] max-lg:mx-2 max-md:block max-md:my-6 max-md:mx-10 duration-300 inline-block mx-5 my-1 ${
            sticky ? null : "hover:text-main max-md:hover:text-black"
          }`}
        >
          <Link
            className="w-full block"
            to="testimonials"
            smooth={true}
            offset={-260}
            duration={500}
          >
            آراء طلابنا
          </Link>
        </li>
        <li
          className={`text-lg max-lg:text-base max-md:text-lg hover:text-black transition-colors max-lg:my-[10px] max-lg:mx-2 max-md:block max-md:my-6 max-md:mx-10 duration-300 inline-block mx-5 my-1 ${
            sticky ? null : "hover:text-main max-md:hover:text-black"
          }`}
        >
          <Link
            className="w-full block"
            to="campus"
            smooth={true}
            offset={-260}
            duration={500}
          >
            ذكرياتنا
          </Link>
        </li>
        <li
          className={`text-lg max-lg:text-base max-md:text-lg hover:text-black transition-colors max-lg:my-[10px] max-lg:mx-2 max-md:block max-md:my-6 max-md:mx-10 duration-300 inline-block mx-5 my-1 ${
            sticky ? null : "hover:text-main max-md:hover:text-black"
          }`}
        >
          <Link
            className="w-full block"
            to="about"
            smooth={true}
            offset={-150}
            duration={500}
          >
            من نحن؟
          </Link>
        </li>
        <li
          className={`text-lg max-lg:text-base max-md:text-lg hover:text-black transition-colors max-lg:my-[10px] max-lg:mx-2 max-md:block max-md:my-6 max-md:mx-10 duration-300 inline-block mx-5 my-1 ${
            sticky ? null : "hover:text-main max-md:hover:text-black"
          }`}
        >
          <Link
            className="w-full block"
            to="program"
            smooth={true}
            offset={-260}
            duration={500}
          >
            خدماتنا
          </Link>
        </li>
        <li
          className={`text-lg max-lg:text-base max-md:text-lg hover:text-black transition-colors max-lg:my-[10px] max-lg:mx-2 max-md:block max-md:my-6 max-md:mx-10 duration-300 inline-block mx-5 my-1 max-xl:hidden ${
            sticky && !mobileMenu
              ? null
              : "hover:text-main max-md:hover:text-black"
          }`}
        >
          <Link
            className="w-full block"
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
          >
            الصفحة الرئيسية
          </Link>
        </li>
      </ul>
      <Link smooth={true} to="hero" offset={0} duration={500}>
        <div className="text-2xl max-xl:text-xl max-lg:text-lg max-md:text-xl flex gap-4 max-sm:text-xl z-20">
          <div>
            <h2> طلاب من أجل مصر</h2>
            <span className="text-sm text-right block">جامعة بورسعيد</span>
          </div>
          <Image
            src={forEgypt}
            alt=""
            className="w-12 max-sm:w-10 object-contain max-lg:w-8"
          />
          <Image
            src={uni}
            alt=""
            className="w-12 max-sm:w-10 object-contain max-lg:w-8 "
          />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
