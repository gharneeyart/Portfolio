import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { portfolios } from '../db/Details'


const PortfolioCard = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl gap-8 lg:gap-16">
        {portfolios.map((portfolio)=>(
            <div className='flex flex-col justify-between w-[350px] h-[400px] rounded-t-md shadow-xl' key={portfolio.id}>
            <div className="h-[63%]  rounded-md">
                <img src={portfolio.image} alt="" className='object-cover h-full rounded-md'/>
            </div>
            <div className="h-1/3 flex flex-col justify-center mx-4">
                <div className="">
                    <h3 className='font-bold text-xl'>{portfolio.title}</h3>
                    <p className='text-sm font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                </div>
                <div className="pt-3">
                    <button className='font-semibold flex border-b-[1.5px] border-violet-500'>View website <span className='pl-2'><MdArrowOutward size={25} className='text-teal-500'/></span></button>
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default PortfolioCard