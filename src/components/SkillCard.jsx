import React from 'react'
import { skills } from '../db/Details';

const SkillCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-6 w-full max-w-6xl'>
        {skills.map((skill) => (
            <div className='w-[360px] md:w-[340px] lg:w-[270px] flex justify-center items-center bg-sky-50 h-60 rounded shadow-sm  hover:border-b-4 rounded-b-md border-purple-700 ' key={skill.id}>
            <div className="w-[300px] md:w-[290px] lg:w-[220px]  h-5/6 flex flex-col justify-between">
                <div className="flex w-14 h-20 items-center justify-center bg-white rounded-md py-2">
                    <div className="">{skill.icon}</div>
                    <img src={skill.image} alt="" className='h-10'/>
                </div>
                <div className="h-48 mt-8">
                    <h3 className='font-bold text-xl'>{skill.title}</h3>
                    <p className='text-sm pt-2'>{skill.description}</p>
                </div>
            </div>
            </div>
        ))}
    </div>
  )
}

export default SkillCard