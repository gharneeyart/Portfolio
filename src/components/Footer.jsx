// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-10">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row md:justify-between md:items-center">
//           <div className="mb-6 md:mb-0">
//             <h2 className="text-2xl font-bold">MyApp</h2>
//             <p className="mt-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//           <div className="mb-6 md:mb-0">
//             <h3 className="text-lg font-semibold">Navigation</h3>
//             <ul className="mt-2 space-y-2">
//               <li><a href="#" className="hover:text-gray-300">Home</a></li>
//               <li><a href="#" className="hover:text-gray-300">About</a></li>
//               <li><a href="#" className="hover:text-gray-300">Services</a></li>
//               <li><a href="#" className="hover:text-gray-300">Contact</a></li>
//             </ul>
//           </div>
//           <div className="mb-6 md:mb-0">
//             <h3 className="text-lg font-semibold">Follow Us</h3>
//             <ul className="mt-2 space-y-2">
//               <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
//               <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
//               <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
//               <li><a href="#" className="hover:text-gray-300">LinkedIn</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold">Contact Us</h3>
//             <p className="mt-2 text-gray-400">1234 Street Name, City, State 56789</p>
//             <p className="mt-2 text-gray-400">Email: contact@myapp.com</p>
//             <p className="mt-2 text-gray-400">Phone: (123) 456-7890</p>
//           </div>
//         </div>
//         <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500">
//           <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Link } from "react-scroll";
import Logo from '../assets/icons/image 1.png'

const Footer = () => {
  return (
    <footer className="bg-teal-50 shadow">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-b-[1.5px] border-b-gray-400 pb-4">
          <div className="flex-shrink-0 mb-4 md:mb-0">
          <Link to="home" className="text-xl font-bold text-gray-600 flex items-center"><img src={Logo} alt="" />JohnDev,</Link>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start md:space-x-2 lg:space-x-6 pt-4 md:pt-0">
            <Link
              to="home"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="portfolio"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 text-sm font-medium"
            >
              Portfolio
            </Link>
            <Link
              to="about"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 text-sm font-medium"
            >
              About me
            </Link>
            <Link
              to="contact"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              to="testimonials"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 text-sm font-medium"
            >
              Testimonials
            </Link>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com" className="hover:text-gray-800">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.instagram.com" className="hover:text-gray-800">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-800">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.linkedin.com" className="hover:text-gray-800">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-2">
          <div className="flex flex-col md:flex-row md:gap-4 text-center md:text-left mb-4 md:mb-0 mt-4 md:mt-0" >
            <p>Code with 💖 by Ganiyat</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start md:space-x-6 ">
            <Link
              to="privacy-policy"
              className="text-gray-800 hover:text-gray-600 px-2 md:px-3 py-2 text-sm font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              to="terms-of-service"
              className="text-gray-800 hover:text-gray-600 px-2 md:px-3 py-2 text-sm font-medium"
            >
              Terms of Service
            </Link>
            <Link
              to="cookie-settings"
              className="text-gray-800 hover:text-gray-600 px-2 md:px-3 py-2 text-sm font-medium"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


