import React from 'react'
import { Link } from 'react-router-dom';
import Users from './users';
import HomePage from '../components/LandingPage/Home';
import Feature from '../components/LandingPage/Feature';
import Technical from '../components/LandingPage/Technical';
import GuidingPrinciples from '../components/LandingPage/Principles';

import backgroundImage from '../assets/images/img7.jpg';
import backgroundImage2 from '../assets/images/img6.jpg';
import hdki from '../assets/images/HDKI.jpg';
import teamImg from '../assets/images/img5.jpg'


import { useAuth } from '../hooks/useAuth';


function Home() {

  const { user } = useAuth()
  // console.log(user)

  return (
    <div id='home-section' className='w-full'>
      <div >
        <section className="relative bg-fixed overflow-hidden bg-cover bg-no-repeat p-12 text-center "
              style={{ backgroundImage: `url(${backgroundImage})`, height: '40vh' }}>
          <div className='flex justify-center text-center text-4xl font-bold'>
              <h1 className='text-white my-auto'></h1>
              <p></p>
          </div>
        </section>
      </div>

        <HomePage />
        <Feature />
        <GuidingPrinciples />
        <Technical />

        <section className="relative bg-fixed flex justify-center items-center overflow-hidden bg-cover bg-no-repeat p-12 text-center"
              style={{ backgroundImage: `url(${backgroundImage2})`, height: '30vh' }}>
                <div className='absolute inset-0 bg-black opacity-60'>

                </div>
                <div className="relative bg-scroll w-[100px] overflow-hidden bg-cover bg-no-repeat p-12"
                  style={{ backgroundImage: `url(${hdki})`}}></div>
        </section>
      
    </div>
  )
}

export default Home
