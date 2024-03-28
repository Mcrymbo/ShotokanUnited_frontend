import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v6ssg8k', 'template_ydityic', form.current, {
        publicKey: 'eeIEkaZaVgz25mgQW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="p-4 rounded-md bg-light transform duration-500 ">
      <h1 className='my-6'> <span className='text-2xl font-semibold'>Contact</span> </h1>

      <div className="mb-4 mt-10">
        <input type="text" name="user_name" placeholder='username' id="user_name" required className="border-2 w-full py-2 px-3 rounded-md focus:outline-none focus:border-blue-500" />
      </div>

      <div className="mb-4">
        <input type="email" name="user_email" placeholder='Email' id="user_email" required className="border-2 w-full py-2 px-3 rounded-md focus:outline-none focus:border-blue-500" />
      </div>

      <div className="mb-4">
        <textarea name="message" placeholder='Type message here' id="message" required className="border-2 w-full h-[180px] py-2 px-3 rounded-md focus:outline-none focus:border-blue-500"></textarea>
      </div>

      <input type="submit" value="Send" style={{backgroundColor:"gold"}} className="text-dark py-2 px-4 w-full rounded-md cursor-pointer hover:bg-purple-600 transition duration-300" />
    </form>

  );
};