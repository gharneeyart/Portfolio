import React from 'react';
import FeedbackCard from '../components/FeedbackCard';

const Feedback = () => {

  return (
    <div className='flex flex-col justify-center items-center md:items-start w-full py-16 bg-teal-50 md:px-12 px-4'>
      <div className="text-center md:text-start mb-12">
        <h6 className='text-sm font-semibold text-gray-800'>Clients Feedback</h6>
        <h1 className='text-5xl font-bold text-gray-800 mt-2'>Customer Testimonials</h1>
      </div>
      <div className="">
        <FeedbackCard/>
      </div>
    </div>
  );
};

export default Feedback;
