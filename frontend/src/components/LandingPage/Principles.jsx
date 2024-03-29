import React from 'react';
import { FaHandshake, FaBullseye, FaUsers, FaBalanceScale } from 'react-icons/fa';

const GuidingPrinciples = () => {
  return (
    <>
        <div className='mx-auto w-3/4 border-b-2 mb-6'>
            <h1 className='text-center text-4xl p-6 font-semibold'> Our Guiding Principles</h1>
        </div>
      <div className="lg:flex justify-center gap-8 sm:space-y-6 w-5/6 mx-auto">
      <div className="principle max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6 text-center">
        <FaHandshake className="text-4xl text-red-400 mb-4 mx-auto" />
        <h3 className="text-xl font-semibold mb-2">Respect and Discipline</h3>
        <p className="text-gray-700">Emphasize respect for oneself, others, and the art of karate. Cultivate discipline in training and conduct.</p>
      </div>
      <div className="principle max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6 text-center">
        <FaBullseye className="text-4xl text-red-500 mb-4 mx-auto" />
        <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
        <p className="text-gray-700">Encourage a mindset of continuous improvement in techniques and personal development.</p>
      </div>
      <div className="principle max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6 text-center">
        <FaUsers className="text-4xl text-red-500 mb-4 mx-auto" />
        <h3 className="text-xl font-semibold mb-2">Unity and Camaraderie</h3>
        <p className="text-gray-700">Promote unity, teamwork, and a spirit of camaraderie among club members.</p>
      </div>
      <div className="principle max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6 text-center">
        <FaBalanceScale className="text-4xl text-red-500 mb-4 mx-auto" />
        <h3 className="text-xl font-semibold mb-2">Ethical Conduct</h3>
        <p className="text-gray-700">Stress the importance of integrity, honesty, and ethical conduct both inside and outside the dojo.</p>
      </div>
    </div>
    </>
  );
};

export default GuidingPrinciples;
