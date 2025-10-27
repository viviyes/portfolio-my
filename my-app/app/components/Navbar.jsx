"use client";
import { assets } from "@/assets/assets";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useActiveSection from "@/hooks/useActiveSection";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const getLinkClassName = (sectionId) => {
    const baseClass = "font-ovo transition-colors duration-300";
    const activeClass = "text-text-active dark:text-blue-300 font-semibold";
    const inactiveClass = "hover:text-text-active dark:hover:text-blue-200";

    return `${baseClass} ${
      activeSection === sectionId ? activeClass : inactiveClass
    }`;
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full -z-10 translate-y-[-80%] overflow-hidden dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-3 sm:px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScrolled
            ? "bg-white/50 backdrop-blur-lg shadow-sm dark:shadow-white/20"
            : "bg-transparent"
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-24 sm:w-28 cursor-pointer mr-4 md:mr-14"
          />
        </a>

        {/* nav bar */}
        <ul
          className={`hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 rounded-full px-8 lg:px-10 xl:px-12 py-3 ${
            isScrolled
              ? "bg-transparent"
              : "bg-white/50 shadow-sm dark:border dark:border-white/50"
          }`}
        >
          <li>
            <a className={getLinkClassName("top")} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className={getLinkClassName("about")} href="#about">
              About me
            </a>
          </li>
          <li>
            <a className={getLinkClassName("services")} href="#services">
              Skills
            </a>
          </li>
          <li>
            <a className={getLinkClassName("work")} href="#work">
              My projects
            </a>
          </li>
          <li>
            <a className={getLinkClassName("contact")} href="#contact">
              Contect me
            </a>
          </li>
        </ul>

        {/* dark mode button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="hover:cursor-pointer"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>

          {/* hire me button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50"
          >
            Hire me{" "}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Arrow Icon"
              className="w-3"
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        {/* monile menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"} dark:bg-dark-theme dark:text-white`}
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a
              className={getLinkClassName("top")}
              onClick={closeMenu}
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={getLinkClassName("about")}
              onClick={closeMenu}
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              className={getLinkClassName("services")}
              onClick={closeMenu}
              href="#services"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className={getLinkClassName("work")}
              onClick={closeMenu}
              href="#work"
            >
              My projects
            </a>
          </li>
          <li>
            <a
              className={getLinkClassName("contact")}
              onClick={closeMenu}
              href="#contact"
            >
              Contect me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
