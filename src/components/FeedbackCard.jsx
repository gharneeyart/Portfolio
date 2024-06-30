import React from 'react'
import { feedbacks } from '../db/Details'
import { IoMdStar } from "react-icons/io";

const FeedbackCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="border-2 border-teal-700 p-6 rounded-lg  flex flex-col ">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <IoMdStar key={index} className="text-teal-700" size={24} />
                ))}
            </div>
            <p className="text-gray-600 mt-6">"{feedback.comment}</p>
            <div className="flex items-center gap-4 mt-6">
              <div className="">
                <img src={feedback.image} alt={feedback.name} className="w-14 h-14 rounded-full" />
              </div>
              <div className="">
              <h3 className="text-lg font-semibold text-gray-800">{feedback.name}</h3>
              <p>{feedback.company}</p>
              </div>
            </div>
            
            
            
          </div>
        ))}
      </div>
  )
}

export default FeedbackCard