import React from 'react'
import Users from './users';

import backgroundImage from '../assets/images/img7.jpg';
import backgroundImage2 from '../assets/images/img6.jpg';
import hdki from '../assets/images/HDKI.jpg';
import teamImg from '../assets/images/img5.jpg'

function Home() {
  return (
    <div id='home-section' className='w-full'>
        <section className="relative bg-fixed overflow-hidden bg-cover bg-no-repeat p-12 text-center"
              style={{ backgroundImage: `url(${backgroundImage})`, height: '60vh' }}>
          <div className='grid justify-items-center text-center'>
              <h1 className='text-white my-auto'>This is the home page</h1>
              <p></p>
          </div>
        </section>
        <section className='bg-gray-200 py-20'>
            <h1 className='text-center'>Welcome</h1>
            <div>
                <div className='flex justify-center items-center mx-20' style={{width: '30vw'}}>
                  <div>
                    <p className='mr-8'>
                    Welcome to to shotokan United Kenya. This is a home of passion for Karate.
                    We share our experience with young and local Karate Practitioners and cooperate with internal
                    organizations to improve the quality while enjoying the intricacies of Karate
                    </p>
                    <button className='rounded-xl text-white text-xl bg-gray-700 hover:bg-orange-700 px-10 py-4'>
                      Join Shotokan United
                      </button>
                  </div>
                  <div> <img className='rounded-full' src={teamImg} alt="image" /> </div>
                </div>
                <div className='flex justify-between mr-20'>
                  <div></div>
                    <div className='flex justify-center items-center' style={{width: '40vw'}}>
                      <div>
                        <p className='mr-10'>
                        Welcome to to shotokan United Kenya. This is a home of passion for Karate.
                        We share our experience with young and local Karate Practitioners and cooperate with internal
                        organizations to improve the quality while enjoying the intricacies of Karate
                        </p>
                        <button className='rounded-xl text-white text-xl bg-gray-700 hover:bg-orange-700 px-10 py-4'>
                          READ MORE
                          </button>
                      </div>
                      <div> <img className='rounded-full' src={teamImg} alt="image" /> </div>
                    </div>
                </div>

                <div className='flex justify-between ml-20'>
                    <div className='flex justify-center items-center' style={{width: '40vw'}}>
                      <div>
                        <p className='mr-10'>
                        Welcome to to shotokan United Kenya. This is a home of passion for Karate.
                        We share our experience with young and local Karate Practitioners and cooperate with internal
                        organizations to improve the quality while enjoying the intricacies of Karate
                        </p>
                        <button className='rounded-xl text-white text-xl bg-gray-700 hover:bg-orange-700 px-10 py-4'>
                          READ MORE
                          </button>
                      </div>
                      <div className='h-3/4 w-full'> <img className='rounded-md h-full' src={teamImg} alt="image" /> </div>
                    </div>
                    <div></div>
                </div>
                
            </div>
           
        </section>

        <section className=" bg-fixed flex justify-center items-center overflow-hidden bg-cover bg-no-repeat p-12 text-center"
              style={{ backgroundImage: `url(${backgroundImage2})`, height: '50vh' }}>
                <div className="relative bg-scroll overflow-hidden bg-cover bg-no-repeat p-12"
                  style={{ backgroundImage: `url(${hdki})`, height: '20vh', width: '10vw' }}></div>
        </section>

        <Users />
      
    </div>
  )
}

export default Home
