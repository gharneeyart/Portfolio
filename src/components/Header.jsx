import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import Logo from "../assets/icons/image 1.png";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [navbar, setNavbar] = useState(false);
  const navRef = useRef();

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  const closeNavbar = () => {
    setNavbar(false);
  };

  const handleClick = () => {
    setNavbar(!navbar);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      closeNavbar();
    }
  };

  useEffect(() => {
    if (navbar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbar]);

  return (
    <nav className="bg-white shadow fixed z-50 right-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link
              to="home"
              className="text-xl font-bold text-gray-600 flex items-center cursor-pointer"
            >
              <img src={Logo} alt="" />
              JohnDev,
            </Link>
          </div>
          <div
            onClick={handleClick}
            className="md:hidden text-2xl text-custom-black flex items-center cursor-pointer"
          >
            {navbar ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </div>
          <div
            className={`md:flex md:space-x-10 lg:space-x-12 ${
              navbar
                ? "absolute z-50 right-0 top-20 max-w-[280px] w-full bg-white p-8 flex flex-col items-start gap-5 mt-1 shadow-lg"
                : "hidden"
            }`}
            ref={navRef}
          >
            <Link
              to="home"
              className={`px-3 py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${activeLink === "home" ? "text-purple-500" : "text-gray-800 hover:text-gray-500"}`}
              onClick={() => { closeNavbar(); handleSetActive("home"); }}
            >
              Home
            </Link>
            <Link
              to="portfolio"
              className={`px-3 py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${activeLink === "portfolio" ? "text-purple-500" : "text-gray-800 hover:text-gray-500"}`}
              onClick={() => { closeNavbar(); handleSetActive("portfolio"); }}
            >
              Portfolio
            </Link>
            <Link
              to="about"
              className={`px-3 py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${activeLink === "about" ? "text-purple-500" : "text-gray-800 hover:text-gray-500"}`}
              onClick={() => { closeNavbar(); handleSetActive("about"); }}
            >
              About me
            </Link>
            <Link
              to="testimonials"
              className={`px-3 py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${activeLink === "testimonials" ? "text-purple-500" : "text-gray-800 hover:text-gray-500"}`}
              onClick={() => { closeNavbar(); handleSetActive("testimonials"); }}
            >
              Testimonials
            </Link>
            <div className="lg:hidden">
              <Link
                to="contact"
                className={`bg-white border border-blue-500 px-3 py-2 text-lg font-medium rounded-md cursor-pointer  ${activeLink === "contact" ? "text-white bg-blue-500" : "text-blue-500 hover:bg-blue-500 hover:text-white"}`}
              onClick={() => { closeNavbar(); handleSetActive("contact"); }}
              >
                Contact me
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              to="contact"
              className={`bg-white border border-blue-500 px-3 py-2 text-sm lg:text-lg font-medium rounded-md cursor-pointer  ${activeLink === "contact" ? "text-white bg-blue-500" : "text-blue-500 hover:bg-blue-500 hover:text-white"}`}
              onClick={() => { closeNavbar(); handleSetActive("contact"); }}
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
