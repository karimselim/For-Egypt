"use client";

import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Button from "@/app/UI/Button";
import WhiteBtn from "@/app/UI/WhiteBtn";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import forEgypt from "../../assets/forEgyptlogo.png";
import uni from "../../assets/uniLogo.png";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";
  const isNewsPage = pathName === "/news";
  const isEventsPage = pathName === "/events";
  const isCollegesPage = pathName === "/colleges";
  const iscontactUsPage = pathName === "/contact";
  const sideBarRef = useRef(null);
  const menuIconRef = useRef(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  const toggleMenu = () => setMobileMenu((prev) => !prev);

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isHomePage) return;
      setSticky(window.scrollY > 50);
    };

    if (isHomePage) {
      handleScroll();
    } else {
      setSticky(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <nav
      className={`px-[7%] max-lg:px-[5%] duration-300 w-full text-white fixed top-0 left-0 flex items-center justify-between z-10 max-md:py-4 ${
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
          onClick={toggleMenu}
        />

        <li className="text-lg hover:text-black transition-colors max-lg:my-[10px] max-lg:mx-2 max-md:block max-md:my-6 max-md:mx-10 duration-300 inline-block mx-4 my-1">
          {sticky || mobileMenu ? (
            <WhiteBtn className="max-md:hidden">
              {isHomePage ? (
                <ScrollLink
                  to="contact"
                  smooth={true}
                  offset={-260}
                  duration={500}
                  className="w-full block py-4 px-6 cursor-pointer"
                  onClick={() => setMobileMenu(false)}
                >
                  إنضم الينا الآن
                </ScrollLink>
              ) : (
                <Link
                  href="/#contact"
                  className="w-full block py-4 px-6"
                  onClick={() => setMobileMenu(false)}
                >
                  إنضم الينا الآن
                </Link>
              )}
            </WhiteBtn>
          ) : (
            <Button className="max-md:hidden">
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-260}
                duration={500}
                className="w-full block py-4 px-6 cursor-pointer"
                onClick={() => setMobileMenu(false)}
              >
                إنضم الينا الآن
              </ScrollLink>
            </Button>
          )}
        </li>

        <li className="text-lg hover:text-black transition-colors max-lg:my-[10px] max-lg:mx-2 max-md:block max-md:my-6 max-md:mx-10 duration-300 inline-block mx-4 my-1">
          {iscontactUsPage ? (
            <Link
              href="/"
              className="block"
              onClick={() => setMobileMenu(false)}
            >
              المقترحات و الشكاوى
            </Link>
          ) : (
            <Link
              href="/contact"
              className="block"
              onClick={() => setMobileMenu(false)}
            >
              المقترحات و الشكاوى
            </Link>
          )}
        </li>

        <li className="text-lg hover:text-black transition-colors max-lg:my-[10px] max-lg:mx-2 max-md:block max-md:my-6 max-md:mx-10 duration-300 inline-block mx-4 my-1">
          {isNewsPage ? (
            <Link
              href="/#news"
              className="block"
              onClick={() => setMobileMenu(false)}
            >
              الأخبار
            </Link>
          ) : (
            <Link
              href="/news"
              className="block"
              onClick={() => setMobileMenu(false)}
            >
              الأخبار
            </Link>
          )}
        </li>

        <li className="text-lg hover:text-black transition-colors max-lg:my-[10px] max-lg:mx-2 max-md:block max-md:my-6 max-md:mx-10 duration-300 inline-block mx-4 my-1">
          {isEventsPage ? (
            <Link
              href="/#events"
              className="block"
              onClick={() => setMobileMenu(false)}
            >
              الأحداث
            </Link>
          ) : (
            <Link
              href="/events"
              className="block"
              onClick={() => setMobileMenu(false)}
            >
              الأحداث
            </Link>
          )}
        </li>

        {/* <li className="text-lg hover:text-black transition-colors max-lg:my-[10px] max-lg:mx-2 max-md:block max-md:my-6 max-md:mx-10 duration-300 inline-block mx-4 my-1">
          {isCollegesPage ? (
            <Link
              href="/#colleges"
              className="block"
              onClick={() => setMobileMenu(false)}
            >
              الكليات
            </Link>
          ) : (
            <Link
              href="/colleges"
              className="block"
              onClick={() => setMobileMenu(false)}
            >
              الكليات
            </Link>
          )}
        </li> */}

        <li className="text-lg hover:text-black transition-colors max-lg:my-[10px] max-lg:mx-2 max-md:block max-md:my-6 max-md:mx-10 duration-300 inline-block mx-4 my-1">
          {isHomePage ? (
            <ScrollLink
              to="hero"
              smooth={true}
              offset={0}
              duration={500}
              className="cursor-pointer block"
              onClick={() => setMobileMenu(false)}
            >
              الصفحة الرئيسية
            </ScrollLink>
          ) : (
            <Link
              href="/"
              className="block"
              onClick={() => setMobileMenu(false)}
            >
              الصفحة الرئيسية
            </Link>
          )}
        </li>
      </ul>

      <Link href="/">
        <div className="text-2xl max-xl:text-xl max-lg:text-lg max-md:text-xl flex gap-4 max-lg:gap-2 max-sm:text-xl z-20">
          <div>
            <h2> طلاب من أجل مصر</h2>
            <span className="text-sm text-right block">جامعة بورسعيد</span>
          </div>
          <Image
            src={forEgypt}
            alt="For Egypt Logo"
            className="w-12 max-sm:w-10 object-contain max-lg:w-8"
          />
          <Image
            src={uni}
            alt="University Logo"
            className="w-12 max-sm:w-10 object-contain max-lg:w-8"
          />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
