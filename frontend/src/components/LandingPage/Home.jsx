import React from 'react'

import img1 from '../../assets/images/img7.jpg'
import img2 from '../../assets/images/hatmut.png'

function HomePage() {
  return (
    <div >
        <div >
            <div className='mx-auto w-3/4 border-b-2'>
              <h1 className='text-center text-4xl p-6 font-semibold'>Welcome To Shotokan-United Kenya</h1>
            </div>
            <div className='sm:mx-4 md:mx-20 lg:mx-40 lg:flex justify-between items-center space-x-6'>
                <div className='lg:w-[60%] text-left'>
                    <h1 className='text-2xl'>Shotokan-United Kenya</h1>
                    <p className='text-lg'>
                        Self-discipline is the cornerstone of our training philosophy.
                        Through our structured classes and rigorous training sessions, students
                        learn to harness their focus, commitment, and perseverance. By instilling
                        self-discipline, we empower individuals to achieve their goals not only in
                        karate but in all aspects of life.
                    </p>
                    <button className='px-4 py-2 border border-red-500 duration-300 hover:bg-red-700 rounded-md text-black mt-10'>
                        JOIN US
                    </button>
                </div>
                <img src={img2} alt="" />
            </div>
        </div>   
    </div>
  )
}

export default HomePage
