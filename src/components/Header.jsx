import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import Logo from '../assets/icons/image 1.png'

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const navRef = useRef();

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
    <nav className="bg-white shadow fixed z-50 w-full">
      <div className="px-4 lg:px-12 ">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link to="home" className="text-xl font-bold text-gray-600 flex items-center"><img src={Logo} alt="" />JohnDev,</Link>
          </div>
          <div
            onClick={handleClick}
            className="md:hidden text-2xl text-custom-black flex items-center"
          >
            {navbar ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </div>
          <div className={`md:flex md:space-x-10  lg:space-x-12 ${
            navbar
              ? "absolute z-50 right-0 top-20 max-w-[280px] w-full bg-white p-8 flex flex-col items-start gap-5 mt-1 shadow-lg"
              : "hidden"
            }`}
            ref={navRef}
          >
            <Link 
              to="home" 
              className="text-gray-800 hover:text-gray-600 px-3 py-2 mb-0 text-sm font-medium "
              onClick={closeNavbar}
            >
              Home
            </Link>
            <Link 
              to="portfolio" 
              className="text-gray-800 hover:text-gray-600 px-3 py-2 text-sm font-medium"
              onClick={closeNavbar}
            >
              Portfolio
            </Link>
            <Link 
              to="about" 
              className="text-gray-800 hover:text-gray-600 px-3 py-2 text-sm font-medium"
              onClick={closeNavbar}
            >
              About me
            </Link>
            <Link 
              to="testimonials" 
              className="text-gray-800 hover:text-gray-600 px-3 py-2 text-sm font-medium"
              onClick={closeNavbar}
            >
              Testimonials
            </Link>
            <div className="lg:hidden">
              <Link 
                to="contact"
                className="bg-white border border-blue-500 text-blue-500 px-3 py-2 text-sm font-medium rounded-md"
                onClick={closeNavbar}
              >
                Contact me
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link 
              to="contact"  
              className="bg-white border border-blue-500 text-blue-500 px-3 py-2 text-sm font-medium rounded-md"
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
