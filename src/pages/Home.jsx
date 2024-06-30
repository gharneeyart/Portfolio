import React from 'react';
import John from '../assets/icons/Group 11 1.png'
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row items-center  py-12 bg-blue-50 px-2 md:px-12 font-roboto'>
      <div className="w-full md:w-1/2 flex flex-col justify-between h-full  pt-16 text-center md:text-start">
        <h6 className='text-lg font-semibold'>Hey, I am John</h6>
        <h1 className='text-3xl md:text-5xl font-bold text-gray-800 mt-4'>I develop dynamic and User-Centered Web Applications</h1>
        <p className='w-full md:w-4/5 text-gray-600 mt-4'>My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs.</p>
        <div className="flex items-center space-x-4 mt-6 justify-center md:justify-start">
          <Link to="contact">
          <button className="bg-violet-700 text-white px-6 py-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" >Get In Touch</button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 md:pt-14">
        <img src={John} alt="Ganiyat's Portrait" className='h-full w-72 md:w-full object-cover'/>
      </div>
    </div>
  );
};

export default Home;
