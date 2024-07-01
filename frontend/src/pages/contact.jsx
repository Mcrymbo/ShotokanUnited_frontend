import { FaFacebook, FaYoutube } from "react-icons/fa";
import { Footer } from 'flowbite-react';
import { FaXTwitter } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import { MdCall, MdLocationPin } from "react-icons/md";
import { CgMail } from "react-icons/cg";
// import { Email } from '../components/email';
import {Link} from 'react-router-dom'
import Navbar from "../components/Navbar";


import pic from '../assets/images/img7.jpg'

function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = () => {    
    reset();
  }; 
  return (
    <>
    <Navbar />
    <div id='contact-section' className='md:py-20 bg-white m-4'>
       <div className='mx-auto md:w-3/4 border-b-2'>
          <h1 className='text-center text-4xl p-6 font-semibold'>Contact Us</h1>
        </div>
      <section className='md:mx-4 md:grid md:grid-cols-2 gap-4 md:mx-24 my-10'>
        <div className='p-2 md:p-8'>
          <h1 className='text-xl'>You can Find us Through:</h1>
          <div className='grid md:grid-cols-2'>
            <div className=''>
              <div className='flex justify-between mx-4 md:-mx-2 md:block'>
                <div>
                  {/* <div className='flex space-x-4 my-4'><FaWhatsappSquare className='w-[30px] h-[30px] text-green-400' /> <span className='text-red-700'>+254 712 123 123</span></div> */}
                  <div className='flex space-x-4 my-4'><MdCall className='w-[30px] h-[30px]' /> <span className='text-red-700'>+254 712 123 123</span></div>
                  <div className='flex space-x-4 my-4'><CgMail className='w-[30px] h-[30px]'/> <span className='text-red-700'>abc@gmail.com</span></div>
                  <div className='flex space-x-4 my-4'><FaXTwitter className='w-[30px] h-[30px]' /><span className='text-red-700'>Shotokan United</span></div>
                </div>
                <div>
                  <Link to='https://web.facebook.com/profile.php?id=61550226856236'><div className='flex space-x-4 my-4'><FaFacebook className='w-[30px] h-[30px] text-blue-700' /><span className='text-red-700'>shotokan United</span></div></Link>
                  <div className='flex space-x-4 my-4'><FaYoutube className='w-[30px] h-[30px] text-red-500' /> <span className='text-red-700'>Shotokan united</span></div>
                </div>
                </div>              
            </div>
            <div className='mx-4'>
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
        <div className='mx-2'>
          <img src={pic} alt="" className='h-full w-full rounded-md' />
        </div>
      </section>
      <section className='bg-slate-800 py-10'>
      <form className='space-y-4 w-1/2 mx-auto' onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          {...register("name", { required: "Name is required" })}
          className={`w-full p-2 rounded bg-gray-700 text-black ${errors.name ? 'border border-red-500' : ''}`}
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
          className={`w-full p-2 rounded bg-gray-700 text-black ${errors.email ? 'border border-red-500' : ''}`}
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        <textarea
          name="message"
          placeholder="Your Message"
          {...register("message", { required: "Message is required" })}
          className={`w-full p-2 rounded bg-gray-700 text-black ${errors.message ? 'border border-red-500' : ''}`}
          rows="4"
        />
        {errors.message && <span className="text-red-500">{errors.message.message}</span>}
        <button type="submit" className="w-full p-2 bg-orange-500 rounded text-white">
          Send Message
        </button>
      </form>
      </section>

      <section>
        <div className='py-4'>
          <h1 className='text-center mx-4 md:my-10 text-2xl pb-2'>HONBU LOCATION</h1>
          <hr className='w-3/4 mx-auto py-2' />
          <div className='mx-4 grid md:grid-cols-2 md:grid-cols-3'>
              <div className='md:ml-40 space-y-8'>
                {/* <h1 className='my-6'> <span className='text-2xl font-semibold'>Shotokan-United KENYA HONBU</span> </h1> */}
                <h1 className='text-xl'>Parklands Sports club - Ojijo Road Off Museum Hill, Nairobi, Kenya.</h1>
                <div className='flex my-2'><MdLocationPin className='mr-8 text-2xl'/> <span className='text-xl font-semibold'>3, 49 Parklands Rd, Nairobi</span> </div>
                <div className='flex my-6'><MdCall className='mr-8 text-2xl' /><span className='text-xl font-semibold'>+254 712 123 123</span></div>
              </div> 
              <div className='my-6 md:col-span-2 bg-red-200 sm:mt-10 mr-2 overflow-hidden rounded-lg'>
                  <iframe className='w-full' width="798" height="529" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=625&amp;height=520&amp;hl=en&amp;q=3,%2049%20Parklands%20Rd,%20Nairobi%20'NAIROBI+(Shotokan%20United)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=4fa84028ac4d8b3792d71826ad49c9459b5758c8'></script>
              </div>       
          </div>
        </div>
      </section>
      
    </div>
      <div className='text-white bg-slate-800 rounded-none text-center py-4'>
        <hr className='w-3/4 mx-auto py-2' />
        <Footer.Copyright href="#" by="Alphy™" year={2024} />
      </div>
    </>
  )
}

export default Contact
