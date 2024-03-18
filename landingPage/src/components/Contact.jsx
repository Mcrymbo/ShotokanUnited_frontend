import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
      <p className="text-lg md:text-xl mb-8">We'd love to hear from you! If you have any questions, inquiries, or feedback, please don't hesitate to reach out to us.</p>
      <form className="max-w-lg mx-auto">
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg mb-2">Your Name</label>
          <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg mb-2">Your Email</label>
          <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-lg mb-2">Your Message</label>
          <textarea id="message" name="message" rows="4" className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;