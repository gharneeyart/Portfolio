import React from 'react'
import John from '../assets/icons/About Me.png'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row w-full items-center mx-auto px-2 md:px-12 font-roboto py-12'>
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
            <img src={John} alt="John's Portrait" className='h-80 md:h-2/3 w-72 md:w-96  object-cover' />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-8 text-center md:text-start">
            <h6 className='text-lg font-semibold'>About</h6>
            <h1 className='text-4xl font-bold mt-4'>About me</h1>
            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. </p>
            <p className='mt-2'>Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
        </div>
        
    </div>
  )
}

export default About