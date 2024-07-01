import React from 'react'
import PortfolioCard from '../components/PortfolioCard'
import { IoLogoGithub } from "react-icons/io";

const Portfolio = () => {
  return (
    <div className='flex flex-col justify-center w-full py-12 items-center mx-auto px-4 md:px-12 font-roboto'>
        <div className="w-full flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-between w-full items-center text-center md:text-start mb-12">
            <div className="">
            <h6 className='text-lg font-semibold'>Recent Projects</h6>
            <h1 className='text-4xl font-bold mt-4'>My Portfolio</h1>
            </div>
            <div className="mt-6 md:mt-0 ">
                <button className='bg-purple-500 text-white flex p-4 rounded-md '><span className='pr-2 hover:text-purple-500'><IoLogoGithub size={20} className='text-white'/></span>Visit My GitHub</button>
            </div>
        </div>
        <div className="w-full">
            <PortfolioCard/>
        </div>
        </div>
    </div>
  )
}

export default Portfolio