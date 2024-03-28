import React, { useState } from 'react';
import '../About/about.css';
import homeImage from '../../assets/images/karate7.png'


function About() {


  return (
    <>

      <div className='about-parent'>
        <div className='content'>
          <div className='row'>
            <div className='col-lg-4 col-md-4 container2'>
              <img className='homeimages' src={homeImage} alt='' />
            </div>
            <div className='col-lg-8 col-md-8 container1'>
              <div className='container mx-5 mt-5'>
                <div className='mx-5'>
                  <h4 className='mb-1'>About Us</h4>
                  <h1>Shotokan-United Karate</h1>
                  <p>
                    Welcome to Shotokan-United Karate, where the pursuit of excellence in martial arts meets a community of dedicated practitioners. Founded with a vision to instill discipline, foster physical fitness, and nurture mental fortitude, Shotokan-United Karate is more than just a dojo—it's a family.
                  </p>
                  <h1>Our Philosophy</h1>

                  <p>
                    At Shotokan-United Karate, we embrace the traditional values of Shotokan Karate while adapting to the modern world. Our philosophy revolves around the principles of respect, perseverance, and continuous self-improvement. Through rigorous training and guidance from experienced instructors, we strive to empower our students to become not only skilled martial artists but also confident individuals ready to face life's challenges with resilience and integrity.
                  </p>

                  <h1>Join Us Today</h1>
                  <p>
                    If you're ready to embark on a transformative journey of self-discovery and personal growth, we invite you to join the Shotokan-United Karate family. Whether your goal is to master the art of self-defense, improve your physical fitness, or cultivate mental resilience, we have a program tailored to suit your needs. Come experience the power of Shotokan Karate and unlock your full potential with us.
                  </p>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </>
  );
}

export default About;
