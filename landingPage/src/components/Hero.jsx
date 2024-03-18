import React from 'react';

import Team from '../assets/images/Team.jpg'

const HeroSection = () => {
  return (
    <section className="bg-gray-300 py-20 text-center flex flex-wrap items-center justify-center">
      <div className="container mx-auto mb-8 lg:flex lg:justify-between lg:items-center">
        <div className="flex flex-col my-10 items-center lg:w-1/2 lg:mr-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Karate United Kenya</h1>
          <p className="text-lg md:text-xl mb-8">Empowering Minds, Strengthening Bodies</p>
          <p className="text-lg md:text-xl mb-8">Join us to explore the art of karate and unleash your potential.</p>
          <a href="#about" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300">Learn More</a>
        </div>
        <div className="lg:w-1/2">
          <img src={Team} className="mx-auto rounded-xl " alt="Karate Image" />
        </div>
      </div>
    </section>
  
  );
};

export default HeroSection;