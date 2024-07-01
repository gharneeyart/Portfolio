import React, { useState } from 'react';

const Contact = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'First Name is required';
    } else if (!/^[a-zA-Z-]*$/i.test(values.firstName)) {
      errors.firstName = 'Enter a Valid Name'
    }
    if (!values.lastName) {
      errors.lastName = 'Last Name is required';
    }  else if (!/^[a-zA-Z-]*$/i.test(values.lastName)) {
      errors.lastName = 'Enter a Valid Name'
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{11}$/.test(values.phone)) {
      errors.phone = 'Phone number is invalid';
    }
    if (!values.message) {
      errors.message = 'Message is required';
    }
    if (!values.termsAccepted) {
      errors.termsAccepted = 'You must accept the terms and conditions';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formValues);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      console.log('Form data submitted:', formValues);
      // Reset form after successful submission
      setFormValues({ firstName: '', lastName: '', email: '', phone: '', message: '', termsAccepted: false });
    }
  };

  return (
    <div className="flex flex-col items-center py-10 px-2">
      <div className="text-center mb-8">
        <h6 className="text-lg font-semibold">Get In Touch</h6>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">Contact Me</h1>
        <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="flex-1">
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full border-[1.5px] border-gray-500 rounded-md p-2 focus:outline-none"
                />
                {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
              </div>
              <div className="flex-1 mt-4 md:mt-0">
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full border-[1.5px] border-gray-500 rounded-md p-2 focus:outline-none"
                />
                {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="flex-1">
                <label className="block text-gray-700">Email</label>
                <input
                  type="text"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border-[1.5px] border-gray-500 rounded-md p-2 focus:outline-none"
                />
                {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
              </div>
              <div className="flex-1 mt-4 md:mt-0">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border-[1.5px] border-gray-500 rounded-md p-2 focus:outline-none"
                />
                {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formValues.message}
                onChange={handleChange}
                placeholder='Type your message here...'
                className="mt-1 block w-full border-[1.5px] border-gray-500 rounded-md p-2 focus:outline-none"
                rows="5"
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formValues.termsAccepted}
                onChange={handleChange}
                className="h-4 w-4 text-purple-700 border-gray-300 rounded focus:outline-none"
              />
              <label className="text-gray-700">I accept the terms</label>
              {errors.termsAccepted && <p className="text-red-500 text-xs italic">{errors.termsAccepted}</p>}
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-violet-700 text-white text-lg py-4 rounded-md hover:bg-purple-800 focus:outline-none focus:bg-purple-800"
            >
              Submit
            </button>
          </div>
        </form>
        {isSubmitted && <p className="text-green-500 text-xs italic mt-4">Form submitted successfully!</p>}
      </div>
    </div>
  );
};

export default Contact;
