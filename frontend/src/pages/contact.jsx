import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import { useForm } from 'react-hook-form';
import { auth } from '../hooks';
import { teamSpirit1 } from "../assets";


const Icons = {
  Facebook: () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>,
  Youtube: () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-red-600"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.265-.007-7.831.437a2.506 2.506 0 0 0-1.762 1.766C2 8.817 2 12 2 12s0 3.183.407 4.797a2.506 2.506 0 0 0 1.762 1.766c1.566.444 7.831.437 7.831.437s6.265.007 7.831-.437a2.506 2.506 0 0 0 1.762-1.766C22 15.183 22 12 22 12s0-3.183-.407-4.797zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  Twitter: () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-black"><path d="M18.901 1.153h3.68l-8.04 9.557L24 22.846h-7.406l-5.8-7.584-6.638 7.584H1.476l8.623-9.82L0 1.154h7.594l5.243 6.932L18.901 1.153zm-1.268 19.183h2.034L6.538 3.241H4.278L17.633 20.336z"/></svg>,
  Call: () => <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500"><path d="M20.284 16.024l-3.517-2.294a1.35 1.35 0 0 0-1.861.365l-.794 1.076a13.392 13.392 0 0 1-5.472-5.472l1.076-.794a1.35 1.35 0 0 0 .365-1.861L7.976 3.716a1.35 1.35 0 0 0-1.976-.342L3.233 5.126a1.785 1.785 0 0 0-.474 1.941 20.7 20.7 0 0 0 15.174 15.174 1.785 1.785 0 0 0 1.941-.474l1.752-2.767a1.35 1.35 0 0 0-.342-1.976z"/></svg>,
  Email: () => <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-red-500"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>,
  Location: () => <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-green-600"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
};

function Contact() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await auth.post("/api/message/", data);
            console.log(response.data);
        } catch (error) {
            console.error(error.message);
        }
      reset();
    }; 

  return (
    <div className="bg-gradient-to-br from-gray-100 through-blue-500 to-gray-200 min-h-screen">
      <Navbar />
      <div className='relative z-0'>
         <img src={teamSpirit1} alt="about shotokan united karate kenya"
           width={100}
           height={100}
           className='w-full h-[480px] object-cover'
          />
          <div className='absolute inset-0 bg-black opacity-40 h-full'></div>
          <div className='absolute inset-0 flex flex-col items-center justify-center text-center p-6'>            
           <h1 className='sr-only'>hdki Kenya</h1>
           <div className="text-center mb-12 max-w-2xl mx-auto">
           <h2 className="text-5xl font-extrabold text-gray-900 mb-4 
              bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Get In Touch
           </h2>
            <p className="text-2xl text-white">
            We're here to answer any questions you may have. Reach out and let's connect!
            </p>
            </div>  
          </div>
      </div>
      <div className="container -mt-8 z-9 mx-auto px-4 4b-12">
        {/* Hero Section */}
       

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-t-2xl shadow-t-2xl p-8 md:p-16">
          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                 type="text"
                 name="name"
                 placeholder="Your Name"
                 {...register("name", { required: "Name is required" })} 
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg 
                    focus:outline-none focus:border-blue-500 transition duration-300"
                />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  {...register("email", {required: "email is required", pattern: /^\S+@\S+$/i })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg 
                    focus:outline-none focus:border-blue-500 transition duration-300"
                  placeholder="your.email@example.com"
                  />
                  {errors.email && <span className="text-red-500">{errors.email.message}</span>}

              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  {...register("message", {required: "message is required"})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg 
                    focus:outline-none focus:border-blue-500 transition duration-300 h-32"
                  placeholder="Your message..."
                ></textarea>
                {errors.message && <span className="text-red-500">{errors.message.message}</span>}
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 
                  text-white py-3 rounded-lg hover:opacity-90 transition duration-300 
                  transform hover:scale-105 focus:outline-none focus:ring-2 
                  focus:ring-blue-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-100 rounded-t-2xl p-6 shadow-b-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icons.Call />
                  <span className="text-gray-700">+254 755 257 267</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icons.Email />
                  <span className="text-gray-700">info@shotokanunitedkenya.org</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icons.Location />
                  <span className="text-gray-700">3, 49 Parklands Rd, Nairobi</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-100 rounded-2xl p-6 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h3>
              <div className="flex space-x-6 justify-center">
                <div className="hover:scale-110 transition duration-300 cursor-pointer">
                  <Icons.Facebook />
                </div>
                <div className="hover:scale-110 transition duration-300 cursor-pointer">
                  <Icons.Youtube />
                </div>
                <div className="hover:scale-110 transition duration-300 cursor-pointer">
                  <Icons.Twitter />
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-100 rounded-2xl p-6 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Office Hours</h3>
              <div className="space-y-2">
                <div>
                  <p className="font-semibold text-gray-700">Monday - Friday</p>
                  <p className="text-gray-600">9:00 AM - 4:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Saturday</p>
                  <p className="text-gray-600">2:00 PM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-2 rounded-b-2xl overflow-hidden shadow-b-2xl">
          <div className="w-full h-[500px]">
            <iframe
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=3,%2049%20Parklands%20Rd,%20Nairobi%20'NAIROBI+(Shotokan%20United)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allowFullScreen=""
              className="border-0"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>© 2024 Shotokan United. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
