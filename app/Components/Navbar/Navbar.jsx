// eslint-disable-next-line
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import Button from "@/app/UI/Button";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import forEgypt from "../../assets/forEgyptlogo.png";
import uni from "../../assets/uniLogo.png";

const Navbar = () => {
  const sideBarRef = useRef(null);
  const menuIconRef = useRef(null);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      sideBarRef.current &&
      !sideBarRef.current.contains(event.target) &&
      menuIconRef.current &&
      !menuIconRef.current.contains(event.target)
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
        sticky ? "bg-main py-4" : "py-1"
      }`}
    >
      <Link to="hero" smooth={true} offset={0} duration={500}>
        <h2 className="text-3xl flex gap-2 max-sm:text-2xl">
          <Image
            src={forEgypt}
            alt=""
            className="w-8 max-sm:w-6 object-contain"
          />
          <Image src={uni} alt="" className="w-8 max-sm:w-6 object-contain" />
          طلاب من أجل مصر
        </h2>
      </Link>
      <ul
        className={`max-md:fixed max-md:top-0 max-md:bottom-0 max-md:bg-main max-md:w-[200px] max-md:pt-[70px] max-md:duration-300 ${
          mobileMenu ? " max-md:right-0" : "-right-[200px]"
        }`}
        ref={sideBarRef}
      >
        <li className="text-xl hover:text-black transition-colors max-lg:my-[10px] max-lg:mx-4 max-md:block max-md:my-6 max-md:mx-10 duration-300 inline-block mx-5 my-1 max-lg:hidden">
          <Link to="hero" smooth={true} offset={0} duration={500}>
            الصفحة الرئيسية
          </Link>
        </li>
        <li className="text-xl hover:text-black transition-colors max-lg:my-[10px] max-lg:mx-4 max-md:block max-md:my-6 max-md:mx-10 duration-300 inline-block mx-5 my-1">
          <Link to="program" smooth={true} offset={-260} duration={500}>
            خدماتنا
          </Link>
        </li>
        <li className="text-xl hover:text-black transition-colors max-lg:my-[10px] max-lg:mx-4 max-md:block max-md:my-6 max-md:mx-10 duration-300 inline-block mx-5 my-1">
          <Link to="about" smooth={true} offset={-150} duration={500}>
            من نحن؟
          </Link>
        </li>
        <li className="text-xl hover:text-black transition-colors max-lg:my-[10px] max-lg:mx-4 max-md:block max-md:my-6 max-md:mx-10 duration-300 inline-block mx-5 my-1">
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            ذكرياتنا
          </Link>
        </li>
        <li className="text-xl hover:text-black transition-colors max-lg:my-[10px] max-lg:mx-4 max-md:block max-md:my-6 max-md:mx-10 duration-300 inline-block mx-5 my-1">
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            آراء طلابنا
          </Link>
        </li>
        <li className="text-xl hover:text-black transition-colors max-lg:my-[10px] max-lg:mx-4 max-md:block max-md:my-6 max-md:mx-10 duration-300 inline-block mx-5 my-1">
          <Button className="bg-white text-black">
            <Link to="contact" smooth={true} offset={-260} duration={500}>
              انضم الينا الآن
            </Link>
          </Button>
        </li>
      </ul>
      <CiMenuFries
        className="text-3xl hidden max-md:block z-20"
        onClick={toggleMenu}
        ref={menuIconRef}
      />
    </nav>
  );
};

export default Navbar;
