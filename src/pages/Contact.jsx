import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="text-center mb-8">
        <h6 className="text-lg font-semibold ">Get In Touch</h6>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">Contact Me</h1>
        <p className="text-gray-600 mt-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg ">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="flex-1">
              <label className="block text-gray-700">First Name</label>
              <input type="text" className="mt-1 block w-full border-[1.5px] border-gray-500 rounded-md p-2 focus:outline-none" />
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <label className="block text-gray-700">Last Name</label>
              <input type="text" className="mt-1 block w-full border-[1.5px] border-gray-500 rounded-md p-2 focus:outline-none" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="flex-1">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full border-[1.5px] border-gray-500 rounded-md p-2 focus:outline-none" />
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <label className="block text-gray-700">Phone Number</label>
              <input type="text" className="mt-1 block w-full border-[1.5px] border-gray-500 rounded-md p-2 focus:outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea placeholder='Type your message here...' className="mt-1 block w-full border-[1.5px] border-gray-500 rounded-md p-2 focus:outline-none" rows="4"></textarea>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="h-4 w-4 text-purple-700 border-gray-300 rounded focus:outline-none" />
            <label className="text-gray-700">I accept the terms</label>
          </div>
        </div>
        <div className="mt-8">
          <button className="w-full bg-violet-700 text-white text-lg py-4 rounded-md hover:bg-purple-800 focus:outline-none focus:bg-purple-800">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
