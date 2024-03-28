import React from 'react';
import { MdCall, MdLocationPin } from "react-icons/md";
import { Email } from '../../components/email';
import '../Contact/contact.css';

function Contact() {
  return (
    <div className="parent-container">
      <div className='container-fluid sub-parent'>
        <div className='row'>
          <div className='col'>
            <h1 className='text-center contact-text'>Contact Us</h1>
          </div>
        </div>

        <div className='row mt-5'>
          <div className='col'>
            <iframe className='w-full h-full' width="798" height="529" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=625&amp;height=520&amp;hl=en&amp;q=3,%2049%20Parklands%20Rd,%20Nairobi%20'NAIROBI+(Shotokan%20United)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=4fa84028ac4d8b3792d71826ad49c9459b5758c8'></script>
          </div>

          <div className='col bg-light text-dark'>
            <h1 className='my-6'> <span className='text-2xl font-semibold'>Meet US</span> </h1>
            <div className='flex my-2'><MdLocationPin className='mr-8 text-2xl' /> <span className='text-xl font-semibold'>3, 49 Parklands Rd, Nairobi</span> </div>
            <div className='flex my-6'><MdCall className='mr-8 text-2xl' /><span className='text-xl font-semibold'>+254 712 123 123</span></div>
          </div>

          <div className='col'>
            <Email />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
