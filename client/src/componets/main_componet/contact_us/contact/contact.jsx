import React, { useState } from 'react';
import './contact.css'
import { BiWorld, BiPhone} from "react-icons/bi";
import { HiMail} from "react-icons/hi";
const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <div className=' main_contacts w-full overflow-hidden  h-screen'>
      <h1 className='flex justify-center items-center text-4xl mt-8 font-roboto text-gray-600  font-semibold capitalize'>contact us </h1>
      <div className="container flex justify-between items-center gap-8 p-8 mx-auto  ">
        <div className='w-full flex flex-col gap-8 h-full'>
        <div className='flex gap-4 items-center'>
          <div className='text-white'><BiPhone/></div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-gray-400'>PHONE:</h1>
            <p className="text-white">+ 1235 2355 98</p>
          </div>
        </div> 
        <div className='flex gap-4 items-center'>
          <div className='text-white'><HiMail/></div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-gray-400'>EMAIL:</h1>
            <p className="text-white"> eduaidafrica@gmail.com</p>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <div className='text-white'><BiWorld/></div>
           <div className='flex flex-col gap-2'>
              <h1 className='text-gray-400'>WEBSITE:</h1>
              <p className="text-white"> eduaidafrica.com</p>
          </div>
        </div>
        </div>
      <form onSubmit={handleSubmit} className="w-[100%] h-full mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            rows="4"
            placeholder="Your Message"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
    
  );
};

export default Contacts;
