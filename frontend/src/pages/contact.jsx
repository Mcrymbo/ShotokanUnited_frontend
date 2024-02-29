import React from 'react';
import { FaWhatsappSquare, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdCall, MdLocationPin } from "react-icons/md";
import { Email } from '../components/email';


import pic from '../assets/images/img7.jpg'

function Contact() {
  return (
    <div id='contact-section' className='py-20 bg-neutral-200'>
      <h1>This is contact page</h1>
      <section className='grid lg:grid-cols-2 gap-4 mx-20 my-10'>
        <div className='p-8'>
          <div>Where we are</div>
          <h1 className='text-4xl'>Parklands Sports club - Ojijo Road Off Museum Hill, Nairobi, Kenya.</h1>
          <div className='grid grid-cols-2'>
            <div className=''>
              <h1 className='my-6'>INFORMATION</h1>
              <div className='flex space-x-4 my-4'><FaWhatsappSquare className='w-[30px] h-[30px] text-green-400' /> <span className='text-red-700'>+254 712 123 123</span></div>
              <div className='flex space-x-4 my-4'><MdCall className='w-[30px] h-[30px]' /> <span className='text-red-700'>+254 712 123 123</span></div>
              <div className='flex space-x-4 my-4'><MdEmail className='w-[30px] h-[30px]'/> <span className='text-red-700'>abc@gmail.com</span></div>
              <div className='flex space-x-4 my-4'><FaXTwitter className='w-[30px] h-[30px]' /><span className='text-red-700'>Shotokan United</span></div>
              <div className='flex space-x-4 my-4'><FaFacebook className='w-[30px] h-[30px] text-blue-700' /><span className='text-red-700'>shotokan United</span></div>
              <div className='flex space-x-4 my-4'><FaYoutube className='w-[30px] h-[30px] text-red-500' /> <span className='text-red-700'>Shotokan united</span></div>
            </div>
            <div className=''>
              <h1 className='my-6'>OFFICE HOURS</h1>
              <div className='my-4'>
                Monday to Friday
                <div>9:00 AM - 4:00 PM</div>
              </div>
              <div className='my-4'>
                  <div>Saturday</div>
                  <div>2:00 PM - 4:00 PM</div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <img src={pic} alt="" className='h-full w-full rounded-2xl' />
        </div>
      </section>
      <section className='bg-slate-400 py-10 grid grid-cols-3'>
        <div className='col-span-2 ml-20'>
            <div>
              <h1 className='text-gray-800 text-lg mb-4'>Contact Us</h1>
            </div>
            <h1 className='text-md mb-4 text-2xl font-bold'>Send us Email Here</h1>
            <Email />
        </div>
        <div></div>
      </section>

      <section>
        <div className=''>
          <h1 className='text-center my-10 text-2xl'>HONBU LOCATION</h1>
          <div className='grid md:grid-cols-2 lg:grid-cols-3'>
              <div className='ml-40 my-auto space-y-16'>
                <h1 className='my-6'> <span className='text-2xl font-semibold'>Shotokan-United KENYA HONBU</span> </h1>
                <div className='flex my-2'><MdLocationPin className='mr-8 text-2xl'/> <span className='text-xl font-semibold'>3, 49 Parklands Rd, Nairobi</span> </div>
                <div className='flex my-6'><MdCall className='mr-8 text-2xl' /><span className='text-xl font-semibold'>+254 712 123 123</span></div>
              </div> 
              <div className='lg:col-span-2 bg-red-200 sm:mt-10 mr-2 overflow-hidden rounded-lg'>
                  <iframe className='w-full' width="798" height="529" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=625&amp;height=520&amp;hl=en&amp;q=3,%2049%20Parklands%20Rd,%20Nairobi%20'NAIROBI+(Shotokan%20United)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=4fa84028ac4d8b3792d71826ad49c9459b5758c8'></script>
              </div>       
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Contact
