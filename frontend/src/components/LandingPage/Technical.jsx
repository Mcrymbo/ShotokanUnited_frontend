import React from 'react'

import chief from '../../assets/images/img4.jpg'
import sec from '../../assets/images/img4.jpg'
import member1 from '../../assets/images/img4.jpg'
import member2 from '../../assets/images/img4.jpg'

function Technical() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className='mx-auto w-3/4 border-b-2 mb-4'>
          <h1 className='text-center text-4xl p-6 font-semibold'>Meet Our Technical Team</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="tech-member bg-white rounded-lg shadow-md p-6">
            <img src={chief} alt="Chief Instructor" className="w-full mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">John Doe</h3>
            <p className="text-gray-600">Chief Instructor</p>
          </div>
          <div className="tech-member bg-white rounded-lg shadow-md p-6">
            <img src={sec} alt="Secretary General" className="w-full mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Jane Smith</h3>
            <p className="text-gray-600">Secretary General</p>
          </div>
          <div className="tech-member bg-white rounded-lg shadow-md p-6">
            <img src={member1} alt="Technical Committee Member 1" className="w-full mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Alex Johnson</h3>
            <p className="text-gray-600">Technical Committee Member</p>
          </div>
          <div className="tech-member bg-white rounded-lg shadow-md p-6">
            <img src={member2} alt="Technical Committee Member 2" className="w-full mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Emily Davis</h3>
            <p className="text-gray-600">Technical Committee Member</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>
    </section>
  )
}

export default Technical