import React, { useState } from 'react';
import '../Home/Home.css';
import homeImage from '../../assets/images/karate8.png'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

function Home() {


  return (
    <>

      <div className='parent'>
       
        <div className='content'>
          <div className='row container'>
            <div className='col-lg-7 col-md-7 col-sm-7 container1'>
              <div className='container mx-5 '>
                <h4 className='mb-3'>Welcome to Shotokan-United</h4>
                <p>Dive into the world of martial arts excellence at Shotokan-United. Our academy blends tradition with innovation, offering tailored programs for all ages and skill levels. With experienced instructors leading the way, join our united community and embark on a journey of personal growth and empowerment through the art of Shotokan Karate.</p>

                <Link to='/contact'><button className='mt-3 contact-btn text-start'>Contact Us</button></Link>
              </div>
            </div>
            <div className='col-lg-5 col-md-5 col-sm-5 container2'>
              <img className='homeimages' src={homeImage} alt='' />
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
