// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";
import Image from "next/image";
import Button from "@/app/UI/Button";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobbileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobbileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`px-[7%] duration-300 ${sticky ? "dark-nav py-4" : ""}`}>
      <Link to="hero" smooth={true} offset={0} duration={500}>
        <h2 className="text-3xl">من أجل مصر</h2>
      </Link>
      <ul className={mobbileMenu ? "" : "hide-mobile-menu"}>
        <li className="text-xl hover:text-black transition-colors duration-300 max-lg:hidden">
          <Link to="hero" smooth={true} offset={0} duration={500}>
            الصفحة الرئيسية
          </Link>
        </li>
        <li className="text-xl hover:text-black transition-colors duration-300">
          <Link to="program" smooth={true} offset={-260} duration={500}>
            ماذا نقدم؟
          </Link>
        </li>
        <li className="text-xl hover:text-black transition-colors duration-300">
          <Link to="about" smooth={true} offset={-150} duration={500}>
            من نحن؟
          </Link>
        </li>
        <li className="text-xl hover:text-black transition-colors duration-300">
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            مكتبة الصور
          </Link>
        </li>
        <li className="text-xl hover:text-black transition-colors duration-300">
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            آراء طلابنا
          </Link>
        </li>
        <li className="text-xl hover:text-black transition-colors duration-300">
          <Button className="bg-white text-black">
            <Link to="contact" smooth={true} offset={-260} duration={500}>
              انضم الينا الآن
            </Link>
          </Button>
        </li>
      </ul>
      <Image
        src={menu_icon}
        alt=""
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
