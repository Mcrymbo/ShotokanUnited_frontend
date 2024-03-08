import React from 'react'
import { Link } from 'react-router-dom';
import Users from './users';

import backgroundImage from '../assets/images/img7.jpg';
import backgroundImage2 from '../assets/images/img6.jpg';
import hdki from '../assets/images/HDKI.jpg';
import teamImg from '../assets/images/img5.jpg'
import pic from '../assets/images/img7.jpg'

import { useAuth } from '../hooks/useAuth';


function Home() {

  const { user } = useAuth()
  // console.log(user)

  return (
    <div id='home-section' className='w-full'>
      <div >
        <section className="relative bg-fixed overflow-hidden bg-cover bg-no-repeat p-12 text-center "
              style={{ backgroundImage: `url(${backgroundImage})`, height: '60vh' }}>
          <div className='flex justify-center text-center text-4xl font-bold'>
              <h1 className='text-white my-auto'>Shotokan-United Kenya</h1>
              <p></p>
          </div>
        </section>
      </div>
        <section className=''>
            <div className='mx-auto w-3/4 border-b-2'>
              <h1 className='text-center text-4xl p-6 font-semibold'>Welcome To Shotokan-United Kenya</h1>
            </div>
            <div className='mx-auto w-[90vw] lg:grid grid-cols-2'>
              <div className='sm:my-10 transition-transform duration-500 hover:scale-x-105 hover:scale-y-105'>
                  <div className='lg:flex items-center space-x-6 p-4 md:p-8'>
                    <img className=' mx-auto rounded-full h-[300px] w-[300px] object-cover' src={teamImg} alt="Karate Team" />
                    <div className='text-center md:text-left md:w-1/2'>
                      <p className='text-lg text-wrap md:text-xl mb-4'>
                        Welcome to Shotokan United Kenya. This is a home of passion for Karate.
                        We share our experience with young and local Karate Practitioners and cooperate with internal
                        organizations to improve the quality while enjoying the intricacies of Karate.
                      </p>
                      {/* <button className='rounded-xl text-white text-lg bg-gray-700 hover:bg-orange-700 px-8 py-3'>
                        READ MORE
                      </button> */}
                    </div>
                  </div>
              </div>

              <div className='sm:my-10 transition-transform duration-500 hover:scale-x-105 hover:scale-y-105'>
                <div className='lg:flex justify-center items-center space-x-6 p-4 md:p-8'>
                  <img className=' mx-auto rounded-full h-[300px] w-[300px] object-cover' src={teamImg} alt="Karate Team" />
                  <div className='text-center md:text-left md:w-1/2'>
                    <p className='text-lg md:text-xl mb-4'>
                      Welcome to Shotokan United Kenya. This is a home of passion for Karate.
                      We share our experience with young and local Karate Practitioners and cooperate with internal
                      organizations to improve the quality while enjoying the intricacies of Karate.
                    </p>
                    {/* <button className='rounded-xl text-white text-lg bg-gray-700 hover:bg-orange-700 px-8 py-3'>
                      READ MORE
                    </button> */}
                  </div>
                </div>
              </div>
                
            </div>
           
        </section>

        <section className=" bg-fixed flex justify-center items-center overflow-hidden bg-cover bg-no-repeat p-12 text-center"
              style={{ backgroundImage: `url(${backgroundImage2})`, height: '50vh' }}>
                <div className="relative bg-scroll w-[100px] overflow-hidden bg-cover bg-no-repeat p-12"
                  style={{ backgroundImage: `url(${hdki})`}}></div>
        </section>

        <section className=''>
            <div className='mx-auto w-3/4 border-b-2'>
              <h1 className='text-center text-4xl p-6 font-semibold'>Technical Team</h1>
            </div>
            <div className='mx-auto w-[90vw] lg:grid grid-cols-2'>
              <div className='sm:my-10 transition-transform duration-500 hover:scale-x-105 hover:scale-y-105'>
                  <h1 className='text-2xl font-semibold w-3/4 mx-auto'>Chief Technical Instructor</h1>
                  <div className='lg:flex items-center space-x-6 p-4 md:p-8'>
                    <img className=' mx-auto rounded-md h-[300px] w-[300px] object-cover' src={teamImg} alt="Karate Team" />
                    <div className='text-center md:text-left md:w-1/2'>
                      <p className='text-lg text-wrap md:text-xl mb-4'>
                        Welcome to Shotokan United Kenya. This is a home of passion for Karate.
                        We share our experience with young and local Karate Practitioners and cooperate with internal
                        organizations to improve the quality while enjoying the intricacies of Karate.
                      </p>
                      {/* <button className='rounded-xl text-white text-lg bg-gray-700 hover:bg-orange-700 px-8 py-3'>
                        READ MORE
                      </button> */}
                      <div className='flex justify-between'>
                        <div></div>
                        <div className='font-bold'>
                          <h1>Sensei Joshua Oude</h1>
                          <h1>4th Dan</h1>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

              <div className='sm:my-10 transition-transform duration-500 hover:scale-x-105 hover:scale-y-105'>
                <h1 className='text-2xl font-semibold w-3/4 mx-auto'>Secretary General</h1>
                <div className='lg:flex justify-center items-center space-x-6 p-4 md:p-8'>
                  <img className=' mx-auto rounded-md h-[300px] w-[300px] object-cover' src={teamImg} alt="Karate Team" />
                  <div className='text-center md:text-left md:w-1/2'>
                    <p className='text-lg md:text-xl mb-4'>
                      Welcome to Shotokan United Kenya. This is a home of passion for Karate.
                      We share our experience with young and local Karate Practitioners and cooperate with internal
                      organizations to improve the quality while enjoying the intricacies of Karate.
                    </p>
                    {/* <button className='rounded-xl text-white text-lg bg-gray-700 hover:bg-orange-700 px-8 py-3'>
                      READ MORE
                    </button> */}
                    <div className='flex justify-between'>
                      <div></div>
                      <div className='font-bold'>
                        <h1>Sensei Goodric Musoga</h1>
                        <h1>3rd Dan</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                
            </div>
           
        </section>
      
    </div>
  )
}

export default Home
