import React from 'react'
import SkillCard from '../components/SkillCard'

const Skills = () => {
  return (
    <div className='flex flex-col w-full py-12 justify-center mx-auto px-4 md:px-12 border font-roboto'>
        <div className="pb-8 text-center md:text-start">
            <h6 className='text-sm font-semibold'>My Skills</h6>
            <h2 className='text-5xl font-bold text-gray-800 mt-2'>My Expertise</h2>
        </div>
        <div className="">
            <SkillCard/>
        </div>
    </div>
  )
}

export default Skills